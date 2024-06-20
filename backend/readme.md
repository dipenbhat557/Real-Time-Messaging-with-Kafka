# Real-Time Messaging Backend

This is the backend service for the Real-Time Messaging application. It is built with Spring Boot and packaged as a Docker container.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- RESTful API for managing messages and users
- WebSocket support for real-time messaging
- Dockerized for easy deployment

## Installation

To run this project locally, you will need to have Docker and Docker Compose installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/real-time-chat-app-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd real-time-chat-app-backend
   ```

## Usage

### Running with Docker Compose

1. Ensure Docker is running on your machine.
2. Build and start the application:

   ```bash
   docker-compose up --build
   ```

3. The application will be accessible at `http://localhost:8080`.

### Running Locally without Docker

If you prefer to run the application without Docker, you need to have Java and Maven installed.

1. Install dependencies and build the application:

   ```bash
   mvn clean package -DskipTests
   ```

2. Run the application:

   ```bash
   java -jar target/backend.jar
   ```

3. The application will be accessible at `http://localhost:8080`.

## Technologies Used

- [Spring Boot](https://spring.io/projects/spring-boot) - Framework for building Java-based applications
- [Maven](https://maven.apache.org/) - Build automation tool
- [Docker](https://www.docker.com/) - Containerization platform

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
