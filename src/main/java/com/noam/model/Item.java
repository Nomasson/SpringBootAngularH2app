package com.noam.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item")
public class Item {

    @Id
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "amount")
    private int amount;

    @Column(name = "inventory")
    private String inventory;

    public Item() {
    }

    public Item(long id,String name, int amount, String inventory) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.inventory = inventory;
    }

    public long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getAmount() {
        return this.amount;
    }

    public String getInventory() {
        return inventory;
    }

    public void setInventory(String inventory) {
        this.inventory = inventory;
    }

    @Override
    public String toString() {
        return "Item [id=" + id + ", name=" + name + ", amount=" + amount + ", inventory=" + inventory + "]";
    }
}
