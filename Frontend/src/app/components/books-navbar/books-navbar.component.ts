import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-books-navbar',
  templateUrl: './books-navbar.component.html',
  styleUrls: ['./books-navbar.component.css']
})
export class BooksNavbarComponent {

  constructor(private router:Router, private api: ApiService){}

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/']);
  }
}
