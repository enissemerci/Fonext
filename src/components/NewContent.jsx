import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import bg from "../assets/BGG.mp4";
import { FaFacebook, FaTwitter, FaYoutube,FaInstagram } from "react-icons/fa";

export const NewContent = () => {
  const [content, setContent] = useState({
    description: "",
    file: "",
    platform: [],
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;
    setContent((prevState) => {
      const newPlatforms = checked
        ? [...prevState.platform, value]
        : prevState.platform.filter((platform) => platform !== value);
      return {
        ...prevState,
        platform: newPlatforms,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center position-relative"
      style={{ height: "92vh" }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Form className="p-4 rounded-4" onSubmit={handleSubmit} style={{ zIndex: 1 ,backgroundColor:"#FFD0D0" }}>
        <Form.Group className="py-2" as={Row} controlId="description">
          <Form.Label column sm="2">
            Açıklama:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="description"
              value={content.description}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group className="py-2" as={Row} controlId="file">
          <Form.Label column sm="2">
            Dosya:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="file" name="file" onChange={handleFileChange} />
          </Col>
        </Form.Group>

        <Form.Group className="py-2" as={Row} controlId="platform">
          <Form.Label column sm="2">
            Platform:
          </Form.Label>
          <Col sm="10">
          <Form.Check
              type="checkbox"
              name="platform"
              id="youtube"
              value="youtube"
              onChange={handlePlatformChange}
              label={<><FaYoutube /> YouTube</>}
            />
            <Form.Check
              type="checkbox"
              name="platform"
              id="instagram"
              value="instagram"
              onChange={handlePlatformChange}
              label={<><FaInstagram /> Instagram</>}
            />
            <Form.Check
              type="checkbox"
              name="platform"
              id="facebook"
              value="facebook"
              onChange={handlePlatformChange}
              label={<><FaFacebook /> Facebook</>}
            />
          </Col>
        </Form.Group>

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Fotoğraf"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        )}
        {/* imagePreview state'i doluysa, önizleme gösterilir */}

        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
    </div>
  );
};
