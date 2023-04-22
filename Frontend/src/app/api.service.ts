import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getBooksList() {
    return this.http.get(`${this.apiUrl}/booklist`)
  }

  getSingleBook(id: any) {
    return this.http.get(`${this.apiUrl}/singlebook/${id}`)
  }

  addBook(data: any) {
    return this.http.post(`${this.apiUrl}/addbook`, data)
  }

  updateBook(id: any, data: any) {
    return this.http.put(`${this.apiUrl}/updatebook/${id}`, data)
  }

  deleteBook(id: any) {
    return this.http.delete(`${this.apiUrl}/deletebook/${id}`)
  }

  login(data: any) {

    console.log(data.email, data.password + ' from auth service')
    return this.http.post(`${this.apiUrl}/auth`, data)
  }

  addUser(data: any) {
    return this.http.post(`${this.apiUrl}/adduser`, data)
  }


  getToken(): boolean {
    return !!localStorage.getItem('token')
  }

}
