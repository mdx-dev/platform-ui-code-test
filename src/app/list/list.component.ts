import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

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

  constructor() {}

  selProviders = [];
  unselProviders = [];

  ngOnInit() {
    console.log('selProviders ===', JSON.parse(localStorage.getItem('selProviders')))
    this.selProviders = JSON.parse(localStorage.getItem('selProviders')) || this.selectedProviders;
    this.unselProviders = JSON.parse(localStorage.getItem('unselProviders')) || this.unselectedProviders;
  }

  async saveProviders() {
    await localStorage.setItem('selProviders', JSON.stringify(this.selProviders));
    await localStorage.setItem('unselProviders', JSON.stringify(this.unselProviders));
  }

  async addItem(item: any) {
    console.log('add item ===', item)
    this.selProviders.push(item);
    // localStorage.setItem('selProviders', JSON.stringify(this.selProviders));

    this.unselProviders = this.unselProviders.filter((obj) => {
      return obj.id != item.id
    });
    // localStorage.setItem('unselProviders', JSON.stringify(this.unselProviders));
    await this.saveProviders();
  }

  async removeItem(item: any) {
    console.log('remove item ===', item);
    this.unselProviders.push(item);
    this.selProviders = this.selProviders.filter((obj) => {
      return obj.id != item.id
    });
    await this.saveProviders();
  }

}
