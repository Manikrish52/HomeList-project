This project is a hotel management web application built with Create React App, React, and Redux. It allows users to add, edit, search, and view hotels, complete with image uploads, geolocation, and SEO optimizations.

Features
📝 Add/Edit Hotel Form
A reusable form component to add or edit hotel information with validation:

Image Upload: Upload a hotel image with preview capability.

Title: Text input for the hotel name.

Description: Text area for hotel description.

Latitude & Longitude: Inputs for location coordinates.

Price: Number input with validation.

Reusable Component: Used for both creating and editing hotels.

📄 List Page with Pagination
A user-friendly card layout to display hotel listings:

Card Layout: Each hotel card includes an image, title, price, and description snippet.

Search: Filter hotels by title.

Filter: Narrow results by price range.

Pagination: Paginated results for better UX.

Edit/Delete Options:

Edit opens the form in edit mode.

Delete removes the hotel with a success popup.

Detail Navigation: Clicking a card navigates to the detailed view.

📍 Hotel Detail Page
Full Detail Display: Shows complete information of the hotel.

Map Integration: Renders the hotel location using the Geolocation API and provided coordinates.

🔍 SEO Optimization
React Helmet: Dynamic meta tags for better SEO.

Alt Tags: All images include descriptive alt attributes for accessibility and SEO.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode at http://localhost:3000.
Supports hot reloading and lint error reporting.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production with optimized assets and hashed filenames.

npm run eject
One-way operation! Copies all configurations and dependencies to your project for full control.

Learn More
React Documentation

Redux Documentation

React Helmet

Create React App Docs
