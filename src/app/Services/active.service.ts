import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor() { }
  async get(): Promise<any> {
    let toReturn = [];
    await fetch('http://3.134.168.146:9000/active')
      .then(res => res.json())
      .then(jsonRes => {
        toReturn = jsonRes;
      })
      .catch(err => console.log(err));
    return toReturn;
  }
}
