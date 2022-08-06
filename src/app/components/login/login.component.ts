import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:User[]

  constructor(private digiservice:DigitalinsuranceService,private route:Router) { }

  ngOnInit(): void {
    this.getAllUser()
  }


  getAllUser(){
    this.digiservice.getAllUser().subscribe(data => {
      console.log(data)
      this.users = data
    })
  }

  userLogin(loginForm:any){

    for (let user of  this.users){
      
     
     if(loginForm.email ===  user.emailid && loginForm.password === user.password ){
        // this.ecomservice.setUserLoggedIn()
        let userid = user.userid.toString()
        
        sessionStorage.setItem('userid',userid)
        sessionStorage.setItem('emailid',String(user.emailid))
        sessionStorage.setItem('phonenumber',user.mobilenumber.toString())
        // console.log(sessionStorage.getItem('emailid'))
       
        this.route.navigateByUrl("/healthpoliciy")
        alert("logged in sucessfuly")
    
      }
    }
   
  }

}
