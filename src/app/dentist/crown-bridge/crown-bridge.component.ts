import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Practice } from 'src/app/shared/model/practice';
import { AccountService } from 'src/app/account/account.service';
import { Order } from 'src/app/shared/model/order';
import { ShopService } from '../shop/shop.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  selectedPracticeId: string;
  private selectedPractice: Practice;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
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
      fullFormZirconiaCB: [''],
      layeredZirconiaCB: [''],
      bondedCrownNP: [''],
      bondedCrownP: [''],
      bondedBridgeNP: [''],
      bondedBridgeP: [''],
      maryland1P2W: [''],
      maryland1P1W: [''],
      fullShellCrInOnNP: [''],
      fullShellCrInOn60G: [''],
      fullShellCrInOn33G: [''],
      postCoreNP: [''],
      postCoreP: [''],
      compositeInOn: [''],
      compositeCrown: [''],
      compositeVeneer: [''],
      procelainVeneer: [''],
      dentineBonded: [''],
      emaxCBPrivate: [''],
      emaxInOnPrivate: [''],
      emaxVeneerPrivate: [''],
      pmmaCB: [''],
      metalCompositeCB: ['']
    });

    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['mmm', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['mmm', Validators.required]
    });

  }

  onAddressChange(selectedPracticeId) : void{

    console.log("Selected Practice Id: " + selectedPracticeId);

    if (selectedPracticeId) {
      this.accountService
        .GetPracticeById(selectedPracticeId)
        .subscribe(practice => {
          this.selectedPractice = practice;
          console.log("Selected Practice: " + JSON.stringify(practice));
        });
    }
  }

  OnDetailsSubmit() {

    console.log("First Form Value: " + JSON.stringify(this.firstFormGroup.value));
    // const order: Order = {
    //   PatientRef: this.firstFormGroup.get('patientRef').value,
    //   PatientFirstName: this.firstFormGroup.get('patientFirstName').value,
    //   PatientLastName: this.firstFormGroup.get('patientLastName').value,
    //   PracticeDeliveryDate: this.firstFormGroup.get('deliveryDate').value,
    //   DentistId: this.accountService.currentUserId,
    //   DentistName: this.accountService.currentUserName,
    //   ProductName: this.data.productName,
    //   PracticeName: this.selectedPractice.Name,
    //   PracticeAddressLine1: this.selectedPractice.AddressLine1,
    //   PracticeAddressLine2: this.selectedPractice.AddressLine2,
    //   PracticeCityOrTown: this.selectedPractice.CityOrTown,
    //   PracticePostcode: this.selectedPractice.Postcode,
    //   ServiceLevel: this.firstFormGroup.get('selectedServiceLevel').value
    // };

   // this.shopService.CreateOrder(order);
  }

  OnInstructionClick() {

    console.log("First Form Value: " + JSON.stringify(this.firstFormGroup.value));
    console.log("Second Form Value: " + JSON.stringify(this.secondFormGroup.value));
  }
}
