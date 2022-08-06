import { Component, OnInit } from '@angular/core';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Userpolicy } from 'src/app/userpolicy';
import { User } from 'src/app/user';
import { Healthpolicy } from 'src/app/healthpolicy';
import { Homepolicy } from 'src/app/homepolicy';
import { PlocyDetails } from 'src/app/plocy-details';

@Component({
  selector: 'app-adminpolicylist',
  templateUrl: './adminpolicylist.component.html',
  styleUrls: ['./adminpolicylist.component.css']
})
export class AdminpolicylistComponent implements OnInit {


  userpolcy: Userpolicy[]
  user:User
  users:User[] = []
  policydetails:PlocyDetails[] = []
  healthpolicy:Healthpolicy[]
  homepolicy:Homepolicy[]
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUserPolicy()
    
  }

  getAllUserPolicy(){

    this.digiservice.getAllHealthpolicy().subscribe(data => {console.log(data)
      this.healthpolicy = data
    })
      this.digiservice.getAllHomepolicy().subscribe(data => {console.log(data)
        this.homepolicy = data
    })

    this.digiservice.getAllUserPolicy().subscribe((data) => {this.userpolcy = data
    // console.log(data)
    
   
    
    for(let userpolicy of this.userpolcy){
      const userid = userpolicy.userid
      const policyid = userpolicy.policyid
      this.getUserbyId(userid)
      

      for(let healthpolicy of this.healthpolicy){
        if(policyid == healthpolicy.policyid){
          this.policydetails.push(healthpolicy)
        }
      }

      
  
      for(let homepolicy of this.homepolicy){
      if( policyid == homepolicy.policyid ){
        this.policydetails.push(homepolicy)
      }    
      }
      console.log(this.policydetails)

    }
  
  })
  
  }




  getUserbyId(userid:number){
    this.digiservice.getUserbyId(userid).subscribe(data => {
      // console.log(data)
      this.user = data
      this.users.push(this.user)
      // console.log(this.users)
    })
    

  }

  
  // getAllHealthpolicy(){
  //   this.digiservice.getAllHealthpolicy().subscribe(data => {console.log(data)
  //   this.healthpolicy = data
   
  //   })
  // }

  // getAllHomepolicy(){
  //   this.digiservice.getAllHomepolicy().subscribe(data => {console.log(data)
  //   this.homepolicy = data
  //   })
  // }

  // getpolicyDetails(){

  //   this.digiservice.getAllHealthpolicy().subscribe(data => {console.log(data)
  //   this.healthpolicy = data
  // })
  //   this.digiservice.getAllHomepolicy().subscribe(data => {console.log(data)
  //     this.homepolicy = data
  //     })
    // this.getAllHealthpolicy()
    // this.getAllHomepolicy()

    
    
   
  

  // getPolicyDetails(){
  //   // const categoryId = this.policyCategory.categoryid
  //   if(categoryId == 1){
  //     this.gethealthPolicyById(this.policyCategory.policyid)
  //   }
  // }


}
