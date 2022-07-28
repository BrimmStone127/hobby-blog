import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Col, Row, Container, Accordion, Button, ToggleButton, Card, Dropdown, DropdownButton, SplitButton} from 'react-bootstrap';

export function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  let photos1 = photos;
  let photosRecent = [...photos1].reverse();
  let photoOrder = photosRecent;

  photoOrder.sort(compareDateTaken).reverse();

  function compareDateTaken(a, b) {
    return Date.parse(new Date(a.date_taken)) - Date.parse(new Date(b.date_taken))
  }

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Row>
        <Container>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <ToggleButton
                  id="toggle-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={checked}
                  value="2"
                  onChange={(e) => {
                    if(checked != 2){
                      setChecked(e.currentTarget.checked)
                    } else {
                      setChecked(false);
                    }
                  }}
                >
                  Black and White
                </ToggleButton>

                <ToggleButton
                  alignRight
                  id="toggle-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={checked}
                  value="2"
                  onChange={(e) => {
                    if(checked != 2){
                      setChecked(e.currentTarget.checked)
                    } else {
                      setChecked(false);
                    }
                  }}
                >
                  Color
                </ToggleButton>

                <Dropdown className="d-flex justify-content-end">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    Sort By
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Newest</Dropdown.Item>
                    <Dropdown.Item href="#">Oldest</Dropdown.Item>
                    <Dropdown.Item href="#">Random</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Row>
      <Row>
        <div>
          <Gallery photos={photoOrder} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoOrder.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Row>
      
    </Container>
  );
}