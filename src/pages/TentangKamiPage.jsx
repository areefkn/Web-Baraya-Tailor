import React, { useEffect, useState } from 'react';


function TentangKamiPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300); // Waktu delay sebelum mengubah state loaded
  }, []);

  return (
    <div className={`tentang-container ${loaded ? 'loaded' : ''}`}>
      <h1>Tentang Kami</h1>
      <div className="info-container">
        <h2>Visi</h2>
        <p>
          Visi kami adalah menjadi penyedia layanan jahit terbaik di Indonesia dengan kualitas terbaik dan pelayanan yang memuaskan.
        </p>
      </div>
      <div className="info-container">
        <h2>Misi</h2>
        <p>
          Misi kami adalah menyediakan layanan jahit yang berkualitas tinggi, tepat waktu, dan sesuai dengan kebutuhan pelanggan.
        </p>
      </div>
      <div className="info-container">
        <h2>Sejarah Kami</h2>
        <p>
          Baraya Tailor didirikan pada tahun 1990 dengan tujuan memberikan layanan jahit yang berbeda dan berkualitas tinggi. Selama lebih dari 30 tahun, kami telah melayani berbagai pelanggan dengan kebutuhan yang beragam.
        </p>
      </div>
      <div className="info-container">
        <h2>Tim Kami</h2>
        <p>
          Tim kami terdiri dari para profesional yang berpengalaman di bidang jahit-menjahit, selalu siap untuk memberikan yang terbaik untuk Anda.
        </p>
      </div>
      <div className="info-container">
        <h2>Kontak</h2>
        <p>
          Untuk informasi lebih lanjut, hubungi kami di <a href="mailto:email@example.com">email@example.com</a> atau telepon <a href="tel:+621234567">+62 123-4567</a>.
        </p>
      </div>
    </div>
  );
}

export default TentangKamiPage;
