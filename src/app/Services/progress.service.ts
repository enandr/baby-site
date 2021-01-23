import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  async get(): Promise<any> {
    let toReturn = [];
    await fetch('http://3.134.168.146:9000/progress')
      .then(res => res.json())
      .then(jsonRes => {
        toReturn = jsonRes;
      })
      .catch(err => console.log(err));
    return toReturn;
  }

  async post(progress_title, progress_details, date): Promise<any> {
    let toReturn = null;
    const postBody = JSON.stringify({
      "progress_title": progress_title,
      "progress_details": progress_details,
      "progress_date": date
    })
    const options = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: 'post',
      body: postBody
    }
    await fetch('http://3.134.168.146:9000/progress', options)
      // .then(res => res.json())
      .then(res => {
        toReturn = res;
      })
      .catch(err => console.log(err));
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
    await fetch('http://3.134.168.146:9000/progress', options)
      // .then(res => res.json())
      .then(res => {
        toReturn = res;
      })
      .catch(err => console.log(err));
    return toReturn;
  }
}
