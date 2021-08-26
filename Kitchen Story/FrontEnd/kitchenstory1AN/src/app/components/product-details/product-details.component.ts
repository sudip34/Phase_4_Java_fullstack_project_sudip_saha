import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productService: ProductServiceService,
    private carttService: CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.getProductDetails())
  }
  getProductDetails() {
    //get the "id" param string. 
    const theProductId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProduct(theProductId).subscribe(
      (data: any) => this.product = data
    )

  }
  addToCart(theProduct: Product) {
    console.log(`Adding to cart:${this.product.name}, ${this.product.unitPrice}`);

    const theCartItem = new CartItem(this.product);
    this.carttService.addToCart(theCartItem);
  }

}
