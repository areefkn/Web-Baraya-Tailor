import 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Pastikan ini diimport
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  // Data produk unggulan
  const featuredProducts = [
    {
      id: 7,
      title: 'Baju Dinas PDU',
      imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipMbWSqjLtkDWAwFW6smsBEOpzfQ8r2XElywupQ9=w203-h270-k-no',
    },
    {
      id: 9,
      title: 'Blazer Teknokrat',
      imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipMDppoIl80fY92pbonAkRAMSIEXTk_aoeUBxfMA=w231-h231-n-k-no-nu',
    },
    {
      id: 6,
      title: 'Kebaya',
      imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipOJpnHA-fxNJEAwyxBV3fSVI581PlkvadGs-vIF=w203-h360-k-no',
    },
    {
      id: 4,
      title: 'Gaun Pesta',
      imgSrc: 'https://lh5.googleusercontent.com/p/AF1QipPAsP6TtykE0gQEvf4jaX9R6sKzGf3UbFmA8UjO=w231-h231-n-k-no-nu',
    },
  ];

  // Data testimoni pelanggan
  const testimonials = [
    { id: 1, text: "Layanan yang luar biasa! Saya sangat puas dengan produk yang saya beli.", author: "Pelanggan 1" },
    { id: 2, text: "Produk berkualitas dan pengiriman cepat. Sangat direkomendasikan!", author: "Pelanggan 2" },
    { id: 3, text: "Saya akan kembali berbelanja di sini. Pengalaman belanja yang menyenangkan.", author: "Pelanggan 3" },
  ];

  return (
    <div className="background-homepage">
      <Container className="mt-5">
        <Carousel>
          {/* Carousel Items */}
          <Carousel.Item>
            <video
              className="d-block w-100"
              src="https://videos.pexels.com/video-files/6766321/6766321-uhd_2560_1440_25fps.mp4"
              alt="First slide"
              autoPlay
              muted
              loop
            />
            <Carousel.Caption className="caption-container">
              <h3>Jahit Berkualitas</h3>
              <p>Jahitan presisi dan material berkualitas untuk pakaian yang sempurna.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <video
              className="d-block w-100"
              src="https://videos.pexels.com/video-files/6460104/6460104-hd_1920_1080_25fps.mp4"
              alt="Second slide"
              autoPlay
              muted
              loop
            />
            <Carousel.Caption className="caption-container">
              <h3>Custom Desain untuk Anda</h3>
              <p>Kami memberikan kebebasan untuk menyesuaikan desain sesuai keinginan Anda.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <video
              className="d-block w-100"
              src="https://videos.pexels.com/video-files/6765470/6765470-uhd_2560_1440_25fps.mp4"
              alt="Third slide"
              autoPlay
              muted
              loop
            />
            <Carousel.Caption className="caption-container">
              <h3>Jaminan Kepuasan</h3>
              <p>Setiap jahitan kami dikerjakan dengan teliti untuk memastikan kepuasan Anda.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Tagline */}
        <div className='bungkus-tagline'>
          <h2 className='h2-garansi'>Komitmen Kami untuk Kualitas</h2>
          <div className="container-tagline">
            <Row className="custom-row">
              <Col className="custom-column">
                <h3>Kenyamanan</h3>
                <p>Setiap jahitan dirancang untuk memberikan kenyamanan maksimal. Kami memastikan bahwa setiap pakaian yang kami buat menghadirkan kenyamanan dan kebanggaan dalam setiap langkah Anda.</p>
              </Col>
              <Col className="custom-column">
                <h3>Elegan</h3>
                <p>Desain kami menggabungkan keanggunan dan gaya yang abadi. Dengan perhatian pada detail dan kualitas, kami menawarkan pakaian yang membuat Anda tampil menawan di setiap kesempatan.</p>
              </Col>
              <Col className="custom-column">
                <h3>Kepuasan</h3>
                <p>Kepuasan pelanggan adalah prioritas utama kami. Dengan jahitan presisi dan desain yang disesuaikan, kami berkomitmen untuk memastikan setiap pelanggan merasa puas dan percaya diri.</p>
              </Col>
            </Row>
          </div>
        </div>

        {/* Produk Unggulan */}
        <div className="my-5">
          <h2>Produk Unggulan</h2>
          <Row>
            {featuredProducts.map((item) => (
              <Col md={3} key={item.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={item.imgSrc} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Button variant="primary" onClick={() => navigate(`/product/${item.id}`)}>Lihat Detail</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Testimoni */}
        <div className="my-5 testimonial-col">
          <h2>Testimoni Pelanggan</h2>
          <Row>
            {testimonials.map((item) => (
              <Col md={4} key={item.id}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Text>`{item.text}`</Card.Text>
                    <footer className="blockquote-footer">{item.author}</footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
