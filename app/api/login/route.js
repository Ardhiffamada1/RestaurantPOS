export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // Contoh data pengguna (biasanya ini diambil dari database)
    const users = {
      admin: { password: 'admin123', name: 'John Doe' },
      user1: { password: 'user123', name: 'Jane Smith' }
    };

    const user = users[username];

    // Simple authentication logic (for demonstration)
    if (user && user.password === password) {
      return new Response(JSON.stringify({
        message: 'Login successful',
        username: username,
        name: user.name,
        password: user.password // This is for demonstration purposes only
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
