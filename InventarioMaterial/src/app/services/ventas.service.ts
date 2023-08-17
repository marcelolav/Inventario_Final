import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentasDetalleComprobante, VentasListadoTotal } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
	providedIn: 'root',
})
export class VentasService {
	private APIURL: string = environment.API_URI + 'ventas';

	constructor(private http: HttpClient) {}

	getVentasTotal(): Observable<VentasListadoTotal[]> {
		return this.http.get<VentasListadoTotal[]>(this.APIURL + '/cab');
	}

	getDetalleComprobante(comp: number) {
		return this.http.get<VentasDetalleComprobante[]>(
			this.APIURL + '/detcomp/' + comp
		);
	}
}
