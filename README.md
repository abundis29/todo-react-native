
# Secure Todo App with React Native, Expo, TypeScript

## Project Overview

This project demonstrates the candidate's abilities in various aspects, including code quality, UI/UX, familiarity with Expo and its modules, third-party integrations, and problem-solving. The project requirements align with the coding test's objectives:

## DEMO and how to use the app. 
![Alt text](<2023-10-24 at 21.17.23 - Pink Jay.gif>)


### Why
1. **Enhanced Security**: Implement authentication using Expo's local-authentication module to ensure user identity verification before accessing the TODO list.
2. **Efficient Task Management**: Develop a user-friendly and efficient UI/UX for the TODO list, allowing users to add, update, and delete tasks with eabse.
3. **Structured State Management**: Implement clean and robust state management using Redux to centralize and manage the application's state.
4. **Code Reliability**: Utilize TypeScript for strong typing, enhancing code reliability and maintainability.
5. **Testing for Quality Assurance**: Write unit tests to cover critical application parts, including authentication, state management, and essential functionality.
6. **Seamless Integrations**: Demonstrate familiarity with Expo and its modules, integrating them for a polished user experience.
7. **Third-Party Compatibility**: Show the ability to integrate third-party libraries or native code where necessary to enhance the application's functionality.
8. **Logical Problem Solving**: Approach the project systematically, breaking down requirements, choosing the right architecture, and ensuring user-friendly UI/UX.
9. **Structured Codebase**: Maintain high code quality by following best practices in coding standards, file structure, and separation of concerns.
10. **Comprehensive Documentation**: Provide comprehensive comments and documentation to explain complex logic, authentication flow, state management, and styling.
11. **Cross-Platform Compatibility**: Develop the application for both iOS and Android platforms to reach a wider audience.
12. **Smooth Navigation**: Ensure smooth transitions between authentication and TODO list screens using React Navigation.
13. **Maintainable Styling**: Employ Styled Components to simplify styling, contributing to a maintainable and structured codebase.
14. **Adherence to Store Requirements**: Properly configure the project with essential files (e.g., `package.json` and `app.json`) to ensure compliance with App Store and Play Store requirements.

### What


The project boasts an organized structure, ensuring adherence to industry standards and App Store/Play Store guidelines:

```plaintext
todoApp/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── navigation/
│   ├── reducers/
│   ├── screens/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
├── __tests__/
├── package.json
├── app.json
├── ... (other configuration files)
```

## Authentication and Authorization

### Authentication Flow

- We implement local authentication using Expo's local-authentication module.
- Users are required to authenticate before accessing any Todo features.
- Authentication methods include biometric authentication (fingerprint, face ID), and PIN codes.

### Authorization

- Robust state management controls access to the Todo list based on authentication status.

## Todo List Features

### UI/UX

- The UI/UX focuses on simplicity and user-friendliness, aligning with App Store and Play Store standards.
- Expo modules enhance the user experience.
- A `TodoList.tsx` component efficiently manages tasks with an intuitive interface.
- Expo's `List` component is employed for a polished UI.

### State Management

- Clean and robust state management is achieved using React Native's built-in state management.
- TypeScript adds strong typing, ensuring code reliability and maintainability.

### Unit Tests

- Critical parts of the application are covered by unit tests, utilizing the Jest testing framework.
- Testing focuses on key functions, components, and authentication methods.

### Third-party Integrations

- Native code integrations are demonstrated where necessary.
- Third-party libraries are seamlessly integrated.

## Styling

### Styled Components

- Styled Components simplify styling, contributing to maintainable and structured code.
- Style definitions are organized in separate files, such as `AuthenticationStyles.ts` and `TodoListStyles.ts`.

## Code Quality and Documentation

- The project adheres to high standards for code quality and architecture patterns.
- Comprehensive comments and documentation explain complex logic, authentication flow, state management, and styling.
- Code maintains a balance between simplicity and structure for ease of review and maintenance.



## Project Setup

### Configuration

- The project is properly configured with essential files like `package.json` and `app.json`, ensuring compliance with the App Store and Play Store requirements.

## Installation 🛠

[![CI](https://github.com/abundis29/todo-react-native/actions/workflows/node.js.yml/badge.svg)](https://github.com/abundis29/todo-react-native/actions/workflows/node.js.yml)

Before you begin, ensure you have the following dependencies:

- iOS: Xcode or developer tools
- Android: Android Studio

### Running the Setup

In case of a setup failure on the first attempt, execute the setup command twice:

```bash
npm run setup
```

## Development Specifications

### Task Description & Approach



#### Create the Application Structure

- Establish a bare React Native project with a well-structured directory, including components, screens, navigation, utilities, and tests.

[User Stories](documentation/todo.md)

#### Expo Local Authentication Implementation

- In the `hooks/useBiometricAuthentication` directory, we've created an `useBiometricAuthentication.ts` file to implement local authentication.

This project demonstrates the candidate's expertise in building a secure, user-friendly mobile application with a strong focus on code quality, architecture patterns, and problem-solving.

### Available Scripts

In the project directory, you can utilize the following scripts:

- `start`: Start the development server with Expo.
- `android`: Run the app on an Android emulator or device.
- `ios`: Run the app on an iOS simulator or device.
- `web`: Start the app in a web development environment.
- `test`: Run Jest tests with coverage reports, excluding unchanged files.
- `testDebug`: Run Jest tests in watch mode, including debug output, and exclude coverage reports.
- `setup`: Run the setup script.
- `validate`: Validate the project using expo-doctor, linting, and running tests.
- `postinstall`: Run validation after package installation.
- `testFinal`: Run Jest tests without any specific flags.
- `updateSnapshots`: Update Jest snapshots without coverage reports.
- `lint`: Run ESLint to check your code for code quality and adherence to coding standards.

