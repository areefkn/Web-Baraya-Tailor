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
      <h1 className="title">Tentang Kami</h1>
      <div className="info-container">
        <h2 className="subtitle">Visi</h2>
        <p className="paragraph">
          Visi kami adalah menjadi penyedia layanan jahit terbaik di Indonesia dengan kualitas terbaik dan pelayanan yang memuaskan.
        </p>
      </div>
      <div className="info-container">
        <h2 className="subtitle">Misi</h2>
        <p className="paragraph">
          Misi kami adalah menyediakan layanan jahit yang berkualitas tinggi, tepat waktu, dan sesuai dengan kebutuhan pelanggan.
        </p>
      </div>
      <div className="info-container">
        <h2 className="subtitle">Sejarah Kami</h2>
        <p className="paragraph">
          Baraya Tailor didirikan pada tahun 2011 dengan tujuan memberikan layanan jahit yang berbeda dan berkualitas tinggi. Selama lebih dari 10 tahun, kami telah melayani berbagai pelanggan dengan kebutuhan yang beragam.
        </p>
      </div>
      <div className="info-container">
        <h2 className="subtitle">Tim Kami</h2>
        <p className="paragraph">
          Tim kami terdiri dari para profesional yang berpengalaman di bidang jahit-menjahit, selalu siap untuk memberikan yang terbaik untuk Anda.
        </p>
      </div>
      <div className="info-container">
        <h2 className="subtitle">Layanan Kami</h2>
        <p className="paragraph">
          Di Baraya Tailor, kami menggabungkan keahlian jahit tradisional dengan sentuhan profesional modern untuk menciptakan pakaian yang elegan dan berkualitas tinggi. Mulai dari jas, celana formal, gaun pesta, hingga pakaian anak-anak, setiap produk kami dibuat dengan penuh ketelitian dan cinta.
        </p>
      </div>
      <div className="info-container">
        <h2 className="subtitle">Kontak</h2>
        <p className="paragraph">
          Untuk informasi lebih lanjut, hubungi kami di <a href="mailto:email@example.com">email@example.com</a> atau telepon <a href="tel:+621234567">+62 123-4567</a>. Kami siap membantu Anda mewujudkan pakaian impian Anda.
        </p>
      </div>
    </div>
  );
}

export default TentangKamiPage;
