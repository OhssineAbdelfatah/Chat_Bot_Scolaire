# Chat Bot Scolaire

Chat Bot Scolaire is an intelligent chatbot platform designed to assist students in accessing their academic information and help educational institutions streamline communication. This project leverages a modern JavaScript stack (React for the frontend and Node.js for the backend) and integrates with a school database to answer queries about grades, modules, semesters, and available formations.

## Features

- **Student Authentication**: Students can log in using their unique code (code_apoge) to access personalized information.
- **Notes and Results**: Retrieve notes by semester or module and view all available semesters and modules.
- **Academic Formations**: Browse available academic cycles and formations, including links for further information.
- **Conversational Interface**: Built to understand natural language queries and return rich responses, including HTML formatted results for improved user experience.
- **Extensible Architecture**: Modular backend services (auth, notes, formation, etc.) make it easy to add new features.

## Tech Stack

- **Frontend**: React (bootstrapped with Create React App)
- **Backend**: Node.js, Express
- **Database**: Relational database (integration via pool queries)
- **APIs**: RESTful API endpoints for chatbot interaction and data retrieval

## Getting Started

### Prerequisites

- Node.js and npm installed
- Database setup (see server/database configuration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OhssineAbdelfatah/Chat_Bot_Scolaire.git
   cd Chat_Bot_Scolaire
   ```
2. **Install server and client dependencies**
   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```
3. **Configure the database**
   - Update `server/database.js` with your database credentials.

4. **Run the backend server**
   ```bash
   cd ../server
   npm start
   ```
5. **Run the frontend**
   ```bash
   cd ../client
   npm start
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Enter your student code (code_apoge) to authenticate.
- Ask questions about your grades, modules, semesters, or available academic formations.
- The bot will respond with detailed information, including your grades and links to formations.

## Directory Structure

- `client/` - React frontend with scripts for development, testing, and building.
- `server/` - Node.js backend, includes controllers and service modules:
  - `controller/chatbotController.js` - Chatbot logic and request handling
  - `services/auth.js` - Student authentication
  - `services/consulterNotes.js` - Retrieve notes and academic information
  - `services/releverNotes.js` - Handle grade reports
  - `services/chercherFormations.js` - Fetch available formations

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request. For bugs or feature requests, open an issue.

## License

This project is currently unlicensed. Please contact the author for terms of use.

## Author

- [Ohssine Abdelfatah](https://github.com/OhssineAbdelfatah)

---

*For more details, see the code comments and explore the client and server directories.*
