import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Healthpolicy } from 'src/app/healthpolicy';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthpolicy:Healthpolicy[]

  user:User = new User(0,"","",0,"","",new Date())

  users:User[]

  constructor(private digiservice:DigitalinsuranceService,private route:Router) { }

  ngOnInit(): void {
    this.getAllHealthpolicy()
    // this.getAllUser()
  }

  getAllHealthpolicy(){
    this.digiservice.getAllHealthpolicy().subscribe(data => {console.log(data)
    this.healthpolicy = data
    })
  }

  getpolicy(policyid:number){
    this.route.navigateByUrl("/healthpolicy/" + policyid)
  }

  newUser(){

    this.digiservice.saveuser(this.user).subscribe(()=>{
      
    
  })

  console.log( this.user)
}

// getAllUser(){
//   this.digiservice.getAllUser().subscribe(data => {
//     console.log(data)
//     this.users = data
//   })
// }



   

// userLogin(loginForm:any){

//   for (let user of  this.users){
    
   
//    if(loginForm.email ===  user.emailid && loginForm.password === user.password ){
//       // this.ecomservice.setUserLoggedIn()
//       let userid = user.userid.toString()
      
//       sessionStorage.setItem('userid',userid)
//       sessionStorage.setItem('emailid',String(user.emailid))
//       sessionStorage.setItem('phonenumber',user.mobilenumber.toString())
//       // console.log(sessionStorage.getItem('emailid'))
     
//       this.route.navigateByUrl("/healthpoliciy")
//       alert("logged in sucessfuly")
  
//     }
//   }
 


// }
 

}
