import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  User = {
    email: '',
    password: ''
  }

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void { }

  display() {
    alert(`The entered values are Email: ${this.User.email} and password: ${this.User.password}`)
  }

  onSubmit() {
    this.api.addUser(this.User).subscribe(res => {
      console.log(res);
      if(res) {
        alert('Data saved successfully')
        this.router.navigate(['/login']);
      } else {
        alert('Signup failed')
        this.router.navigate(['/signup']);
      }
    })
  }

}
