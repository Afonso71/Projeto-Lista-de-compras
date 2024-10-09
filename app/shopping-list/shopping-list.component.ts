import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items$;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    // Inicializa os itens no ciclo de vida OnInit
    this.items$ = this.shoppingService.items$;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
