import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatsService } from '../stats.service';
import { map } from 'rxjs/operators';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private stats:StatsService) { }
  age =[];
  perc = [];
  state = [];
  perc1 = [];
  group = [];
  perc2 = [];
  chart1 = [];
  chart2 = [];
  chart3 = [];
  chart4 = [];
  psychiatrist = [];
  psychologist = [];
  socialworker = [];
  state1 = [];
  flagc2=0;
  flagc3=0;
  flagc4=0;
  ngOnInit() {
    this.stats.AgeMorbidity().subscribe(
      res => {
        for (let i = 0; i < Object.values(res).length; i++) {
          this.age.push(res[i].age)
          this.perc.push(res[i].percentage)
        }

        this.chart1 = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.age,
            datasets: [{
              data: this.perc,
              backgroundColor: ["#4DB6AC", "#009688", "#00796B", "#00695C", "#B2DFDB"],
              borderColor: '#006655',
              label: 'Percentage'

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
                  display: true
                }
              ]
            },
            legend: { display: false },
            title: {
              display: true,
              text: 'Prevalence of mental morbidity in different age groups (%)'
            }
          }
        })

      })
  } 
  load(event:MatTabChangeEvent)
  {
   if(event.index==1 && this.flagc2==0)
    {
      this.flagc2++;
      this.stats.States().subscribe(
        res => {
          for (let i = 0; i < Object.values(res).length; i++) {
            this.state.push(res[i].state)
            this.perc1.push(res[i].percentage)
          }

          this.chart2 = new Chart('canvas1', {
            type: 'horizontalBar',
            data: {
              labels: this.state,
              datasets: [{
                data: this.perc1,
                backgroundColor: ["#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40", "#B2DFDB", "#009688", "#00897B"],
                borderColor: '#006655',
                label: 'Percentage'
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
                    display: true
                  }
                ]
              },
              legend: { display: false },
              title: {
                display: true,
                text: 'Prevalence of mental disorders in different States (%)'
              }
            }
          })

        })
    }
    else if(event.index==3 && this.flagc3==0)
    {
      this.flagc3++;
      this.stats.MentalHealth().subscribe(
        res => {
          for (let i = 0; i < Object.values(res).length; i++) {
            this.psychiatrist.push(res[i].psychiatrist)
            this.psychologist.push(res[i].psychologist)
            this.socialworker.push(res[i].social_workers)
            this.state1.push(res[i].state)
          }

          this.chart4 = new Chart('canvas3', {
            type: 'bar',
            data: {
              labels: this.state1,
              datasets: [
                {
                  label: "Psychiatrist",
                  backgroundColor: "#4DB6AC",
                  data: this.psychiatrist
                }, {
                  label: "Psychologist",
                  backgroundColor: "#00897B",
                  data: this.psychologist
                }, {
                  label: "Social Worker",
                  backgroundColor: "#004D40 ",
                  data: this.socialworker
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: ''
              }
            }
          });

        })

    }
    else if (event.index == 2 && this.flagc4==0)
    {
      this.flagc4++;
      this.stats.SuicidalRisk().subscribe(
        res => {
          for (let i = 0; i < Object.values(res).length; i++) {
            this.group.push(res[i].group)
            this.perc2.push(res[i].percentage)
          }

          this.chart3 = new Chart('canvas2', {
            type: 'horizontalBar',
            data: {
              labels: this.group,
              datasets: [{
                data: this.perc2,
                backgroundColor: ["#4DB6AC", "#009688", "#00897B", "#00796B", "#00695C", "#004D40", "#B2DFDB", "##00897B", "#00796B"],
                borderColor: '#006655',
                label: 'Percentage'
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
                    display: true
                  }
                ]
              },
              legend: { display: false },
              title: {
                display: true,
                text: 'Prevalence of high suicidal risk : Socio-demographic differentials'
              }
            }
          })

        })
    }
    
  }
  
}


