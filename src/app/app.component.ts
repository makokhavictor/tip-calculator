import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tipcalculator';
  billAmount:number;
  numberOfPeople:number;
  selectedPercentage:number;
  percentages:any[];

  constructor(){
    this.billAmount = 0;
    this.numberOfPeople = 0;
    this.selectedPercentage = 5;
    this.percentages = [5,10,15,25,50];
  }

  setPercentage(percentage:any){
    this.selectedPercentage = percentage;
  }
  calculateTipPerPerson():number{
    if(this.numberOfPeople == 0) return 0;
    const totalTip = (this.selectedPercentage) / 100 * this.billAmount;
    const tipPerPerson = totalTip / this.numberOfPeople;
    return parseFloat(tipPerPerson.toFixed(2));
  }

  calculateTotalBillPerPerson():number{
   
    if(this.numberOfPeople == 0) return 0;
     const billWithoutTip = this.billAmount / this.numberOfPeople;
    const tipPerPerson = this.calculateTipPerPerson();
    const totalBillPerPerson = billWithoutTip + tipPerPerson;
    return parseFloat(totalBillPerPerson.toFixed(2));
  }
}
