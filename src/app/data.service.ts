import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSearch(price, location, search): Observable<any> {
    return this.http
      .get(
        `https://api.yelp.com/v3/businesses/search?term=${search}&price=${price}&location=${location}`
      )
      .pipe(tap(businesses => console.log(businesses)));
  }
}
