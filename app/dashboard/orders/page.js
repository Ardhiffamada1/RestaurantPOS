'use client'
import { useState } from 'react';

const menuCategories = {
  coffee: [
    { id: 1, name: 'Espresso', price: 3.50, image: 'https://images.unsplash.com/photo-1561746868-2e9a603a2c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1Mzc1&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 2, name: 'Latte', price: 4.00, image: 'https://images.unsplash.com/photo-1555685814-4f4d612a8c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1NzI&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 3, name: 'Cappuccino', price: 4.50, image: 'https://images.unsplash.com/photo-1603017546000-7f2e4d65cfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1NzM&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 4, name: 'Mocha', price: 5.00, image: 'https://images.unsplash.com/photo-1615421148350-f2cf8a46c4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1NzQ&ixlib=rb-1.2.1&q=80&w=400' },
  ],
  alaCarte: [
    { id: 5, name: 'Caesar Salad', price: 7.00, image: 'https://images.unsplash.com/photo-1584301855801-235ebfa7b8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1NzU&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 6, name: 'Bruschetta', price: 6.50, image: 'https://images.unsplash.com/photo-1528752601091-65a4e273f5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1NzY&ixlib=rb-1.2.1&q=80&w=400' },
  ],
  mainCourse: [
    { id: 7, name: 'Spaghetti Carbonara', price: 12.00, image: 'https://images.unsplash.com/photo-1562066040-14c3e6f1b094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1Nzc&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 8, name: 'Grilled Salmon', price: 14.00, image: 'https://images.unsplash.com/photo-1596111892286-cf23eeb4d059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyNjg3NjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg5Njg1Nzg&ixlib=rb-1.2.1&q=80&w=400' },
  ],
};

export default function Orders() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddToOrder = (item) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  const handleRemoveFromOrder = (itemId) => {
    setSelectedItems((prev) => prev.filter(item => item.id !== itemId));
  };

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    if (paymentMethod === '') {
      alert('Silakan pilih metode pembayaran.');
      return;
    }
    alert(`Pesanan berhasil dengan metode pembayaran: ${paymentMethod}`);
    setSelectedItems([]);
    setShowModal(false);
  };

  const handleCancelOrder = () => {
    setShowModal(false);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex flex-col">
      <header className="flex flex-col mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Pesan Makanan</h2>
        {/* Menu Tabs */}
        <div className="flex space-x-4 mb-6">
          {Object.keys(menuCategories).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-md text-sm font-medium ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-green-700 transition-colors duration-200`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>
      </header>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {menuCategories[activeCategory].map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-200" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{item.name}</h3>
            <p className="text-gray-600 mb-4 text-center">${item.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToOrder(item)}
              className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition-colors duration-200"
            >
              Tambah ke Pesanan
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      {selectedItems.length > 0 && (
        <div className="mt-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h3>
          <ul className="space-y-4 mb-4">
            {selectedItems.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full border border-gray-200" />
                  <div>
                    <h4 className="text-gray-800 font-medium">{item.name}</h4>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromOrder(item.id)}
                  className="text-red-600 hover:underline transition-colors duration-200"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-4">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="text-lg font-bold text-gray-900">${totalPrice}</span>
          </div>
          <div className="mt-6">
            <button
              onClick={handlePlaceOrder}
              className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition-colors duration-200 w-full"
            >
              Selesaikan Pesanan
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Selesaikan Pembayaran</h3>
            <p className="text-gray-600 mb-4">Silakan pilih metode pembayaran:</p>
            <div className="space-y-4 mb-4">
              <button
                onClick={() => handlePaymentMethodChange('Cash')}
                className={`w-full py-2 px-4 rounded-md text-white ${paymentMethod === 'Cash' ? 'bg-green-600' : 'bg-gray-300'} hover:bg-green-700 transition-colors duration-200`}
              >
                Tunai (Cash)
              </button>
              <button
                onClick={() => handlePaymentMethodChange('QRIS')}
                className={`w-full py-2 px-4 rounded-md text-white ${paymentMethod === 'QRIS' ? 'bg-green-600' : 'bg-gray-300'} hover:bg-green-700 transition-colors duration-200`}
              >
                QRIS
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmOrder}
                className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition-colors duration-200"
              >
                Konfirmasi
              </button>
              <button
                onClick={handleCancelOrder}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-400 transition-colors duration-200"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}