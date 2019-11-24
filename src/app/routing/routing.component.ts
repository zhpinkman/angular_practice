import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-routing",
  templateUrl: "./routing.component.html",
  styleUrls: ["./routing.component.scss"]
})
export class RoutingComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  x = { key: 1, name: "zhivar", age: 21 };

  ngOnInit() {}
}
