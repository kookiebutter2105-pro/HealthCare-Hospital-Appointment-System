require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const usersRouter = require('./routes/users');
const appointmentsRouter = require('./routes/appointments');


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Could not connect to MongoDB:', err));

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/users', usersRouter);
app.use('/api/appointments', appointmentsRouter);


app.get('/api/health', (req, res) => res.json({ status: 'ok' }));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));