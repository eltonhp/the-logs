import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Log} from '../../../model/log';

@Component({
  selector: 'app-log-view-dialog',
  templateUrl: './log-view-dialog.component.html',
  styleUrls: ['./log-view-dialog.component.css']
})
export class LogViewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Log) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
