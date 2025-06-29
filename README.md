# FullStackDocker

A simple full-stack Dockerized application with a Vite React frontend, Node.js/Express backend, and PostgreSQL database. Easily deployable with Docker Compose.

## Features

- **Frontend:** Vite + React
- **Backend:** Node.js + Express + pg (PostgreSQL client)
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### Running the Application

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Start all services:**
   ```sh
   docker-compose up --build
   ```

3. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000/test](http://localhost:3000/test)
   - PostgreSQL: `localhost:5432` (user: `postgres`, password: `password`)

### Project Structure

```
FullStackDocker/
├── Backend/
│   ├── index.js
│   ├── package.json
│   └── ...
├── Frontend/
│   └── vite-project/
│       ├── src/
│       ├── package.json
│       └── ...
├── docker-compose.yml
└── .gitignore
```

### Useful Commands

- **Stop all services:**
  ```sh
  docker-compose down
  ```

- **Rebuild containers:**
  ```sh
  docker-compose up --build
  ```

  ![image](https://github.com/user-attachments/assets/a030d29c-3a97-4432-9e9b-c7def4b8dd4b)


## License

This project is licensed under the ISC License.
