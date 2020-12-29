import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DisordersComponent } from './disorders/disorders.component';
import { DepressiontypesComponent } from './depressiontypes/depressiontypes.component';
import { ProfileComponent } from './profile/profile.component';
import { Top10psychiatristComponent } from './top10psychiatrist/top10psychiatrist.component';
import { SelfcareComponent } from './selfcare/selfcare.component';
import { LiverssComponent } from './liverss/liverss.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmotioncaptureComponent } from './emotioncapture/emotioncapture.component';
import { MindpalaceComponent } from './mindpalace/mindpalace.component';
import { ChatbotComponent } from './chatbot/chatbot.component';



const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'home',component: HomepageComponent,pathMatch: 'full'},
  { path: 'disorders',component: DisordersComponent},
  { path: 'depressiontypes',component: DepressiontypesComponent},
  { path: 'profile',component:ProfileComponent},
  { path: 'top10',component:Top10psychiatristComponent},
  { path:'selfcare',component:SelfcareComponent},
  { path: 'liverss',component:LiverssComponent},
  { path: 'statistics',component:StatisticsComponent},
  { path: 'aboutus',component:AboutusComponent},
  { path: 'emotioncapture',component:EmotioncaptureComponent},
  { path: 'mindpalace',component:MindpalaceComponent},
  { path: 'chatbot',component:ChatbotComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
