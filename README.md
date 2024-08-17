# Redis Queue Processing with Express and TypeScript

This project demonstrates a basic queue processing system using Redis, Express, and TypeScript. It includes two main components:
1. **Server**: Handles incoming code submissions and pushes them to a Redis queue.
2. **Worker**: Processes submissions from the Redis queue asynchronously.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or above)
- [Redis](https://redis.io/) (running locally or remotely)
or
```
docker run --name myredis -d -p 6379:6379 redis
```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/redis-queue-impl.git
    ```
2. Navigate to the project directory:
    ```bash
    cd redis-queue-impl
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Server

1. Start the Redis server.
2. Run the Express server:
    ```bash
    cd express-be
    npx tsc -b
    node dist/index.js
    ```
3. The server will be running on `http://localhost:3000`.

### Running the Worker

1. Start the Redis server (if not already running).
2. Run the worker:
    ```bash
    cd worker
    npx tsc -b
    node dist/index.js
    ```

### API Endpoint

- **POST /submit**
  - Submits a code problem to be processed.
  - **Body Parameters:**
    - `problemId` (string): The ID of the problem.
    - `code` (string): The code submitted for the problem.
    - `language` (string): The programming language used.

### Example Request : Postman

```bash
URL -> http://localhost:3000/submit 
Body -> RAW->JSON
{"problemId":"123","code":"console.log('Hello World')","language":"JavaScript"}
