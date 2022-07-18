import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.css']
})
export class ModalSampleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalSampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  isObjectEmpty(object){
    return !!Object.keys(object).length ?  object : "Sin registro";
  }

}
