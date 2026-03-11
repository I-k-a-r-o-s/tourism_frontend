# tourism — Backend(confirmed working by testing with Postman)

## Project Overview
This backend provides the API for **tourism** frontend.  
Users can register and log in, create/edit/listings (experiences), and delete listings. The API uses JWT authentication and stores data in MongoDB.

## Tech Stack
- **React/Vite** Frontend 
- **Axios** api handling  
- **daisyUI** — UI components 
- **React Icons** — Various Icons
- **React Hot Toast** - Toast Notifications
- **React Router** — handling routes

## Setup Instructions

### Prerequisites
- Node.js (created using v22.20.0)
- npm
- Correctly setup backend found on:(https://github.com/I-k-a-r-o-s/tourism_backend)

### Install
1. **Clone the repository**

```bash
git clone <repository-url >
cd <repo folder >
```

2. **Install dependencies**

```bash
npm i
```

3. **Create .env file** in the root directory with required environment variables (see below)

4. **Start the app**

```bash
npm run dev    # Development mode (nodemon)
npm run build      # Production mode
```

## Environment Variables

Create `.env` file in the root directory with the following:

```env
# API base URL
VITE_BASE_URL=api_base_url

```
## Features Implemented

**User authentication**
- **Register**
- **Login**
- **Logout**


**Listings (Experiences)**
- **View all lists in homepage/main feed page(sorted from newest to oldest) via ckicking a listing card**
- **Delete lists via a model**
- **Update lists via a model(backend routes completed, fontend is incomplete)**
- **Create a list(backend routes completed, fontend is incomplete)**

**Basic validation & error handling**
- **Request body checks and status codes**
- **Standardized JSON responses(success,message etc.)**

## Architecture & Key Decisions

**Why this technology stack?**
- **I chose this stack because I'm comfortable with it and used to it.**

**How does the authentication work?**
- **When a user creates an account, bcrypt is used to hash the password, a user record is created on mongodb, a signed JWT is issued and the token is used to check if the user is authorized to perform actions**

**How are the listings stored in the database?**
- **They are stored as documents in a mongodb collection named listing**

**One improvement that would have been implemented if there was more time?**
- **A feature to find out nearest resorts/guest houses for any tourist who views the app**

## If this platform had 10,000 travel listings, what changes would be implemented to improve performance and user experience?

- **Infinite scroll with a button to quichly go to the top of the page will be implemented to ease navigation**
- **Users will be able to sort listings by location and/or likes**
- **A search function is needed  to find out any locations faster without scrolling.**
- **Many users may have different reviews/likes of a location and places to stay. So the database needs to have separate collections to properly contain them and let the app fetch the details as needed.**
- **A limit should be implemened to load listings by groups of 10/20 to minimize resource usage and increase convenience**