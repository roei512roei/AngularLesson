import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCurrency',
  standalone: true
})
export class PriceCurrencyPipe implements PipeTransform {
  transform(price: number){
    console.log(price);
    return price + '₪';

  }
  }



