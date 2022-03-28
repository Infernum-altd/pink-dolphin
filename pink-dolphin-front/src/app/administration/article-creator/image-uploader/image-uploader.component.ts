import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  fileName = '';

  @Output() uploadedPreviewImage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // @ts-ignore
        this.uploadedPreviewImage.emit(reader.result.toString());
      };
    }
  }

}
