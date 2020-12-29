import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers:[ApiService]
  
})
export class HomepageComponent implements OnInit {

  iscontactus:boolean=false;
  isaboutus:boolean=false;

  constructor(private api:ApiService) {
   }

   showcontactus()
   {
     this.isaboutus = false;
    this.iscontactus=true;
     window.scroll({
       top: 2200,
       behavior: 'smooth'
     });
    }
    showaboutus()
    {
      this.iscontactus = false;
      this.isaboutus = true;
      window.scroll({
        top: 2400,
        behavior: 'smooth'
      });
    }
  hidecontactus()
  {
    this.iscontactus=false;
  }
  hideaboutus() {
    this.isaboutus = false;
  }

  videoopen(){
    this.api.video().subscribe(
      data=>{
        //this.counsellor['name'].push(data.name);
    
      },
      error=>{
         alert(error);
      });
  }
  ngOnInit() {

  }



}
