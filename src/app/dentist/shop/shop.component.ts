import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrownBridgeComponent } from '../crown-bridge/crown-bridge.component';
import { ShopService } from './shop.service';
import { Observable } from 'rxjs';
import { ImplantComponent } from '../implant/implant.component';
import { OrthodonticComponent } from '../orthodontic/orthodontic.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(public dialog: MatDialog, private shopService: ShopService) {}
  products: Observable<any>;

  ngOnInit(): void {
    this.products = this.shopService.GetAllProductsByLabId(
      '67jYVM7C95wsePVPAyvD'
    );
  }

  private openCrownAndBridge() {
    const dialogRef = this.dialog.open(CrownBridgeComponent, {
      disableClose: true, data: { productName: 'Crown & Bridge' },
      minHeight: 'calc(100vh - 90px)',
      height : 'calc(100vh - 90px)'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private openImplant() {
    const dialogRef = this.dialog.open(ImplantComponent, {
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private openOrtho() {
    const dialogRef = this.dialog.open(OrthodonticComponent, {
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  OnTicketCreated(code: string) {
    if (code == 'CB') {
      this.openCrownAndBridge();
    }
    else if (code == 'O') {
      this.openOrtho();
    } 
    else {
      this.openImplant();
    }
  }
}
