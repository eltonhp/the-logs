import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Log} from '../../model/log';
import {MatDialog} from '@angular/material/dialog';
import {LogViewDialogComponent} from './log-view-dialog/log-view-dialog.component';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {

  private log: Log;
  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
     const {id}  = this.route.snapshot.params;
     console.log('Visualizar o log individual', id);
  }

  goBack($event: MouseEvent) {
       this.location.back();
  }

  onEdit($event: MouseEvent) {
     this.router.navigate(['log-edit', 0]);
  }

    onConfirmRemove($event: MouseEvent) {
        const dialogRef = this.dialog.open(LogViewDialogComponent, {
            width: '250px',
            data: {id: 1, ip: '123.543.656.77', status: 200, agent: 'Chrome', data: 'data'}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('Remover o log', result);
            }
        });
    }
}
