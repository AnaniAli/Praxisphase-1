import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  items: { name: string; checked: boolean }[] = [
    { name: 'Element1', checked: false },
    { name: 'Element2', checked: false }
  ];

  addElement(value: string) {
    if (value.trim()) {
      this.items.push({ name: value, checked: false });
    }
  }

  delLastElement() {
    this.items.pop();
  }

  clear() {
    this.items = [];
  }

  checkAll() {
    this.items.forEach(item => item.checked = true);
  }
}
