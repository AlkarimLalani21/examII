import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  id:any;
  products: any;

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = [{_id:0, name:"", quantity:0, price: 0}]
    this.getProducts()
  }
  handleCancelClick(){
    this.router.navigate([''])
  }
  getProducts(){
    this._http.getProducts().subscribe(data =>{
      console.log("All products", data)
      this.products = data;
    })
  }

}
