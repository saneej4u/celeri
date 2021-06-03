import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Practice } from 'src/app/shared/model/practice';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-new-practice',
  templateUrl: './new-practice.component.html',
  styleUrls: ['./new-practice.component.scss']
})
export class NewPracticeComponent implements OnInit {
  patientFormGroup: FormGroup;

  constructor(
    private accountService:  AccountService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewPracticeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onNewPracticeClick(): void {

    console.log("onNewPracticeClick Invoked");

    const practice: Practice = {
      DentistId: this.accountService.currentUserId,
      Name: this.patientFormGroup.get('Name').value,
      AddressLine1 : this.patientFormGroup.get('AddressLine1').value,
      AddressLine2: this.patientFormGroup.get('AddressLine2').value,
      CityOrTown: this.patientFormGroup.get('CityOrTown').value,
      Postcode : this.patientFormGroup.get('Postcode').value,
      Telephone: this.patientFormGroup.get('Telephone').value
    }

    this.accountService.OnPracticeDetailsAdd(practice);
    this.dialogRef.close();

  }

  ngOnInit(): void {
    this.patientFormGroup = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      AddressLine1: ['', []],
      AddressLine2: ['', []],
      CityOrTown: ['', []],
      Postcode: ['', [Validators.required, Validators.minLength(3)]],
      Telephone: ['', [Validators.required]]
    });
  }
}
