import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  title = 'Personal'
  avatar = {
    width: '48px',
    height: '48px',
    border: '1px solid',
    borderRadius: '24px'
  };
  disabled: boolean = false;
  data = [
    {name: 'Transport', icon: 'assets/imgs/bus.svg'},
    {name: 'Bills', icon: 'assets/imgs/cost.svg'},
    {name: 'Calendar', icon: 'assets/imgs/calendar.svg'},
    {name: 'Shopping', icon: 'assets/imgs/shopping.svg'},
    {name: 'Member', icon: 'assets/imgs/member.svg'},
    {name: 'Activities', icon: 'assets/imgs/task.svg'}
  ]
  renderFooter: Function;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  renderHeader() {
    return 'Profile';
  }

  renderHeader4() {
    return '';
  }

  onClick() {
    console.log('click');
  }

  switchCheck(value) {
    console.log('switch status:', value);
  }

  onDisableClick() {
    console.log('click', this.disabled);
    this.disabled = true;
  }

  signout() {
    this.router.navigate(['login']);
  }

}
