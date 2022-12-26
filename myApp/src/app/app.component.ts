import { Component, OnInit, NgModule, Input } from '@angular/core';
import  * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  Longitude;
  Latitude;
  public map;

  private initMap(): void {
    this.map = L.map('showMap', {
      center: [ 39.8282, -98.5795 ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 25,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    L.marker([50.5, 30.5]).addTo(this.map);
    tiles.addTo(this.map);
  }



  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}
