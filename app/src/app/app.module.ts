import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CardHttpClientComponent } from './card-http-client/card-http-client.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    CardComponent,
    CardHttpClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
