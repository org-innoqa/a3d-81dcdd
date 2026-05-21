import React from 'react';
import { Coffee, MapPin, Phone, MessageCircle } from 'lucide-react';

const menuItems = [
  { name: 'Espresso', price: '45 TL' },
  { name: 'Americano', price: '55 TL' },
  { name: 'Latte', price: '65 TL' },
  { name: 'Cappuccino', price: '65 TL' },
  { name: 'Ev Yapımı Kek', price: '70 TL' },
  { name: 'Taze Kruvasan', price: '80 TL' },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <nav className="p-6 flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Coffee className="text-amber-700" />
          <span>MODERN KAFE</span>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-light mb-6">Gününüzü Güzelleştiren Kahveler</h1>
        <p className="text-stone-600 text-lg mb-8">Mahallenizin samimi buluşma noktası. Taze çekirdekler, huzurlu bir ortam.</p>
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
          alt="Kafe içi" 
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8">Menü</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-lg">{item.name}</span>
                <span className="font-semibold text-amber-800">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-stone-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-light mb-6">Bize Ulaşın</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-amber-700" />
              <span>Örnek Mah. Kahve Sokak No: 12, İstanbul</span>
            </div>
            <a 
              href="https://wa.me/905550000000" 
              className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full w-fit hover:bg-green-700 transition"
            >
              <MessageCircle size={20} />
              WhatsApp'tan Mesaj Gönder
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-stone-500 text-sm">
        © 2024 Modern Kafe. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}