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
              src="src/assets/content/pexels-shkrabaanthony-6665039.jpg"
              alt="First slide" width={800} height={600}
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
              src="https://via.placeholder.com/800x400"
              alt="Second slide" width={800} height={600}
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
              alt="Third slide" width={800} height={600}
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

  <div className='bungkus-tagline'>
    <h2 className='h2-garansi'>Kami Menjamin!!</h2>
  <div className="container-tagline">
      <div className="row custom-row">
        <div className="col custom-column">
          <h2>Kenyamanan</h2>
          Kenyamanan maksimal dalam setiap jahitan. Pakaian berkualitas yang membuat Anda merasa nyaman sepanjang hari
          </div>
        <div className="col custom-column">
          <h2>Kepuasaan</h2>
          Desain elegan dalam setiap pakaian. Nikmati keanggunan dan gaya yang sempurna untuk setiap kesempatan
        </div>
        <div className="col custom-column">
          <h2>Elegan</h2>
          Kepuasan Anda, prioritas kami. Jahitan presisi dan desain yang memastikan Anda merasa puas dan percaya diri
        </div>
      </div>
    </div>
  </div>



        {/* Produk Unggulan */}
        <div className="my-5">
          <h2>Produk Unggulan</h2>
          <Row>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipNAmn7O7ir_vsbwd9WW_Cu6Hd7-t7Y0W2lhLdlD=w231-h193-n-k-no-nu" />
                <Card.Body>
                  <Card.Title>Kemaja Kpmbinasi</Card.Title>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Produk 2</Card.Title>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Produk 3</Card.Title>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4">
                <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipPAsP6TtykE0gQEvf4jaX9R6sKzGf3UbFmA8UjO=w231-h231-n-k-no-nu" />
                <Card.Body>
                  <Card.Title>Gaun Pesta</Card.Title>
                  <Button variant="primary" href="#">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Testimoni */}
        <div className="my-5  testimonial-col">
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
