import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  // data = [
  //   { code: 'AAPL', name: 'Apple Inc.', price: 501.94, icon: 'assets/investment/apple.svg' },
  // ]
  data: any;
  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.fetchCompany();
  }

  fetchCompany(): void {
    this.service.fetchCompany().subscribe((data: any) => {
      console.log(data[0]);
      this.data = data;
    })
  }

  onClick() {
    console.log('click');
  }
}
