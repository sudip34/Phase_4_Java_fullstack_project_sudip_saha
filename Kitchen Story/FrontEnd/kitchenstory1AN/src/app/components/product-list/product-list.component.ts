import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  searchMode:boolean=false;

  constructor(private productService:ProductServiceService,
              private route:ActivatedRoute,
              private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.allProducts();
    });
    
    
  }

  allProducts(){
    this.searchMode=this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.searchProduct();
    }else{
      this.getAllProducts();
    }

  }



  getAllProducts() {
   this.productService.getProductList().subscribe(
     data=>{this.products=data;
      // console.log('Product Categories=' + JSON.stringify(data));
    }
   )
  }

  searchProduct(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  addToCart(theProduct:Product){
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }
  

}
