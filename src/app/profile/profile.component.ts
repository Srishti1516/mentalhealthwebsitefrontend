import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';
import { Chart } from 'chart.js';
import { ReportService } from '../report.service';


@Component({
  selector: 'app-profilr',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  formdata;
  initvalues;
  isprofile: boolean = false;
  isactivities: boolean = true;
  profilehead: boolean = false;
  activitieshead: boolean = true;
  emm;
  
  constructor(private api:ApiService, private router: Router, private route: ActivatedRoute,private report:ReportService) {
    this.initvalues =  {fullName:'', email: '',contact:'',dob:'',occupation:'',address:'',profilepic:[''] };
    
   }

   date = [];
   illness = [];
   chart1 = [];
   chart_show = [];
   d = [];
   refined_date = [];
  datetime = [];


  showaprofilecontent() {
    this.isactivities = false;
    this.isprofile = true;
    this.activitieshead = false;
    this.profilehead = true;
  }
  showactivities() {
    this.isactivities = true;
    this.isprofile = false;
    this.profilehead = false;
    this.activitieshead = true;
  }
  ngOnInit(): void {
    
      this.emm = localStorage.getItem("useremail");
      this.api.userProfile(this.emm).subscribe(
        data => {
            this.initvalues.fullName = data.name;
            this.initvalues.email = data.email;
            this.initvalues.contact = data.contact;
            this.initvalues.dob = data.dob;
            this.initvalues.occupation = data.occupation;
            this.initvalues.address = data.address;
            localStorage.setItem("name",this.initvalues.fullName);
        },
        error => {
          console.log(error);
        }
        );

        this.report.Report(localStorage.getItem('useremail')).subscribe(
          res => {
            for (let i = 0; i < Object.values(res).length; i++) {
              this.illness.push(res[i].state)
              this.date.push(res[i].datetime)
            }

            for(let i=0;i<this.illness.length;i++){

              if(this.illness[i]=="Anxiety"){
                this.chart_show.push(5);
              }
              else if(this.illness[i]=="Depression"){
                this.chart_show.push(4);
              }
              else if(this.illness[i]=="Stress"){
                this.chart_show.push(3);
              }
              else if(this.illness[i]=="Loneliness"){
                this.chart_show.push(2);
              }
              else if(this.illness[i]=="Normal"){
                this.chart_show.push(1);
              }
              
            }

            for(let i=0;i<this.date.length;i++){
              this.refined_date.push(this.date[i].slice(0,10))
              this.d.push(this.date[i].slice(11,16))
              this.datetime.push(this.refined_date[i]+" ["+this.d[i]+"]");
              
            }
               
            console.log(this.date)
           
    
            this.chart1 = new Chart('canvas', {
              type: 'bar',
              data: {
                labels: this.datetime,

                datasets: [{
                  data: this.chart_show,
                  backgroundColor: ["#4DB6AC", "#009688", "#00796B", "#00695C", "#B2DFDB","#4DB6AC", "#009688", "#00796B", "#00695C", "#B2DFDB"],
                  borderColor: '#006655',
                  label: 'Disorders'
    
                }
    
                ]
              },
              options: {
                scales: {
                  xAxes: [
                    {
                      display: true
                    }
                  ],
                
                  yAxes: [
                    {
                      display: true,
                      ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1,
                        suggestedMin: 0.5,
                        suggestedMax: 5.5,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 0:
                                    return '';
                                case 1:
                                    return 'Normal';
                                case 2:
                                    return 'Loneliness';
                                case 3:
                                    return 'Stress';
                                case 4:
                                    return 'Depression';
                                case 5:
                                    return 'Anxiety';
                            }
                        }
                    }
                    }
                  ]
                },
                legend: { display: false },
                title: {
                  display: true,
                  text: 'State Detection Report'
                }
              }
            })
    
          })

   
  }

  update(){
    this.api.update(this.initvalues).subscribe(
      data => {
        alert("Data updated!!")
      },
      error => {
        console.log(error);
      }
    );
  }

    

 

}