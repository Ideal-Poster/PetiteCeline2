import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumContentComponent } from './album-content/album-content.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    NavbarComponent,
    AlbumContentComponent,
    EventsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
