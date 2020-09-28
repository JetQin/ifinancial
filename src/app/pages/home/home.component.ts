import { Chart } from '@antv/g2';
import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
  data = [
      { icon: '', title: 'Purchase',  date: '07/22/2020', time:'09:30', tag:'bg-success', description: 'Get an accurate view of your net worth—what you have minus what you owe. Understanding this number can help you make smarter decisions about how to manage your money.'},
      { icon: '', title: 'Social',    date: '08/28/2020', time:'19:30', tag:'bg-info', description: 'The Savings Planner feature can show you an annual savings range that will project a 70% chance of reaching your retirement goals.'},
      { icon: '', title: 'Budgeting', date: '09/28/2020', time:'12:30', tag:'bg-warning', description: 'Organize your spending and savings automatically by date, category, or merchant. Set a monthly spending target and easily see if you are tracking over or under your plan.'},
      { icon: '', title: 'Cash Flow', date: '10/01/2020', time:'19:30', tag:'bg-green', description: 'See what has come in and gone out in the past 30 days so you can stick to your spending and savings goals.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initLifeCost();
    this.initIncomeChart();
    this.initExpenseChart();
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

  initIncomeChart(){
    const data = [
      { category: 'Found', income: 18203 },
      { category: 'Stock', income: 23489 },
      { category: 'Salary', income: 29034 },
      { category: 'Rent', income: 104970 },
      { category: 'Work', income: 31744 },
    ];
    
    const chart = new Chart({
      container: 'c2',
      autoFit: true,
      height: 150,
    });
    
    chart.data(data);
    chart.scale('income', { nice: true });
    chart.coordinate().transpose();
    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('active-region');
    chart.interval().position('category*income');
    chart.render();
  }

  initExpenseChart(){
    const data = [
      { item: 'Transportation', count: 40, percent: 0.4 },
      { item: 'Education', count: 21, percent: 0.21 },
      { item: 'Food', count: 17, percent: 0.17 },
      { item: 'Cloth', count: 13, percent: 0.13 },
      { item: 'Ensurance', count: 9, percent: 0.09 },
    ];
    const chart = new Chart({
      container: 'c3',
      autoFit: true,
      height: 200,
    });
    chart.data(data);
    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%';
        return val;
      },
    });
    chart.coordinate('theta', {
      radius: 0.75,
      innerRadius: 0.6,
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
    });
    // 辅助文本
    chart
      .annotation()
      .text({
        position: ['50%', '50%'],
        content: 'Total',
        style: {
          fontSize: 14,
          fill: '#8c8c8c',
          textAlign: 'center',
        },
        offsetY: -20,
      })
      .text({
        position: ['50%', '50%'],
        content: '7240',
        style: {
          fontSize: 20,
          fill: '#8c8c8c',
          textAlign: 'center',
        },
        offsetX: -10,
        offsetY: 20,
      })
      .text({
        position: ['50%', '50%'],
        content: '$',
        style: {
          fontSize: 14,
          fill: '#8c8c8c',
          textAlign: 'center',
        },
        offsetY: 20,
        offsetX: 20,
      });
    chart
      .interval()
      .adjust('stack')
      .position('percent')
      .color('item')
      .label('percent', (percent) => {
        return {
          content: (data) => {
            return `${data.item}: ${percent * 100}%`;
          },
        };
      })
      .tooltip('item*percent', (item, percent) => {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent,
        };
      });
    
    chart.interaction('element-active');
    
    chart.render();
  }

}
