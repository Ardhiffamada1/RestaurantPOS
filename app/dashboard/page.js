// app/dashboard/page.js
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex-shrink-0">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">POS Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4 px-6">
            <li>
              <Link href="/dashboard/orders" className="text-gray-600 hover:text-green-600 font-medium">Orders</Link>
            </li>
            <li>
              <Link href="/dashboard/sales" className="text-gray-600 hover:text-green-600 font-medium">Sales</Link>
            </li>
            <li>
              <Link href="/dashboard/inventory" className="text-gray-600 hover:text-green-600 font-medium">Inventory</Link>
            </li>
            <li>
              <Link href="/dashboard/staff" className="text-gray-600 hover:text-green-600 font-medium">Staff</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">Add New</button>
        </header>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">123</p>
            </div>
            <svg className="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v11H3zm6-4h4v15H9zm6-6h4v21h-4z" />
            </svg>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
              <p className="text-2xl font-bold text-gray-900">$4,567</p>
            </div>
            <svg className="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12l6 6L20 6" />
            </svg>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Items in Stock</h3>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Order #12345</span>
              <span className="text-gray-500">$50.00</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Order #12346</span>
              <span className="text-gray-500">$30.00</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Order #12347</span>
              <span className="text-gray-500">$25.00</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
