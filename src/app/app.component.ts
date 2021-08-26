import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tipcalculator';


  calculateTipPerPerson(params:any):Number{
    const totalTip = params.percentage * params.billAmount;
    const tipPerPerson = totalTip / params.numberOfPeople;
    return parseFloat(tipPerPerson.toFixed(2));
  }

  calculateTotalBillPerPerson(params:any):Number{
    const billWithoutTip = params.billAmount / params.numberOfPeople;
    const totalBillPerPerson = billWithoutTip + params.tipPerPerson;
    return totalBillPerPerson;
  }
}
