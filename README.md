# Defifundr Setup Instructions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a code editor like Visual Studio Code installed.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Branch and Commit Conventions

### Branch Naming Convention

Always create branches from the `develop` branch with the following conventions:

- For new features:

  ```sh
  git checkout develop
  git checkout -b feature/descriptive_feature_name
  ```

  Example: `git checkout -b feature/create_hero_section`

- For bug fixes:
  ```sh
  git checkout develop
  git checkout -b fix/descriptive_fix_name
  ```
  Example: `git checkout -b fix/login_error_handling`

### Commit Message Convention

Use descriptive commit messages with the following format:

- For features:

  ```sh
  git commit -m "feature: brief description of the feature"
  ```

  Example: `git commit -m "feature: add responsive navigation component"`

- For fixes:
  ```sh
  git commit -m "fix: brief description of the fix"
  ```
  Example: `git commit -m "fix: resolve login authentication error"`

### Pull Request Guidelines

- Always compare your pull request against the `staging` branch, NOT `main`
- Ensure your branch is up to date with the `develop` branch before creating a pull request

## ESLint Configuration

1. Install ESLint and TypeScript ESLint:
   ```sh
   npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
   ```
2. Optionally add `...tseslint.configs.stylisticTypeChecked`
3. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:
   ```sh
   npm install eslint-plugin-react --save-dev
   ```
4. Create or update `eslint.config.js`:
   ```js
   // eslint.config.js
   import react from "eslint-plugin-react";
   export default tseslint.config({
     // Set the react version
     settings: { react: { version: "18.3" } },
     plugins: {
       // Add the react plugin
       react,
     },
     rules: {
       // other rules...
       // Enable its recommended rules
       ...react.configs.recommended.rules,
       ...react.configs["jsx-runtime"].rules,
     },
   });
   ```

## Running the Project

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Running Tests

1. Run the tests:
   ```sh
   npm test
   ```

## Contributing

To contribute to this project, please follow these steps:

1. Ensure you're on the `develop` branch
2. Pull the latest changes
3. Create a new branch following the naming conventions
4. Make your changes and commit with the specified commit message format
5. Push to the branch:
   ```sh
   git push origin feature/your_feature_name
   ```
6. Create a pull request targeting the `staging` branch

## Project Structure

├── .env # Environment variables (DO NOT commit)
├── .gitignore # Files and folders ignored by git
├── eslint.config.js # ESLint configuration for code linting
├── index.html # Root HTML template
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration for styling
├── README.md # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite bundler configuration
├── vercel.json # Vercel deployment configuration
├── /public # Static files served directly
│ └── vite.svg # Example static asset
└── /src # Main source code
├── assets # Static files such as fonts, images, JSON data
│ ├── fonts # Custom fonts used in the project
│ └── svg.tsx # SVG icons or components
├── components # Reusable UI components
│ ├── common # Common components (buttons, inputs, etc.)
│ ├── modals # Modal components
│ └── tabs # Tab components
├── guards # Route guards (e.g., authentication,permissions)
├── types # TypeScript type definitions and interfaces
│ └── interface.ts # Export all interfaces from here
├── layout # Layout components (e.g., dashboard layouts)
│ └── dashboard-layout # Dashboard layout wrapper
├── page # Page components, each represents a route
│ └── home.tsx # Example homepage component
├── routes # Route configurations for React Router
├── utils # Utility functions and helpers
│ ├── formatDate.ts # Date formatting utility
│ └── animations.ts # Framer Motion variants and animations
├── App.tsx # Root component of the app
├── index.css # Global CSS and Tailwind base styles
├── main.tsx # Main entry point rendering the app
└── vite-env.d.ts # Vite environment types

## Folder & File Naming Conventions

Components: Use PascalCase (e.g., LoginForm.tsx)

Utilities & Hooks: Use camelCase (e.g., formatDate.ts)

Pages: Use lowercase for the file name (e.g., home.tsx)

Interfaces & Types: Defined inside /src/types, exported from interface.ts

## License

## Notes

Empty folders (e.g., src/guard) can include a .gitkeep file to ensure they are tracked by Git until content is added. delect the .gitkeep file if you add a new file to an empty folder .

This project is licensed under the MIT License.
