import { Component, OnInit } from '@angular/core';
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
  public reviewsData: any = [];


  constructor(private dataService: DataService) {




  }

  public ngOnInit(): void {
    this.dataService.AllReviewsData().subscribe(reviewsData => {

      console.log('reviewsData:', reviewsData);
      this.reviewsData = reviewsData;
      console.log('reviewsData:', this.reviewsData);
    });
  }

  // columns = [
  //   { name: 'Show Name Here', prop: 'name' },
  //   { name: 'show comment here', prop: 'comment' }

  // ];

 
}

