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
             <option style="color:black;" *ngFor="let option of model.options; let i=index" value="{{i}}" [selected]="option.name" >{{ option.name }}</option>
             <option style="color:black;" value="{{-2}}" ></option>
             <option  id="selection" style="color:black;" value="{{-1}}" >Add Option</option> 
          </select>     

          
          <div *ngIf="addValue">
            <div id="optionName"><input style="height:32px;" [(ngModel)]="optionName" type="text" placeholder="Option Name"></div>
            <div id="optionAttribute"><input style="height:32px;" [(ngModel)]="optionAttribute" type="text" placeholder="Option Expression"></div>
            <button id="addNewOption" (click)="addNewOption($event)" type="submit">Add</button> 
            <button (click)="add(-1)">Cancel</button>
          </div>     
          
          <div *ngIf="updateValue">
            <div><input style="height:32px;" [(ngModel)]="updatedOptionName" type="text" placeholder="New Option Name"></div>
            <div><input style="height:32px;" [(ngModel)]="updatedOptionAttribute" type="text" placeholder="New Option Expression"></div>
            <button (click)="updateSelected(selectedOption.value)">Apply</button>
            <button (click)="deleteOption(i)">Delete</button>
            <button (click)="update()">Cancel</button>
          </div>
          
            <button (click)="update()">Update</button>
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
