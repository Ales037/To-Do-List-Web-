import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWorkComponent } from './components/add-work/add-work.component';
import { WorkAllComponent } from './components/work-all/work-all.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditWorkComponent } from './components/edit-work/edit-work.component';

@NgModule({
  declarations: [
    AppComponent,

    AddWorkComponent,
    WorkAllComponent,
    EditWorkComponent
  ],
  imports: [

    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
