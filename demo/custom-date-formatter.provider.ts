import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import  moment from 'jalali-moment';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {

  public monthViewTitle({ date:date,weekStartsOn }: DateFormatterParams): string {  
    return moment(date).locale('fa').format('MMM YYYY');
  }

  public weekViewColumnSubHeader({ date:date,weekStartsOn }: DateFormatterParams): string{  
    return moment(date).locale('fa').format('D MMM');
  }

  public weekViewTitle({ date:date,weekStartsOn }: DateFormatterParams): string {  
    return moment(date).locale('fa').format('DD MMM')+" - "
    + moment(date).add(7,'days').locale('fa').format('DD MMM');
  }


  public dayViewTitle({ date:date,weekStartsOn }: DateFormatterParams): string {  
    return moment(date).locale('fa').format('DD MMM YYYY')
  }

  
}


