import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: any;
  id: any;
  error: any;

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.product ={name: "", quantity: 0, price: 0 }
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
    })
    console.log("im here", this.product)
    console.log(this.id)
    this.getProduct(this.id)
  }
  getProduct(_id){
    console.log("details:", this.id)
    this._http.getProduct(this.id).subscribe(data=>{
      console.log("showing details", data)
      this.product = data;
    })
  }
  delete(id){
    this._http.delete(id).subscribe(data=>{
      console.log("deleted")
    })}

}
