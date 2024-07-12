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
    if (i <= rating) {
      stars.push(<span key={i} style={{ color: '#FFD700' }}>&#9733;</span>); // Bintang penuh
    } else {
      stars.push(<span key={i} style={{ color: '#D3D3D3' }}>&#9733;</span>); // Bintang kosong
    }
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
    { id: 1, title: 'Jas', category: 'pria', normalPrice: 850000, premiumPrice: 1000000, rating: 4, description: 'Deskripsi Jas', media: 'src/assets/Produk/JAS/sg-11134201-22100-5j17ziwoexiv50.jpg' },
    { id: 2, title: 'Celana Formal', category: 'pria', normalPrice: 110000, premiumPrice: 150000, rating: 4, description: 'Deskripsi Celana Formal', media: 'url/to/celana-formal.jpg' },
    { id: 3, title: 'Gaun Pesta', category: 'wanita', normalPrice: 120000, premiumPrice: 250000, rating: 1, description: 'Gaun Pesta', media: 'src/assets/Produk/Gambar WhatsApp 2024-06-11 pukul 17.44.39_eba8a733.jpg' },
    { id: 4, title: 'Tunik', category: 'wanita', normalPrice: 120000, premiumPrice: 180000, rating: 1, description: 'tunik', media: 'https://lh5.googleusercontent.com/p/AF1QipNOtGasQynBfkR-5nqpLcYhgE2R6InADfkHCCEN=w203-h270-k-no' },
    { id: 5, title: 'Kemeja', category: 'wanita', normalPrice: 120000, premiumPrice: 200000, rating: 1, description: 'Deskripsi Gamis', media: 'url/to/gamis.jpg' },
    { id: 6, title: 'Kebaya', category: 'wanita', normalPrice: 50000, premiumPrice: 75000, rating: 5, description: 'kebaya', media: 'https://lh5.googleusercontent.com/p/AF1QipOJpnHA-fxNJEAwyxBV3fSVI581PlkvadGs-vIF=w203-h360-k-no' },
    { id: 7, title: 'Baju Dinas PDU', category: 'pria', normalPrice: 50000, premiumPrice: 75000, rating: 5, description: 'Baju PDU', media: 'https://lh5.googleusercontent.com/p/AF1QipMbWSqjLtkDWAwFW6smsBEOpzfQ8r2XElywupQ9=w203-h270-k-no' },
    { id: 8, title: 'Baju Anak', category: 'pria', normalPrice: 50000, premiumPrice: 75000, rating: 5, description: '', media: 'https://lh5.googleusercontent.com/p/AF1QipPbeajj2VG9ijxU4neoknf6IkhTQyREsufaL6OR=w234-h171-p-k-no' },
    { id: 9, title: 'baju tapis', category: 'pria', normalPrice: 50000, premiumPrice: 75000, rating: 5, description: 'Deskripsi Baju Anak', media: 'https://lh5.googleusercontent.com/p/AF1QipOUHFJp7PKxAfVsoovsQWsqVHzeRjl0b7uhRe_z=w224-h428-k-no' },
    { id: 10, title: 'Baju Anak', category: 'anak-anak', normalPrice: 50000, premiumPrice: 75000, rating: 5, description: 'Deskripsi Baju Anak', media: 'url/to/baju-anak.jpg' },

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
            <Button onClick={() => navigate('/pesan-kustom')}>Pesan Pakaian Kustom</Button>
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
                    <strong>Harga:</strong> {formatToRupiah(item.normalPrice)} - {formatToRupiah(item.premiumPrice)}
                    <br />
                    <strong>Rating:</strong> <StarRating rating={item.rating} />
                  </Card.Text>
                  <Button variant='primary' onClick={() => navigate(`/produk/${item.id}`)}>Lihat Detail</Button>
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
