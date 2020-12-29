import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { query } from '@angular/core/src/render3/query';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[ApiService],


})
export class SignupComponent implements OnInit {

  dialog : boolean;
  baseurl = 'http://127.0.0.1:8000';
  formdata;
  isLinear = false;




  constructor(private formBuilder: FormBuilder,private api:ApiService,public dialogRef:MatDialogRef<SignupComponent>,private router:Router) {
    this.formdata = {fullName:'', email: '' , password: '', confirmpassword: '',contact:'',dob:'',occupation:'',address1:'',address2:''};
   }
    
  ngOnInit() { }


  
  onSubmit = () =>{

    this.api.upload(this.formdata).subscribe(
      data => {
         alert("Sign Up Successful,Login to View Your Profile!!");
      },
      error => {
        alert("User Already Exists!");
        console.log(error);
      }
    );
      this.dialog = false;
     
   
}
   


}
