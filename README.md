# ClassCheck — Student Attendance Mobile App

A **React Native** mobile application for automated student attendance tracking powered by **facial recognition**. Students log in, view their attendance history, check class schedules, and see their real-time attendance status — all driven by an AWS cloud backend that recognizes faces via **Amazon Rekognition**.

This project was developed as a college study on mobile development, cloud computing (AWS), facial recognition, and serverless architectures.

---

## Table of Contents

- [About ClassCheck](#about-classcheck)
- [System Architecture](#system-architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [AWS Backend](#aws-backend)
- [Getting Started](#getting-started)
- [App Screens](#app-screens)
- [API Endpoints](#api-endpoints)
- [Related Repositories](#related-repositories)
- [Credits](#credits)

---

## About ClassCheck

ClassCheck is an automated attendance management system designed for university classrooms. The system works in three stages:

1. **Image Capture** — An Arduino-based device or browser camera captures a photo of the student
2. **Facial Recognition** — The photo is sent to a Flask API that uses AWS Rekognition to compare the face against reference photos stored in S3. If a match is found, attendance is registered in DynamoDB
3. **Mobile App** *(this repository)* — Students use the ClassCheck mobile app to view their attendance records, class schedule, and real-time status

Additionally, an AWS Step Functions pipeline automatically marks students as absent if they were not recognized during class time.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        ClassCheck System                            │
│                                                                     │
│  ┌───────────────────┐          ┌────────────────────────────┐      │
│  │  Arduino Device   │          │  Browser Camera            │      │
│  │  (Java / Python)  │          │  (Web UI)                  │      │
│  └────────┬──────────┘          └──────────┬─────────────────┘      │
│           │                                │                         │
│           │  POST /photos (image)          │                         │
│           └────────────┬───────────────────┘                         │
│                        ▼                                             │
│             ┌─────────────────────┐                                  │
│             │  Flask API          │                                  │
│             │  ( facial recog. )  │                                  │
│             └────────┬────────────┘                                  │
│                      │                                               │
│          ┌───────────┼───────────┐                                   │
│          ▼           ▼           ▼                                   │
│   ┌────────────┐ ┌─────────┐ ┌──────────────┐                      │
│   │  AWS S3    │ │  AWS    │ │  DynamoDB    │                      │
│   │  (photos)  │ │  Rekog. │ │  (students,  │                      │
│   └────────────┘ └─────────┘ │   calendar)  │                      │
│                               └──────┬───────┘                      │
│                                      │                              │
│              ┌───────────────────────┤                              │
│              ▼                       ▼                              │
│   ┌──────────────────┐    ┌───────────────────┐                    │
│   │  AWS Step Fn     │    │  This App         │                    │
│   │  (mark absent)   │    │  (React Native)   │                    │
│   └──────────────────┘    │  Student Mobile   │                    │
│                           └───────────────────┘                    │
│                              │                                      │
│                              ▼                                      │
│                    ┌──────────────────┐                             │
│                    │  AWS Amplify     │                             │
│                    │  (Cognito Auth)  │                             │
│                    │  (API Gateway)   │                             │
│                    └──────────────────┘                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Features

- **Authentication** — Secure login via AWS Cognito with email verification and password management
- **Attendance Dashboard** — Real-time status showing if the student is Present, Absent, or Waiting
- **Attendance History** — Complete record of all classes with dates, times, and presence status
- **Class Calendar** — Visual calendar highlighting scheduled class days
- **Student Profile** — View and manage student profile information
- **Push Notifications** — Firebase Cloud Messaging integration for attendance alerts
- **Offline Support** — Async storage and caching for data persistence

---

## Tech Stack

### Mobile App

| Technology | Version | Purpose |
|------------|---------|---------|
| [React Native](https://reactnative.dev/) | 0.71.8 | Cross-platform mobile framework |
| [Expo](https://expo.dev/) | ~48.0 | Development platform and tooling |
| [TypeScript](https://www.typescriptlang.org/) | ^5.0 | Type-safe JavaScript |
| [React Navigation](https://reactnavigation.org/) | 6.x | Stack and tab-based navigation |
| [styled-components](https://styled-components.com/) | ^5.3 | CSS-in-JS styling |
| [AWS Amplify](https://aws.amazon.com/amplify/) | ^5.2 | AWS SDK for React Native |
| [react-native-calendars](https://github.com/wix/react-native-calendars) | ^1.1295 | Calendar component |
| [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) | ^9.2 | Ionicons icon set |

### AWS Services

| Service | Purpose |
|---------|---------|
| **Amazon Cognito** | User authentication (signup, login, password reset) |
| **API Gateway** | REST API endpoints for student data |
| **Amazon DynamoDB** | Student records (`Aluno`) and class schedule (`Calendario`) |
| **Amazon S3** | Student reference photo storage |
| **Amazon Rekognition** | Facial comparison and matching |
| **AWS Lambda** | Serverless functions behind API Gateway |
| **AWS Step Functions** | Automated absent-marking pipeline |

---

## Project Structure

```
study-university-ClassCheck/
├── App.tsx                          # Root component — Amplify config, context providers
├── index.js                         # App entry point
├── app.json                         # Expo app configuration
├── babel.config.js                  # Babel transpilation config
├── metro.config.js                  # Metro bundler config
├── tsconfig.json                    # TypeScript configuration
├── .eslintrc.js                     # ESLint rules (Airbnb + TypeScript)
├── .prettierrc                      # Prettier formatting config
├── package.json                     # Dependencies and scripts
│
├── amplify/                         # AWS Amplify backend configuration
│   ├── cli.json                     # Amplify CLI settings
│   ├── team-provider-info.json      # AWS account/region info
│   └── backend/                     # Backend resources
│       ├── backend-config.json      # Cognito, API Gateway, Lambda definitions
│       ├── api/                     # API Gateway + Lambda source code
│       └── auth/                    # Cognito User Pool configuration
│
├── src/
│   ├── api/
│   │   └── classCheckServices.ts    # API client — Amplify API calls + DynamoDB converter
│   │
│   ├── assets/
│   │   ├── fonts/                   # Custom fonts (Lato, Montserrat)
│   │   ├── Images/                  # Static images (profiles, icons, backgrounds)
│   │   └── SVGs/                    # SVG components (icons, illustrations)
│   │
│   ├── context/
│   │   └── context.ts               # React Context (SigninContext, InfoContext)
│   │
│   ├── global/
│   │   ├── container/
│   │   │   └── container.ts         # Shared styled-component container
│   │   ├── navigation/
│   │   │   └── navigation.tsx       # Root navigator — Stack + Tab navigation
│   │   └── toast/
│   │       └── toastProvider.ts      # Toast notification helper
│   │
│   ├── screens/
│   │   ├── Login/                   # Authentication screens
│   │   │   ├── loginPage.tsx        # Main login screen
│   │   │   ├── WorkingPage.tsx      # Under development placeholder
│   │   │   ├── styles.ts            # Login styles
│   │   │   └── components/
│   │   │       └── PasswordChange/  # Password change/reset flow
│   │   │
│   │   ├── Home/                    # Home dashboard
│   │   │   ├── homePage.tsx         # Main screen with attendance info
│   │   │   ├── styles.ts
│   │   │   └── components/
│   │   │       ├── CarouselSlide/   # Slide component for announcements
│   │   │       └── CarouselWrapper/ # Carousel container
│   │   │
│   │   ├── Historico/               # Attendance history
│   │   │   ├── historicoPage.tsx    # List of attendance records
│   │   │   ├── styles.ts
│   │   │   └── components/
│   │   │       └── dinamicHeader.tsx # Dynamic header component
│   │   │
│   │   ├── Perfil/                  # Student profile
│   │   │   ├── perfilPage.tsx       # Profile view with student info
│   │   │   ├── styles.ts
│   │   │   └── components/
│   │   │       └── ProfilePicture/  # Profile picture component
│   │   │
│   │   ├── Calendario/              # Class calendar
│   │   │   ├── calendarioPage.tsx   # Calendar with marked class days
│   │   │   └── styles.ts
│   │   │
│   │   ├── Status/                  # Attendance status screens
│   │   │   ├── presente.tsx         # Green — Student recognized as present
│   │   │   ├── aguarde.tsx          # Yellow — Waiting for recognition
│   │   │   ├── ausente.tsx          # Orange — Marked as absent
│   │   │   └── styles.ts
│   │   │
│   │   └── Sobre/                   # About page
│   │       ├── about.tsx            # App info and credits
│   │       └── styles.ts
│   │
│   └── utils/
│       └── daysHelper.ts            # Date/day utilities, calendar helpers
│
└── android/                         # Android native project (React Native build)
```

---

## AWS Backend

### Authentication (Amazon Cognito)

- **User Pool:** `classcheck` — manages student accounts
- **Signup attributes:** Email, Name
- **Password policy:** Minimum 8 characters, requires uppercase, lowercase, numbers, and symbols
- **Verification:** Email with verification code (subject: "Código de Verificação")
- **Unauthenticated access:** Allowed (for guest browsing)

### API (API Gateway — REST)

The API is exposed through AWS Amplify as `classcheckapi`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/informacoes/calendario` | Fetches class schedule/calendar dates |
| `GET` | `/informacoes/{matricula}` | Fetches student info by registration number |

### DynamoDB Tables

#### Calendario (Class Schedule)

| Key | Type | Description |
|-----|------|-------------|
| `lista-dias-aulas` (PK) | String | Day of week in Portuguese (`segunda`, `terça`, etc.) |
| `horario` | String | Class start time (`HH:MM`) |

#### Aluno (Student)

| Key | Type | Description |
|-----|------|-------------|
| `matricula` (PK) | String | Student registration number |
| `historico` | List | Array of attendance records |
| `historico[].data` | String | Date (`DD/MM/YYYY`) |
| `historico[].dia` | String | Day of week in Portuguese |
| `historico[].hora` | String | Check-in time (`HH:MM`) |
| `historico[].id_historico` | String | Sequential history entry ID |
| `historico[].presente` | Boolean | Attendance status |

---

## Getting Started

### Prerequisites

- **Node.js** 16+ and **npm**
- **React Native development environment** ([setup guide](https://reactnative.dev/docs/environment-setup))
- **Android Studio** (for Android emulator) or a physical Android device
- **Xcode** (for iOS, macOS only)
- **AWS Amplify CLI** — install with `npm install -g @aws-amplify/cli`
- An **AWS account** with Amplify backend deployed

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:WagnerCaetano/study-university-ClassCheck.git
   cd study-university-ClassCheck
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up AWS Amplify:**
   ```bash
   amplify init
   amplify pull
   ```
   This will generate the `aws-exports.js` file with your backend configuration.

4. **Start the development server:**
   ```bash
   npm start
   # or
   npx expo start --dev-client
   ```

5. **Run on a device or emulator:**
   ```bash
   # Android
   npm run android

   # iOS (macOS only)
   npm run ios
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev client |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator (macOS only) |
| `npm run web` | Run in web browser |
| `npm run lint` | Run TypeScript compiler + ESLint |
| `npm run prettier:write` | Format all source files |

---

## App Screens

### Navigation Flow

```
Login ──▶ Home (Tab Navigator)
              ├── Home Tab (Dashboard)
              ├── Histórico Tab (Attendance History)
              └── Perfil Tab (Student Profile)
              │
              ├── Calendario (Stack)
              ├── Status Screens (Stack)
              │   ├── Presente (Green)
              │   ├── Aguarde (Yellow)
              │   └── Ausente (Orange)
              ├── Sobre (Stack)
              └── Password Change (Stack)
```

### Screen Details

| Screen | Description |
|--------|-------------|
| **Login** | Cognito-based authentication with email/password |
| **Home** | Dashboard showing next class info, attendance status, and announcements carousel |
| **Histórico** | Scrollable list of all attendance records with date, time, and presence status |
| **Perfil** | Student profile with name, registration number, and profile picture |
| **Calendário** | Interactive calendar with class days highlighted in green |
| **Status: Presente** | Green confirmation screen — student was recognized |
| **Status: Aguarde** | Yellow waiting screen — awaiting recognition |
| **Status: Ausente** | Orange absence screen — student was not recognized |
| **Sobre** | About page with app information and team credits |
| **Password Change** | Password reset flow for account management |

---

## API Endpoints

### Client Service (`src/api/classCheckServices.ts`)

The app communicates with the backend through AWS Amplify's API module:

```typescript
// Get class calendar dates
getClassDate() → API.get('classcheckapi', '/informacoes/calendario', {})

// Get student info by registration number
getInfoAluno(matricula) → API.get('classcheckapi', '/informacoes/' + matricula, {})
```

The service also includes a `convertDynamoDBToJson()` utility that transforms raw DynamoDB attribute types (S, N, BOOL, L, M) into plain JavaScript objects.

---

## Related Repositories

These repositories form the complete **ClassCheck** system:

| Repository | Description |
|------------|-------------|
| **[study-university-ClassCheck](https://github.com/WagnerCaetano/study-university-ClassCheck)** *(this repo)* | React Native mobile app — student-facing attendance tracker |
| **[study-facial-recognition-aws](https://github.com/WagnerCaetano/study-facial-recognition-aws)** | Flask API with AWS Rekognition — receives photos, performs facial recognition, registers attendance |
| **[study-imagine-capture-arduino](https://github.com/WagnerCaetano/study-imagine-capture-arduino)** | Arduino + Java desktop app — captures student images via serial communication and sends to the API |
| **[study-lambda-step-function-AWS](https://github.com/WagnerCaetano/study-lambda-step-function-AWS)** | AWS Lambda + Step Functions — automatically marks students as absent after class ends |

### How They Connect

```
Arduino captures image  ──▶  Flask API recognizes face  ──▶  DynamoDB stores attendance
                                                                    │
Step Functions mark absents  ◀─────────────────────────────────────┤
                                                                    │
ClassCheck Mobile App  ◀──────────── API Gateway  ◀────────────────┘
(student views status)         (reads attendance data)
```

---

## Credits

**Authors:** 
- [Wagner Caetano](https://github.com/WagnerCaetano)
- [Raquel Penteado](https://github.com/RaquelPenteado)
- [Maria Eduarda Corrêa](https://github.com/madudxs)
- [Giovana Alves](https://github.com/Xonfana)

Developed as an academic study at university on mobile development, AWS cloud services, facial recognition, and automated student attendance management.

---

## License

This project is intended for educational and academic purposes.