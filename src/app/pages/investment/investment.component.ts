import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  data = [
    { code: 'AAPL', name: 'Apple Inc.', price: 501.94, icon: 'assets/investment/apple.svg' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('click');
  }
}
