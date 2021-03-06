import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { RoutingComponent } from "./routing/routing.component";
import { TestingComponent } from "./testing/testing.component";
import { NgContainerTemplateComponent } from "./ng-container-template/ng-container-template.component";
import { OuterContentComponent } from "./outer-content/outer-content.component";

const routes: Routes = [
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "routing/:id",
    component: RoutingComponent
  },
  {
    path: "test",
    component: TestingComponent
  },
  {
    path: "ng",
    component: NgContainerTemplateComponent
  },
  {
    path: "content",
    component: OuterContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
