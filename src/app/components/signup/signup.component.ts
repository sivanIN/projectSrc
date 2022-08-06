import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
      
  user:User = new User(0,"","",0,"","",new Date())

  constructor(private digiservice:DigitalinsuranceService,private route:Router) { }

  ngOnInit(): void {
  }

  newUser(){
    alert("User added successfully")
    this.digiservice.saveuser(this.user).subscribe(()=>{
    this.route.navigateByUrl("/healthpoliciy") 
    
  })

  console.log( this.user)
}

}
