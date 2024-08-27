User Management Application
Overview
This is a simple User Management Application built with React for the frontend, Node.js for the backend, and MongoDB as the database. The application allows users to sign up, log in, and view a list of all registered users. It includes role-based options during signup, such as User, Admin, and Guest.

Features
User Signup: Register a new user with details like first name, last name, email, mobile number, role, and password.
User Login: Authenticate existing users based on email and password.
User List: View a list of all registered users in the application.
Tech Stack
Frontend: React.js with Tailwind CSS for styling.
Backend: Node.js with Express.js.
Database: MongoDB for storing user data.
Other Libraries: Axios for HTTP requests, React Router for navigation.
Prerequisites
Before running this project, ensure you have the following installed:

Node.js
npm or yarn
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd user-management-app
Install dependencies for the frontend:

bash
Copy code
cd frontend
npm install
Install dependencies for the backend:

bash
Copy code
cd backend
npm install
Set up MongoDB: Ensure that MongoDB is running on your machine. By default, it should be available at Atlas. You can change the MongoDB URI in the backend's configuration file if needed.

Start the backend server:

bash
Copy code
cd backend
npm start
The backend will run on http://localhost:5000.

Start the frontend development server:

bash
Copy code
cd frontend
npm start
The frontend will run on http://localhost:3000.

Usage
Signup:

Navigate to the Signup page.
Fill out the form with your details, select your role, and submit.
Login:

Navigate to the Login page.
Enter your registered email and password to log in.
User List:

After logging in, navigate to the User List page to view all registered users.
Folder Structure
lua
Copy code
/user-management-app
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Signup.js
│   │   │   ├── Login.js
│   │   │   └── UserList.js
│   │   ├── services
│   │   │   └── authService.js
│   │   └── App.js
│   ├── public
│   ├── package.json
│   └── tailwind.config.js
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── config
│   └── package.json
└── README.md
API Endpoints
POST /api/auth/signup: Registers a new user.
POST /api/auth/login: Logs in an existing user.
GET /api/auth/users: Retrieves a list of all registered users.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or issues, please contact Riyas at mohammedriyazriyaz04@gmail.com.