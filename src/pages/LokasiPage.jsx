function LokasiPage() {
  return (
    <div className="lokasi-container">
      <h1>Lokasi Kami</h1>
      <p>Alamat: Baraya Tailor, Jl. P Emir M Noor No.53, Bandar Lampung, Lampung</p>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2762390171746!2d105.2483252!3d-5.4313151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da3ecc211fdf%3A0x9acf80745e02e53f!2sBaraya%20Tailor!5e0!3m2!1sen!2sid!4v1647279247086!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Baraya Tailor"
        ></iframe>
      </div>
      <p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Baraya+Tailor,+Jl.+P Emir M Noor+No.+53,+Lampung,+Indonesia" target="_blank" rel="noopener noreferrer">
          Dapatkan Petunjuk Arah
        </a>
      </p>
    </div>
  );
}

export default LokasiPage;
