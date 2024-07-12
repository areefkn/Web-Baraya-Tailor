import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="background-homepage">
      <Container className="mt-5">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/Produk/JAS/sg-11134201-22100-31eakjwoexiv74.jpg" 
              alt="First slide" width={800} height={400}
            />
            <Carousel.Caption>
              <h3>Nama Barang Pakaian 1</h3>
              <p>Deskripsi singkat tentang barang pakaian ini.</p>
              <a href="#">
                <button className="btn btn-primary">Pesan Sekarang</button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/assets/Produk/JAS/jas abu abu.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Nama Barang Pakaian 2</h3>
              <p>Deskripsi singkat tentang barang pakaian ini.</p>
              <a href="#">
                <button className="btn btn-primary">Pesan Sekarang</button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Nama Barang Pakaian 3</h3>
              <p>Deskripsi singkat tentang barang pakaian ini.</p>
              <a href="#">
                <button className="btn btn-primary">Pesan Sekarang</button>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Kategori Produk */}
        <div className="my-5">
          <h2>Kategori Produk</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Pria</Card.Title>
                  <Button variant="primary" href="#">Lihat Kategori</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Wanita</Card.Title>
                  <Button variant="primary" href="#">Lihat Kategori</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Anak-anak</Card.Title>
                  <Button variant="primary" href="#">Lihat Kategori</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Produk Unggulan */}
        <div className="my-5">
          <h2>Produk Unggulan</h2>
          <Row>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Produk 1</Card.Title>
                  <Card.Text>Harga: Rp100.000</Card.Text>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Produk 2</Card.Title>
                  <Card.Text>Harga: Rp200.000</Card.Text>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Produk 3</Card.Title>
                  <Card.Text>Harga: Rp300.000</Card.Text>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Produk 4</Card.Title>
                  <Card.Text>Harga: Rp400.000</Card.Text>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Testimoni */}
        <div className="my-5">
          <h2>Testimoni Pelanggan</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>"Layanan yang luar biasa! Saya sangat puas dengan produk yang saya beli."</Card.Text>
                  <footer className="blockquote-footer">Pelanggan 1</footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>"Produk berkualitas dan pengiriman cepat. Sangat direkomendasikan!"</Card.Text>
                  <footer className="blockquote-footer">Pelanggan 2</footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>"Saya akan kembali berbelanja di sini. Pengalaman belanja yang menyenangkan."</Card.Text>
                  <footer className="blockquote-footer">Pelanggan 3</footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
