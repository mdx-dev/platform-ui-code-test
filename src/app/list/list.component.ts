import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    try {
      let data = sessionStorage.getItem('selectedItems');;
      data = data ? JSON.parse(data) : [];
      this.selectedProviders = this.selectedProviders.concat(data);

      this.unselectedProviders = this.unselectedProviders.filter(item => this.selectedProviders.findIndex(subitem => subitem.id === item.id) === -1);
    } catch (e) {}
  }

  select(item, index) {
    console.log('hi', index)
    this.unselectedProviders.splice(index, 1);
    this.selectedProviders.push(item);
    sessionStorage.setItem('selectedItems', JSON.stringify(this.selectedProviders));
  }

  deselect(item, index) {
    console.log('bye', index)

    this.selectedProviders.splice(index, 1);
    this.unselectedProviders.push(item);
    sessionStorage.setItem('selectedItems', JSON.stringify(this.selectedProviders));
  }
}
