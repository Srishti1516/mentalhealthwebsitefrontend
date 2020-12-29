import { Component, OnInit,ViewChild,OnDestroy,ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Articles } from '../shared/article';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';



@Component({
  selector: 'app-liverss',
  templateUrl: './liverss.component.html',
  styleUrls: ['./liverss.component.scss'],
  providers:[ApiService]
})
export class LiverssComponent implements OnInit{

 
  isarticlewritting:boolean=false;
  isnewsfeed:boolean=true;
  isquotes:boolean=false;
  isarticlewritten:boolean=false;
  url: string = "../assets/liverss.html";
  urlSafe: SafeResourceUrl;
  write;
  
 
  
  artt : Articles[] = [
    {
      title:'Mental Health -Depression',
      desc:'The most important difference compared to a psychologist is that a psychiatrist is allowed to prescribe medication, and has not had as much communication technique training as a psychologist. So a psychiatrist may prescribe medication and will more quickly use medication as treatment than a psychologist will.',
      email:'gsejal222@gmail.com'
    },{
      title:'Anxiety',
      desc:'The most important difference compared to a psychologist is that a psychiatrist is allowed to prescribe medication, and has not had as much communication technique training as a psychologist. So a psychiatrist may prescribe medication and will more quickly use medication as treatment than a psychologist will.',
      email:'kediasrishti@gmail.com'
    }
  ];
 // @ViewChild(MatPaginator) paginator: MatPaginator;
//  obs: Observable<any>;
//  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.artt);
//  @ViewChild(MatPaginator) 
//    set paginator(value: MatPaginator) {
//      this.dataSource.paginator = value;
//    }
 
  
  
  
 
  
  constructor(public sanitizer: DomSanitizer,private api:ApiService,private changeDetectorRef: ChangeDetectorRef) {
        this.write = {title:'',body:'',email:''};
        this.onupload();
   }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    //this.changeDetectorRef.detectChanges();
   // this.dataSource.paginator = this.paginator;
    //this.obs = this.dataSource.connect();
    

  }
  articlebutton()
  {
    this.isarticlewritting = true;
    this.isnewsfeed=false;
    this.isquotes=false;
    this.isarticlewritten = false;
  }
  articles() {
    this.isarticlewritten=true;
    this.isarticlewritting = false;
    this.isnewsfeed = false;
    this.isquotes = false;
  }
  newsfeed()
  {
    
    this.isnewsfeed=true;
    this.isquotes=false;
    this.isarticlewritting=false;
    this.isarticlewritten = false;
  }
  quotes()
  {
    this.isquotes = true;
    this.isnewsfeed = false;
    this.isarticlewritting= false;
    this.isarticlewritten = false;
  }

  onSubmit(){
    this.api.articleWritten(this.write).subscribe(
      data => {
         alert("Article saved");
      },
      error => {
        alert("Cannot save article! Please use a valid email!!");
        console.log(error);
      }
    );
  }

  onupload = () =>{
    this.api.getArticles().subscribe(
      data=>{
        //this.counsellor['name'].push(data.name);
        this.artt = data;
        
        
      },
      error=>{
         alert(error);
      }
    )
  }
 
 
 

  


}