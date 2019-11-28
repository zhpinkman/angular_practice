import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { RoutingComponent } from "./routing/routing.component";
import { TestingComponent } from "./testing/testing.component";
import { TestPipe } from "./testing/testPipe";
import { NgContainerTemplateComponent } from "./ng-container-template/ng-container-template.component";
import { InnerContentComponent } from "./inner-content/inner-content.component";
import { OuterContentComponent } from "./outer-content/outer-content.component";
import { CustomInputDirective } from './custom-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    RoutingComponent,
    TestingComponent,
    TestPipe,
    NgContainerTemplateComponent,
    InnerContentComponent,
    OuterContentComponent,
    CustomInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
