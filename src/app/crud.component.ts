/**
 * Created by dister on 5/11/2017.
 */

import { Component, Input, Output } from '@angular/core';
import { AppComponent } from './app.component';
import { DadFilter } from './app.component';

@Component({
    selector: 'dadcrud',
    template: `
      <div class="combobox">
          <div>
              <form (submit)="addNewOption($event)">
                    <div><input style="height:32px;" [(ngModel)]="optionName" type="text" placeholder="Filter Name"></div>
                    <div><input style="height:32px;" [(ngModel)]="optionAttribute" type="text" placeholder="Filter Expression"></div>
                    <button  type="submit">Add</button>
              </form>
          </div>     
      
          <ul>
              <li *ngFor="let option of options; let i=index">
                  <input type="checkbox" [(ngModel)]="newOption.completed" />
                  <span [ngClass]="{'checked': newOption.completed}">{{ option.name }}</span>
                  <span (click)="deleteOption(i)" class="glyphicons glyphicons-bin">[x]</span>
              </li>
          </ul>      
      </div>
    `,
    styleUrls: ['crud.css']
})

export class DadCrudComponent {

    newOption: string;
    addOption?: boolean = false;
    editTheOption?: boolean = false
    optionName?: any;
    optionAttribute?: any;
    editedOptionName?:any;
    editedOptionAttribute?:any;

  @Input()

    options: any;
    option: any;
    editedOption: any;

    constructor() {
        this.newOption = '';
        this.options = [];
    }

    addNewOption(event) {
      this.addOption = false;
      if(!this.options){
        this.options=[];
      }
      this.option = {
        name: this.optionName,
        attribute: this.optionAttribute
      };
      this.options.push(this.option);
    }

    editOption(o){
      this.addOption = false;
      this.editTheOption = false;
      this.deleteOption(this.option);
      this.options.push({name: this.editedOptionName, attribute: this.editedOptionAttribute});
    }

    deleteOption(index) {
        this.options.splice(index, 1);
    }
/*
    deleteSelectedOptions() {
        //need ES5 to reverse loop in order to splice by index
        for(let i=(this.options.length -1); i > -1; i--) {
            if(this.options[i].completed) {
                this.options.splice(i, 1);
            }
        }
    }
*/
}
