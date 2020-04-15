import { UpdateEvent } from './../budget-item-list/budget-item-list.component';
import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  budgetItem:BudgetItem[]=new Array<BudgetItem>();
  totalBudget:number=0;
  constructor() { }

  ngOnInit(): void {
  }


  addItem(newItem:BudgetItem){
    this.budgetItem.push(newItem);
    this.totalBudget=this.totalBudget+newItem.amount;
  }


  deleteItem(item:BudgetItem){
    let getIndex=this.budgetItem.indexOf(item);
    this.totalBudget-=item.amount;
    this.budgetItem.splice(getIndex,1);
  }

  updateItem(updateEvent:UpdateEvent){
    this.budgetItem[this.budgetItem.indexOf(updateEvent.old)]=updateEvent.new;
    this.totalBudget-=updateEvent.old.amount;
    this.totalBudget+=updateEvent.new.amount;
  }

}
