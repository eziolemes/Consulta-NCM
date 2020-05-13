import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; /* para trabalhar com formulários */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; /*Requisições Ajax(Get,Post, Put, Delete)*/
import { NcmComponent } from './ncm/ncm.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpInterceptorModule } from './service/header-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
,
    NcmComponent  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
