import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {



  constructor(
    public dialogRef:MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem
    ) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:BudgetItem){
    this.dialogRef.close(updatedItem);
  }

}
