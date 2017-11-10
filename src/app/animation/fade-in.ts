
import { trigger, transition, animate, keyframes, style, state } from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
    state('inactive', style({
        opacity:0
    })),
    state('active',   style({
        opacity:1
    })),
    state('inactiveLevel2', style({
        display: "none"
    })),
    state('activeLevel2',   style({
        display: "inline"
    })),
    state('inactiveLevel3', style({
        display: "none"
    })),
    state('activeLevel3',   style({
        display: "inline"
    })),
    
    transition('pen => active', animate('100ms ease-in')),
    transition('eraser => active', animate('100ms 200ms ease-in')),
    transition('media => active', animate('100ms 400ms ease-in')),
    transition('select => active', animate('100ms 600ms ease-in')),
    transition('shape => active', animate('100ms 800ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('inactiveLevel2 => activeLevel2', animate('2000ms ease-in')),
    // transition('inactiveLevel3 => activeLevel3', animate('550ms swing'))
    transition('inactiveLevel3 => activeLevel3', animate('550ms'))
  ]
);
