import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async get(): Promise<any> {
    let toReturn = [];
    await fetch('http://3.134.168.146:9000/photos')
      .then(res => res.json())
      .then(jsonRes => {
        toReturn = jsonRes;
      })
      .catch(err => console.log(err));
    return toReturn;
  }

  async post(file): Promise<any> {
    let toReturn = null;
    await fetch('http://3.134.168.146:9000/photos', {
      method: 'PUT',
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

  async delete(id): Promise<any> {
    let toReturn = null;
    console.log(id);
    const postBody = JSON.stringify({
      "id": id
    })
    const options = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: 'delete',
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
