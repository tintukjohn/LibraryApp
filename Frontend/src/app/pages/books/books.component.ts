import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private apiService: ApiService, private route: Router) { }

  books: any = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apiService.getBooksList().subscribe(res => {
      //console.log('incoming data', res)
      this.books = res
    })
  }

   deleteBook(id: any, i: any) {
  //  deleteBook(id: any) {
    console.log('In books component deletebook fn ', id)
    if (window.confirm('Are you sure want to delete ?'))
      this.apiService.deleteBook(id).subscribe(res => {
        this.books.splice(i, 1);
      })
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login']);
  }
}
