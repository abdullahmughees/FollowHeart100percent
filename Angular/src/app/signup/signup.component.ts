import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
   console.log('signup form submitted');

    if (form.invalid) {
      return;
    }




    this.http.post('http://localhost:5600/users', {
'name' : form.value.name,
'email' : form.value.email,
'password' : form.value.password    

      
    }).subscribe((data)=>{
      console.log(data);
      this.route.navigate([''])
    });
    // console.log(form.value);
  }

}
