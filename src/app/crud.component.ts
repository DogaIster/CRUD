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

          <select #selectedOption (change)="add($event.target.value);" class="form-control" style="display: inline-block; color:black; font-weight: bold; max-width:150px;" >
             <option id="created" style="color:black;" *ngFor="let option of model.options; let i=index" value="{{i}}" [selected]="option.name" >{{ option.name }}</option>
             <option style="color:black;" value="{{-2}}"></option>
             <option  id="selection" style="color:black;" value="{{-1}}" >Add Option</option> 
          </select>     

          
          <div *ngIf="addValue">
            <div><input id="optionName" style="height:32px;" [(ngModel)]="optionName" type="text" placeholder="Option Name"></div>
            <div><input id="optionAttribute" style="height:32px;" [(ngModel)]="optionAttribute" type="text" placeholder="Option Expression"></div>
            <button id="addNewOption" (click)="addNewOption($event)" type="submit">Add</button> 
            <button (click)="add(-1)">Cancel</button>
          </div>     
          
          <div *ngIf="updateValue">
            <div><input id="updatedOptionName" style="height:32px;" [(ngModel)]="updatedOptionName" type="text" placeholder="New Option Name"></div>
            <div><input id="updatedOptionAttribute" style="height:32px;" [(ngModel)]="updatedOptionAttribute" type="text" placeholder="New Option Expression"></div>
            <button id='apply' (click)="updateSelected(selectedOption.value)">Apply</button>
            <button id='delete' (click)="deleteOption(selectedOption.value)">Delete</button>
            <button id='cancel' (click)="update()">Cancel</button>
          </div>
          
            <button id='edit' (click)="update()">Edit</button>
      </div>
    `,
})

export class DadCrudComponent {

    addOption?: boolean = false;
    optionName?: any;
    optionAttribute?: any;
    updatedOptionName?:any;
    updatedOptionAttribute?:any;
    updateValue: boolean = false;
    addValue: boolean = false;

  @Input()
    model: any;

    constructor() {}

    addNewOption(event) {
      if(!this.model.options){
        this.model.options=[];
      }
      this.model.option = {
        name: this.optionName,
        attribute: this.optionAttribute
      };
      this.model.options.push(this.model.option);
      this.addValue = false;
    }

    updateSelected(selected_option) {
      this.updateValue;
      this.model.options[selected_option].name = this.updatedOptionName;
      this.model.options[selected_option].attribute = this.updatedOptionAttribute;
      this.updateValue = false;
    }

    update(){
      if (!this.updateValue) this.updateValue = true;
      else this.updateValue = false;
    }

    add(value){
      if(value == -2) {}
      if(value == -1){
        if (!this.addValue) this.addValue = true;
        else this.addValue = false;
      }
    }

    deleteOption(selected_option) {
      this.model.options.splice(selected_option, 1);
      this.updateValue = false;
    }

}
