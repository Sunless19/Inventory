import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit {
  addItemForm:FormGroup;

  constructor(private formBuilder:FormBuilder){
      this.addItemForm=formBuilder.group({});
  }

  ngOnInit(): void {
      this.addItemForm=this.formBuilder.group({
        name:['',Validators.required],
        description:['',Validators.required],
        user:['',Validators.required],
        location:['',Validators.required],
        inventoryNumber:['',Validators.required],
        createdAt:['',Validators.required]
      });
  }
  OnSubmit(){

  }
}
