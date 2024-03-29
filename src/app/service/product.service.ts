import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './mapping/product';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  async getAllProduct(): Promise<Product[]> {
    const url = environment.apiUrl + "products.json";
    return this.http.get<Product[]>(url).toPromise()
      .catch((err) => { 
        return null as any 
      });
  }

  async getProductById(id:string): Promise<Product> {
    const url = environment.apiUrl + "products/"+id+".json";
    return this.http.get<Product>(url).toPromise()
      .catch((err) => { 
        return null as any 
      });
  }

  async searchProduct(keyword: string): Promise<Product[]> {
    const url = environment.apiUrl + "products/search";
    const body = {
      "keyword": keyword
    };
    return await this.http.post<Product[]>(url, body).toPromise().catch(() => { return null as any });
  }
}
