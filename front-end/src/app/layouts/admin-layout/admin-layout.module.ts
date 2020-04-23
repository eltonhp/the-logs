import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {LogComponent} from '../../log/log.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {LogEditComponent} from '../../log/log-edit/log-edit.component';
import {LogViewComponent} from '../../log/log-view/log-view.component';
import {LogViewDialogComponent} from '../../log/log-view/log-view-dialog/log-view-dialog.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {LogLoteComponent} from '../../log/log-edit/log-lote/log-lote.component';
import {LogManualComponent} from '../../log/log-edit/log-manual/log-manual.component';
import {DndDirective} from '../../directives/dnd.directive';
import {ProgressComponent} from '../../components/progress/progress.component';
import {IConfig, NgxMaskModule} from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    LogComponent,
    LogEditComponent,
    LogViewComponent,
    LogViewDialogComponent,
    LogLoteComponent,
    LogManualComponent,
    DndDirective,
    ProgressComponent
  ]
})

export class AdminLayoutModule {}
