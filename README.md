# airSlate auth
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae702690-e972-4d10-b116-6db4dc825c3d/deploy-status)](https://app.netlify.com/sites/airslate-auth/deploys)

airSlate Auth is a simple authentication application created as a pet project to showcase my skills in frontend development. The project demonstrates user authentication features with modern tools and technologies.

## Features

- Three main pages: **Home**, **Login**, and **Registration**.
- Seamless navigation between pages using React Router.
- A **Login** form with:
  - Email and password input fields.
  - Validation for user inputs.
- Built with scalable, modern technologies and architecture.
- Future improvements:
  - Firebase integration for authentication and user management.
  - Redux Toolkit for state management.

## Technologies Used

- **TypeScript**: For type-safe JavaScript development.
- **ReactJS**: As the core library for building user interfaces.
- **React Hooks**: To manage state and side effects.
- **React Hook Form**: For form validation and handling.
- **Redux**: For managing global application state.
- **React Router**: For client-side routing.
- **Firebase**: Planned integration for backend services.
- **Vite**: For fast development and bundling.
- **Netlify**: For deploying the application and hosting.

## Project Structure

The project follows the **Atomic Design** methodology, organizing components into a scalable structure for maintainable development:

- **Atoms**: Basic building blocks like buttons, inputs, and labels.  
- **Molecules**: Small components made of multiple atoms, like form fields or card components.  
- **Organisms**: More complex components made of molecules and/or atoms, such as navigation bars or forms.  
- **Templates**: Page layouts combining multiple organisms.  
- **Pages**: Final, route-specific components combining templates and data.

This approach ensures reusability, consistency, and a clear hierarchy in the application.

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/airSlate-auth.git
cd airSlate-auth
```

2. **Install dependencies:**
```
npm install
# or
yarn install
```

3. **Start the development server:**
```
npm run dev
# or
yarn dev
```

4. **Open the application in your browser:**
```
http://localhost:5173
```

### Future Enhancements
- **Firebase Integration**: Enable secure authentication and user data storage.
- **Redux Toolkit**: Streamline state management across the app.

### Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
