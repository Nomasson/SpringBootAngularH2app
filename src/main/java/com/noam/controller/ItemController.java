package com.noam.controller;

import com.noam.model.Item;
import com.noam.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    ItemRepository repository;


    @GetMapping("/items")
    public List<Item> getAllItems() {
        System.out.println("Get all Items...");

        List<Item> items = new ArrayList<>();
        repository.findAll().forEach(items::add);
        return items;
    }


    @PostMapping(value = "/items/create")
    public Item postItem(@RequestBody Item item) {

        Item _item = repository.save(new Item(item.getName(), item.getAmount(), item.getInventory()));
        return _item;
    }
    @DeleteMapping("/items/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable("id") long id) {
        System.out.println("Delete Item with ID = " + id + "...");
        repository.deleteById(id);
        return new ResponseEntity<>("Item has been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "items/id/{id}")
    public List<Item> findById(@PathVariable int id) {
        List<Item> items = repository.findById(id);
        return items;
    }
    @PutMapping("/{id}/{newamount}")
    public ResponseEntity<Item> updateItems(@PathVariable("id") long id,@PathVariable("valu") int newamount) {
        System.out.println("Update Item with ID = " + id + "...");
        List<Item> items = repository.findById(id);
        Item _item = items.get(0);
        _item.setAmount(newamount);
        return new ResponseEntity<>(repository.save(_item), HttpStatus.OK);
    }

}
