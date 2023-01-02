import { Component, OnInit, NgModule, Input, OnChanges, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  Longitude : number = 0;
  Latitude : number = 0;
  vakue : boolean = false;
  Center: number[] = [this.Longitude, this.Latitude];
  search:boolean = false

  public map;
  mappp

  public Onclick() {

    if(this.map != null )  {
      //  this.map._leaflet_id = null
    this.map.remove();

    }

    this.search = true; //not equal to condition
      this.Center = [this.Latitude, this.Longitude];

    console.log("Long = ",this.Center[0], "Lat = ", this.Center[1]);

    this.initMap();


  }




  public initMap(): void {
    this.map = L.map('showMap', {
      center: [this.Center[0], this.Center[1]],
      zoom: 10,
    });




    console.log("Long = ",this.Center[0], "Lat = ", this.Center[1]);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 25,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );






    L.marker([this.Center[0], this.Center[1]]).addTo(this.map);
    tiles.addTo(this.map);
  }

  constructor() {}

  ngOnInit(): void {

this.initMap();
  }

  ngOnChanges(): void {

  }

  ngAfterViewInit():void{

  }
}
