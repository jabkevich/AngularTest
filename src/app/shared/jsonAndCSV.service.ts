import {Injectable} from "@angular/core";
import {redactorService} from "./redactor.service";

@Injectable({providedIn: 'root'})
export class JsonAndCSVService {
  constructor(public redactorService: redactorService) {}



  detectColumns(array) {
    var guardian = { };
    var columns = [ ];

    for(var i = 0; i < array.length; ++i) {
      var entry = array[i];

      for(var key in entry) {
        if(key in guardian) {
          continue;
        }

        if(entry.hasOwnProperty(key)) {
          guardian[key] = true;
          columns.push(key);
        }
      }
    }

    return columns;
  }

  escapeValue(value) {
    var result = '';
    var escape = false;

    for(var i = 0; i < value.length; ++i) {
      var entry = value[i];

      result += entry;

      switch(entry) {
        case '"': result += '"';
        case ';': escape = true;
      }
    }

    if(escape)
      return '"' + result + '"';

    return result;
  }
  createCSV(array) {
    var csv = '';

    var columns = this.detectColumns(array);

    for(var j = 0; j < columns.length; ++j) {
      if(j > 0)
        csv += ';';

      var column = columns[j];

      if(column == null)
        continue;

      csv += this.escapeValue(column.toString());
    }

    csv += '\n';

    for(var i = 0; i < array.length; ++i) {
      var entry = array[i];

      for(var j = 0; j < columns.length; ++j) {
        if(j > 0)
          csv += ';';

        var column = columns[j];
        var value = entry[column];

        if(value == null)
          continue;

        csv += this.escapeValue(value.toString());
      }

      csv += '\n';
    }

    return csv;
  }


}
