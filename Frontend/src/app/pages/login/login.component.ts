import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private api:ApiService ) { }

  ngOnInit(): void { }

  display() {
    alert(`The entered values are Email: ${this.User.email} and password: ${this.User.password}`)
  }

  onSubmit(){
    console.log(this.User+' from login component')
    this.api.login(this.User).subscribe((res: any) =>{
      console.log(res, ' from login component onsubmit fn.');
      if(res.status === 200){

        if(res.token){

          localStorage.setItem('token', res.token)
          this.router.navigate(['/books'])
        }
      } else {

      alert('Not Accessible!')
      }
    })
  }

}


