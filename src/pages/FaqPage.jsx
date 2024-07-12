import React, { useState } from 'react';

const FaqPage = () => {
  // State untuk mengatur dropdown
  const [isOpen, setIsOpen] = useState(null);

  // Fungsi untuk menangani klik pada pertanyaan
  const handleToggle = (index) => {
    if (isOpen === index) {
      // Jika dropdown sudah terbuka, tutup dropdown
      setIsOpen(null);
    } else {
      // Jika dropdown belum terbuka, buka dropdown pada indeks yang diberikan
      setIsOpen(index);
    }
  };

  // Data pertanyaan dan jawaban
  const faqData = [
    {
      question: 'Bagaimana cara memesan jasa penjahit?',
      answer: 'Anda dapat memesan jasa penjahit kami dengan mengunjungi toko fisik kami atau melalui website resmi kami.',
    },
    {
      question: 'Apakah saya bisa memesan desain kustom?',
      answer: 'Tentu, kami menyediakan layanan pembuatan pakaian dengan desain kustom sesuai keinginan Anda.',
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk membuat satu pakaian?',
      answer: 'Waktu pembuatan pakaian bergantung pada kompleksitas desain dan jumlah pesanan. Kami akan memberikan estimasi waktu saat pemesanan.',
    },
    {
      question: 'Apakah saya bisa menggunakan bahan pakaian sendiri?',
      answer: 'Ya, kami menerima penggunaan bahan pakaian yang Anda berikan, asalkan bahan tersebut sesuai dengan standar kualitas kami.',
    },
    {
      question: 'Bagaimana cara mengukur ukuran tubuh untuk pembuatan pakaian?',
      answer: 'Kami akan memberikan panduan pengukuran tubuh yang dapat Anda ikuti, atau Anda juga dapat datang langsung ke toko untuk pengukuran tubuh secara langsung.',
    },
    {
      question: 'Apakah ada layanan pengiriman untuk pakaian yang sudah jadi?',
      answer: 'Kami menyediakan layanan pengiriman untuk memudahkan pelanggan dalam menerima pakaian yang sudah jadi. Biaya pengiriman akan dikenakan sesuai dengan lokasi pengiriman.',
    },
    {
      question: 'Apakah saya bisa melakukan perubahan pada pakaian yang sudah jadi?',
      answer: 'Kami menyediakan layanan penyesuaian ukuran atau perubahan desain pada pakaian yang sudah jadi dengan biaya tambahan.',
    },
    {
      question: 'Apakah pakaian yang sudah jadi dapat dikembalikan?',
      answer: 'Kami menerima pengembalian pakaian yang masih dalam kondisi baru dan belum digunakan dalam waktu 30 hari setelah pembelian. Mohon hubungi kami untuk informasi lebih lanjut.',
    },
    {
      question: 'Apakah ada layanan perbaikan jika pakaian rusak?',
      answer: 'Ya, kami menyediakan layanan perbaikan pakaian jika terjadi kerusakan. Mohon hubungi kami untuk informasi lebih lanjut.',
    },
    {
      question: 'Apakah ada diskon untuk pembelian dalam jumlah besar?',
      answer: 'Kami memberikan diskon khusus untuk pembelian dalam jumlah besar. Mohon hubungi kami untuk informasi lebih lanjut tentang harga grosir.',
    },
    // Tambahkan pertanyaan dan jawaban lainnya di sini
  ];

  return (
    <div className="faq">
      <h1>Pertanyaan yang Sering Diajukan tentang Jasa Penjahit Pakaian</h1>
      <div className="faq-container">
        <div className="faq-column" >
          {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
            <div key={index} className={`faq-item ${isOpen === index ? 'open' : ''}`}>
              <h3 onClick={() => handleToggle(index)} className="question">{faq.question}</h3>
              {/* Tampilkan jawaban jika dropdown terbuka */}
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-column">
          {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => (
            <div key={index + Math.ceil(faqData.length / 2)} className={`faq-item ${isOpen === index + Math.ceil(faqData.length / 2) ? 'open' : ''}`}>
              <h3 onClick={() => handleToggle(index + Math.ceil(faqData.length / 2))} className="question">{faq.question}</h3>
              {/* Tampilkan jawaban jika dropdown terbuka */}
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
