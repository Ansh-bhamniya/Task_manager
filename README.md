Offline First Task Manager App

Tech Stack:

Frontend: Flutter, Bloc (Cubit), SQLite

Backend: Node.js, Express, TypeScript, Docker, PostgreSQL

Overview
This project is an Offline First Task Manager App that allows users to manage tasks and store them locally using SQLite. When the device is online, the app syncs with the backend, which is built using Node.js, Express, and PostgreSQL. The backend is containerized using Docker for easy deployment.

Prerequisites

Before setting up the project, ensure you have the following installed on your system:

Flutter (for building and running the frontend)

Node.js (for running the backend)

npm (for managing backend dependencies)

Docker (for backend containerization)

PostgreSQL (for the backend database)

Git (for version control)

Frontend Setup (Flutter)




Clone the repository:

bash

Copy code

git clone https://github.com/your-repository.git

cd your-repository

Install Flutter dependencies:



Navigate to the Flutter project directory and run:

bash

Copy code

flutter pub get

Run the app:



Make sure you have a connected device or an emulator running, then run:

bash

Copy code

flutter run

Configure SQLite:



The app uses SQLite for offline data storage. When offline, the app will store task data locally, and once connected to the internet, it will sync the data with the backend.


Backend Setup (Node.js + Express)

Clone the repository (if you haven't done so already):


bash

Copy code

git clone https://github.com/your-repository.git

cd your-repository/backend

Install Node.js dependencies:

Run the following command to install the necessary backend dependencies:

bash

Copy code

npm install

Set up PostgreSQL:

Install and run PostgreSQL locally, or use Docker to run a PostgreSQL container.

Create a new database for the app and set up tables using the provided schema.

Run the backend locally:

You can run the backend with:

bash

Copy code

npm run dev

The backend will be accessible at http://localhost:5432




Backend Setup with Docker

Set up Docker:

If you want to run the backend with Docker, first ensure Docker is installed and running.

Build and run the Docker container:

From the backend directory, build and start the backend container with:


bash

Copy code

docker-compose up --build

Access the app:

Once the backend container is running, it should be available at:

bash

Copy code

http://localhost:5432





Database Configuration

Create PostgreSQL Database:

Create a new database and user for your application in PostgreSQL.

Set up the database schema as defined in the project.

Configure the Database Connection:

In the backend, modify the database connection settings located in the config folder:

typescript

Copy code

const dbConfig = {
  host: "localhost",  // Use Docker host if running inside Docker
  port: 5432,
  user: "your_db_user",
  password: "your_db_password",
  database: "your_db_name",
};



Syncing Offline Data


The app stores task data in SQLite locally when offline. Once the device is back online, it syncs the local data with the backend. The backend API handles operations such as:

Creating tasks

Reading tasks

Updating tasks

Deleting tasks



Running Tests

To run any available tests in the project, use the following command:

bash

Copy code

npm test




Contributing

We welcome contributions to improve the app! Please follow these steps to contribute:


Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Create a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

This guide should help you set up both the frontend and backend of the Offline First Task Manager App. If you have any issues or need further help with setup, feel free to open an issue or contact the project maintainers.

