// src/app/shopping.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Item {
  name: string;
  bought: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {}

  getItems() {
    return this.itemsSubject.value;
  }

  addItem(name: string) {
    const currentItems = this.getItems();
    const newItem: Item = { name, bought: false };
    this.itemsSubject.next([...currentItems, newItem]);
  }

  editItem(index: number, newName: string) {
    const currentItems = this.getItems();
    currentItems[index].name = newName;
    this.itemsSubject.next([...currentItems]);
  }

  toggleItemBought(index: number) {
    const currentItems = this.getItems();
    currentItems[index].bought = !currentItems[index].bought;
    this.itemsSubject.next([...currentItems]);
  }

  deleteItem(index: number) {
    const currentItems = this.getItems();
    currentItems.splice(index, 1);
    this.itemsSubject.next([...currentItems]);
  }
}
