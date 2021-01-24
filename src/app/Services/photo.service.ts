import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async post(file): Promise<any> {
    let toReturn = null;
    const postBody = JSON.stringify({
      "file": file
    })
    const options = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: 'post',
      body: postBody
    }
    await fetch('http://3.134.168.146:9000/photos', options)
      // .then(res => res.json())
      .then(res => {
        toReturn = res;
      })
      .catch(err => console.log(err));
    return toReturn;
  }
}
