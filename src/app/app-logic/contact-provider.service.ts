import { Injectable } from '@angular/core';
import { ContactData } from './contact-data';
@Injectable({
  providedIn: 'root'
})
export class ContactProviderService 
{
  providedData=<ContactData>{
    info:"Unitate de stocare calculatoare",
    phone:"0742232412",
    openDays:"Luni-Vineri",
    timeSlot:"9:00-17:00",
    address:"Str. Turnului nr. 5",
  };

  constructor() { 

  }
  getData(): ContactData{
    return this.providedData;
  }
  
}
