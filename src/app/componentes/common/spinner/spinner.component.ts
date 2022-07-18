import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() show: boolean;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
    if(this.title == null || this.title === ""){
      this.title = "registros"
    }
  }

}
