import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());

const allowed = [process.env.WEB_BASE_URL || '*'];
app.use(cors({ origin: allowed, credentials: true }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'smm-api' });
});

// Placeholder auth routes
app.post('/auth/register', (req, res) => {
  // TODO: persist user
  res.json({ ok: true, message: 'register placeholder' });
});

app.post('/auth/login', (req, res) => {
  // TODO: issue JWT
  res.json({ ok: true, token: 'placeholder.jwt.token' });
});

// Wallet topup (creates Razorpay order) — stub
app.post('/wallet/topup', (req, res) => {
  // TODO: call Razorpay SDK with amount
  res.json({ ok: true, razorpay_order_id: 'order_XXXX' });
});

// Razorpay webhook — stub
app.post('/webhooks/razorpay', (req, res) => {
  // TODO: verify signature and credit wallet
  res.json({ ok: true });
});

// Orders — stub
app.post('/orders', (req, res) => {
  // TODO: debit wallet, create order, enqueue worker job
  res.json({ ok: true, order_id: 1, status: 'queued' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`smm-api listening on ${port}`));
