import { Component, OnInit } from '@angular/core';
// import {Http, Response, Headers} from '@angular/http';
// import data from  '../assets/jsondata.json';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { HttpClient } from "@angular/common/http";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title="Upserve CODRESTAURANT"

  hoteldata:any = [];
  searchText:any;
  searchedData:any = [];
  

  constructor(private httpClient: HttpClient, private router: Router) { 
    // console.log('bhjbjnn', data)
  }

  ngOnInit() {
    this.httpClient.get("assets/jsondata.json").subscribe(data =>{
      
      this.hoteldata = data['jsondata'];
      console.log('products', data);
      // this.products = data;
    })

    // this.router.getCurrentNavigation().extras.state; to read data

    // this.router.navigate(['/path', {das: 'dasdasdsa'}])    to navigate to next page
  }

  fiter(items) {
    return items.filter( it => {
      if(it.hotelName && it.areaName) {
        return it.hotelName.toLowerCase().includes(this.searchText.toLowerCase())
          || it.areaName.toLowerCase().includes(this.searchText.toLowerCase());
      }
    });
  }

  onSearch() {
    if(this.searchText) {
      this.searchedData = this.fiter(this.hoteldata);
    } else {
      this.searchedData = [];
    }
  }

  onChange(event) {
    // console.log('dasdsa', event.target.value)
  }

}
