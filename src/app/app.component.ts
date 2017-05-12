import { Component, OnInit  } from '@angular/core';

export interface DadFilter{
  attribute?:any,
  name?:any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  filters: DadFilter[];

	ngOnInit (){
		this.filters = [{name:'a'}, {name:'a'}, {name:'a'}];
	}
}

