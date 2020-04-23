import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {CrudService} from './crud.service';
import {Log} from '../model/log';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LogService extends CrudService<Log> {

  url = environment.URL;

  constructor(public http: HttpClient, protected  alertService: MessageService) {
    super(http, alertService);
    this.endpoint = '/api/logs';
  }

  save(log: Log) {
    let observable: Observable<any> = null;
    if (log.id) {
      observable = this.put(log.id, log);
    } else {
      observable = this.post(log);
    }

    return observable;
  }


}
