import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { SignUp,login } from "../data-type";
import {BehaviorSubject} from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient,private router:Router) {}

  userSingUp(data: SignUp) {
    this.http.post("http://localhost:3000/seller", data, {observe: "response"}
    ).subscribe(result => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data: login){
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      {observe: "response"}
    ).subscribe(result=>{
      console.log(result)
    })
  }
}
