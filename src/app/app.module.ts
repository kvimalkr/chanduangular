import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { HeaderComponent } from './module/header/header.component';
import { FooterComponent } from './module/footer/footer.component';
import { IndexComponent } from './module/index/index.component';
import { AboutComponent } from './module/about/about.component';


import { RouterModule } from "@angular/router";

import { CauseslistComponent } from './module/causeslist/causeslist.component';
import {HttpModule} from '@angular/http';

import {mainservice} from './module/services/mainservice';
import { ContactComponent } from './module/contact/contact.component';
import { CommDetailsComponent } from './module/comm-details/comm-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    CauseslistComponent,
    ContactComponent,
    CommDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'about',component:AboutComponent},
      {path:'index',component:IndexComponent},
      { path: '',component: IndexComponent },
      { path:'causeslist',component: CauseslistComponent },
      { path:'contact',component: ContactComponent },
      { path:'comm-details/:id',component: CommDetailsComponent }
    ])
  ],
  providers: [mainservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
