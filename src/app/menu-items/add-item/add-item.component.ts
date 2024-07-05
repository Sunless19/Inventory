import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { InventoryListMockService } from '../../app-logic/inventory-list-mock.service';
import { Router } from '@angular/router';
import { InventoryItem } from '../../app-logic/inventory-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {
  addItemForm:FormGroup;
  item!:InventoryItem;

  constructor(private formBuilder:FormBuilder,
    private inventoryListMockService:InventoryListMockService,
    private router:Router
  ){
    
      this.addItemForm=formBuilder.group({});
  }

  ngOnInit(): void {
      this.addItemForm=this.formBuilder.group({
        name:['',Validators.required],
        description:['',Validators.maxLength(100) && Validators.required],
        user:['',Validators.required],
        location:['',Validators.required],
        inventoryNumber:['',Validators.required],
        createdAt:['',Validators.required]
      });
  }
  OnSubmit(){
    this.item=new InventoryItem(this.addItemForm.value);
    this.item.modifiedAt=this.item.createdAt;
    this.item.deleted=false;
    this.item.id=this.inventoryListMockService.getLastId()+1;
    this.inventoryListMockService.addItem(this.item);
    this.router.navigate(['/inventory']);
  }

  hasError=(controlName:string,errorName:string)=>{
    return this.addItemForm.controls[controlName].hasError(errorName);
  }




}
