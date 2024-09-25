export async function POST(req) {
    try {
    //  const { someParameter } = await req.json();
      const total_sales = 5000;
      const total_orders = 120;
      const total_in_stock = 300;

      return new Response(JSON.stringify({ 
        message: '200 OK',
        total_sales: total_sales,
        total_orders: total_orders,
        total_in_stock: total_in_stock
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
      
    } catch (error) {
      // Jika terjadi kesalahan, tangani error
      return new Response(JSON.stringify({ message: 'Server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  