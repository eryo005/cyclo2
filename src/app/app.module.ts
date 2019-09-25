import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MachinesModule } from './machines/machines.module';
import { ComposantsModule } from './composants/composants.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MachinesModule,
    ComposantsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
