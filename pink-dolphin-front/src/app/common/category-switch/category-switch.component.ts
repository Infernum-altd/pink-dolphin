import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-category-switch',
  templateUrl: './category-switch.component.html',
  styleUrls: ['./category-switch.component.css']
})
export class CategorySwitchComponent implements OnInit {

  @Output("categorySwitch") categorySwitch = new EventEmitter<number>();

  tabs: Category[] | undefined;

  readonly firstIndexPosition: number = 0;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.startedCategoryIdPass();
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => {
          console.log(categories);
          this.tabs = categories
        }
      )
  }

  changeCategory(id: number) {
    this.categorySwitch.emit(id)
  }

  onTabChange(tabChangeEvent: MatTabChangeEvent) {
    // @ts-ignore
    this.changeCategory(this.tabs[tabChangeEvent.index].id);
  }

  startedCategoryIdPass() {
    // @ts-ignore
    this.changeCategory(this.tabs[this.firstIndexPosition].id)
  }
}
