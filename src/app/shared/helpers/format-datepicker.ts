import {NativeDateAdapter} from "@angular/material/core";
import { MatDateFormats } from '@angular/material/core';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: any): string {
    let day: string = date.getDate().toString();
    day = +day < 10 ? '0' + day : day;
    let month: string = (date.getMonth() + 1).toString();
    month = +month < 10 ? '0' + month : month;
    const year = date.getFullYear();
    if (displayFormat === 'input') {
      return `${day}/${month}/${year}`;
    }
    return `${day}/${month}/${year}`;
  }
}
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
    },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};
