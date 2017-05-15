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
          
          <div *ngIf="addValue">
            <div><input style="height:32px;" [(ngModel)]="optionName" type="text" placeholder="Option Name"></div>
            <div><input style="height:32px;" [(ngModel)]="optionAttribute" type="text" placeholder="Option Expression"></div>
            <button (click)="addNewOption($event)" type="submit">Add</button> 
          </div>     
          
           <div *ngIf="updateValue">
                 <div><input style="height:32px;" [(ngModel)]="updatedOptionName" type="text" placeholder="New Option Name"></div>
                 <div><input style="height:32px;" [(ngModel)]="updatedOptionAttribute" type="text" placeholder="New Option Expression"></div>
                 <button (click)="updateSelected(selectedOption.value)">Apply</button>
                 <button (click)="update()">Cancel</button>
           </div>        
      
          <select  #selectedOption (click)="addOption" class="form-control" style="display: inline-block; color:black; font-weight: bold; max-width:150px;" >
            <option style="color:black;" *ngFor="let option of options; let i=index" value="{{i}}" [selected]="option.name" >{{ option.name }}</option>
            <option> <button (click)="select()" style="color:black;" value="{{-1}}" >Add Filter </button></option>
<!--<option (click)="deleteOption(i)" class="delete-icon">[X]</option>-->
          </select>     
          
            <button (click)="add()">Add New Option</button>
            <button (click)="deleteOption(i)">Delete</button>
            <button (click)="update()">Update</button>
       
                                        

      </div>
     
    `,
    styleUrls: ['crud.css']
})

export class DadCrudComponent {

    addOption?: boolean = false;
    editTheOption?: boolean = false
    optionName?: any;
    optionAttribute?: any;
    updatedOptionName?:any;
    updatedOptionAttribute?:any;
    addNew?: boolean = false;
    updateValue: boolean = false;
    addValue: boolean = false;

  @Input()
    options: any;
    option: any;

    constructor() {}


    addNewOption(event) {
      if(!this.options){
        this.options=[];
      }
      this.option = {
        name: this.optionName,
        attribute: this.optionAttribute
      };
      this.options.push(this.option);
      this.addValue = false;
    }

    updateSelected(selected_option) {

      alert(selected_option);
      this.updateValue;
      this.options[selected_option].name = this.updatedOptionName;
      this.options[selected_option].attribute = this.updatedOptionAttribute;
      this.updateValue = false;
    }

    update(){
      if (!this.updateValue) this.updateValue = true;
      else this.updateValue = false;
    }

    add(){
      if (!this.addValue) this.addValue = true;
      else this.addValue = false;
    }

    deleteOption(item) {
      let index = this.options.indexOf(item);
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
