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

  mars: Weather;
  constructor(
    private client: MarsweatherService) { }

  ngOnInit(): void {
    this.client.GetWeather().subscribe(data => {
      console.log(data);
      this.mars = data as Weather;
      this.mars.wind.directions.sort((a, b) => a.degrees < b.degrees ? -1 : a.degrees > b.degrees ? 1 : 0);
      this.context = this.myCanvas.nativeElement.getContext('2d');
      this.setWind();

    });
  }

  setWind(): void {
    for (let index = 0; index < this.mars.wind.directions.length; index++) {
      let wind = this.mars.wind.directions[index];
      this.context.beginPath();
      this.context.ellipse(wind.up*20+50, wind.right*20+50,2,2,0,0,360);
        this.context.moveTo(wind.up*20+50, wind.right*20+50);
        this.context.lineTo(Math.cos(wind.degrees*Math.PI/180)*10+(wind.up*20+50), Math.sin(wind.degrees*Math.PI/180)*10+(wind.right*20+50+2));
        this.context.stroke();

      
    }
    
  }
}
