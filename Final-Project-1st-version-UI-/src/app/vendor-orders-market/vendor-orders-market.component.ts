import { Observable } from 'rxjs';
import { VendorProductsService } from './../Services/vendor-products.service';
import { Products } from './../shared/models/products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-orders-market',
  templateUrl: './vendor-orders-market.component.html',
  styleUrls: ['./vendor-orders-market.component.css']
})
export class VendorOrdersMarketComponent {

    products: Products[]=[];

    constructor(private productsService: VendorProductsService){
      let productsObservable: Observable<Products[]>

      productsObservable = this.productsService.getAll()

      productsObservable.subscribe((serverProducts)=>{
        this.products = serverProducts;
      })
    }
}
