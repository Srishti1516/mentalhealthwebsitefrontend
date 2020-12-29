import { OnInit } from '@angular/core';
import { Component,ElementRef } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {

 
  showModal: boolean;
  log_detail = "LOGIN"
  registerForm: FormGroup;
  submitted = false;
  profile = false;
  name;
  username;
  constructor(private formBuilder: FormBuilder,private el: ElementRef,public dialog:MatDialog,private api:ApiService,private router:Router) {
     this.username = "";
   }

  show()
  {
    if(localStorage.getItem("log_detail")=="LOGIN")
    {
      this.showModal = true;
    }
    else
    {
      localStorage.removeItem("useremail");
      localStorage.removeItem("name");
      this.log_detail = "LOGIN";
      localStorage.setItem("log_detail",this.log_detail);
      this.profile = false;
      this.name = ""
    }
  }
  hide()
  {
    this.showModal = false;
  }
  
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    if(localStorage.getItem("log_detail")!=null){
        this.log_detail = localStorage.getItem("log_detail"); 
        if(localStorage.getItem("log_detail")=="LOGOUT"){
            this.profile = true;
            this.name = localStorage.getItem("name");
        }
        //alert(this.log_detail);
    }
    else{
        this.log_detail ="LOGIN";
        localStorage.setItem("log_detail",this.log_detail);
    }
    // this.x = localStorage.getItem("login");
    // this.y = localStorage.getItem("logout");
    // this.loginshow = JSON.parse(localStorage.getItem("login"));
}
visible =true;
get f() {
   return this.registerForm.controls; 
  }
onSubmit() {
    this.submitted = true;
    this.api.login(this.registerForm.get('email').value).subscribe(
        data => {
          if(this.registerForm.get('password').value == data.password){
              localStorage.setItem('useremail', this.registerForm.get('email').value);
              alert("Login Successful");
              this.log_detail = "LOGOUT"
              localStorage.setItem("log_detail",this.log_detail);
              localStorage.setItem("name",data.name);
              this.profile = true;
              this.name = localStorage.getItem("name");

          }
          else{
            alert("Login Unsuccessful");
          }
        },
        error => {
          console.log(error);
        }
    );

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
   
}
openSignup() {
  this.hide();

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.panelClass = 'custom-content';
  dialogConfig.maxWidth = '100%';
  dialogConfig.minWidth = '40%';
  dialogConfig.maxHeight = '100%';
  dialogConfig.minHeight = '40%';
  this.dialog.open(SignupComponent, dialogConfig);
}

createanonymous(){

  this.api.createAnonymous(this.username).subscribe(
    data => {
       alert("Session Created!!");
       localStorage.setItem('anonymousUser',this.username);
    },
    error => {
      alert(this.username);
      console.log(error);
    }
  );

}
}
