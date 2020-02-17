import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

import { ItemsListComponent } from '../items-list/items-list.component';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: Item;

  constructor(private itemService: ItemService, private listComponent: ItemsListComponent) { }

  ngOnInit() {
  }

  deleteItem() {
    this.itemService.deleteItem(this.item.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
  }


