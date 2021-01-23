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

  async update(name, gender, progress, announcements, events, registry, registry_url): Promise<any> {
    let toReturn = null;
    const postBody = JSON.stringify({
        "id": 1,
        "name_suggestion": name + '',
        "gender_reveal": gender + '',
        "progress": progress + '',
        "announcments": announcements + '',
        "events": events + '',
        "registry": registry,
        "registry_url": registry_url
    })
    const options = {
      headers: { "Content-type": "application/json; charset=UTF-8" },
      method: 'put',
      body: postBody
    }
    await fetch('http://3.134.168.146:9000/active', options)
      // .then(res => res.json())
      .then(res => {
        toReturn = res;
      })
      .catch(err => console.log(err));
    return toReturn;
  }
}
