import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emotioncapture',
  templateUrl: './emotioncapture.component.html',
  styleUrls: ['./emotioncapture.component.scss'],
  providers:[ApiService]
})
export class EmotioncaptureComponent implements OnInit {

  videoframe;
  constructor(private api:ApiService) { }

  ngOnInit() {
    // this.api.video().subscribe(
    //   data=>{
    //     //this.counsellor['name'].push(data.name);
    //     this.videoframe=data;
    
    //   },
    //   error=>{
    //      alert(error);
    //   });
  }

}
