import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User();

  receberDados() {
    console.log(this.userModel)
    alert(this.userModel.email)
    alert(this.userModel.password)

}

}
