import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor(private state: StoreService) {}

  ngOnInit() {
    this.state.getItems().map(item => {
      const parseItem = JSON.parse(item)
      if (!this.selectedProviders.includes(parseItem)){
          this.selectedProviders.push(parseItem)
       }
       const currentList = this.unselectedProviders.filter( item => item.id !== parseItem.id)
       this.unselectedProviders = currentList
    })
  }

  add(providerItem) {
    const currentList = this.unselectedProviders.filter( item => item.id !== providerItem.id)
    this.unselectedProviders = currentList
    if ( !this.selectedProviders.includes(providerItem) ) {
      this.selectedProviders.push(providerItem)
      this.state.setItem(providerItem.id, JSON.stringify(providerItem))
    }
  }

  remove(providerItem) {
    const currentList = this.selectedProviders.filter( item => item.id !== providerItem.id)
    this.selectedProviders = currentList
    if ( !this.unselectedProviders.includes(providerItem) ) {
      this.unselectedProviders.push(providerItem)
      this.state.removeItem(providerItem.id)
    }
  }
}
