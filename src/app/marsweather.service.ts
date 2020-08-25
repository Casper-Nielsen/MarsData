import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MarsweatherService {
  constructor(private http: HttpClient) { }

getConfig() {
}

  GetLatestWeather(): Observable<any>{
    return this.http.get("https://api.mars.spacexcompanion.app/v1/weather/latest");
  }

  GetWeather(date : Date, range : String): Observable<any>{
    let url = "https://api.mars.spacexcompanion.app/v1/weather?month="+(date.getMonth()+1)+"&year="+ date.getFullYear()+"&day="+ date.getDate()+"&range=" + range;
    return this.http.get(url);
  }

}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
