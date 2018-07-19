import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  lat = 9.929217;
  lng = -84.051589;
  zoom = 12;
  constructor() { }
  ngOnInit() {
  }

}
