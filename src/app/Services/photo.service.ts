import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async post(file): Promise<any> {
    let toReturn = null;
    await fetch('http://3.134.168.146:9000/photos', {
      method: 'POST',
      body: file
    })
      // .then(response => response.json())
      .then(data => {
        toReturn = data;
      })
      .catch(error => {
        console.error(error)
      })
    return toReturn;
  }
}
