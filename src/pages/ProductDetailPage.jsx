// src/pages/DetailProdukPage.jsx
import React from 'react';

const DetailProdukPage = ({ match }) => {
  const productId = match.params.id; // Ambil ID produk dari URL
  // Lakukan logika untuk mengambil data produk berdasarkan productId
  return (
    <div>
      <h1>Detail Produk ID: {productId}</h1>
      {/* Tampilkan detail produk di sini */}
    </div>
  );
};

export default DetailProdukPage;
