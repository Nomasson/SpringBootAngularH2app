import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  id: number;
  items: Item[];

  constructor(private dataService: ItemService) { }

  ngOnInit() {
    this.id = 0;
  }

  private searchItems() {
    this.dataService.getItemsById(this.id)
      .subscribe(items => this.items = items);
  }

  onSubmit() {
    this.searchItems();
  }
}
