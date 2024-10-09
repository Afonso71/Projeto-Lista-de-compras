import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent {
  form: FormGroup;

  constructor(private shoppingService: ShoppingService, private fb: FormBuilder) {
    this.form = this.fb.group({
      itemName: ['', Validators.required]
    });
  }

  addItem() {
    if (this.form.valid) {
      this.shoppingService.addItem(this.form.value.itemName);
      this.form.reset();
    }
  }
}
