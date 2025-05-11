Here's a comprehensive README.md for our DocOnDwaar project:

Live Project link:https://docondwaar-client.onrender.com/

Demo video:https://drive.google.com/file/d/1gLp_KCHx9QhMp9e89fKT2N5fw6yZoGXX/view?usp=drive_link

Screenshot:
![Fig. 1 - Home Page](![WhatsApp Image 2025-05-11 at 23 03 19](https://github.com/user-attachments/assets/c9bbbdd7-c152-4aef-ba14-fe887952b2b5)
)
![Fig. 2 - Our Specialities](![WhatsApp Image 2025-05-11 at 23 03 21 (1)](https://github.com/user-attachments/assets/db29240c-9530-42c9-9f7d-f1840568b06d)
)
)
![Fig. 3 - Patient Dashboard And Book Appointment](![WhatsApp Image 2025-05-11 at 23 03 20 (3)](https://github.com/user-attachments/assets/36f13bb8-74da-4bfe-abe5-9857320394fa)
)
)
![Fig. 4 - AI Multilingual Doctor](![WhatsApp Image 2025-05-11 at 23 03 19 (2)](https://github.com/user-attachments/assets/8d75de1e-541e-4a20-94af-d8bcd175126b)
)
)
![Fig. 5 -AI Multilingual Doctor Diagnosis](![WhatsApp Image 2025-05-11 at 23 03 19 (1)](https://github.com/user-attachments/assets/aa02ac54-6f02-4e49-b0c0-4b26ce5f43e4)
)
)
![Fig. 6 - Payment Gateway](![WhatsApp Image 2025-05-11 at 23 03 20 (1)](https://github.com/user-attachments/assets/73ba3c77-7ada-4d59-8f33-b575f539c980)
)
)
![Fig. 7 - Consulation with doctor](![WhatsApp Image 2025-05-11 at 23 05 19 (1)](https://github.com/user-attachments/assets/03e98fd7-b9ab-4d0a-85e5-c860d01f47dc)
)
)
![Fig. 8 -Find Nearby Location](![WhatsApp Image 2025-05-11 at 23 49 44](https://github.com/user-attachments/assets/da73a0b5-6800-4dbe-93ad-0caa2b768368)
)
)
)

```markdown
# DocOnDwaar - Medical Healthcare Platform

![DocOnDwaar Logo](public/logo.png) <!-- Add your logo path here -->

A React-based healthcare platform inspired by Medanta's UI/UX, featuring a modern red and white theme with patient-centric components and services.

## Features

- **Patient Portal**: Dashboard and symptom checker
- **Doctor Search**: Find specialists by department or symptoms
- **Health Library**: Medical information repository
- **Quick Services**: Easy access to common healthcare services
- **Responsive Design**: Mobile-friendly interface
- **Secure Authentication**: Login/signup with validation

## Live Demo

[View Live Demo](https://docondwaar-client.onrender.com/) <!-- Add your deployment URL -->

## Technology Stack

**Frontend:**
- React 18
- React Router 6
- Tailwind CSS
- PostCSS
- Axios (for API calls)

**Backend:**
- Node.js (in development)
- Express.js
- MongoDB (planned)

## Project Structure

```
DocOnDwaar/
├── build/                   # Production build
├── public/                  # Static assets
│   ├── index.html
│   ├── favicon.ico
│   └── assets/              # Images, fonts, etc.
├── src/
│   ├── components/          # Reusable UI components
│   ├── patient/             # Patient portal components
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── contexts/            # React contexts
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
├── server/                  # Backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env.example             # Environment variables template
├── package.json
└── tailwind.config.js       # Tailwind configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/DocOnDwaar.git
   cd DocOnDwaar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run the development server:
   ```bash
   npm start
   ```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Creates a production build
- `npm test`: Runs the test suite
- `npm run lint`: Runs ESLint
- `npm run serve`: Starts the backend server (in development)

## Development Guidelines

1. **Component Structure**:
   - Each component has its own directory with JS and CSS files
   - Follow the `PascalCase` naming convention for components

2. **Styling**:
   - Use Tailwind CSS for utility classes
   - For complex styles, use CSS modules
   - Maintain color consistency using the theme colors

3. **State Management**:
   - Use React hooks for local state
   - Use Context API for global state
   - Consider Redux for complex state (future implementation)

## API Integration

The frontend communicates with these endpoints:

| Service | Endpoint | Method | Description |
|---------|----------|--------|-------------|
| Auth | `/api/auth/login` | POST | User login |
| Auth | `/api/auth/register` | POST | User registration |
| Doctors | `/api/doctors` | GET | List all doctors |
| Appointments | `/api/appointments` | POST | Create appointment |

## Deployment

### Frontend Deployment (Vercel/Netlify)
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Backend Deployment (Render/Heroku)
1. Set Node.js environment
2. Add MongoDB connection string
3. Set start command: `node server/server.js`

## Contributors

- ([Priyanka Kumari](https://github.com/11PRIA))
- ([Prateeksha Yadav](https://github.com/prateeksha-yadav))
- ([Shiwangi Verma](https://github.com/Sh1wang1))
- ([Harshita Maheshwari](https://github.com/harshitamaheshwari123))

## Acknowledgments

- Medanta UI/UX for inspiration
- React community for excellent documentation
- Tailwind CSS for utility-first framework
```
