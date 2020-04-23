import { Routes } from '@angular/router';
import {LogComponent} from '../../log/log.component';
import {LogEditComponent} from '../../log/log-edit/log-edit.component';
import {LogViewComponent} from '../../log/log-view/log-view.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'log',            component: LogComponent },
    { path: 'log-edit',       component: LogEditComponent},
    { path: 'log-edit/:id',   component: LogEditComponent},
    { path: 'log-view/:id',   component: LogViewComponent}
];
