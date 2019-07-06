import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  users = ['Cristian', 'Raquel', 'Nestor', 'Felipe', 'Perrito'];
  activated = true;
  name: string = 'Cristian';
  age: number;
  address: {
    street: string,
    city: string
  };
  hobbies: string[];

  constructor(){
    this.age = 22;
    this.address = {
      street: 'cll 29 sur # 50b - 06',
      city: 'bogota'
    };
    this.hobbies = ['nadar', 'programar', 'comer'];
  }

  saludo() {
    alert("surprise motherfickers")
  }

  deleteuser(user){
    for(let i = 0; i < this.users.length; i++ ){
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }

  }
}
