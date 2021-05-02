import { ListComponent } from './list.component';
import { StoreService } from '../store.service';
import { TestBed, getTestBed } from '@angular/core/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let service: StoreService;
  let injector: TestBed;

  beforeEach(() => {
    component = new ListComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });

  describe('should inject service', () => {
    it('should inject service', () => {
      injector = getTestBed();
      service = injector.get(StoreService);
    });
  });

});
