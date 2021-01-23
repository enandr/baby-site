import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BabyNameService {

  constructor() { }

  async get(): Promise<any>{
    let toReturn = [];
    await fetch('http://3.134.168.146:9000/babynames')
      .then(res => res.json())
      .then(jsonRes => {
        toReturn = jsonRes;
      })
      .catch(err => console.log(err));
    return toReturn;
  }

  async post(suggestors_name, baby_name, gender): Promise<any>{
    let toReturn = null;
    const postBody = JSON.stringify({
      "suggestors_name": suggestors_name,
      "baby_name_suggestion": baby_name,
      "baby_gender": gender
    })
    const options = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: 'post',
      body: postBody
    }
    await fetch('http://3.134.168.146:9000/babynames', options)
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
      method: 'post',
      body: postBody
    }
    await fetch('http://3.134.168.146:9000/babynames', options)
      // .then(res => res.json())
      .then(res => {
        toReturn = res;
      })
      .catch(err => console.log(err));
    return toReturn;
  }
}
