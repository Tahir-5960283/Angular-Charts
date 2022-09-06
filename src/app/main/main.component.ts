import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public StartTimes: TimeFormates[];
  public ClosedTimes: TimeFormates[];
  public category: Category[];

  public formsSubmitData: EditModelDialog[] = [];


  public Brands: EditModelDialog = {
    Address: '', Mobilenumber: '', Phonenumber: '',
    Hours: '',
    Minutes: '',
    Category: '',
    Websites: ''
  };





  constructor(private dataService: DataService, private router: Router) {

    this.StartTimes = [
      { 'name': '00' },
      { 'name': '01' },
      { 'name': '02' },
      { 'name': '03' },
      { 'name': '04' },
      { 'name': '05' },
      { 'name': '06' },
      { 'name': '07' },
      { 'name': '08' },
      { 'name': '09' },
      { 'name': '10' },
      { 'name': '11' },
      { 'name': '12' },
      { 'name': '13' },
      { 'name': '15' },
      { 'name': '16' },
      { 'name': '17' },
      { 'name': '18' },
      { 'name': '19' },
      { 'name': '20' },
      { 'name': '21' },
      { 'name': '22' },
      { 'name': '23' },

    ];

    this.ClosedTimes = [
      { 'name': '00' },
      { 'name': '30' },
    ];

    this.category = [
      { 'name': 'selectProductCategory1' },
      { 'name': 'selectProductCategory2' },
      { 'name': 'selectProductCategory3' },
      { 'name': 'selectProductCategory4' }
    ];
    //this.formData=new this.formData(){}

  }

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

  public onShowEditDialog() {
    jQuery("#exampleModals").modal('show');
  }

  public onSubmit(Brands: EditModelDialog) {
    console.log('tahir:', this.Brands);
    let formValue = this.Brands;
    console.log('formValue:', formValue);
    this.formsSubmitData.push(formValue);
    console.log('formvalue:', this.formsSubmitData);

  }


}



interface EditModelDialog {
  Address: string;
  Mobilenumber: string;
  Phonenumber: string;
  Hours: string;
  Minutes: string;
  Category: string;
  Websites: string;


}



interface TimeFormates {
  name: string;

}

interface Category {
  name: string;
}

