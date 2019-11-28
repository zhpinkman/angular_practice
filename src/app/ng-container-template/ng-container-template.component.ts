import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";

@Component({
  selector: "app-ng-container-template",
  templateUrl: "./ng-container-template.component.html",
  styleUrls: ["./ng-container-template.component.scss"]
})
export class NgContainerTemplateComponent implements OnInit {
  boolVar: Boolean = true;
  testVar = { name: "a", age: 21 };

  ctx = { content: "content" };

  @ViewChild("testTemplate", { static: false })
  template: TemplateRef<any>;

  constructor() {}
  ngOnInit() {
    console.log(this.template);
  }
}
