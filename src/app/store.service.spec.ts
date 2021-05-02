import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });

  it('should set an Item', () => {
    expect(localStorage.setItem('key', 'value'));
    expect(localStorage.getItem('key')).toBe('value');
  });

  it('should return null for non existing items', () => {
    expect(localStorage.removeItem('key')).toBeUndefined();
    expect(localStorage.getItem('key')).toBeNull();
  });

  it('should set and remove Item', () => {
    expect(localStorage.setItem('key', 'value'));
    expect(localStorage.removeItem('key')).toBeUndefined();
    expect(localStorage.getItem('key')).toBeNull();
  });

});
