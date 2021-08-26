import { Product } from './../../common/product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductServiceService } from 'src/app/services/product-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product:Product=new Product();
  products:Product[]=[];
  productsToUpdate={
    id:'',
    sku:"",
    name:"",
    description:"",
    unitPrice:'',
    imageUrl:"",
    active:true,
    unitsInStock:0,
  };

  constructor(private productService:ProductServiceService,
              private loginservice:LoginServiceService,
              private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.getAllProducts();
    });
  }



  getAllProducts() {
    this.productService.getProductList().subscribe(
      data=>{this.products=data;
     }
    )
   }


   addProduct(theProduct:Product){
     this.product=theProduct;
   }
   add(formToken:NgForm){
    this.productService.createProduct(formToken.value).subscribe(
      result =>{this.product=result;
                this.ngOnInit();
      },
      err=>{
        console.log(err);
      });
   }

   update(formToken:NgForm){
     this.productService.updateProduct(formToken.value).subscribe(
       resp=>{
         console.log(resp);
         formToken.reset();
         this.getAllProducts();
       },
       err=>{
         console.log(err);
       }
     );

   }

   getUpdated(tempProduct:Product){
     console.log("Clicked to update it");
     this.productService.updateProduct(tempProduct).subscribe(
      resp=>{
        console.log(resp, "Item is updated")
      },
        err=>console.log(err)
    );

   }

   getDeleted(tempProduct:Product){
    console.log("Clicked to delete " );
    this.productService.deleteProduct(+tempProduct.id).subscribe(
      resp=>{
        console.log(resp, "Item is deleted")
        this.ngOnInit();
        
      },
        err=>console.log(err)  
    );
    
   }

   edit(product:Product){
       this.productsToUpdate=product;
   }

   
   logout(){

    this.loginservice.logOut();
    this.router.navigate(['admin-login']);

  }

}
