'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(''); 
  const [name, setName] = useState(''); 
  const [isDarkMode, setIsDarkMode] = useState(false); // State untuk dark mode
  const router = useRouter();

  useEffect(() => {
    // Cek token dan data lain dari localStorage
    const token = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    const storedName = localStorage.getItem('name'); 
    const storedTheme = localStorage.getItem('theme'); // Ambil tema yang disimpan
    if (!token || !storedUsername || !storedName) {
      router.push('/login'); // Redirect ke halaman login jika belum login
    } else {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setName(storedName); 
    }

    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [router]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!isAuthenticated) {
    return null; // Tidak menampilkan apa-apa sampai autentikasi selesai
  }

  // Function untuk mengatur greeting berdasarkan waktu
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return { greeting: 'Selamat Pagi', icon: '☀️' };
    } else if (currentHour < 18) {
      return { greeting: 'Selamat Siang', icon: '🌞' };
    } else if (currentHour < 21) {
      return { greeting: 'Selamat Sore', icon: '🌇' };
    } else {
      return { greeting: 'Selamat Malam', icon: '🌙' };
    }
  };

  const { greeting, icon } = getGreeting();

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <aside className={`fixed inset-0 top-0 left-0 w-64 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg flex-shrink-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h1 className="text-2xl font-bold">POS Dashboard</h1>
          <button onClick={() => setSidebarOpen(false)} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600 md:hidden`}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-6">
  <ul className="space-y-4 px-6">
    <span>{`${icon} ${greeting}, ${name}`}</span>
    <li>
      <Link href="/dashboard/orders" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600 font-medium`}>Orders</Link>
    </li>
    <li>
      <Link href="/dashboard/sales" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600 font-medium`}>Sales</Link>
    </li>
    <li>
      <Link href="/dashboard/inventory" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600 font-medium`}>Inventory</Link>
    </li>
    <li>
      <Link href="/dashboard/staff" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600 font-medium`}>Staff</Link>
    </li>
  </ul>
  <div className="px-6 mt-6">
    <button onClick={toggleDarkMode} className={`flex items-center justify-center w-full py-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
      {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  </div>
</nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className={`flex items-center justify-between p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-md md:hidden`}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600`}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <h2 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h2>
          <button onClick={toggleDarkMode} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-600`}>
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </header>

        <main className={`flex-1 p-6 overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className={`p-6 rounded-lg shadow-lg flex items-center justify-between ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div>
                <h3 className="text-lg font-semibold">Total Orders</h3>
                <p className="text-2xl font-bold">123</p>
              </div>
              <svg className="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v11H3zm6-4h4v15H9zm6-6h4v21h-4z" />
              </svg>
            </div>
            <div className={`p-6 rounded-lg shadow-lg flex items-center justify-between ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div>
                <h3 className="text-lg font-semibold">Total Sales</h3>
                <p className="text-2xl font-bold">$4,567</p>
              </div>
              <svg className="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12l6 6L20 6" />
              </svg>
            </div>
            <div className={`p-6 rounded-lg shadow-lg flex items-center justify-between ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div>
                <h3 className="text-lg font-semibold">Items in Stock</h3>
                <p className="text-2xl font-bold">45</p>
              </div>
              <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Recent Orders */}
          <div className={`p-6 rounded-lg shadow-lg mt-6 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Order #12345</span>
                <span>$50.00</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Order #12346</span>
                <span>$30.00</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Order #12347</span>
                <span>$25.00</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
