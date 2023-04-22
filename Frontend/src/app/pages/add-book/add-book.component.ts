import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookform: any = new FormGroup ({
    'name': new FormControl(''),
    'author': new FormControl('')
   // 'image': new FormGroup('')
  })

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.api.addBook(this.bookform.value).subscribe(res => {
      if(res) {
        alert('Data saved successfully')
        this.router.navigate(["/books"]);
      }
    })
  }

}
