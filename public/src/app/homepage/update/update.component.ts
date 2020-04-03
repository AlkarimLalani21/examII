import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  product: any;
  id: any;
  error: any;

  handleCancelClick(){
    this.router.navigate([''])
  }

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.error = [];
    this.product ={name: "", quantity: 0, price: 0 }
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
    })
    console.log("im here", this.product)
    console.log(this.id)
    this.getProduct(this.id)
  }
  getProduct(_id){
    console.log("let it be know that:", this.id)
    this._http.getProduct(this.id).subscribe(data=>{
      console.log("To update", data)
      this.product = data;
      console.log("finished")
    })
  }

  updateProduct(){
    console.log("showwwwww")
    this._http.updateProduct(this.id, this.product).subscribe(data =>{
      console.log("show", data)
    //@ts-ignore
    if (data._id){
      console.log("this is the:", data)
      this.product = data;
      this.router.navigate(['/'])
    }
    else{
      console.log("showERRORS")
      //@ts-ignore
      this.error = data['errors'];
      }
    })
  }
}
