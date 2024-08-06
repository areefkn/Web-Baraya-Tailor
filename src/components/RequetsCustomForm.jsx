import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RequestCustomForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    description: '',
    media: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'media') {
      setFormData((prevData) => ({ ...prevData, media: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, address, description } = formData;

    // Membuat URL WhatsApp dengan data formulir
    const message = `Nama: ${name}%0ATelepon: ${phone}%0AAlamat: ${address}%0ADeskripsi: ${description}`;
    const whatsappUrl = `https://wa.me/nomor-anda?text=${encodeURIComponent(message)}`;

    // Redirect ke URL WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <Container>
      <h2>Pesan Pakaian Sesuai Keinginan Anda</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Telepon</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Deskripsi Permintaan</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMedia">
          <Form.Label>Sematkan Foto atau Video (Tidak Akan Terkirim)</Form.Label>
          <Form.Control
            type="file"
            name="media"
            accept="image/*,video/*"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Kirim Permintaan
        </Button>
      </Form>
    </Container>
  );
};

export default RequestCustomForm;
