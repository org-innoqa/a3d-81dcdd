import React from 'react';
import { MessageCircle, MapPin, Coffee } from 'lucide-react';

const menuItems = [
  { name: 'Filtre Kahve', price: '60 ₺' },
  { name: 'Ev Yapımı Kek', price: '150 ₺' },
  { name: 'Taze Kruvasan', price: '85 ₺' },
  { name: 'Bitki Çayı', price: '50 ₺' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <nav className="p-6 flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">Modern Kafe</h1>
        <a href="https://wa.me/905550000000" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-16">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" alt="Kafe" className="w-full h-64 object-cover rounded-2xl mb-8" />
          <h2 className="text-4xl font-light mb-4">Mahallenizin Sıcak Köşesi</h2>
          <p className="text-stone-600 max-w-2xl">Taze çekirdek kahvelerimiz ve günlük hazırlanan atıştırmalıklarımızla sizleri bekliyoruz.</p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Coffee /> Menü</h3>
          <div className="space-y-4">
            {menuItems.map((item, i) => (
              <div key={i} className="flex justify-between border-b border-stone-100 pb-4">
                <span className="text-lg">{item.name}</span>
                <span className="font-bold text-stone-900">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 flex items-center gap-4 text-stone-600">
          <MapPin className="text-stone-400" />
          <p>Örnek Mah. Kahve Sokak No:1, İstanbul</p>
        </section>
      </main>
    </div>
  );
}