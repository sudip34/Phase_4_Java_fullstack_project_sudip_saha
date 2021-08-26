import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {



  constructor(private cartservice: CartServiceService) { }

  ngOnInit(): void {
    this.resetTheCart();
  }
  resetTheCart() {
    this.cartservice.resetCart();
  }

}
