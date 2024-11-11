const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let otpStore = {}; // In-memory storage for OTPs

// API to send OTP
app.post('/api/send-otp', (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

  otpStore[phone] = otp; // Store OTP

  // Simulate OTP sending (In real scenario, use SMS gateway)
  console.log(`Sending OTP ${otp} to phone ${phone}`);

  res.json({ success: true });
});

// API to verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { phone, otp } = req.body;

  if (otpStore[phone] === otp) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// API to handle registration
app.post('/api/register', (req, res) => {
  const { name, address, email, password } = req.body;
  // Save user to database (omitted)
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
