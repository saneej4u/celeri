import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NewPracticeComponent } from '../new-practice/new-practice.component';
import { AccountService } from 'src/app/account/account.service';
import { Practice } from 'src/app/shared/model/practice';
import { User } from 'src/app/shared/model/user';
import { Icu } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss']
})
export class MyDetailsComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'AddressLine1', 'Telephone', 'Action'];
  dataSource: MatTableDataSource<Practice>;
  dentist: User;

  practices: Practice[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountService
      .GetAllPracticesByDentist(this.accountService.currentUserId)
      .subscribe(
        response => {
          this.practices = response;
          this.dataSource = new MatTableDataSource(this.practices);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {}
      );

    this.accountService
      .GetUserDetailsById(this.accountService.currentUserId)
      .subscribe(
        response => {
          this.dentist = response;
        },
        error => {}
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  OnAddNewPractice(): void {
    const dialogRef = this.dialog.open(NewPracticeComponent, {
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  OnEditPractice(practiceId: string): void {
    const dialogRef = this.dialog.open(NewPracticeComponent, {
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  OnDeletePractice(practiceId: string): void {
    if (confirm('Are you sure you want to delete ?')) {
      console.log('Delete');
    } else {
      console.log('No Delete');
    }
  }
}
