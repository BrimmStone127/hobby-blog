import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Col, Row, Container, Accordion, Button, ToggleButton, Card, Dropdown, DropdownButton, SplitButton } from 'react-bootstrap';

export function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  let photosRecent = [...photos].reverse();
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

  const handleSelect = (e) => {
    let sorting = e;
    if(sorting === "newest"){
      photoOrder.sort(compareDateTaken).reverse();
      setImageList(photoOrder);
    }
    if (sorting === "oldest"){
      photoOrder.sort(compareDateTaken);
      setImageList(photoOrder);
    }
    if(sorting === "random"){
      let rando = shuffle(photoOrder);
      setImageList(rando);
    }
    
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const [imageList, setImageList] = useState(photos);

  return (
    <Container>
      <Row>
        <Container>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter</Accordion.Header>
              <Accordion.Body>
                <Dropdown className="d-flex justify-content-end" onSelect={handleSelect}>
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    Sort By
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="newest">Newest</Dropdown.Item>
                    <Dropdown.Item eventKey="oldest">Oldest</Dropdown.Item>
                    <Dropdown.Item eventKey="random">Random</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Row>
      <Row>
        <div>
          <Gallery photos={imageList} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={imageList.map(x => ({
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