# Calender_Backend
 
This repository contains the server-side code for the Calender_Backend. It is a REST API server written in Node.js.
 
 
## Project Information
 
- **Name**: Calender_Backend
- **Version**: 1.0.0
- **Description**: Backend server for Calender_Backend.
- **Main file**: `index.js`
- **Scripts**:
  - `start`: Run the server using `node index.js`.
  - `devStart`: Run the server in development mode using `nodemon index.js`.
 
 
The directories for different reports should be created in AWS and path should be given in the respective directory paths.


 
## Environment Variables
 
The server uses the following environment variables:
 
- **HOST**: The hostname for the MySQL database (`localhost`).
- **USER**: The MySQL database username (`root`).
- **PASSWORD**: The MySQL database password (`xxxx`).
- **DATABASE**: The MySQL database name (`xxx`).
- **PORT**: The port on which the server will run (`5000`).

 
## Installation
 
1. Clone the repository:
 
    ```bash
    git clone https://github.com/karodisuresh/Calender_Backend.git
    cd Calender_Backend
    ```
## Switching to Version 1.0.0
 
To use the codebase for version 1.0.0, switch to the `Calender_Backend_v_1.0.0` branch:
 
```bash
git checkout Calender_Backend_v_1.0.0
```
 
2. Install dependencies:
 
    ```bash
    npm install
    ```
 
3. Create a `.env` file and configure the necessary environment variables:
 
## Usage
### Running in Production Mode
 
```bash
npm start
```
### Running in Development Mode
 
```bash
npm run devStart
```
