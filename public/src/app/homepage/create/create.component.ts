import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service'
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createProduct: any;
  error: any;


  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.createProduct = {name:"", quantity:0, price: 0} ;
    this.error =[];
  }
  create() {
    console.log("product to make")
    this._httpService.addProduct(this.createProduct).subscribe(data=>{
      console.log("thisis", data)
      //@ts-ignore
      if (data._id){
        console.log("this is the:", data)
        this.router.navigate(['/'])
      }
    else{
        this.error = data['errors'];
      }
    })
  }
  handleCancelClick(){
    this.router.navigate([''])
  }
}