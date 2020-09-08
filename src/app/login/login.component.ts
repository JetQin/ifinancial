import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  thumbStyle = {
    width: '32px',
    height: '32px'
  };
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('log event');
    this.router.navigate(['land']);
  }

}
