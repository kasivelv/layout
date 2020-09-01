import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,   NbDatepickerModule,  NbDialogModule,NbMenuModule,NbToastrModule,NbWindowModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbCardModule, NbActionsModule, NbSearchModule, NbUserModule, NbTooltipModule} from '@nebular/theme';
import { NbEvaIconsModule  } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { NbIconModule } from '@nebular/theme';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EngineComponent } from './engine/engine.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { SubfooterComponent } from './components/subfooter/subfooter.component';
import { RegisterComponent } from './components/register/register.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DumComponent } from './dum/dum.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StallpagesComponent } from './stallpages/stallpages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EngineComponent,
    SubheaderComponent,
    SubfooterComponent,
    RegisterComponent,
    LoginComponent,
    DumComponent,
    StallpagesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbActionsModule,
    NbSearchModule,
    NbTooltipModule,
    NbIconModule,
    NbUserModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
