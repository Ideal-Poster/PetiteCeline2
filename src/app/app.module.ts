import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumContentComponent } from './album-content/album-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    NavbarComponent,
    AlbumContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
