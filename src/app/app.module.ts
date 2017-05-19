import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { MessageService } from './message-service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService]
})
export class AppModule { }
