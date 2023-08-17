import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto, ProductoListaPrecios } from '../models/producto';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private APIURL: string = environment.API_URI + 'productos';

	constructor(private http: HttpClient) {}

	getProducts(): Observable<Producto[]> {
		return this.http.get<Producto[]>(this.APIURL);
	}

	getProduct(id: number): Observable<Producto> {
		return this.http.get<Producto>(this.APIURL + '/' + id);
	}

	getProductList(): Observable<ProductoListaPrecios[]> {
		return this.http.get<ProductoListaPrecios[]>(this.APIURL + '/lp/');
	}
	deleteProduct(idproductos: number): Observable<any> {
		return this.http.delete(this.APIURL + '/' + idproductos);
	}

	updateProduct(id: number, updatedProducto: Producto): Observable<any> {
		console.log('desde servicio=>>>>', updatedProducto)
		return this.http.patch(`${this.APIURL}/${id}`, updatedProducto);
	}

	addProduct(producto: Producto): Observable<any> {
		return this.http.post(`${this.APIURL}/`, producto);
	}
}
