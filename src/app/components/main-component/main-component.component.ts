import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  budgetItem:BudgetItem[]=new Array<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }


  addItem(newItem:BudgetItem){
    this.budgetItem.push(newItem);
  }


  deleteItem(item:BudgetItem){
    let getIndex=this.budgetItem.indexOf(item);
    this.budgetItem.splice(getIndex,1);
  }

}
