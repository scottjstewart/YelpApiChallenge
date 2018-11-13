import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "yelp-api-challenge";
  results: any;
  constructor(private data: DataService) {}

  onClick(price, location, search): void {
    console.log(price, location, price);
    this.data
      .getSearch(price, location, search)
      .subscribe(data => (this.results = data.businesses));
  }
}
