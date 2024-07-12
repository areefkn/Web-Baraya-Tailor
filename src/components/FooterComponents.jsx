import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Tentang Kami</h4>
            <p>"Lebih dari Sekadar Pakaian, Ini Cerita Hidup Anda. Baraya Tailor, Tempat Anda Menemukan Busana yang Menginspirasi!"</p>
          </div>
          <div className="col-md-4">
            <h4>Hubungi Kami</h4>
            <p>Alamat: Jl. P Emir M Noer, NO.53 gg camar, pengajaran, teluk betung utara, Bandar Lampung</p>
            <p>Email: info@contoh.com</p>
            <p>Telepon: 123-456-789</p>
          </div>
          <div className="col-md-4">
            <h4>Denah Lokasi</h4>
            <div className="map">
              <iframe
                title="Lokasi Toko"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2762390171746!2d105.2483252!3d-5.4313151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da3ecc211fdf%3A0x9acf80745e02e53f!2sBaraya%20Tailor!5e0!3m2!1sen!2sid!4v1647279247086!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h4>Sosial Media Kami</h4>
            <ul className="social-links list-inline" >
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              </a>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Baraya Tailor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
