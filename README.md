Quick start (development)

1. Ensure .env contains a valid MONGODB_URI (Atlas) and other vars.
2. From backend folder:
   cd c:\Users\Senthilkumar\heal-seek-link\backend
   npm install

3. Start:
   npm run start      # if package.json has "start"
   OR
   npm run dev        # if using nodemon and "dev" script

4. Verify:
   - Health: GET http://localhost:4000/api/health
   - Users:  GET/POST http://localhost:4000/api/users
   - Appointments: GET/POST http://localhost:4000/api/appointments

Notes
- If you don't have a package.json, create one with express, dotenv and mongoose/mongodb, or run:
  npm init -y
  npm install express cors dotenv mongoose

- Keep real credentials out of source control. Use .env locally and set environment variables in deployment.
- To connect the frontend, point your API base URL to http://localhost:4000/api (or the deployed backend URL).
