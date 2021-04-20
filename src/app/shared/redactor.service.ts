import {Injectable} from "@angular/core";
// import {moveItemInArray} from "@angular/cdk/drag-drop";

import {moveItemInArray} from "@angular/cdk/drag-drop";

@Injectable({providedIn: 'root'})
export class redactorService {
  jsonData = []
  outputData = ""
  keys = []
  checks = []


  changeText(value, i, key) {
    this.jsonData[i][key] = value
    this.outputData = JSON.stringify(this.jsonData)
  }

  del(i){
    this.jsonData.splice(i, 1)
    this.outputData = JSON.stringify(this.jsonData)
  }

  getOutputData(){
    return this.outputData
  }

  renderText(text) {
    this.jsonData = eval(text)
    for (let i = 0; i < this.jsonData.length; i++) {
      this.checks[i] = false
    }
    this.keys = Object.keys(this.jsonData[0])
    this.outputData = JSON.stringify(this.jsonData)
  }

  swap(previousIndex, currentIndex){
    moveItemInArray(this.jsonData, previousIndex, currentIndex);
    this.outputData = JSON.stringify(this.jsonData)
  }




}
