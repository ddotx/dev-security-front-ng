import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'security-node';
  // readonly API_URL = 'http://localhost:3000'
  API_URL = 'https://dev-node-security.vercel.app'
  // API_URL = 'https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
  @ViewChild('input') inputData: ElementRef

  constructor(private http: HttpClient){}

  submitForm() {
    const data = this.inputData.nativeElement.value;
    console.log(data)
    const dataObj = {
      value: data
    }
    // this.http.post(`${this.API_URL}/form`, data).subscribe()
    this.http.post(`${this.API_URL}/form`, dataObj).subscribe()
  }
}
