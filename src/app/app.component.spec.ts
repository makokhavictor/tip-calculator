import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tipcalculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tipcalculator');
  });

  it('calculateTipPerPerson: should calculate the correct tip per person from bill',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.billAmount = 142.55;
    app.selectedPercentage = 15;
    app.numberOfPeople = 5;

    const tipPerPerson = app.calculateTipPerPerson();
    expect(tipPerPerson).toBe(4.28);
  });

  it('calculateTipPerPerson: should return zero(0)  if number of people is zero(0)',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.billAmount = 142.55;
    app.selectedPercentage = 15;
    app.numberOfPeople = 0;

    const tipPerPerson = app.calculateTipPerPerson();
    expect(tipPerPerson).toBe(0);
  });


  it('calculateTotalBillPerPerson: should get total bill amount for each person',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.billAmount = 142.55;
    app.selectedPercentage = 15;
    app.numberOfPeople = 5;

    const totalBillPerPerson = app.calculateTotalBillPerPerson();

    expect(totalBillPerPerson).toBe(32.79);
  });

  it('calculateTotalBillPerPerson: should return zero(0)  if number of people is zero(0)',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.billAmount = 142.55;
    app.selectedPercentage = 15;
    app.numberOfPeople = 0;

    const totalBillPerPerson = app.calculateTotalBillPerPerson();

    expect(totalBillPerPerson).toBe(0);
  });
  it('should set bill amount to zero on reset',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.billAmount = 142.55;
    app.reset();
    expect(app.billAmount).toBe(0);
  });

  it('should set number of people to zero on reset',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.numberOfPeople = 5;
    app.reset();
    expect(app.numberOfPeople).toBe(0);
  });

  it('should set selected percentage to 5 on reset',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.selectedPercentage = 5;
    app.reset();
    expect(app.selectedPercentage).toBe(5);
  });
  it('should set selected percentage based on custom input',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.customInput = 18;
    app.setCustomPercentage();
    expect(app.selectedPercentage).toBe(18);
  });
  it('should clear custom input on reset ',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    app.customInput = 18;
    app.reset()
    expect(app.customInput).toBeNull();
  });

});
