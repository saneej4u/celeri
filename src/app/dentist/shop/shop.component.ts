import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrownBridgeComponent } from '../crown-bridge/crown-bridge.component';
import { ShopService } from './shop.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public dialog: MatDialog, private shopService:  ShopService) { }
  products: Observable<any>;

  ngOnInit(): void {
    this.products = this.shopService.GetAllProductsByLabId('67jYVM7C95wsePVPAyvD');
  }

  openCrownAndBridge(productId: string)
  {
    console.log("Product Id: " + productId)
    const dialogRef = this.dialog.open(CrownBridgeComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
