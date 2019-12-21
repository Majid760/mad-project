import { Component } from '@angular/core';;

import * as WC from 'woocommerce-api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  WooCommerce:any;
  private API_URL:string;
  constructor() {
    this.API_URL='http://localhost/wordpress/wp-json';
    // this.WooCommerce=WC({
    //   url:"http://localhost/wordpress/",
    //   consumerKey:"ck_05e539466151044e76dab71740eef433ecf546ec",
    //   consumerSecret:"cs_cf0e185231fc0eeee4964c641896a52661795ba4"

    // });

  //   this.WooCommerce.getAsync("products").then((data)=>{
  //     console.log(data);
  //   },(err)=> {
  //     console.log(err);
  //   })

  }

  

}
