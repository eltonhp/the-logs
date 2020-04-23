import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AlertComponent} from './directives';
import {LogService} from './service/log.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatFormFieldModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AlertComponent
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
