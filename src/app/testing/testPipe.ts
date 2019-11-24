import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "testPipe"
})
export class TestPipe implements PipeTransform {
  transform(value: number, ...args: any[]): String {
    let returnValue = String(value);
    returnValue += "00";
    return returnValue;
  }
}
