import {Component, Inject, OnInit} from '@angular/core';
import {Category} from "../../../models/category";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-publis-dialog',
  templateUrl: './publish-dialog.component.html',
  styleUrls: ['./publish-dialog.component.css']
})
export class PublishDialogComponent implements OnInit {

  selectedValue: Category | undefined;

  selectedPreviewImage: string | undefined;

  categories: Category[] | undefined;

  constructor(
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<PublishDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPreviewImageToArticle(previewImage: string): void {
    this.selectedPreviewImage = previewImage;
  }
}
