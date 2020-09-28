import { Router } from '@angular/router'
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
// @ts-ignore
import DataSet from '@antv/data-set'
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit  {

  title = "Detail Info";
  data: any;
  constructor(private service: BackendService ,
            private router: Router) { }

  funds = [
    { icon: "mdi-file-document", title: "Bitcoin USD (BTC-USD)", subject: "10,896.663+117.8545 (+1.0934%)", description1: "Bitcoin is a purely decentralized digital currency, confirming transactions on its own blockchain, which makes it unlike any other asset that came before it.", description2:"" },
    { icon: "mdi-file-document", title: "Crude Oil", subject: "39.88-0.37 (-0.92%)", description1: "Oil slips as surge in virus cases cloud demand recovery", description2:"" },
    { icon: "mdi-file-document", title: "Gold Dec 20 (GC=F)", subject: "1,862.50-3.80 (-0.20%)", description1: "Gold inches higher on tepid dollar; Trump-Biden debate in focus", description2:"" },
    { icon: "mdi-file-document", title: "Silver Dec 20 (SI=F)", subject: "22.76-0.33 (-1.42%)", description1: "Gold Stocks Are Bracing For A Seasonal Plunge", description2:"The gold miners’ stocks have just been hammered, plunging to new correction lows. That shattered their indexes’ 50-day moving averages, pounding nails in the coffin of this sector’s recent high consolidation." },
    { icon: "mdi-file-document", title: "Nasdaq 100 Dec 20 (NQ=F)", subject: "11,212.25+75.75 (+0.68%)", description1: "Stock market news live updates: Wall St. closes higher as tech rebounds, Nasdaq rises by the most in two weeks", description2:"Stocks rose Friday, closing sharply higher even amid a surge in coronavirus cases overseas and concerns over prospects of fiscal stimulus in the US." }

  ]

  ngOnInit(): void {
   
  }
  
  ngAfterViewInit(): void {
    this.initChart();
  }


  onLeftClick() {
    this.router.navigate(['land'], { queryParams: { index: 1}});
  }

  initChart() {
    this.service.fetchStock().subscribe((res: any) => {
      this.data = res.slice(res.length-30,res.length);
      const ds = new DataSet();
      const dv = ds.createView();
      console.log(this.data);
      dv.source(this.data)
        .transform({
          type: 'map',
          callback: obj => {
            obj.trend = (obj.start <= obj.end) ? 'Up' : 'Down';
            obj.range = [obj.start, obj.end, obj.max, obj.min];
            return obj;
          }
        });
      const chart = new Chart({
        container: 'c1',
        autoFit: true,
        height: 400,
        width: 500,
        padding: [10, 40, 40, 40]
      });
      chart.scale({
        time: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 4,
        },
        trend: {
          values: ['Up', 'Down']
        },
        volumn: { alias: 'Volume' },
        start: { alias: 'Open' },
        end: { alias: 'Close' },
        max: { alias: 'High' },
        min: { alias: 'Low' },
        range: { alias: 'Price' }
      });
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl: '<li class="g2-tooltip-list-item" data-index={index}>'
          + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
          + '{name}{value}</li>'
      });

      const kView = chart.createView({
        region: {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0.7 },
        }
      });
      kView.data(dv.rows);
      kView.schema()
        .position('time*range')
        .color('trend', val => {
          if (val === 'Up') {
            return '#f04864';
          }

          if (val === 'Down') {
            return '#2fc25b';
          }
        })
        .shape('candle')
        .tooltip('time*start*end*max*min', (time, start, end, max, min) => {
          return {
            name: time,
            value: '<br><span style="padding-left: 16px">Open：' + start + '</span><br/>'
              + '<span style="padding-left: 16px">Close：' + end + '</span><br/>'
              + '<span style="padding-left: 16px">High：' + max + '</span><br/>'
              + '<span style="padding-left: 16px">Low：' + min + '</span>'
          };
        });

      const barView = chart.createView({
        region: {
          start: { x: 0, y: 0.7 },
          end: { x: 1, y: 1 },
        }
      });
      barView.data(dv.rows);
      barView.scale('volumn', {
        tickCount: 2,
      })
      barView.axis('time', {
        tickLine: null,
        label: null
      });
      barView.axis('volumn', {
        label: {
          formatter: val => {
            return +val / 1000 + 'k';
          }
        }
      });
      barView.interval()
        .position('time*volumn')
        .color('trend', val => {
          if (val === 'Up') {
            return '#f04864';
          }

          if (val === 'Down') {
            return '#2fc25b';
          }
        })
        .tooltip('time*volumn', (time, volumn) => {
          return {
            name: time,
            value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
          };
        });

      chart.render();
    });
  }

}
