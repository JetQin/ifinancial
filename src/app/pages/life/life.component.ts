import { Chart, Util } from '@antv/g2';
import { Component, OnInit, AfterViewInit } from '@angular/core';


const cost = [
  { type: 'Shopping', value: 0.19 },
  { type: 'Food', value: 0.21 },
  { type: 'Drink', value: 0.27 },
  { type: 'Fee', value: 0.33 },
  { type: 'Transport', value: 0.13 },
];

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, AfterViewInit {

  title = ''
  category = [
    { text: 'Shopping', icon: 'assets/icons/shopping.svg'},
    { text: 'Fee', icon: 'assets/icons/fee.svg'},
    { text: 'Loan', icon: 'assets/icons/loan.svg'},
    { text: 'Transport', icon: 'assets/icons/transport.svg'},
    { text: 'Food', icon: 'assets/icons/food.svg'},
    { text: 'Drink', icon: 'assets/icons/drink.svg'},
    { text: 'Coupons', icon: 'assets/icons/coupons.svg'},
    { text: 'Favourite', icon: 'assets/icons/favourite.svg'}
  ]

  data = Array.from(new Array(8)).map((_val, i) => ({
    icon: '/assets/icons/logo.svg',
    text: `name${i}`
  }));

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initCostChart();
  }

  click(event) {
    console.log(event);
  }

  initCostChart() {
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });
    chart.data(cost);
    
    chart.coordinate('theta', {
      radius: 0.75
    });
    chart.tooltip({
      showMarkers: false
    });
    
    const interval = chart
      .interval()
      .adjust('stack')
      .position('value')
      .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060', '#f8c060'])
      .style({ opacity: 0.4 })
      .state({
        active: {
          style: (element) => {
            const shape = element.shape;
            return {
              matrix: Util.zoom(shape, 1.1),
            }
          }
        }
      })
      .label('type', (val) => {
        const opacity = val === '四线及以下' ? 1 : 0.5;
        return {
          offset: -30,
          style: {
            opacity,
            fill: 'white',
            fontSize: 12,
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          },
          content: (obj) => {
            return obj.type + '\n' + obj.value + '%';
          },
        };
      });
    
    chart.interaction('element-single-selected');
    
    chart.render();
  }

}
