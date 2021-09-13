import React, { useCallback, useState } from "react";
import { Container } from "reactstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import "./index.scss";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="galleryWrapper" id="photoGallery">
      <Container className="pt-4 pb-5">
        <div className="text-center pt-3 pb-3">
          <h1 className="font-primary-override pageTitle">Our Gallery</h1>
          <hr className="w-50 m-auto mt-3 mb-3 bg-primary-override p-1 opacity-100"></hr>
          <p className="pageSubTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </div>
  );
};

export default PhotoGallery;
