import { Component, OnInit  } from '@angular/core';

export interface DadFilter{
  attribute?:any,
  name?:any
}

@Component({
  selector: 'app-root',
  template: `
    <h1>
      <dadcrud [model]='model' ></dadcrud>
    
    <div *ngIf="model.option"></div>
    
    
        <ul>
            <li *ngFor="let option of model.options; let i=index">
                Name: {{ option.name }} <br/>
                Attribute: {{option.attribute}}
            </li>
        </ul>
    </h1>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  model: {option:DadFilter, options: DadFilter[]}


	ngOnInit (){
    this.model = {options: [], option:null};
	}
}

