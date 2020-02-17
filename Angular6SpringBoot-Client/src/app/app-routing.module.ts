import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
    { path: '', redirectTo: 'item', pathMatch: 'full' },
    { path: 'item', component: ItemsListComponent },
    { path: 'add', component: CreateItemComponent },
    { path: 'findbyid', component: SearchItemsComponent },
    { path: 'updateItem', component: UpdateItemComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
