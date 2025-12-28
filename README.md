# UniSite - University Placement Portal

A comprehensive web application for university placement management, featuring student authentication, admin dashboards, placement statistics, and integration with Google Sheets for form responses.

## Tech Stack / Technologies Used

### Frontend
- **React** (v19.0.0) - UI framework
- **React Router DOM** (v7.2.0) - Client-side routing
- **Axios** (v1.7.9) - HTTP client for API calls
- **Framer Motion** (v12.6.5) - Animation library
- **GSAP** (v3.12.7) - Animation library
- **AOS** (v2.3.4) - Animate on scroll
- **React Icons** (v5.5.0) - Icon library
- **React Toastify** (v11.0.3) - Notification system
- **React Slideshow Image** (v4.3.2) - Image slideshow component
- **React Countup** (v6.5.3) - Number animation

### Backend
- **Node.js** with **Express** (v4.21.2) - Server framework
- **MongoDB** with **Mongoose** (v8.10.1) - Database and ODM
- **JWT** (v9.0.2) - Authentication tokens
- **bcryptjs** (v3.0.2) - Password hashing
- **CORS** (v2.8.5) - Cross-origin resource sharing
- **Multer** (v1.4.5-lts.1) - File upload handling
- **Formidable** (v3.5.2) - Form parsing
- **Google APIs** (v148.0.0) - Google Sheets integration
- **ExcelJS** (v4.4.0) - Excel file processing
- **XLSX** (v0.18.5) - Excel file handling

### Development Tools
- **React Scripts** (v5.0.1) - Build and development scripts
- **Nodemon** (v3.1.9) - Auto-restart server in development
- **Jest** and **React Testing Library** - Testing framework

## Features

- **User Authentication**: Student and admin login system with JWT-based authentication
- **Admin Dashboard**: Protected admin panel for managing users and data
- **Student Portal**: Access to resources and placement information
- **Placement Statistics**: Display of placement rates and company information
- **Google Sheets Integration**: Fetch and display form responses from Google Sheets
- **Excel Processing**: Upload and filter Excel files for data management
- **Responsive Design**: Mobile-friendly interface with animations
- **Chatbot**: Interactive chatbot for user assistance
- **File Uploads**: Support for uploading documents and Excel files
- **Real-time Notifications**: Toast notifications for user feedback

## Project Folder Structure

```
unisite/
├── public/                    # Static assets
│   ├── index.html            # Main HTML file
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt            # Search engine crawling rules
│   └── images/               # Static images
├── src/                      # React application source
│   ├── Components/           # React components
│   │   ├── About.js          # About page
│   │   ├── AboutTeam.js      # Team information
│   │   ├── AcademicDetails.js # Academic information
│   │   ├── Achievements.js   # Achievements display
│   │   ├── Admin.js          # Admin dashboard
│   │   ├── AdminHeader.js    # Admin navigation header
│   │   ├── AdminLogin.js     # Admin login component
│   │   ├── Cards.jsx         # Card components
│   │   ├── Chatbot.js        # Chatbot component
│   │   ├── ExcelFilterForm.js # Excel filtering interface
│   │   ├── Footer.js         # Site footer
│   │   ├── Header.js         # Main navigation header
│   │   ├── Home.js           # Home page with hero slideshow
│   │   ├── Login.js          # Student login
│   │   ├── Register.js       # Registration component
│   │   ├── Resources.js      # Student resources
│   │   ├── SiteRoutes.js     # Application routing
│   │   ├── StudentLogin.js   # Student login model
│   │   └── ...               # Other components
│   ├── App.js                # Main React app component
│   ├── App.css               # Global styles
│   ├── index.js              # React entry point
│   └── ...                   # Other React files
├── uploads/                  # Uploaded files directory
├── server.js                 # Express server
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshulchawla1408/UniSite.git
   cd unisite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Ensure MongoDB is installed and running on `mongodb://127.0.0.1:27017/unisitedb`
   - The application will automatically create the database and collections

4. **Configure Google Sheets API**:
   - The Google Sheets integration uses a hardcoded API key and spreadsheet ID
   - For production, consider moving these to environment variables

## Environment Variables

The application currently uses hardcoded values for:
- **JWT_SECRET**: `'your_secret_key'` (change this for production)
- **MongoDB URL**: `'mongodb://127.0.0.1:27017/unisitedb'`
- **Google Sheets API Key**: `'AIzaSyCk5bsdzRNAge9OGWhubV7PSTrMb7ozzjc'`
- **Google Sheets ID**: `'1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY'`

For production deployment, create a `.env` file and update the server.js to use `process.env` variables.

## How to Run the Project

### Development Mode

1. **Start the backend server**:
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:9000`

2. **Start the React development server** (in a new terminal):
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:9000

### Production Build

1. **Build the React application**:
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build` folder

2. **Serve the production build**:
   - Configure your production server (e.g., Nginx, Apache) to serve the `build` folder
   - Ensure the backend server is running and accessible

### Testing

Run the test suite:
```bash
npm test
```

## API / Modules Overview

### Authentication APIs
- `POST /api/login` - User authentication
- `GET /api/users` - List all users (admin only)

### Data APIs
- `GET /api/form-responses` - Fetch data from Google Sheets
- `POST /api/filter-excel` - Upload and filter Excel files

### Key Components
- **UserContext**: Manages user authentication state across the app
- **SiteRoutes**: Handles client-side routing with protected routes
- **Admin Dashboard**: Provides admin-specific functionality
- **Chatbot**: Interactive assistance component

## Future Improvements or Roadmap

- Implement environment variable configuration
- Add user registration functionality
- Enhance security with proper password policies
- Add more comprehensive testing
- Implement real-time notifications
- Add data visualization for placement statistics
- Integrate with more external APIs
- Add user profile management
- Implement role-based access control
- Add logging and monitoring

## Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).


Made with ❤️ by [Harshul Chawla](https://github.com/harshulchawla1408)