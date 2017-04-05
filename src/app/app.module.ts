import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FetchMovie} from "../providers/fetch-movie";
import {DescriptionPage} from "../pages/description/description";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DescriptionPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DescriptionPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},FetchMovie]
})
export class AppModule {}
