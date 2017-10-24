import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ListPage } from '../pages/list/list';
import { MyApp } from './app.component';
import { SinglePage } from '../pages/single/single';

import { Todos } from '../providers/todos';

@NgModule({
  declarations: [
    ListPage,
    MyApp,
    SinglePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ListPage,
    MyApp,
    SinglePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Todos,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
