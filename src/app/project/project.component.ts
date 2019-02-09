import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  myString = "{{PoBox}} this is a test {{MyTest}}";

  constructor(private httpService: HttpClient) { }
  arrBirds: string[];

  ngOnInit()
  {
    this.httpService.get('../../assets/movies.json').subscribe(
      data =>
      {
        this.arrBirds = data as string[];	 // FILL THE ARRAY WITH DATA.
         console.table(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) =>
      {
        console.log(err.message);
      }
    );

  }

}

