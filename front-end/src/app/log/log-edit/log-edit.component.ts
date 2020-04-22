import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-log-edit',
  templateUrl: './log-edit.component.html',
  styleUrls: ['./log-edit.component.css']
})
export class LogEditComponent implements OnInit {


  logLote: any;

  idLog: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location, ) { }

  ngOnInit(): void {
    const {id} = this.route.snapshot.params;
    this.idLog = id;
  }

  onBack() {
    this.location.back();
  }


    setFile(logLote: any) {
        this.logLote = logLote;
    }
}
