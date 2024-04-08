import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../services/products';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ["image", "id", "name", "price", "rating"];
  products: ProductModel[] = [];
  tableSource = new MatTableDataSource<ProductModel>([]);

  constructor(private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res => {
      this.products = res.products;
      this.refreshTable();
    });
  }


  refreshTable() {
    this.tableSource.data = this.products;
  }
}