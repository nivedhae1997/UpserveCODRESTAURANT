import { Component, OnInit } from '@angular/core';
// import data from  '../assets/jsondata.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';

  
  ngOnInit(){
    const fetchData = function() {
      this.http.get("http://localhost:3030/jsondata").subscribe(
        (res: Response) => {
          this.data = res.json();
          
        
})

  }
}
}
