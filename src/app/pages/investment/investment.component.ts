import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  loading:boolean = true;
  data: any;
  constructor(private service: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.fetchCompany();
  }

  fetchCompany(): void {
    this.service.fetchCompany().subscribe((resp: any) => {
      this.data = resp;
      this.loading = false;
    })
  }

  onClick() {
    // console.log('click');
    this.router.navigate(['detail']);
  }
}
