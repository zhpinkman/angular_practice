import { Component, OnInit } from "@angular/core";
import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";
import { Observable, of, interval } from "rxjs";
import { map, filter, take } from "rxjs/operators";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.scss"]
})
export class TestingComponent implements OnInit {
  constructor() {}

  array = [
    {
      guid: "900ea552-ef68-42cc-b6a6-b8c4dff10fb7",
      age: 32,
      name: "Powers Schneider"
    },
    {
      guid: "880381d3-8dca-4aed-b207-b3b4e575a15f",
      age: 25,
      name: "Adrian Lawrence"
    },
    {
      guid: "87b47684-c465-4c51-8c88-3f1a1aa2671b",
      age: 32,
      name: "Boyer Stanley"
    }
  ];

  trackElement(index: number, element: any) {
    return element ? element.guid : null;
  }

  add_object() {
    this.array.push(Object.assign({}, { ...this.array[0], guid: "1234567" }));
  }

  asyncArray: Observable<any>;

  ngOnInit() {
    this.asyncArray = this.getObservable();
  }

  getObservable(): Observable<any> {
    // return of(this.array, interval(100));
    return of(this.array);
  }
}
