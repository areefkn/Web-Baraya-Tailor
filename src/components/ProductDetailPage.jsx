import React, { useState, useEffect } from 'react';
import { Container, Card, Button, ListGroup, Dropdown, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const formatToRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#FFD700' : '#D3D3D3' }}>&#9733;</span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

// Data ukuran berdasarkan kategori
const sizeDetails = {
  pria: {
    S: { panjang: '68-70 cm', lebarDada: '86-91 cm', pinggul: '86-91 cm', bahu: '41-43 cm', panjangTangan: '80-82 cm' },
    M: { panjang: '70-72 cm', lebarDada: '91-97 cm', pinggul: '91-97 cm', bahu: '43-45 cm', panjangTangan: '82-84 cm' },
    L: { panjang: '72-74 cm', lebarDada: '97-102 cm', pinggul: '97-102 cm', bahu: '45-47 cm', panjangTangan: '84-86 cm' },
    XL: { panjang: '74-76 cm', lebarDada: '102-107 cm', pinggul: '102-107 cm', bahu: '47-49 cm', panjangTangan: '86-88 cm' },
    XXL: { panjang: '76-78 cm', lebarDada: '107-112 cm', pinggul: '107-112 cm', bahu: '49-51 cm', panjangTangan: '88-90 cm' },
  },
  wanita: {
    S: { panjang: '60-62 cm', lebarDada: '81-86 cm', pinggul: '86-91 cm', bahu: '36-38 cm', panjangLengan: '58-60 cm', panjangRok: '40-45 cm' },
    M: { panjang: '62-64 cm', lebarDada: '86-91 cm', pinggul: '91-97 cm', bahu: '38-40 cm', panjangLengan: '61-63 cm', panjangRok: '45-50 cm' },
    L: { panjang: '64-66 cm', lebarDada: '91-97 cm', pinggul: '97-102 cm', bahu: '40-42 cm', panjangLengan: '64-66 cm', panjangRok: '50-55 cm' },
    XL: { panjang: '66-68 cm', lebarDada: '97-102 cm', pinggul: '102-107 cm', bahu: '42-44 cm', panjangLengan: '67-69 cm', panjangRok: '55-60 cm' },
    XXL: { panjang: '68-70 cm', lebarDada: '102-107 cm', pinggul: '107-112 cm', bahu: '44-46 cm', panjangLengan: '70-72 cm', panjangRok: '60-65 cm' },
  },
  anakanak: {
    '2T': { umur: '1-2 tahun', tinggi: '86-92 cm', lebarDada: '52-54 cm', pinggul: '54-56 cm', bahu: '22-24 cm' },
    '4T': { umur: '3-4 tahun', tinggi: '98-104 cm', lebarDada: '54-56 cm', pinggul: '56-58 cm', bahu: '24-26 cm' },
    '6': { umur: '5-6 tahun', tinggi: '110-116 cm', lebarDada: '56-58 cm', pinggul: '58-60 cm', bahu: '26-28 cm' },
    '8': { umur: '7-8 tahun', tinggi: '122-128 cm', lebarDada: '58-60 cm', pinggul: '60-62 cm', bahu: '28-30 cm' },
    '10': { umur: '9-10 tahun', tinggi: '134-140 cm', lebarDada: '60-62 cm', pinggul: '62-64 cm', bahu: '30-32 cm' },
  }
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPriceType, setSelectedPriceType] = useState('custom');
  const navigate = useNavigate();


  // Data produk yang diinput sebelumnya
  const [products, setProducts] = useState([
        // Contoh data produk - ganti ini dengan data yang diambil dari API di masa depan
    // TODO: Ganti dengan panggilan API untuk mengambil data produk
    // Contoh:
    // useEffect(() => {
    //   fetch('https://api.example.com/products')
    //     .then(response => response.json())
    //     .then(data => setProducts(data));
    // }, []);
    {
      id: 1,
      title: 'Baju Tapis',
      category: 'pria',
      normalPrice: 50000,
      premiumPrice: 75000,
      rating: 5,
      description: 'Deskripsi Baju Anak',
      media: 'https://lh5.googleusercontent.com/p/AF1QipOUHFJp7PKxAfVsoovsQWsqVHzeRjl0b7uhRe_z=w224-h428-k-no',
      sizes: ['S', 'M', 'L'], // Menambahkan opsi ukuran
      specificSize: true, // Ukuran spesifik tidak diperlukan
      customPrice: 15000, // Harga jasa untuk bahan sendiri
      fabricPrice: 10000 // Harga jasa untuk bahan dari penjahit
    },
    {
    id: 2,
    title: 'Gaun dengan kombinasi',
    category: 'wanita',
    normalPrice: 110000,
    premiumPrice: 150000,
    rating: 4,
    description: 'Deskripsi Celana Formal',
    media: 'https://lh5.googleusercontent.com/p/AF1QipMH3861haV4xlaUqDD-eKnHuS6OgMD9ug2BQ8Yb=w231-h289-n-k-no-nu',
    sizes: ['S', 'M', 'L'], // Menambahkan opsi ukuran
    specificSize: false, // Ukuran spesifik tidak diperlukan
    customPrice: 30000, // Harga jasa untuk bahan sendiri
    fabricPrice: 20000 // Harga jasa untuk bahan dari penjahit
  },
  {
    id: 3,
    title: 'Gaun Pesta',
    category: 'wanita',
    normalPrice: 120000,
    premiumPrice: 250000,
    rating: 1,
    description: 'Gaun Pesta',
    media: 'https://lh5.googleusercontent.com/p/AF1QipPAsP6TtykE0gQEvf4jaX9R6sKzGf3UbFmA8UjO=w231-h231-n-k-no-nu',
    sizes: ['M', 'L', 'XL'], // Menambahkan opsi ukuran
    specificSize: true, // Ukuran spesifik tersedia
    customPrice: 50000, // Harga jasa untuk bahan sendiri
    fabricPrice: 30000 // Harga jasa untuk bahan dari penjahit
  },
    {
      id: 4,
      title: 'Tunik',
      category: 'wanita',
      normalPrice: 120000,
      premiumPrice: 180000,
      rating: 1,
      description: 'Tunik',
      media: 'https://lh5.googleusercontent.com/p/AF1QipNOtGasQynBfkR-5nqpLcYhgE2R6InADfkHCCEN=w203-h270-k-no',
      sizes: ['M', 'L', 'XL'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 30000, // Harga jasa untuk bahan sendiri
      fabricPrice: 20000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 5,
      title: 'Kemeja',
      category: 'wanita',
      normalPrice: 120000,
      premiumPrice: 200000,
      rating: 1,
      description: 'Deskripsi Gamis',
      media: 'url/to/gamis.jpg',
      sizes: ['S', 'M', 'L'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 30000, // Harga jasa untuk bahan sendiri
      fabricPrice: 20000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 6,
      title: 'Kebaya',
      category: 'wanita',
      normalPrice: 50000,
      premiumPrice: 75000,
      rating: 5,
      description: 'Kebaya',
      media: 'https://lh5.googleusercontent.com/p/AF1QipOJpnHA-fxNJEAwyxBV3fSVI581PlkvadGs-vIF=w203-h360-k-no',
      sizes: ['M', 'L', 'XL'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 20000, // Harga jasa untuk bahan sendiri
      fabricPrice: 15000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 7,
      title: 'Baju Dinas PDU',
      category: 'pria',
      normalPrice: 650000,
      premiumPrice: 1050000,
      rating: 5,
      description: 'Baju PDU',
      media: 'https://lh5.googleusercontent.com/p/AF1QipMbWSqjLtkDWAwFW6smsBEOpzfQ8r2XElywupQ9=w203-h270-k-no',
      sizes: ['S', 'M', 'L'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 650000, // Harga jasa untuk bahan sendiri
      fabricPrice: 1050000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 8,
      title: 'Baju Batik Anak',
      category: 'pria',
      normalPrice: 50000,
      premiumPrice: 75000,
      rating: 5,
      description: '',
      media: 'https://down-id.img.susercontent.com/file/id-11134207-7r98u-lx7sit5x3ui630',
      sizes: ['S', 'M'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 15000, // Harga jasa untuk bahan sendiri
      fabricPrice: 10000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 9,
      title: 'Blazer Teknokrat',
      category: 'pria',
      normalPrice: 50000,
      premiumPrice: 75000,
      rating: 5,
      description: 'Blazer dosen teknokrat',
      media: 'https://lh5.googleusercontent.com/p/AF1QipMDppoIl80fY92pbonAkRAMSIEXTk_aoeUBxfMA=w231-h231-n-k-no-nu',
      sizes: ['S', 'M','L'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 15000, // Harga jasa untuk bahan sendiri
      fabricPrice: 10000 // Harga jasa untuk bahan dari penjahit
    }
  ]);

  
   // UseEffect untuk menemukan produk berdasarkan ID
  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
        // TODO: Ganti dengan panggilan API untuk mengambil detail produk berdasarkan ID
    // Contoh:
    // useEffect(() => {
    //   fetch(`https://api.example.com/products/${id}`)
    //     .then(response => response.json())
    //     .then(data => setProduct(data));
    // }, [id]);
  }, [id, products]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handlePriceTypeChange = (event) => {
    setSelectedPriceType(event.target.value);
  };

  const handleOrder = () => {
    if (!product) return;

    const message = `Saya ingin memesan ${product.title} dengan ukuran ${selectedSize}.`;
    const whatsappUrl = `https://wa.me/nomor-anda?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const sizeCategory = product.category === 'pria' ? 'pria' : (product.category === 'wanita' ? 'wanita' : 'anak-anak');
  const sizeDetailsCategory = sizeDetails[sizeCategory];

  return (
    <Container className="product-detail-container">
      <div className="product-detail-content">
      <div className="product-image">
        <img src={product.media} alt={product.title} />
      </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">
            <strong>Harga Jasa:</strong> {formatToRupiah(product.normalPrice)} - {formatToRupiah(product.premiumPrice)}
          </p>
          <p className="product-rating">
            <strong>Rating:</strong> <StarRating rating={product.rating} />
          </p>
          <div className="product-size">
            <strong>Ukuran Tersedia:</strong>
            <Dropdown onSelect={handleSizeChange} style={{ marginBottom: '1rem' }}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {selectedSize || 'Pilih Ukuran'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product.sizes.map(size => (
                  <Dropdown.Item key={size} eventKey={size}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            {selectedSize && sizeDetailsCategory[selectedSize] && (
              <div className="size-details">
                <h5>Detail Ukuran:</h5>
                <ul>
                  {Object.entries(sizeDetailsCategory[selectedSize]).map(([key, value]) => (
                    <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.specificSize && (
              <p><strong>Ukuran spesifik:</strong> Pelanggan dapat datang langsung ke Baraya Tailor untuk mengukur badan.</p>
            )}
          </div>
          <div className="product-price-type">
          <Form.Group controlId="priceType" className='sumber-kain'>
            <Form.Label>Sumber Bahan:</Form.Label>
            <Form.Control as="select" value={selectedPriceType} onChange={handlePriceTypeChange}>
              <option value="custom">Bahan dari Pelanggan</option>
              <option value="fabric">Bahan dari Penjahit</option>
            </Form.Control>
          </Form.Group>

            <p><strong>Bea Jasa:</strong> {formatToRupiah(selectedPriceType === 'custom' ? product.customPrice : product.fabricPrice)}</p>
          </div>
            {/* Pengumuman tambahan */}
          <div className="announcement">
            <p><strong>Catatan Penting:</strong> Harga yang tertera adalah harga dasar. Harap diperhatikan bahwa biaya tambahan mungkin berlaku jika Anda memilih variasi atau kombinasi khusus. Hubungi kami untuk informasi lebih lanjut.</p>
          </div>
          <div className="product-description">
            <h4>Deskripsi:</h4>
            <p>{product.description}</p>
          </div>

          <Button onClick={handleOrder} className="order-button">Hubungi Via WhatsApp</Button>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
