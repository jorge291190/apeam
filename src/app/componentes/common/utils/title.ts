import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Injectable({
    providedIn: 'root'
  })
export class TitleChange {
    constructor(private title:Title){

    }

    changeTitle(title){
        this.title.setTitle("Apeam - "+title);
    }
}
