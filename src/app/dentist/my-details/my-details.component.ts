import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NewPracticeComponent } from '../new-practice/new-practice.component';
import { AccountService } from 'src/app/account/account.service';
import { Practice } from 'src/app/shared/model/practice';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

// /** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
//   'aqua', 'blue', 'navy', 'black', 'gray'
// ];
// const NAMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss']
})
export class MyDetailsComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'AddressLine1', 'Telephone'];
  dataSource: MatTableDataSource<Practice>;

  practices: Practice[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public dialog: MatDialog, private accountService: AccountService) { }

  ngOnInit(): void {

    this.accountService.GetAllPracticesByDentist(this.accountService.currentUserId)
    .subscribe(response => {
       this.practices = response;
        this.dataSource = new MatTableDataSource(this.practices);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }, (error) => {

    })
    
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  OnAddNewPractice(): void {
    const dialogRef = this.dialog.open(NewPracticeComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };

// }
