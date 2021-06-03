import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Practice } from 'src/app/shared/model/practice';
import { AccountService } from 'src/app/account/account.service';
import { Order } from 'src/app/shared/model/order';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-crown-bridge',
  templateUrl: './crown-bridge.component.html',
  styleUrls: ['./crown-bridge.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class CrownBridgeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  practices: Practice[];
  selectedValue: string;
  dentistName: string;

  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountService,
    private shopService: ShopService
  ) {}

  ngOnInit(): void {
    this.dentistName = this.accountService.currentUserName;

    this.accountService
      .GetAllPracticesByDentist(this.accountService.currentUserId)
      .subscribe(
        res => {
          this.practices = res;
        },
        err => {}
      );

    this.firstFormGroup = this._formBuilder.group({
      patientRef: ['', Validators.required],
      patientFirstName: ['', Validators.required],
      patientLastName: ['', Validators.required],
      deliveryDate: [''],
      selectedAddress: ['', Validators.required],
      selectedServiceLevel: ['']
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  OnDetailsSubmit() {
    let selectedAddressId = this.firstFormGroup.get('selectedAddress').value;

    console.log("On Detail submit ")
    if (selectedAddressId) {
      console.log('selected address: ' + selectedAddressId);
      this.accountService
        .GetPracticeById(selectedAddressId)
        .subscribe(practice => {
          console.log('selected practices: ' + JSON.stringify(practice));

          const order: Order = {
            PatientRef: this.firstFormGroup.get('patientRef').value,
            PatientFirstName: this.firstFormGroup.get('patientFirstName').value,
            PatientLastName: this.firstFormGroup.get('patientLastName').value,
            PracticeDeliveryDate: this.firstFormGroup.get('deliveryDate').value,
            DentistId: this.accountService.currentUserId,
            DentistName: this.accountService.currentUserName,
            PracticeName: practice.Name,
            PracticeAddressLine1: practice.AddressLine1,
            PracticeAddressLine2: practice.AddressLine2,
            PracticeCityOrTown: practice.CityOrTown,
            PracticePostcode: practice.Postcode,
            ServiceLevel: this.firstFormGroup.get('selectedServiceLevel').value
          };

          this.shopService.CreateOrder(order);
        });
    }

    console.log('Details: ' + JSON.stringify(this.firstFormGroup.value));
  }
}
