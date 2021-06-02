import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Practice } from 'src/app/shared/model/practice';
import { AccountService } from 'src/app/account/account.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crown-bridge',
  templateUrl: './crown-bridge.component.html',
  styleUrls: ['./crown-bridge.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CrownBridgeComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  practices: Practice[];
  selectedValue: string;
  dentistName: string;
  
  constructor(private _formBuilder: FormBuilder, private accountService:  AccountService) { }

  ngOnInit(): void {

     this.dentistName = this.accountService.currentUserName;

    this.accountService.GetAllPracticesByDentist(this.accountService.currentUserId).subscribe(res => {

      this.practices = res;
    }, (err) => {

    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
