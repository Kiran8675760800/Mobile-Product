import { Component } from '@angular/core';
import { json } from 'express';
// import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mproduct';
  lessthan = "<"
  offerdiv:boolean = false;
  offerplatform:boolean = false;
  mobileproductdata = {} as any;
  pricedetailsdata = {} as any;
  brands:any;
  rating:any;
  ratingvalue:any
  ratingdef:any;
  delivery:any;
  platformdef:any;
  productname:any;
  shoename:any;
  mrp:any;
  price:any;
  Currency:any;
  offerprice:any;
  offer:any;
  tax:any;
  stock:any;
  symbelvalue:any;
  lastvalueograting:any;
  platform:any;
  others:any;

constructor(){}

ngOnInit(){

//jsonva;ue
let Jsonvalue = {} as any;
Jsonvalue.brands = "Brands"
Jsonvalue.rating = "4.1|/|5"
Jsonvalue.ratingdef = "Rating";
Jsonvalue.delivery = "Delivery";
Jsonvalue.platform = "Other| Platform";
Jsonvalue.productname = "Harringgton";
Jsonvalue.shoename = "Oxford shoe";
Jsonvalue.mrp = "MRP";
Jsonvalue.price = "₹1899";
Jsonvalue.Currency = "₹";
Jsonvalue.offerprice = "949";
Jsonvalue.offer = "( 50% Off )";
Jsonvalue.tax = "inclusive of all taxes";
Jsonvalue.stock = "Limited Stock Available";
  
console.log(JSON.stringify(Jsonvalue))

// productdata Json
this.brands = Jsonvalue.brands;
let adata = Jsonvalue.rating.split("|");
this.ratingvalue = adata[0];
this.symbelvalue = adata[1];
this.lastvalueograting = adata[2];
this.ratingdef = Jsonvalue.ratingdef ;
this.delivery = Jsonvalue.delivery;
this.platformdef = Jsonvalue.platform;
let bdata = Jsonvalue.platform.split("|");
this.platform = bdata[1];
this.others = bdata[0];

//pricedetails
this.productname= Jsonvalue.productname;
this.shoename = Jsonvalue.shoename;
this.mrp = Jsonvalue.mrp;
this.price = Jsonvalue.price;
this.Currency = Jsonvalue.Currency;
this.offerprice = Jsonvalue.offerprice;
this.offer = Jsonvalue.offer;
this.tax = Jsonvalue.tax;
this.stock = Jsonvalue.stock;
}

offerclick(){
  this.offerdiv = true;
}

closebuttonclick(){
  this.offerdiv = false;
}

offerplatformclick(){
this.offerplatform = true;
setTimeout(() => {
this.offerplatform = false;
}, 1000);
}

}
