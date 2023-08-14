// Componentes de Angular
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { VentasComponent } from './components/ventas/ventas.component';
import { ListadoVentasComponent } from './components/ventas/listado/listado.component';
// Componentes generados
import * as Component from './components';
import * as Services from './services';
import { TableComponent } from './components/shared/table/table.component';
import { ColumnValuePipe } from './pipes/table-pipe.pipe';
import { ComprasComponent } from './components/compras/compras.component';
import { ListadoComponent } from './components/compras/listado/listado.component';

@NgModule({
	declarations: [
		AppComponent,
		Component.NavigationComponent,
		Component.HomeComponent,
		Component.ErrorComponent,
		Component.ProductListComponent,
		Component.ProductDisplayQueryComponent,
		Component.ClientListComponent,
		Component.ClientDisplayQueryComponent,
		// Component.RubrosAddModifyComponent,
		Component.RubrosDisplayQueryComponent,
		Component.RubrosListComponent,
		Component.ProveedoresDisplayQueryComponent,
		Component.ProveedoresListComponent,
		Component.DialogSiNoComponent,
		VentasComponent,
		ListadoVentasComponent,
		TableComponent,
		ColumnValuePipe,
  ComprasComponent,
  ListadoComponent,
	],
	imports: [
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatGridListModule,
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		MatPaginatorModule,
		MatSortModule,
		MatSnackBarModule,
		MatDialogModule,
	],
	providers: [
		Services.ClientesService,
		Services.ProveedoresService,
		Services.ProductsService,
		Services.RubrosService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
