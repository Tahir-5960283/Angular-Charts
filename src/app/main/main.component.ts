import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DataService } from '../data.service';
import { Reviews } from '../reviews';

declare var jQuery: any


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService]
})

export class MainComponent implements OnInit {


  public currentPage = 1;
  public pageSize = 5;
  public editingRowId: any;
  public reviewsData: any = [];
  public base64Output!: string;
  public rowData!: string;
  public newData: any[] = [];

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.AllReviewsData().subscribe(reviewsData => {
      console.log('reviewsData:', reviewsData);
      this.reviewsData = reviewsData;
      console.log('reviewsData:', this.reviewsData);
    });
  }


  public showDialog(row: any) {
    jQuery("#exampleModal").modal('show');
    this.rowData = row;
    this.newData.push(this.rowData);
    console.log('rowdata:', this.rowData);
    console.log('newdata:', this.newData);
  }

  public onCloseDialog() {
    jQuery("#exampleModal").modal('hide');
  }

  public onSaveDialog() {
    jQuery("#exampleModal").modal('handleUpdate');
  }

  public onShowEditDialog(){
   jQuery("#exampleModals").modal('show');
  }
}
