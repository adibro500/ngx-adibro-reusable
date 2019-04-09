import { Component, OnChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnChanges{

  public myval: any = "";
  public items = ["abcd", "bef", "cgh","afsdfs","bef","abcd","abcd","abcd","abcd","abcd"];

  changedVal($ev){
    console.log($ev);
  }

  ngOnChanges() { }

}
