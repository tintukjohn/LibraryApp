import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksNavbarComponent } from './books-navbar.component';

describe('BooksNavbarComponent', () => {
  let component: BooksNavbarComponent;
  let fixture: ComponentFixture<BooksNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
