import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signForm!:FormGroup;
  constructor(private formBuilder:FormBuilder ,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signForm=this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
     
    })
  }
  signUp(){
 
      return this.http.post<any>("http://localhost:3000/signup", this.signForm.value).subscribe(res=>{
console.log(res)
        
alert("Registration successful");

        this.signForm.reset();
        this.router.navigate(['login'])


      },err=>{
        alert("Something went Worng")
      })
       }

  
}
