# Shopping Cart Simulator

## Overview

A small **JavaScript Shopping Cart Simulator** that represents a dynamic market environment. Users can browse products, add them to a cart, purchase items, and manage their account.

The project uses **`localStorage` as a database**, allowing data persistence across sessions without a backend.

---

## Features

### 1. Local Storage Database

* Stores:

  * User accounts
  * Shopping cart data
  * Purchased items
  * Product stock
* Data persists after page reload or logout.

---

### 2. Gallery (Market Section)

* Displays available products.
* Each product shows:

  * Price
  * Available stock
* Users can:

  * View product details
  * Add items to their shopping cart

Stock updates dynamically based on purchases.

---

### 3. User Dashboard

Users can access:

* Username
* Email
* Current balance
* Total cart price (sum of all items in the cart)
* Total number of items (cart + collection)
* Purchased items (User Collection section)

This allows users to track both pending and completed purchases.

---

### 4. Dynamic Market Logic

The simulator automatically synchronizes:

* Product stock decreases after a purchase.
* The gallery always reflects real-time stock changes.
* Stock availability depends directly on user purchases.

---

### 5. Authentication System

* Create a new account
* Log in with existing credentials
* Log out securely
* Permanently delete account

---

### 6. Session Persistence

* When a user logs out:

  * All purchased items are saved.
  * Cart items remain stored.
  * The remaining balance after the most recent purchase is saved.
* When logging back in:

  * The user can continue shopping with their saved cart and updated balance.
* Account deletion permanently removes all stored user data.

---

## Technical Concepts Demonstrated

* JavaScript array methods
* Object manipulation
* DOM interaction
* State management
* Persistent storage with `localStorage`
* Dynamic UI updates based on application state

---

This project demonstrates the core logic behind shopping cart systems and client-side state persistence without requiring a backend.
