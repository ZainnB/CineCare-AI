# 🏥 CineCare AI - Cinematic Medical Assistant

A modern, AI-powered medical assistant web application built with Next.js and designed for seamless healthcare management. Features a cinematic dark-mode interface with comprehensive health record management, appointment scheduling, prescription tracking, and an intelligent AI assistant.

![CineCare AI Dashboard](https://via.placeholder.com/800x400/667eea/ffffff?text=CineCare+AI+Dashboard)

## ✨ Features

- 🎨 **Cinematic Dark UI** - Beautiful glass effects and gradient themes
- 🔐 **Secure Authentication** - User login/registration with session management
- 📊 **Health Dashboard** - Comprehensive health overview and statistics
- 📋 **Health Records** - Vital signs, medical history, and report management
- 📅 **Appointment Management** - Schedule and track medical appointments
- 💊 **Prescription Tracking** - Medication management with refill reminders
- ⏰ **Smart Reminders** - Customizable health and medication reminders
- 🤖 **AI Assistant** - Intelligent chat interface (Gemini API ready)
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🚀 **FastAPI Ready** - Backend integration prepared

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern UI components
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form management
- **Zustand** - State management (optional)

### Backend (Ready for Integration)
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM
- **PostgreSQL** - Primary database
- **Redis** - Caching and sessions
- **Gemini AI** - AI assistant integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**
- **Python 3.8+** (for backend development)
- **PostgreSQL** (for production database)

### Check Your Versions
\`\`\`bash
node --version    # Should be v18+
npm --version     # Should be 8+
python --version  # Should be 3.8+
git --version     # Any recent version
\`\`\`

## 🚀 Quick Start

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/cinecare-ai.git
cd cinecare-ai
\`\`\`

### 2. Install Dependencies
\`\`\`bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
\`\`\`

### 3. Environment Setup
Create a `.env.local` file in the root directory:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add the following environment variables:
\`\`\`env
# App Configuration
NEXT_PUBLIC_APP_NAME="CineCare AI"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database (for future backend integration)
DATABASE_URL="postgresql://username:password@localhost:5432/cinecare_db"

# Authentication (for future integration)
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# AI Integration (for future Gemini API)
GEMINI_API_KEY="your-gemini-api-key"

# Backend API URL (when you set up FastAPI)
NEXT_PUBLIC_API_URL="http://localhost:8000"
\`\`\`

### 4. Run the Development Server
\`\`\`bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
\`\`\`

### 5. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

**Demo Login Credentials:**
- Email: `demo@cinecare.ai`
- Password: `demo123`

## 📁 Project Structure

\`\`\`
cinecare-ai/
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page (redirects)
│   ├── login/                   # Authentication pages
│   ├── register/
│   ├── dashboard/               # Main dashboard
│   ├── records/                 # Health records
│   ├── appointments/            # Appointment management
│   ├── prescriptions/           # Prescription tracking
│   ├── reminders/               # Reminder management
│   └── assistant/               # AI chat interface
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui components
│   ├── layouts/                 # Layout components
│   ├── app-button.tsx           # Custom button component
│   ├── app-card.tsx             # Custom card component
│   ├── input-field.tsx          # Form input component
│   ├── page-header.tsx          # Page header component
│   ├── empty-state.tsx          # Empty state component
│   ├── hint-tooltip.tsx         # Tooltip component
│   └── section.tsx              # Section wrapper
├── contexts/                     # React contexts
│   └── auth-context.tsx         # Authentication context
├── services/                     # API service layers
│   ├── auth.ts                  # Authentication services
│   └── mock-data.ts             # Mock data for development
├── constants/                    # App constants
│   └── app-constants.ts         # Application constants
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── hooks/                       # Custom React hooks
├── types/                       # TypeScript type definitions
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
\`\`\`

## 🎨 Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Testing (when implemented)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Database (for future backend)
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
\`\`\`

## 🔧 Development Workflow

### 1. Frontend Development
\`\`\`bash
# Start the development server
npm run dev

# In another terminal, watch for type errors
npm run type-check -- --watch

# Run linting
npm run lint
\`\`\`

### 2. Adding New Components
\`\`\`bash
# Create a new component
touch components/my-component.tsx

# Add to the component export
echo "export { MyComponent } from './my-component'" >> components/index.ts
\`\`\`

### 3. Adding New Pages
\`\`\`bash
# Create a new page directory
mkdir app/my-page

# Create the page component
touch app/my-page/page.tsx
\`\`\`

## 🐍 Backend Setup (FastAPI Integration)

### 1. Create Backend Directory Structure
\`\`\`bash
# Create backend directory (in project root)
mkdir backend
cd backend

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Create directory structure
mkdir -p {app,app/api,app/core,app/models,app/schemas,app/services,app/db,tests,alembic}
\`\`\`

### 2. Backend Directory Structure
\`\`\`
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                  # FastAPI app entry point
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py            # App configuration
│   │   ├── security.py          # Authentication & security
│   │   └── database.py          # Database connection
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py              # API dependencies
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── api.py           # API router
│   │       └── endpoints/
│   │           ├── __init__.py
│   │           ├── auth.py      # Authentication endpoints
│   │           ├── users.py     # User management
│   │           ├── records.py   # Health records
│   │           ├── appointments.py
│   │           ├── prescriptions.py
│   │           ├── reminders.py
│   │           └── assistant.py # AI assistant
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py              # User model
│   │   ├── health_record.py     # Health records model
│   │   ├── appointment.py       # Appointment model
│   │   ├── prescription.py      # Prescription model
│   │   └── reminder.py          # Reminder model
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── user.py              # User schemas
│   │   ├── health_record.py     # Health record schemas
│   │   └── ...                  # Other schemas
│   ├── services/
│   │   ├── __init__.py
│   │   ├── auth_service.py      # Authentication logic
│   │   ├── user_service.py      # User business logic
│   │   ├── ai_service.py        # AI integration
│   │   └── ...                  # Other services
│   └── db/
│       ├── __init__.py
│       ├── base.py              # Database base
│       └── session.py           # Database session
├── alembic/                     # Database migrations
├── tests/                       # Test files
├── requirements.txt             # Python dependencies
├── .env                         # Environment variables
└── README.md                    # Backend documentation
\`\`\`

### 3. Install Backend Dependencies
\`\`\`bash
# Create requirements.txt
cat > requirements.txt << EOF
fastapi==0.104.1
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
alembic==1.12.1
psycopg2-binary==2.9.9
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
pydantic==2.5.0
pydantic-settings==2.1.0
redis==5.0.1
google-generativeai==0.3.2
python-dotenv==1.0.0
pytest==7.4.3
httpx==0.25.2
EOF

# Install dependencies
pip install -r requirements.txt
\`\`\`

### 4. Create Basic FastAPI App
```python
# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.core.config import settings

app = FastAPI(
    title="CineCare AI API",
    description="Backend API for CineCare AI Medical Assistant",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(api_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "CineCare AI API is running!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
