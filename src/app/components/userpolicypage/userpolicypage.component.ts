import { Component, OnInit } from '@angular/core';
import { Userpolicy } from 'src/app/userpolicy';
import { DigitalinsuranceService } from 'src/app/digitalinsurance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Policycategory } from 'src/app/policycategory';
import { Healthpolicy } from 'src/app/healthpolicy';

@Component({
  selector: 'app-userpolicypage',
  templateUrl: './userpolicypage.component.html',
  styleUrls: ['./userpolicypage.component.css']
})
export class UserpolicypageComponent implements OnInit {

  mypolicy:Userpolicy
  policyCategory:Policycategory
  policy:Healthpolicy
  emailid:string
  phonenumber:string
  constructor(private digiservice:DigitalinsuranceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.mypolicies()
    // this.getpolicyCategory()
  }



  mypolicies(){

    const userId = parseInt(sessionStorage.getItem('userid'))
    console.log(userId)

    this.digiservice.myPolicyByUserId(userId).subscribe(data=>{this.mypolicy = data
    // console.log(data)
    this.getpolicyCategory()
    })
    

  }

  getpolicyCategory(){
    alert("success")
    const policyid = this.mypolicy.policyid
    console.log(policyid)
    this.digiservice.getpolicyCategory(policyid).subscribe(data => {this.policyCategory = data
    console.log(data)
    this.getPolicyDetails()
    })
  }

  getPolicyDetails(){
    const categoryId = this.policyCategory.categoryid
    if(categoryId == 1){
      this.gethealthPolicyById(this.policyCategory.policyid)
    }
  }


  gethealthPolicyById(policyId:number){

    // const policyId = +this.activatedRoute.snapshot.paramMap.get("policyid")

    if(policyId>0){
      this.digiservice.getHealthPolicyById(policyId).subscribe(data => {this.policy = data
       console.log( data)
     this.emailid = sessionStorage.getItem('emailid')
     this.phonenumber=sessionStorage.getItem('phonenumber')
      })
    }

  }

  // gethomepolicyById(policyId:number){

  //   if(policyId>0){
  //     this.digiservice.getHomePolicyById(policyId).subscribe(data => {this.policy = data
  //      console.log( data)
  //     })
  //   }

  // }

  



}
