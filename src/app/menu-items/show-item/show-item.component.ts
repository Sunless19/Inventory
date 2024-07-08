import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InventoryItem } from '../../app-logic/inventory-item';
import { InventoryListMockService } from '../../app-logic/inventory-list-mock.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.css'
})
export class ShowItemComponent implements OnInit {
  itemId!:number;
  item!:InventoryItem;
  itemFound=false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private inventoryListMockService : InventoryListMockService,
    private router:Router
  ){
      this.activatedRoute.params.subscribe((params)=>{this.itemId=params['id'] ?? 0;});
  }
  
  ngOnInit(): void {
    this.item=this.inventoryListMockService.getItemId(this.itemId);
    this.itemFound=this.item ? true : false;
  }
  

  editItem(){
    this.router.navigate(['edit/'+ this.itemId]);
  }
}
