
# University Mess Menu & Feedback System

A web application for managing university mess menus and collecting food feedback from students.

## Features

- **Weekly Mess Menu**: Display breakfast, lunch, and dinner menus for each day
- **User Feedback Form**: Students can rate meals and submit comments
- **Real-time Comments**: View today's feedback from other students
- **Rating System**: 1-5 star rating with visual indicators
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## Tech Stack

- **Frontend**: HTML, CSS (Tailwind), JavaScript (ES6 modules)
- **Backend**: Firebase Firestore
- **Icons**: Font Awesome 6.4.0

## Project Structure

```
├── index.html          # Main HTML file
├── js/
│   ├── firebase.js     # Firebase configuration and database functions
│   ├── index.js        # Main application logic
│   └── helper.js       # Utility functions and menu data
└── README.md          # Documentation
```

## Setup

1. Clone the repository
2. Open `index.html` in a web browser
3. Fill the feedback form to submit ratings and comments
4. View today's feedback from other students

## Key Functions

- `saveFeedback()`: Stores user feedback in Firestore
- `fetchFeedback()`: Retrieves today's feedback entries
- `renderMessMenu()`: Generates menu HTML for current day
- `showComments()`: Displays feedback with ratings
