import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MarsweatherService {
  // url = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';
  url = 'https://api.mars.spacexcompanion.app/v1/weather/233';

  constructor(private http: HttpClient) { }

getConfig() {
}

GetWeather(): Observable<any>{
  return this.http.get(this.url);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}
