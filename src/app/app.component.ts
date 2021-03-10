import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uploadedFileList: Array < File > ;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {

  }
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFileList.length; i++) {
        formData.append("uploads[]", this.uploadedFileList[i], this.uploadedFileList[i].name);
    }
    this.http.post('/api/upload', formData)
        .subscribe((response) => {
            console.log('response received is ', response);
        })
  }
  fileChange(element) {
    this.uploadedFileList = element.target.files;
   }
}

