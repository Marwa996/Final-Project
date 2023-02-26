import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router:Router){}

  checkOut(){
    this.router.navigate(['/checkout']);
  }
  backToMarket(){
    this.router.navigate(['/home']);
  }
}
