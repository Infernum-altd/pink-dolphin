import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentCategoryId: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeCurrentCategory(id: number) {
    this.currentCategoryId = id;
  }
}
