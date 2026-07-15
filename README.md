# IITB Dating Website

A front-end dating website prototype built using HTML, CSS, and JavaScript. The project simulates a simple campus matchmaking platform where users can register, log in, and discover a predefined match based on their IITB roll number.

> **Disclaimer:** This project is intended solely for educational and demonstration purposes. It is not a real dating platform.

---

## Features

- User registration interface
- Login page
- Forgot password page
- Roll number-based matchmaking
- Responsive and interactive UI
- JSON-based mock database
- Client-side implementation without a backend

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- JSON

---

## Project Structure

```
Dating_website-main/
│
├── assets/
│   ├── backgrounds/
│   ├── gifs/
│   └── images/
│
├── css/
│   └── style.css
│
├── data/
│   ├── login.json
│   └── students.json
│
├── js/
│   ├── script.js
│   └── script_scroll.js
│
├── pages/
│   ├── login.html
│   ├── forgot.html
│   ├── right.html
│   └── scroll_or_swipe.html
│
├── dating.html
└── datingweb_report.pdf
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

### Run the project

The project uses JavaScript's `fetch()` API to read local JSON files, so it should be served through a local web server.

Using Python:

```bash
python -m http.server
```

Open your browser and navigate to:

```
http://localhost:8000/dating.html
```

Alternatively, you can use the **Live Server** extension in Visual Studio Code.

---

## Project Workflow

1. Open the registration page.
2. Enter the required details.
3. Log in using the provided credentials.
4. The application retrieves user information from the JSON database.
5. A predefined match is displayed based on the entered IITB roll number.

---

## Project Highlights

- Clean folder organization
- Interactive user interface
- JSON-driven data handling
- Multiple web pages with navigation
- Simple client-side application architecture
- Easy to understand and extend

---

## Limitations

- No backend server
- No real user authentication
- User data is stored locally in JSON files
- Matchmaking is based on predefined data
- No persistent database

---

## Future Improvements

- Backend integration using Node.js and Express
- MongoDB or MySQL database
- Secure authentication and password hashing
- Dynamic matchmaking algorithm
- User profile editing
- Chat functionality
- Email verification
- Responsive mobile-first redesign

---

## Report

A detailed project report is included in the repository as:

```
datingweb_report.pdf
```

---

## License

This project is intended for educational purposes. You may use or modify it for learning with appropriate attribution.

---

## Author

**Akkshitha**
