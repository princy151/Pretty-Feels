package com.example.prettyfeels.service;

import com.example.prettyfeels.dto.OrderDTO;
import com.example.prettyfeels.dto.OrderHistoryDTO;
import com.example.prettyfeels.entity.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> getAllOrders();
    List<OrderHistoryDTO> getOrderHistory();
}