import { Component, Input } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() item: any;
  @Input() index!: number;

  isEditing = false;
  newItemName = '';

  constructor(private shoppingService: ShoppingService) {}

  toggleBought() {
    this.shoppingService.toggleItemBought(this.index);
  }

  deleteItem() {
    this.shoppingService.deleteItem(this.index);
  }

  editItem() {
    this.isEditing = true;
    this.newItemName = this.item.name;
  }

  saveItem() {
    if (this.newItemName.trim()) {
      this.shoppingService.editItem(this.index, this.newItemName);
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
