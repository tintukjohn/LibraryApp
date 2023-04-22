import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {


  editbookform: any = new FormGroup({
    'name': new FormControl(''),
    'author': new FormControl('')
  })

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private api: ApiService) { }

  id: any;
  book: any = []

  ngOnInit(): void {


    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getData(this.id)
  }

  getData(id: any) {
    this.api.getSingleBook(id).subscribe(res => {
      this.book = res
    })
  }


  onSubmit() {
   // console.log('data to update to db: ', this.editbookform.value);

    this.api.updateBook(this.id, this.editbookform.value).subscribe(res => {
      if (res) {
        alert('Data saved successfully')
        this.router.navigate(['/books']);
      }
    })
  }

}
