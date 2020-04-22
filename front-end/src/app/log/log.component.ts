import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDetails(id: number) {
    this.router.navigate(['/log-view', id]);
  }

  onAddLog(event) {
    this.router.navigate(['/log-edit']);
  }

}
