# Slot Reservation Engine (NestJS + Redis + BullMQ)

A concurrency-safe **slot reservation and queue engine** built with NestJS, Redis locks, BullMQ workers, and a booking state machine to prevent double booking under high load.

This project models how real systems like **BookMyShow, Uber, Practo, salons, hospitals, and call centers** handle time-bound reservations, queues, and automatic expiration.

---

## 🚨 The Problem This Solves

In real systems:

- Two users try to book the same seat / technician / doctor at the same time
- A slot must be **temporarily held** while a user confirms
- If the user doesn’t confirm → slot must auto-release
- When slots are busy → users must wait in a **FIFO queue**
- All of this must work safely under high concurrency

This engine solves that problem in a reusable way.

---

## 🧠 Core Concepts Implemented

- Temporary slot locking with **Redis + Lua**
- Automatic slot expiration using **BullMQ delayed jobs**
- **FIFO queue** when slots are busy
- Strict **booking state machine**
- Idempotent reservation APIs
- Real-time queue position updates via WebSocket
- Safe coordination between **Redis locks** and **database state**

---

## ✨ Features

- ⏳ Slot reservation with TTL (e.g., 2 minutes hold)
- 🔐 Distributed locking to prevent double booking
- 📋 Booking confirmation & cancellation
- ♻️ Auto expiration if user doesn’t confirm
- 🧍 FIFO queue system for waiting users
- 🔄 Background workers for time-based automation
- 📡 Real-time queue updates (WebSocket)
- 🧾 State transition logging & audit trail
- 🧩 Modular NestJS architecture

---

## 🏗️ Architecture Overview

Client Request
↓
NestJS API
↓
Redis (Lock + Queue State)
↓
PostgreSQL (Booking Records)
↓
BullMQ Workers (Expiration / Queue Movement)

## 📦 Tech Stack

- NestJS
- Redis
- BullMQ
- PostgreSQL
- WebSocket
- TypeScript

---
## 🗂️ Modules

src/
├─ slot
├─ booking
├─ queue
├─ lock (Redis + Lua)
├─ state-machine
├─ workers
├─ websocket

## 🔄 Booking State Machine

PENDING → RESERVED → CONFIRMED → COMPLETED
↘ CANCELLED
↘ EXPIRED


Invalid transitions are rejected.

---

## 🧪 Example Flow

1. User requests to reserve a slot
2. System locks the slot for 2 minutes
3. If user confirms → booking is created
4. If not → lock auto expires
5. If slot busy → user enters queue
6. When slot frees → next user gets reservation chance

---

## 🚀 Why This Project Exists

This project was built to deeply understand:

- Concurrency control
- Distributed locking
- Queue management
- Time-based background processing
- Real-world booking system design

It focuses on engineering challenges, not CRUD APIs.

---

## 🔮 Possible Use Cases

This engine can be adapted for:

- Cinema seat booking
- Technician appointment booking
- Doctor token system
- Restaurant waiting list
- Online consultation slots
- Customer support queue

---

## ▶️ Getting Started

```bash
npm install
npm run start:dev
