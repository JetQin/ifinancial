import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {

  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object =  { 
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0
    };
  selectedIndex: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.index !== null) {
        this.selectedIndex  = params.index;
      }
    });
  }

  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showNextTabBar(event) {
    event.preventDefault();
    const PANE_COUNT = 4;
    if (this.selectedIndex == PANE_COUNT - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    console.log('selectedIndex: ', this.selectedIndex);
  }

  showFullScreen(event) {
    event.preventDefault();
    // this.fullScreen = !this.fullScreen;
    // this.tabbarStyle = this.fullScreen
    //   ? {
    //       position: 'fixed',
    //       height: '100%',
    //       width: '100%',
    //       top: 0
    //     }
    //   : { height: '400px' };
  }

  changePosition(event) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }

}
