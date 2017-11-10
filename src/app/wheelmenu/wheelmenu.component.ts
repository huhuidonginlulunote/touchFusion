import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as Vivus from 'vivus';
import * as TweenMax from '../../libs/TweenMax.min.js';
import { fadeIn } from '../animation/fade-in';

@Component({
  selector: 'app-wheelmenu',
  templateUrl: './wheelmenu.component.html',
  styleUrls: ['./wheelmenu.component.css'],
  animations:[ fadeIn ]
})

export class WheelmenuComponent implements OnInit {

  public showWheelObj: boolean= false;
  public semiShow: boolean= false;
  public centerShow: boolean= false;
  public fillCenter: boolean= false;
  public level1Items: object;
  public level2Items: object;
  public fadeInLevel2: string = 'inactiveLevel2';
  public fatherItem: string;
  // public fatherLevel: string;
  public menuItems:Array<any> = [
    {label:'c1',
    icon:'Pen',
    action:'pen',
    subMenuItems:[{label:'c1-level2',icon:'Pen/Marker', action:'pen_marker'
    },{label:'c2-level2',icon:'Pen/Highlighter', action:'pen_highlighter'
    },{label:'c3-level2', icon:'Pen/Magic Pen', action:'pen_magicPen'
    }]
  },
  { label:'c2',
    icon:'Erase',
    action:'eraser',
    subMenuItems:[{label:'c1-level2', icon:'Erase/Line', action:'eraser_line'
    },{label:'c2-level2', icon:'Erase/Spot', action:'eraser_spot'
    },{label:'c3-level2', icon:'Erase/Erase All', action:'eraser_all'
    }]
  },
  { label:'c3',
    icon:'Media',
    action:'media',
    subMenuItems:[{label:'c1-level2', icon:'Media/images', action:'media_images'
    },{label:'c2-level2',icon:'Media/File', action:'media_file'
    },{label:'c3-level2',icon:'Media/Video', action:'media_video'
    },{label:'c4-level2',icon:'Media/Microsoft Office Objects', action:'media_microsoftOffice'
    }]
  },
  { label:'c4',
    icon:'Select',
    action:'select',
    subMenuItems:[{label:'c1-level2', icon:'Select/Lasso', action:'select_lasso'
    },{label:'c2-level2', icon:'Select/Marquee', action:'select_marquee'
    },{label:'c3-level2', icon:'Select/Tap', action:'select_tap'
    }]
  },
  { label:'c5',
    icon:'Shapes',
    action:'shapes',
    subMenuItems:[{label:'c1-level2', icon:'Shapes/Ruler', action:'shapes_ruler'
    },{label:'c1-level2', icon:'Shapes/Protractor', action:'shapes_protractor'
    },{label:'c2-level2', icon:'Shapes/Circle, Triangle, Star', action:'shapes_circleTriangleStar'
    },{label:'c3-level2', icon:'Shapes/Circle', action:'shapes_circle'
    },{label:'c4-level2', icon:'Shapes/Triangle', action:'shapes_triangle'
    },{label:'c5-level2', icon:'Shapes/Rectangle', action:'shapes_rectangle'
    }]
  }]

  constructor() { }

  ngOnInit() {}

  startWheel(){
    var level1Set= document.querySelectorAll('.level1');
  
    for(let i=0; i< this.menuItems.length; i++){
      this.level1Items = this.menuItems;
      this.level1Items[i].action= 'active';
    }
  
    var unfurl =  new Vivus('wheel-obj', {
      duration: 150, 
      start: "autostart",
      onReady: function(){
      }
    });
  
    unfurl.play(2); //use the play in reverse somewhere
    console.log('clicked');
    
    setTimeout(()=>{
      this.showWheelObj = true;
    }, 900);
    
    TweenMax.to(".icon-wheel", 1, {rotation:360, transformOrigin: "550px 455px"});
  }

  showLevel2(item){
    for(let i=0; i< this.menuItems.length; i++){
      if(item.label === this.menuItems[i].label){
        this.level2Items = this.menuItems[i].subMenuItems;
      }
    }
    this.semiShow = true;
    this.centerShow = true;
    
    var semiVivus =  new Vivus("semi-object", {
      duration: 50, 
      animTimingFunction: Vivus.EASE,
      start: "autostart",
      onReady: function(){
        TweenMax.to(".level1", 1.75, 
        {
          // ease: Power4.easeOut,
          height: "0px", 
          width: "0px", 
          top: "25px", 
          left: "25px"}
        );
      }
  });

  this.fatherItem = item.icon;
  console.log(this.fatherItem);
  setTimeout(() =>semiVivus.play(3), 2000);
  this.fadeInLevel2 = 'activeLevel2';
  };

 /* level3 start */
  public floatiesShow:boolean = false;
  public fadeInLevel3: string = 'inactiveLevel3';
  public rotateclass: object = {
    rotate_1_3: false,
    rotate_2_3: false,
    rotate_3_3: false
  }
  showLevel3(item2){
    console.log(item2);
    var item2Label = item2.label;
    this.fatherItem = item2.icon;

    switch(item2Label){
      case 'c2-level2': 
          this.rotateclass = {
            rotate_1_3: false,
            rotate_2_3: false,
            rotate_3_3: true
          };
          this.fadeInLevel3 = "activeLevel3";
          this.floatiesShow = true;
          
          var floatiesVivus =  new Vivus('floaties', {
            duration: 40, 
            // animTimingFunction: Vivus.EASE_IN_OUT,
            start: "autostart",
            onReady: function(){
            }
          });
          floatiesVivus.play(.5);//use the play in reverse somewhere
      break;
      case 'c1-level2': 
          this.rotateclass = {
            rotate_1_3: false,
            rotate_2_3: true,
            rotate_3_3: false
          };
          this.fadeInLevel3 = "activeLevel3";
          this.floatiesShow = true;
          
          var floatiesVivus =  new Vivus('floaties', {
            duration: 40, 
            // animTimingFunction: Vivus.EASE_IN_OUT,
            start: "autostart",
            onReady: function(){
            }
          });
          floatiesVivus.play(.5);//use the play in reverse somewhere
      break;
      case 'c3-level2': 
          this.rotateclass = {
            rotate_1_3: true,
            rotate_2_3: false,
            rotate_3_3: false
          };
          this.fadeInLevel3 = "activeLevel3";
          this.floatiesShow = true;
            
          var floatiesVivus =  new Vivus('floaties', {
              duration: 40, 
              // animTimingFunction: Vivus.EASE_IN_OUT,
              start: "autostart",
              onReady: function(){
              }
            });
          floatiesVivus.play(.5);//use the play in reverse somewhere
      break;
    }
  };

  backFn(){
    console.log(this.fatherItem)
    return this.startWheel;
  }
}


