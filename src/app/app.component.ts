import { Component, OnChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnChanges{
  title = "ngx-adibro-reusable";
  myval: any = "";
  public items = ["abcd", "bef", "cgh"];

  changedVal($ev){
    console.log($ev);

  }

  ngOnChanges() {
  }

}
