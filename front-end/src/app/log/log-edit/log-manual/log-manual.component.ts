import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpStatus} from '../../../util/http.status';
import {Log} from '../../../model/log';


@Component({
  selector: 'app-log-manual',
  templateUrl: './log-manual.component.html',
  styleUrls: ['./log-manual.component.css']
})
export class LogManualComponent implements OnInit, AfterViewInit, AfterContentInit {

  form: FormGroup;
  httpStatusArray: any[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formConfig();
    this.loadHttpStatus();

  }

  public formConfig(log?: Log) {
      this.form = this.fb.group({
          id: [null, {disable: true}],
          agent: ['', [Validators.required]],
          ip: ['', [Validators.required]],
          request: ['', [Validators.required]],
          status: ['']
      });

      if (log) {
          this.form.patchValue(log);
      }
  }

  ngAfterViewInit(): void {}

    private loadHttpStatus() {
        const httpStatus = new HttpStatus();
        this.httpStatusArray = Object.keys(httpStatus.status).map(key => {
            return {'key': key, 'value': httpStatus.status[key]};
        })
        this.httpStatusArray.toString();
    }

    ngAfterContentInit(): void {

    }
}
