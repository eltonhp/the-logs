import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common'
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {LogManualComponent} from './log-manual/log-manual.component';
import {LogService} from '../../service/log.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MessageService} from '../../service/message.service';
import {Log} from '../../model/log';

@Component({
  selector: 'app-log-edit',
  templateUrl: './log-edit.component.html',
  styleUrls: ['./log-edit.component.css']
})
export class LogEditComponent implements OnInit, AfterViewInit {

  log: Log;
  logLote: any;
  @ViewChild(LogManualComponent)
  private logManualComponent: LogManualComponent;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private logService: LogService,
              private messageService: MessageService) { }

  ngOnInit(): void {};

  onBack() {
    this.location.back();
  }


  setFile(logLote: any) {
      this.logLote = logLote;
  }

  /**
   * valida se todos os campos do formulario está válido
   * @param formGroup
   *        grupo de campos do formulário
   */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSalve(event) {
    const logManualForm = this.logManualComponent.form;
    if (logManualForm.valid) {
      this.subscription = this.logService.save(logManualForm.value).subscribe(result => {
        const message  = logManualForm.value.id ? 'Log alterado com sucesso' : 'Log inserido com sucesso';
        this.messageService.success(message, true, true, 'top', 'right');
      }, error => {
        const msg = `${error} - Error no servidor, o registro não foi salvo.`;
        this.messageService.error(msg, 'danger', true);
      });
    } else {
      this.validateAllFormFields(logManualForm)
    }
  }

  private loadLogForm() {
    this.log = this.route.snapshot.params as Log;
    if (this.log) {
      this.logManualComponent.formConfig(this.log);
    }
  }

  ngAfterViewInit(): void {
    this.loadLogForm();
  }
}
