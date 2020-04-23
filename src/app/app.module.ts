import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NavigationTopComponent } from './components/navigation-top/navigation-top.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VillageComponent } from './components/village/village.component';
import { CreateComponent } from './components/create/create.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MemberComponent } from './components/member/member.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MemberLoginService } from './services/member-login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTopComponent,
    PageNotFoundComponent,
    VillageComponent,
    CreateComponent,
    MessagesComponent,
    MemberComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemberLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
