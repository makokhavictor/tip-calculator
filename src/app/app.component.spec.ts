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

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('tipcalculator app is running!');
  });

  it('calculateTipPerPerson: should calculate the correct tip per person from bill',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    const billAmount = 142.55;
    const percentage = 0.15;
    const numberOfPeople = 5;

    const tipPerPerson = app.calculateTipPerPerson({billAmount,percentage,numberOfPeople});
    expect(tipPerPerson).toBe(4.28);
  });


  it('calculateTotalBillPerPerson: should get total bill amount for each person',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app  = fixture.componentInstance;
    const tipPerPerson = 4.28;
    const billAmount = 142.55;
    const numberOfPeople = 5;

    const totalBillPerPerson = app.calculateTotalBillPerPerson({tipPerPerson,billAmount,numberOfPeople});

    expect(totalBillPerPerson).toBe(32.79);
  });
});
