import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  item: Item = new Item();
  submitted = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  newItem(): void {
    this.submitted = false;
    this.item = new Item();
  }

  save() {
    this.itemService.updateItem(this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
