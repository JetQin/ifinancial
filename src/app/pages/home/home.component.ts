import { Chart } from '@antv/g2';
import { Component, OnInit, AfterViewInit } from '@angular/core';

const cost = [
  { month: 'Jan', cost: 38 },
  { month: 'Feb', cost: 52 },
  { month: 'Mar', cost: 61 },
  { month: 'Apr', cost: 145 },
  { month: 'May', cost: 48 },
  { month: 'Jun', cost: 38 },
  { month: 'Jul', cost: 38 },
  { month: 'Aug', cost: 38 },
  { month: 'Sep', cost: 28 },    
  { month: 'Oct', cost: 38 },
  { month: 'Nov', cost: 38 },
  { month: 'Dec', cost: 62 },
];

const interest = [
  { month: 'Jan', interest: 300 },
  { month: 'Feb', interest: 252 },
  { month: 'Mar', interest: 161 },
  { month: 'Apr', interest: 145 },
  { month: 'May', interest: 408 },
  { month: 'Jun', interest: 308 },
  { month: 'Jul', interest: 138 },
  { month: 'Aug', interest: 238 },
  { month: 'Sep', interest: 280 },    
  { month: 'Oct', interest: 138 },
  { month: 'Nov', interest: 338 },
  { month: 'Dec', interest: 162 },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  title = '';
  state = {
    data: [
      { icon: 'assets/imgs/ft-net-worth.svg', title: 'Net Worth', description: 'Get an accurate view of your net worth—what you have minus what you owe. Understanding this number can help you make smarter decisions about how to manage your money.'},
      { icon: 'assets/imgs/ft-savings-planner.svg', title: 'Savings Planner', description: 'The Savings Planner feature can show you an annual savings range that will project a 70% chance of reaching your retirement goals.'},
      { icon: 'assets/imgs/ft-budgeting.svg', title: 'Budgeting', description: 'Organize your spending and savings automatically by date, category, or merchant. Set a monthly spending target and easily see if you are tracking over or under your plan.'},
      { icon: 'assets/imgs/ft-cash-flow.svg', title: 'Cash Flow', description: 'See what has come in and gone out in the past 30 days so you can stick to your spending and savings goals.'},
      { icon: 'assets/imgs/ft-retirement-planner.svg', title: 'Retirement Planner', description: 'See if your retirement savings are on track to retire by your target date and calculate your projected monthly income.'},
      { icon: 'assets/imgs/ft-education-planner.svg', title: 'Education Planner',description: 'We’ll help you estimate and plan how much you should be saving today to cover education costs down the road. '},
    ],
    imgHeight: '184px'
  };

  thumbStyle = {
    width: '32px',
    height: '32px',
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initLifeCost();
    this.initInvestInterest();
  }

  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    console.log('slide to ' + event);
  }

  initLifeCost(){
    const chart = new Chart({
      container: 'c1',
      width: 450,
      height: 300,
    }); 

    // Step 2: 载入数据源
    chart.data(cost);

    // Step 3：创建图形语法，绘制柱状图
    chart.interval().position('month*cost');

    // Step 4: 渲染图表
    chart.render();
  }

  initInvestInterest(){
    const chart = new Chart({
      container: 'c2',
      width: 450,
      height: 300,
    }); 

    // Step 2: 载入数据源
    chart.data(interest);

    // Step 3：创建图形语法，绘制柱状图
    chart.interval().position('month*interest');

    // Step 4: 渲染图表
    chart.render();
  }

}
