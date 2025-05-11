Here's a comprehensive README.md for our DocOnDwaar project:

Live Project link:https://docondwaar-client.onrender.com/

Demo video:https://drive.google.com/file/d/1gLp_KCHx9QhMp9e89fKT2N5fw6yZoGXX/view?usp=drive_link

Screenshot:
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 03 19](https://github.com/user-attachments/assets/cf35edca-75b2-4742-9a7f-faf03449786f)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 1 - Home Page</figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 03 21 (1)](https://github.com/user-attachments/assets/696f72a0-4636-4aaa-bac5-ee1c57edca29)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 2 - Our Specialities</figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 03 20 (3)](https://github.com/user-attachments/assets/a8b6b060-7910-42fd-a433-f830ddd66b22)

" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 3 - Patient Dashboard And Book Appointment</figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 03 19 (2)](https://github.com/user-attachments/assets/fedd1409-ef55-4da9-9113-e07790755622)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 4 - AI Multilingual Doctor </figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 03 19 (1)](https://github.com/user-attachments/assets/546969a0-a452-4383-943a-dfd947e98bb4)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 5 -AI Multilingual Doctor Diagnosis</figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 03 20 (1)](https://github.com/user-attachments/assets/c6721084-dbff-4e60-9b62-2a85df69602c)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 6 - Payment Gateway</figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 05 19 (1)](https://github.com/user-attachments/assets/6078b10c-e769-4b2d-b8f9-906670929789)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 7 - Consulation with doctor</figcaption>
</figure>
<figure>
  <img src="![WhatsApp Image 2025-05-11 at 23 49 44](https://github.com/user-attachments/assets/62a5f462-8cde-4887-9a20-17fa14400b9f)
" alt="Specialty Filter Feature"/>
  <figcaption>Fig. 8 -Find Nearby Location</figcaption>
</figure>
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

## Screenshots

| Homepage | Patient Dashboard | Specialities |
|----------|------------------|--------------|
| ![Homepage](![WhatsApp Image 2025-05-11 at 23 03 19](https://github.com/user-attachments/assets/6e074455-e4c3-4e6f-94cb-b84d7949800b)
) | ![Dashboard](![WhatsApp Image 2025-05-11 at 23 03 20 (3)](https://github.com/user-attachments/assets/4eb33033-afb4-4438-b68d-7b05e0ac3d0b)
) | ![Specialities](![WhatsApp Image 2025-05-11 at 23 03 21 (1)](https://github.com/user-attachments/assets/81a23fd6-9caa-41ec-b8c9-1ca6f68682bc)
) |

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
