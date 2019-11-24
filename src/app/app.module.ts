import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { RoutingComponent } from "./routing/routing.component";
import { TestingComponent } from "./testing/testing.component";
import { TestPipe } from "./testing/testPipe";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    RoutingComponent,
    TestingComponent,
    TestPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
