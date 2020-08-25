import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MarsweatherService } from '../marsweather.service'
import { Weather } from '../weather'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.component.html',
  styleUrls: ['./mars-weather.component.scss']
})
export class MarsWeatherComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  myCanvas: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D;
  date: Date = new Date();
  mars: Weather[];
  constructor(
    private client: MarsweatherService) { }

  ngOnInit(): void {
    this.client.GetLatestWeather().subscribe(data => {
      this.mars = [data as Weather];
      this.date = this.mars[0].measurement.last;
    });
  }
  public selectclick(date : string, range : String){
    this.date = new Date(date);
    this.update(range);
  }
  public update(range : String){
    this.client.GetWeather(this.date,range).subscribe(data => {
        this.mars = data as Weather[];
    });
  } 
  }
