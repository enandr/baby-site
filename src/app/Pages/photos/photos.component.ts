import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../Services/photo.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images: any[] = [];
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getImages();
  }

  async getImages(): Promise<void> {
    const tempImgs = await this.photoService.get();
    if (tempImgs.length > 0){
      tempImgs.map(img => {
        img.url = 'http://3.134.168.146' + img.url;
      })
      this.images = tempImgs;
      console.log(this.images);
    }
  }
}
