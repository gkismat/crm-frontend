Xeno CRM – Client

This is the frontend application for my Mini CRM project, built as part of the Xeno SDE Internship Assignment 2025.
It provides a user interface for authentication, shop management, and viewing history of shops.

Tech Stack

Next.js (React) – Frontend framework

Tailwind CSS – Styling

Vercel – Deployment platform

Google OAuth 2.0 – Login authentication

REST APIs – Communicates with backend server

 Features

Login with Google OAuth 2.0

Start a Shop → Add a shop with name & details

Shop History → View all shops created by the logged-in user

Secure Access → Only logged-in users can create/view shops

Connected to Backend → Shops stored in MongoDB Atlas (xeno-crm DB)

Pages

/ → Landing page with login

/shops → Add new shop + view shop history

 Setup Instructions

Clone the repo:

git clone https://github.com/gkismat/xeno-crm-client.git
cd xeno-crm-client


Install dependencies:

npm install


Create a .env.local file in the root:

NEXT_PUBLIC_BACKEND_URL="http://localhost:5000"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"


Run the app:

npm run dev


App will run at http://localhost:3000

 Notes

Shops UI is available in the frontend.

Customers and Orders are tested through Postman APIs (see backend repo).

All data is stored inside MongoDB Atlas (xeno-crm).

.env.local file is not included for security – use .env.example as a reference.

Related Links

Deployed App (Vercel) → https://crm-frontend-opal-nine.vercel.app/

Backend Repo → https://github.com/gkismat/xeno-crm-server

Demo Video → https://www.youtube.com/watch?v=Bl4lhhPcTZk
