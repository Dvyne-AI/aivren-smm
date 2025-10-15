export default function Page() {
  return (
    <main style={{padding: 24, fontFamily: 'system-ui'}}>
      <h1>SMM Panel</h1>
      <p>Welcome! This is your simple panel UI placeholder.</p>
      <ul>
        <li>Wallet Balance: ₹0.00</li>
        <li><a href="/login">Login</a> | <a href="/register">Register</a></li>
      </ul>
      <p>API base: {process.env.NEXT_PUBLIC_API_BASE}</p>
    </main>
  );
}
