package org.example.backend.repository;

import org.example.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    public List<Order> getOrdersByUserId(int uid);
}