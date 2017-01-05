import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Array<any>;
  serverUrl: string;
  studentsApi: string;

  constructor(private http: Http) {
    //serverUrl = 'http://localhost:3000/api/students';
    //studentsApi = serverUrl + 'api/students';
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.http.request('https://kole-api.herokuapp.com/api/students').subscribe((res: Response) => {
      this.students = res.json();
      console.log(this.students);
    })
  }
}
