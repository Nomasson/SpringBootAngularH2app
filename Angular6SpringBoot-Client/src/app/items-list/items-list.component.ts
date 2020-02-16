import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.items = this.itemService.getItemsList();
  }
}
