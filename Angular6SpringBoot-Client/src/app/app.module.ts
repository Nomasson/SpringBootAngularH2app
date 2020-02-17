import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpdateItemComponent } from './update-item/update-item.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ItemDetailsComponent,
    ItemsListComponent,
    UpdateItemComponent,
    SearchItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
