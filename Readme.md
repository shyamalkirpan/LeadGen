# LeadGen

A modern lead generation application built with Next.js, React, and Drizzle ORM.

## 🚀 Features

- Modern UI with Tailwind CSS and Radix UI components
- Form handling with React Hook Form and Zod validation
- Database integration with Drizzle ORM and Neon Database
- Dark/Light theme support
- Responsive design
- Type-safe development

## 🛠️ Tech Stack

- **Framework:** Next.js 15.3.1
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Database:** Neon Database (PostgreSQL)
- **ORM:** Drizzle ORM
- **Form Handling:** React Hook Form + Zod
- **State Management:** TanStack Query
- **UI Components:** Radix UI
- **Package Manager:** Bun

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- Bun package manager
- PostgreSQL database (or Neon Database account)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd leadgen
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL=your_database_url
   ```

4. Run database migrations:
   ```bash
   bun drizzle-kit push
   ```

5. Seed the database (optional):
   ```bash
   bun run seed
   ```

6. Start the development server:
   ```bash
   bun run dev
   ```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/          # Next.js app directory
├── components/   # Reusable React components
├── db/          # Database configuration and migrations
└── lib/         # Utility functions and shared code
```

## 🛠️ Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint
- `bun run seed` - Seed the database with initial data

## 🔧 Development

### Database Migrations

To create a new migration:
```bash
bun drizzle-kit generate
```

To apply migrations:
```bash
bun drizzle-kit push
```

### Code Style

This project uses ESLint for code linting. Run the linter with:
```bash
bun run lint
```

## 📝 License

This project is licensed under the terms of the license included in the repository.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For support, please open an issue in the repository or contact the maintainers.
