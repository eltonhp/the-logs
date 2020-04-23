import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Log} from '../../model/log';
import {MatDialog} from '@angular/material/dialog';
import {LogViewDialogComponent} from './log-view-dialog/log-view-dialog.component';
import {LogService} from '../../service/log.service';
import {Observable} from 'rxjs';
import {MessageService} from '../../service/message.service';


@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {

  private idLog: number;
  private logObservable: Observable<Log>;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private logService: LogService,
              private router: Router,
              private messageService: MessageService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
      const {id} = this.route.snapshot.params;
      this.idLog = id;
      this.logObservable = this.logService.getById(this.idLog);
  }

  goBack($event: MouseEvent) {
       this.location.back();
  }

  onEdit($event: MouseEvent, log: Log) {
     this.router.navigate(['log-edit', log]);
  }

    onConfirmRemove($event: MouseEvent, log: Log) {
        const dialogRef = this.dialog.open(LogViewDialogComponent, {
            width: '250px',
            data: log
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deleteLog(result.id);
            }
        });
    }

    private deleteLog(id: any) {
        this.logService.deleteById(id).subscribe(result => {
            const message  = 'Log deletado com sucesso!';
            this.messageService.success(message, true, true, 'top', 'right');
            this.router.navigate(['log']);
        }, error => {
            const msg = `${error} - Error no servidor, o registro não foi deletado`;
            this.messageService.error(msg, 'danger', true);
        })
    }
}
