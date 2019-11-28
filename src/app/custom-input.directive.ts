import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appCustomInput]"
})
export class CustomInputDirective {
  constructor() {
    console.log("constructor");
  }

  @HostBinding("style.background") back: string;

  @HostListener("focus", ["$event"])
  onFocus() {
    console.log("on focus ...");
    this.back = "violet";
  }
  @HostListener("keydown.control.z")
  onControlZ() {
    console.log("control z");
    console.log(this.back);
  }
}
