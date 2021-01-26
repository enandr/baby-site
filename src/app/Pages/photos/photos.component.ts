import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../Services/photo.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images: any[] = [];
  isAdmin = false;
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    this.getImages();
  }

  async getImages(): Promise<void> {
    const tempImgs = await this.photoService.get();
    if (tempImgs.length > 0){
      tempImgs.map(img => {
        img.url = 'http://3.134.168.146' + img.url;
        if (!img.title){
          img.title = 'Untitled'
        }
      })
      this.images = tempImgs;
    }
  }

  async onSubmit(event, id): Promise<void> {
    this.photoService.delete(id);
    this.getImages();
  }

  async onSubmitFeatured(event, id): Promise<void> {
  }

  isOdd(num): boolean {
    if (num % 2 === 1){
      return true;
    }
    return false;

  }
}
