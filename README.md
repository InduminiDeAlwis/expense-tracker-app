# 💰 Expense Tracker

A comprehensive full-stack web application for personal finance management. Track expenses, manage budgets, set financial goals, and gain insights into your spending patterns through interactive dashboards and reports.

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node Version](https://img.shields.io/badge/Node-18%2B-green)

## 🚀 Features

### ✅ Core Features
- **User Authentication** - Secure registration, login, and profile management
- **Expense Tracking** - Add, edit, delete, and categorize expenses
- **Income Management** - Track multiple income sources
- **Budget Management** - Set and monitor budgets with real-time alerts
- **Financial Goals** - Set savings goals and track progress
- **Interactive Dashboard** - Visual overview of finances with charts and graphs
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### 🔮 Upcoming Features
- [ ] Receipt photo upload and OCR
- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Data export (CSV/PDF)
- [ ] Email notifications
- [ ] Bank account integration
- [ ] Investment tracking
- [ ] Bill reminders

## 🛠️ Tech Stack

### Frontend
- **React 18+** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Query** for data fetching
- **Zustand** for state management
- **Chart.js/Recharts** for data visualization
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **PostgreSQL** with Prisma ORM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads

### DevOps & Tools
- **Git** for version control
- **GitHub Actions** for CI/CD
- **Vercel/Netlify** for frontend deployment
- **Railway/Render** for backend deployment
- **Sentry** for error monitoring

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (version 12 or higher)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker-app.git
cd expense-tracker-app
```

### 2. Setup Backend
```bash
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your database credentials and JWT secret

# Setup database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Database Studio: `npx prisma studio` (http://localhost:5555)

## 📁 Project Structure

```
expense-tracker-app/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── App.tsx         # Main App component
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # Express.js backend application
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── server.ts       # Express server setup
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   ├── package.json
│   └── .env.example
├── docs/                   # Project documentation
├── README.md
└── .gitignore
```

## 🔧 Environment Variables

### Backend (.env)
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/expense_tracker"

# Authentication
JWT_SECRET="your-super-secret-jwt-key-here"

# Server
PORT=5000
NODE_ENV="development"

# File Upload (Optional)
CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Frontend (.env)
```env
REACT_APP_API_URL="http://localhost:5000/api"
```

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/auth/register    # Register new user
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET  /api/auth/me          # Get current user
```

### Expense Endpoints
```
GET    /api/expenses       # Get user expenses
POST   /api/expenses       # Create new expense
PUT    /api/expenses/:id   # Update expense
DELETE /api/expenses/:id   # Delete expense
```

### Budget Endpoints
```
GET    /api/budgets        # Get user budgets
POST   /api/budgets        # Create new budget
PUT    /api/budgets/:id    # Update budget
DELETE /api/budgets/:id    # Delete budget
```

## 🧪 Testing

### Run Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test

# Run all tests
npm run test:all
```

### Test Coverage
```bash
# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Add environment variables
5. Deploy automatically on push to main

### Backend (Railway)
1. Connect your GitHub repository to Railway
2. Add environment variables
3. Deploy automatically on push to main

### Database (Railway PostgreSQL)
1. Create PostgreSQL database on Railway
2. Update DATABASE_URL in environment variables
3. Run `npx prisma db push` to sync schema

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Write or update tests**
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Message Convention
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please check existing [issues](https://github.com/YOUR_USERNAME/expense-tracker-app/issues) first, then create a new issue with:

### For Bug Reports:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment details

### For Feature Requests:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach

## 📖 Development Guide

### Getting Started
1. Follow the [Complete Beginner's Guide](docs/BEGINNER_GUIDE.md)
2. Check out [API Documentation](docs/API.md)
3. Review [Contributing Guidelines](CONTRIBUTING.md)

### Database Management
```bash
# Reset database
npx prisma db push --force-reset

# View database
npx prisma studio

# Generate Prisma client
npx prisma generate
```

### Code Quality
```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## 📈 Performance

- **Frontend:** Lighthouse score 90+
- **Backend:** Response time <200ms
- **Database:** Optimized queries with proper indexing
- **Security:** OWASP security best practices

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CORS configuration
- Rate limiting
- Secure headers with Helmet

## 📱 Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 🏗️ Development Roadmap

### Phase 1 (MVP) ✅
- [x] User authentication
- [x] Basic expense tracking
- [x] Simple dashboard
- [x] Responsive design

### Phase 2 (Enhanced) 🚧
- [x] Budget management
- [x] Data visualization
- [ ] Advanced reporting
- [ ] Goal tracking

### Phase 3 (Advanced) 📋
- [ ] Receipt upload & OCR
- [ ] Bank integration
- [ ] Mobile app (React Native)
- [ ] Advanced analytics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Thanks to the open-source community for amazing tools and libraries
- Inspired by popular finance apps like Mint, YNAB, and PocketGuard
- Special thanks to contributors and beta testers

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/expense-tracker-app)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/expense-tracker-app)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/expense-tracker-app)
![GitHub pull requests](https://img.shields.io/github/issues-pr/YOUR_USERNAME/expense-tracker-app)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

💡 **Have questions?** Check out our [FAQ](docs/FAQ.md) or create an [issue](https://github.com/YOUR_USERNAME/expense-tracker-app/issues/new).

📧 **Want to contribute?** Read our [Contributing Guide](CONTRIBUTING.md) to get started!