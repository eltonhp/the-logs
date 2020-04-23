import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LogService} from '../service/log.service';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {Log} from '../model/log';
import {Observable, of, Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {debounce, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy {
  private logObservable: Observable<Log[]>;
  logGroup: FormGroup;
  subscription: Subscription;
  constructor(private router: Router, private logService: LogService) { }

  ngOnInit(): void {
      this.loadLogs();
      this.filterConfig();
  }

  onDetails(id: number) {
    this.router.navigate(['/log-view', id]);
  }

  onAddLog(event) {
    this.router.navigate(['/log-edit']);
  }

  private loadLogs(filter?: any) {
    this.logObservable =  this.logService.getList();
  }

  private filterConfig() {
     this.logGroup = new FormGroup({
       filter: new FormControl()
     });

    this.subscription = this.logGroup.get('filter')
        .valueChanges
        .pipe(debounceTime(500),
            distinctUntilChanged(),
            switchMap(filter =>  this.logService.getList(filter))).subscribe(value => {
                this.logObservable = of(value);
           });
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
