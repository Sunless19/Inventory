import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { InventoryListMockService } from '../../app-logic/inventory-list-mock.service';
import { Router,ActivatedRoute } from '@angular/router';
import { InventoryItem } from '../../app-logic/inventory-item';
import { MatDateRangeInput } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {
  addItemForm:FormGroup;
  item!:InventoryItem;
  itemId!:number;

  constructor(private formBuilder:FormBuilder,
    private inventoryListMockService:InventoryListMockService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){
    
      this.addItemForm=formBuilder.group({});
      this.activatedRoute.params.subscribe(
        (parameters)=>{ 
          if(parameters['id']){
            this.itemId=parameters['id'];
          }else {
            this.itemId=0;
          }
        }
      );
  }

  ngOnInit(): void {
      this.item=this.itemId==0 ? new InventoryItem():
      this.inventoryListMockService.getItemId(this.itemId);


      this.addItemForm=this.formBuilder.group({
        name:[this.item.name,Validators.required],
        description:[this.item.description,Validators.maxLength(100) && Validators.required],
        user:[this.item.user,Validators.required],
        location:[this.item.location,Validators.required],
        inventoryNumber:[this.item.inventoryNumber,Validators.required],
        createdAt:[this.item.createdAt,Validators.required]

      });
  }
  OnSubmit() {
    if (this.itemId === 0) {
      this.item = new InventoryItem(this.addItemForm.value);
      this.item.modifiedAt = this.item.createdAt;
      this.item.deleted = false;
      this.item.id = this.inventoryListMockService.getLastId() + 1;
      this.inventoryListMockService.addItem(this.item);
    } else {
      this.item = this.inventoryListMockService.getItemId(this.itemId);
      Object.assign(this.item, this.addItemForm.value);
      this.item.modifiedAt = new Date(); // Update modified date
      this.inventoryListMockService.updateItem(this.item);
    }

    this.router.navigate(['/inventory']);
  }

  hasError=(controlName:string,errorName:string)=>{
    return this.addItemForm.controls[controlName].hasError(errorName);
  }




}
