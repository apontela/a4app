import { Component, OnInit } from '@angular/core';
// import { Address } from 'cluster';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:any[];

  constructor() { }

  ngOnInit() {
    this.name = "Juan Dodo";
    this.age = 21;
    this.address = {
      street: "Juan Segundo Romo",
      city: "Santiago de Chile",
      state: "Región Metropolitana"
    }
    this.hobbies = ["Correr","Comer","Nadar"];
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(hobby) {
    this.hobbies.splice(this.hobbies.indexOf(hobby),1)
  }

}

interface Address {
  street:string,
  city:string,
  state:string,
}