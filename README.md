# Chat App Project 🚀💬

Welcome to the **Chat App** project! This is a real-time chat application built using **Bootstrap**, **React**, and **DummyAPI** for the backend. It features smooth navigation, efficient state management, and optimizations for a seamless user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Learning and Takeaways](#learning-and-takeaways)
- [License](#license)

## Features ✨

- **Real-time chat** with responsive UI using Bootstrap.
- **State management** using `useReducer` and `Context API`.
- **Routing** with **React Router**, optimized to prevent unnecessary re-renders.
- **Loading states** for better user experience during data fetching.
- Integrated **DummyAPI** for handling backend tasks like fetching user profiles and messages.

## Technologies Used 🛠️

- **React** - Frontend library for building user interfaces.
- **Bootstrap** - For styling and responsive design.
- **DummyAPI** - API for user and message data.
- **useReducer & Context API** - For managing app-wide state.
- **React Router** - For handling navigation and routing.
- **JavaScript (ES6+)** - Core programming language.

## Installation 💻

1. Clone this repository:
   git clone https://github.com/vivksingh/Social-Media-APP.git;

2. Navigate to the project directory:
    cd "Social Media App"

3. Install the necessary dependencies:
    npm i

4. Start the development server:
    npm run dev

This will start the app in development mode. Open http://localhost:3000 to view it in your browser.

## How It Works ⚡
- State Management: I used useReducer to handle complex state logic and Context API for sharing state across multiple components without needing - to pass props down manually. This helped keep the state flow clean and manageable.

- Optimized Routing: Using React Router, I optimized routing to prevent unnecessary re-renders when navigating between pages. Memoization, fine-tuned hooks, and lazy loading helped make this possible.

- Loading States: To ensure users weren’t waiting around for data, I implemented loading states and skeleton loaders to improve the perceived performance of the app.

- Backend: DummyAPI was used to simulate backend functionality like fetching user profiles and chat messages. It helped to quickly mock up data while focusing on frontend logic.

## Learning and Takeaways 📚
This project was a fun and educational experience that helped me deepen my understanding of:

- Basic and advanced React concepts, including useReducer and Context API.
- Advanced JavaScript and frontend framework optimizations.
- Performance optimization by minimizing unnecessary re-renders using memoization and proper dependency management in hooks.
- Efficient state management in complex applications.

## License 📄
This project is licensed under the MIT License - see the LICENSE file for details.


https://github.com/user-attachments/assets/c7da4898-cf09-496d-a7fe-1762a0b49a08

