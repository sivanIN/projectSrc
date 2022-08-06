import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Healthpolicy } from './healthpolicy';
import { Observable,map } from 'rxjs';
import { User } from './user';
import { Userpolicy } from './userpolicy';
import { Policycategory } from './policycategory';
import { Homepolicy } from './homepolicy';

@Injectable({
  providedIn: 'root'
})
export class DigitalinsuranceService {

  healthurl= "http://localhost:8080/api/healthpolicy"
  homeurl = "http://localhost:8080/api/homepolicy"
  userUrl = "http://localhost:8080/api/user"
  userpolicyUrl = "http://localhost:8080/api/userpolicy"
  policyUrl = "http://localhost:8080/api/policy"

  constructor(private httpclient:HttpClient) { }


  getAllHealthpolicy():Observable<Healthpolicy[]>{

    return this.httpclient
    .get<gethealthpolicyResponse>(this.healthurl)
    .pipe(map(response => response._embedded.healthPolicies))
  
  }

  getAllHomepolicy():Observable<Homepolicy[]>{
    return this.httpclient
    .get<getHomepolicyResponse>(this.homeurl)
    .pipe(map(response => response._embedded.homePolicies))
  }

  
  getHealthPolicyById(policyid:number):Observable<Healthpolicy>{
    const healthURL= this.healthurl + "/" +  policyid
    return this.httpclient
    .get<Healthpolicy>(healthURL)
  }

  getUserbyId(userid:number):Observable<User>{
    const userURL = this.userUrl + '/' + userid
    return this.httpclient.get<User>(userURL)
  }


  // getHomePolicyById(policyid:number):Obervable<>

  myPolicyByUserId(userid:number):Observable<Userpolicy>{
    // console.log(userid)
    const userPolicyURL= this.userpolicyUrl + "/" +  userid
    // console.log(userPolicyURL)
    // return this.httpclient
    // .get<getUserpolicyResponse>(userPolicyURL)
    return this.httpclient.get<Userpolicy>(userPolicyURL)
    
  }

  getpolicyCategory(policyId:number):Observable<Policycategory>{
    const policycatURL = this.policyUrl + "/" + policyId
    return this.httpclient.get<Policycategory>(policycatURL)
  }

  saveuser(user:User):Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  return this.httpclient.post<User>(this.userUrl,user,httpOptions)
  }

  getAllUser():Observable<User[]>{
    return this.httpclient
    .get<getUserResponse>(this.userUrl)
    .pipe(map(response => response._embedded.users))
  }


  saveUserPolicy(userpolicy:Userpolicy):Observable<Userpolicy>{

    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type' :'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
  }
  
  return this.httpclient.post<Userpolicy>(this.userpolicyUrl,userpolicy,httpOptions)


  }

  getAllUserPolicy():Observable<Userpolicy[]>{
    return this.httpclient
    .get<getUserpolicyResponse>(this.userpolicyUrl)
    .pipe(map(response => response._embedded.userPolicies))
  }



}

interface gethealthpolicyResponse{
  _embedded:{
    healthPolicies : Healthpolicy[]
  }
}

interface getUserResponse{
  _embedded:{
    users : User[]
  }
}

interface getUserpolicyResponse{
  _embedded:{
    userPolicies : Userpolicy[]
  }
}

interface getHomepolicyResponse{
  _embedded:{
    homePolicies : Homepolicy[]
  }
}