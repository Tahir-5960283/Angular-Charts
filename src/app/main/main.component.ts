import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DataService } from '../data.service';
import { Reviews } from '../reviews';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService]
})
export class MainComponent implements OnInit {
  public currentPage = 1;
  public pageSize = 5;
  // public totalpages;
  public editingRowId: any;
  public reviewsData: any = [];
  public base64Output!: string;

  constructor(private dataService: DataService) {




  }

  public ngOnInit(): void {
    this.dataService.AllReviewsData().subscribe(reviewsData => {

      console.log('reviewsData:', reviewsData);
      this.reviewsData = reviewsData;
      console.log('reviewsData:', this.reviewsData);

    });

  }






  getRowClass(row: any): string {
    return 'row-color';
  }

  getHeaderClass(col: any): string {
    return 'col-color';
  }
  getCellClass(row: any, column: any, value: any): any {
    // console.log(row,column,value)
    return {
      'is-comment': value === 'comment'
    };
  }
  getCustomCell(col: any, value: any, row: any) {
    return {
      'is-name': value === 'name'
    };

  }
  getColClass(col: any, value: any, row: any) {
    return {
      'is-col': value === 'col'
    }


  };

  columns = [
    { prop: 'name', name: '' },
    { prop: 'commment', name: '' },

  ];


  // conerting file into base64 .....///

  // onFileSelected(event: any) {
  //   console.log(event.target.value)
  //   this.convertFile(event.target.files[0]).subscribe((base64: any) => {
  //     console.log(base64)
  //     this.base64Output = base64;
  //     console.log(this.base64Output)
  //   });

  // }
  // convertFile(file: File): Observable<string> {
  //   const result = new ReplaySubject<string>(1);
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(file);
  //   reader.onload = (event) => result.next(event.AT_TARGET.toString());
  //   return result;

  }
  // conerting file into base64 .....///
// }