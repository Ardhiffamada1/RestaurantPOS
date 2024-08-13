export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // Simple authentication logic
    if (username === 'admin' && password === 'admin123') {
      return new Response(JSON.stringify({ 
        message: 'Login successful', 
        token: 'your-auth-token', 
        username: 'admin', 
        name: 'John Doe' // Replace with actual name
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
  