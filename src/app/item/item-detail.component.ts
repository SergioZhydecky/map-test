import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: "ns-details",
  templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
  @ViewChild("MapView", {static: false}) mapView: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onMapReady = (event) => {
    console.log("Map Ready");
  };
}
