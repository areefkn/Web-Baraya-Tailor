import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Format angka menjadi mata uang Rupiah
const formatToRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};

// Komponen untuk menampilkan rating dalam bentuk bintang
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#FFD700' : '#D3D3D3' }}>&#9733;</span>
    );
  }
  return <div>{stars}</div>;
};

const GaleriPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Data produk yang diinput sebelumnya
  const [products, setProducts] = useState([
    
    {
      id: 1,
      title: 'Baju Tapis',
      category: 'pria',
      normalPrice: 350000,
      premiumPrice: 7550000,
      rating: 5,
      description: 'Baju Kombinasi tapis',
      media: 'https://lh5.googleusercontent.com/p/AF1QipOUHFJp7PKxAfVsoovsQWsqVHzeRjl0b7uhRe_z=w224-h428-k-no',
      sizes: ['S', 'M', 'L'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 350000, // Harga jasa untuk bahan sendiri
      fabricPrice: 7550000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 2,
      title: 'Gaun dengan kombinasi',
      category: 'wanita',
      normalPrice:2750000,
      premiumPrice: 7500000,
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
      title: 'Kemeja Kombinasi',
      category: 'pria',
      normalPrice: 120000,
      premiumPrice: 200000,
      rating: 5,
      description: 'kemeja dengan kombinasi benag dan kain yang menjadikan pakaian tampa mewah',
      media: 'https://lh5.googleusercontent.com/p/AF1QipNAmn7O7ir_vsbwd9WW_Cu6Hd7-t7Y0W2lhLdlD=w231-h193-n-k-no-nu',
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
      normalPrice: 50000,
      premiumPrice: 75000,
      rating: 5,
      description: 'Baju PDU',
      media: 'https://lh5.googleusercontent.com/p/AF1QipMbWSqjLtkDWAwFW6smsBEOpzfQ8r2XElywupQ9=w203-h270-k-no',
      sizes: ['S', 'M', 'L'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 20000, // Harga jasa untuk bahan sendiri
      fabricPrice: 15000 // Harga jasa untuk bahan dari penjahit
    },
    {
      id: 8,
      title: 'Baju Batik Anak',
      category: 'anak-anak',
      normalPrice: 75000,
      premiumPrice: 150000,
      rating: 5,
      description: '',
      media: 'https://down-id.img.susercontent.com/file/id-11134207-7r98u-lx7sit5x3ui630',
      sizes: ['S', 'M'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 75000, // Harga jasa untuk bahan sendiri
      fabricPrice: 150000 // Harga jasa untuk bahan dari penjahit
    },

    {
      id: 9,
      title: 'Blazer Teknokrat',
      category: 'pria',
      normalPrice: 550000,
      premiumPrice: 1250000,
      rating: 5,
      description: 'Blazer dosen teknokrat',
      media: 'https://lh5.googleusercontent.com/p/AF1QipMDppoIl80fY92pbonAkRAMSIEXTk_aoeUBxfMA=w231-h231-n-k-no-nu',
      sizes: ['S', 'M','L'], // Menambahkan opsi ukuran
      specificSize: false, // Ukuran spesifik tidak diperlukan
      customPrice: 550000, // Harga jasa untuk bahan sendiri
      fabricPrice: 1250000 // Harga jasa untuk bahan dari penjahit
    }
  ]);
  

  useEffect(() => {
    filterItems(searchKeyword, selectedCategory);
  }, [searchKeyword, selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filterItems = (keyword, category) => {
    let filtered = [...products];
    if (category && category !== 'semua') {
      filtered = filtered.filter(item => item.category === category);
    }
    if (keyword) {
      filtered = filtered.filter(
        (item) => item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    setFilteredItems(filtered);
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Waktu delay sebelum mengubah state loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='galeri' style={{ marginBottom: '50px' }}>
      <Container className='galeri-produk'>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Cari produk..."
              value={searchKeyword}
              onChange={handleSearchChange}
              className="search-input"
            />
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <Button onClick={() => navigate('/pesan-kustom')}>Buat Pesanan</Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Button className={`category-button ${selectedCategory === 'semua' ? 'active' : ''}`} onClick={() => handleCategoryChange('semua')}>Semua</Button>{' '}
            <Button className={`category-button ${selectedCategory === 'pria' ? 'active' : ''}`} onClick={() => handleCategoryChange('pria')}>Pria</Button>{' '}
            <Button className={`category-button ${selectedCategory === 'wanita' ? 'active' : ''}`} onClick={() => handleCategoryChange('wanita')}>Wanita</Button>{' '}
            <Button className={`category-button ${selectedCategory === 'anak-anak' ? 'active' : ''}`} onClick={() => handleCategoryChange('anak-anak')}>Anak-anak</Button>
          </Col>
        </Row>
        <Row>
          {(filteredItems.length > 0 ? filteredItems : products).map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3} className={`galeri-item ${isLoaded ? 'loaded' : ''}`}>
              <Card id="card-produk">
                <Card.Img variant="top" src={item.media} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <strong>Bea Jasa</strong> {formatToRupiah(item.normalPrice)} - {formatToRupiah(item.premiumPrice)}
                    <br />
                    <strong>Rating:</strong> <StarRating rating={item.rating} />
                  </Card.Text>
                  <Button variant='primary' onClick={() => navigate(`/product/${item.id}`)}>Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GaleriPage;
