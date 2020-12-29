import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  httpHeaders1 = new HttpHeaders({'Content-Type':'application/html'});

  constructor(private http:HttpClient) { }

  
  upload(form): Observable<any> {
    const body = {name: form.fullName , email: form.email, password:form.password , contact:form.contact , address:form.address1,dob:form.dob, occupation:form.occupation}; // ,profile_pic:form.profilepic,acknowledgement:form.acknowledgement
    return this.http.post(this.baseurl + '/signup', JSON.stringify(body),
    {headers: this.httpHeaders});
  }

  

  login(form): Observable<any> {
    return this.http.get(this.baseurl + '/login/' + form ,
    {headers: this.httpHeaders});
  }
  
  getCounsellors(): Observable<any> {
    return this.http.get(this.baseurl + '/counsellors',
    {headers: this.httpHeaders});
  }

  articleWritten(form): Observable<any> {
    const body = {title:form.title,desc:form.body,email:form.email};
    return this.http.post(this.baseurl+'/addarticle', JSON.stringify(body),
    {headers: this.httpHeaders});

  }

  getArticles():Observable<any>{
    return this.http.get(this.baseurl+'/articles',
    {headers: this.httpHeaders});
  }


  userProfile(email):Observable<any>{
    return this.http.get(this.baseurl+'/user/'+email,
    {headers: this.httpHeaders});
  }

  update(form): Observable<any> {
    const body = {name:form.fullName, email: form.email , contact:form.contact , address:form.address,dob:form.dob, occupation:form.occupation };
    return this.http.put(this.baseurl + '/update/' + form.email , body,
    {headers: this.httpHeaders});
  }

  video():Observable<any>{
    return this.http.get(this.baseurl+'/index',
    {headers:this.httpHeaders1});
  }

  createAnonymous(username):Observable<any>{
    const body = {username : username};
    return this.http.post(this.baseurl + '/createanyuser', JSON.stringify(body),
    {headers: this.httpHeaders});
   
  }
  
  
}
