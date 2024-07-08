import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddItemComponent } from './menu-items/add-item/add-item.component';
import { ContactComponent } from './menu-items/contact/contact.component';
import { InventoryComponent } from './menu-items/inventory/inventory.component';
import { ScanComponent } from './menu-items/scan/scan.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowItemComponent } from './menu-items/show-item/show-item.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'add-item',component:AddItemComponent},
  {path:'contact',component:ContactComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'edit/:id',component:AddItemComponent},
  {path:'item/:id',component:ShowItemComponent},
  {path:'scan',component:ScanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const RoutingComponents=[
  HomePageComponent,
  AddItemComponent,
  ContactComponent,
  InventoryComponent,
  ScanComponent,
  ShowItemComponent
];