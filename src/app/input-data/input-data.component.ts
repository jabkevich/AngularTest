import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {redactorService} from "../shared/redactor.service"
import {JsonAndCSVService} from "../shared/jsonAndCSV.service"
@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent implements OnInit {
  textToJSON = ''
  fileToJSON = ''

  constructor(public redactorService: redactorService, public JsonAndCSVService: JsonAndCSVService, public router: Router) { }

  redactorText(){
    this.redactorService.renderText(this.textToJSON)
    this.router.navigate(['redactor']).then(r => console.log(r));
  }
  redactorFile(){
    this.redactorService.renderText(this.fileToJSON)
    this.router.navigate(['redactor']).then(r => console.log(r));
  }
  changeListener(files: FileList) {
    if (files && files.length > 0) {
      let file: File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        // this.textToJSON = reader.result as string;
        let text =reader.result as string;
        let arr = []
        text = text.replace(/;/g, ",")
        text = text.replace(/\r/g, '')
        let lines = text.split("\n")
        let colNames = lines[0].split(",");
        for (let i = 1; i < lines.length - 1; i++) {
          let record = {};
          let bits = lines[i].split(",");
          for (let j = 0; j < bits.length; j++) {
            record[colNames[j]] = bits[j];
          }
          arr.push(record);
        }
        this.fileToJSON = JSON.stringify(arr)
      }
    }
  }

  download(){
    let text = this.redactorService.jsonData
    this.downloadAsFile(text);
  }

  downloadAsFile(data) {
    let csv = this.JsonAndCSVService.createCSV(data)
    let a = document.createElement("a");
    let file = new Blob([csv], {type: 'application/csv'});
    a.href = URL.createObjectURL(file);
    a.download = "example.csv";
    a.click();
  }
  ngOnInit(): void {
  }


}
