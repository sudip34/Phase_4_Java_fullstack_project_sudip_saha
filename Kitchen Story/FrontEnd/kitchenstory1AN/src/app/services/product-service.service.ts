import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl1 = "http://localhost:8080/api/product";
  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  // getProductList():Observable<Product[]>{
  //   return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
  //     map(response =>response._embedded.products)
  //   )
  // }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl1);
  }


  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }


  getProduct(theProductId: number): Observable<Product> {
    // url building - based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);

  }


  createProduct(theProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, theProduct);
  }

  updateProduct(theProduct: Product): Observable<Product> {
    const productUrl = `${this.baseUrl1}/update`;
    return this.httpClient.put<Product>(productUrl, theProduct);
  }

  deleteProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl1}/delete/${theProductId}`;
    return this.httpClient.delete<Product>(productUrl);
  }


}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

