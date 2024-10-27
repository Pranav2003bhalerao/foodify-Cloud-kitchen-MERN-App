Certainly! Here’s the README in proper Markdown format for your **Foodify - Food Ordering Website** project:

---

# Foodify - A Food Ordering Website

Foodify is a full-featured food ordering website developed using the MERN stack, complete with secure transaction functionality via Stripe. The project is organized into three main folders: `frontend`, `backend`, and `admin`. The `frontend` and `admin` components utilize Vite for fast development builds, while the `backend` is configured with Nodemon for live reloading during development.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- **User Authentication:** Register, login, and manage user sessions.
- **Menu Management:** View and order from a variety of food items.
- **Cart Functionality:** Add, update, and remove items in the cart.
- **Order Processing:** Place orders and manage order history.
- **Payment Integration:** Secure payments using Stripe API.
- **Admin Dashboard:** Manage food items, track orders, and handle other administrative functions.
- **Responsive Design:** User-friendly on desktop and mobile.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Admin**: React, Vite
- **Payment**: Stripe API for secure transactions

## Folder Structure

- `/frontend`: Contains the user-facing side of the Foodify app, built with Vite and React.
- `/backend`: Server-side code using Node.js and Express.js.
- `/admin`: Administrative dashboard built with Vite and React.

## Installation

### Prerequisites

- Node.js (v14 or above)
- MongoDB (Local or MongoDB Atlas for remote DB)
- Stripe Account (for payment integration)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/foodify.git
cd foodify
```

### Step 2: Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Admin

```bash
cd ../admin
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `backend` folder and configure the following variables:

```plaintext
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Step 4: Database Setup

- Ensure your MongoDB server is running.
- For MongoDB Atlas, replace `MONGODB_URI` with your connection string.

## Usage

### Run Backend Server

The backend server uses Nodemon for live reloading during development.

```bash
cd backend
npm run server
```

### Run Frontend Application

The frontend is powered by Vite for faster builds and reloading.

```bash
cd ../frontend
npm run dev
```

### Run Admin Dashboard

The admin dashboard also utilizes Vite for the same benefits.

```bash
cd ../admin
npm run dev
```

### Access the Application

- **Frontend**: [http://localhost:3000](http://localhost:5713)
- **Backend**: [http://localhost:5000](http://localhost:4000)
- **Admin**: [http://localhost:4000](http://localhost:5714) (or whatever port specified in your Vite config)

## Scripts

### Backend

| Script            | Description                                             |
|-------------------|---------------------------------------------------------|
| `npm run server`  | Starts the backend server using Nodemon with live reloading. |
| `npm run start`   | Starts the backend server without Nodemon.               |

### Frontend / Admin

| Script            | Description                                             |
|-------------------|---------------------------------------------------------|
| `npm run dev`     | Starts the Vite server for development with HMR.        |
| `npm run build`   | Builds the project for production.                      |
| `npm run serve`   | Serves the built project for production.                |

## Environment Variables

The backend requires the following environment variables to be set up in a `.env` file:

- **PORT**: Port number for the backend server (default is `5000`).
- **MONGODB_URI**: Connection string for MongoDB.
- **JWT_SECRET**: Secret key for JSON Web Token (JWT) generation and validation.
- **STRIPE_SECRET_KEY**: Secret key from your Stripe account for handling payments.

## License

This project is licensed under the MIT License.

---
