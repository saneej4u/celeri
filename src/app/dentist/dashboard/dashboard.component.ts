import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ShopService } from '../shop/shop.service';
import { AccountService } from 'src/app/account/account.service';
import { Order } from 'src/app/shared/model/order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['Product', 'Patient', 'Lab', 'Practice', 'Service', 'DeliveryDate', 'Status',  'Action'];
  dataSource: MatTableDataSource<Order>;

  activeItems: number[] = [1, 2, 3, 4, 5];
  constructor(
    private shopService: ShopService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.shopService
      .GetOrderByDentist(this.accountService.currentUserId)
      .subscribe(
        order => {
          this.dataSource = new MatTableDataSource(order);
          this.dataSource.paginator = this.paginator;
        },
        error => {}
      );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

}
