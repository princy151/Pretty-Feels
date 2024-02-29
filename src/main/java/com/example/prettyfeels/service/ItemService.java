package com.example.prettyfeels.service;

import com.example.prettyfeels.dto.ItemDTO;
import com.example.prettyfeels.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    void deleteByName(String productName);
    String save(ItemDTO productDTO);
    List<Item> getAll();
    Optional<Item> getById(Integer productId);
    void deleteById(Integer productId);

    Optional<Item> getByProductName(String productName);

    void update(ItemDTO updatedItemDTO);
}
