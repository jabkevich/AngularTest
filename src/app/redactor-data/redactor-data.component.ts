import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {redactorService} from "../shared/redactor.service";
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-redactor-data',
  templateUrl: './redactor-data.component.html',
  styleUrls: ['./redactor-data.component.scss']
})
export class RedactorDataComponent implements OnInit {

  constructor(public redactorService:redactorService,  public router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.router.navigate(['/']).then(r => console.log(r));
  }

  del(i){
    this.redactorService.del(i);
  }
  drop(event: CdkDragDrop<unknown>) {
    this.redactorService.swap(event.previousIndex, event.currentIndex)
  }

  onChangeText($event, i, key):void{
    this.redactorService.changeText($event.target.value, i, key)
  }
}
