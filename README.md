
# Try

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

---


## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration production` flag for a production build:

```bash
ng build --configuration production
```

---

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

---

## Running the Project with Docker

This project is configured to run in a Docker container using Nginx as the web server. Follow these steps to build and run the project with Docker:

### Prerequisites
- [Docker](https://www.docker.com/) (v20 or higher)

### Steps

1. **Build the Docker Image**:
   Run the following command to build the Docker image:
   ```bash
   docker-compose up --build
   ```

2. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost
   ```

Stop Minikube:
   ```minikube stop```

Get the Service URL
   ``` minikube service angular-app-service --url```
