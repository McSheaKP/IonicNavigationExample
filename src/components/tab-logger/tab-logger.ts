import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Generated class for the TabLoggerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tab-logger',
  templateUrl: 'tab-logger.html'
})
export class TabLoggerComponent implements OnChanges {
    constructor() {}

    @Input() tabDisplay: any;

    ngOnChanges(changes: SimpleChanges){
        console.log('look at the changes', changes)
     
    }
 

  

}
