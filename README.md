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
    import react from 'eslint-plugin-react'

    export default tseslint.config({
      // Set the react version
      settings: { react: { version: '18.3' } },
      plugins: {
        // Add the react plugin
        react,
      },
      rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    })
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

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Create a pull request.

## License

This project is licensed under the MIT License.# defifundr_landing_page
