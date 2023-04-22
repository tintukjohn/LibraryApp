import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { BooksNavbarComponent } from './components/books-navbar/books-navbar.component';
import { AuthGuard } from './auth.guard';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignUpComponent },
{ path: 'books', canActivate:[AuthGuard],component: BooksComponent },
{ path: 'addbook', component: AddBookComponent },
{ path: 'editbook/:id', component: EditBookComponent },
{ path: 'navbar', component: BooksNavbarComponent },
{ path: 'homenavbar', component: HomeNavbarComponent },
{ path: 'footer', component: FooterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
