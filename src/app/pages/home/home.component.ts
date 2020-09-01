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
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
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

  onClick1() {
    this.state.data.push('AiyWuByWklrrUDlFignR');
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
