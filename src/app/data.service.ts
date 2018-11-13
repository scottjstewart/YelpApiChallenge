import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSearch(price, location, search): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization:
          "Bearer PDN68g98Ge6w_D5_xS2u189ptQSjE6LKQwMewM8_f5pDn_PajNFNZQEF1buQVTAdx-quOjXOFpfsbAzVkdh7l1yCVmf9lT0bDLaZ7swxmehgg17MtIM7UNeeN_HqW3Yx"
      })
    };
    return this.http
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&price=${price}&location=${location}`,
        options
      )
      .pipe(tap(businesses => console.log(businesses.businesses[1])));
  }
}
