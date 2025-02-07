"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors -mr-5"
    >
      <ChevronRight className="h-6 w-6 text-gray-600" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors -ml-5"
    >
      <ChevronLeft className="h-6 w-6 text-gray-600" />
    </button>
  );
}

export function TemplatesCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  // Set up Modal app element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('body');
    }
  }, []);

  const templates = [
    "/templates/ScienceResumedocx.pdf",
    "/templates/HealthResumedocx.pdf",
    "/templates/GradStudentResumedocx.pdf",
    "/templates/EnglishResumedocx.pdf",
    "/templates/Engineering_Industrial_Tech_Resume.pdf",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1786,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (template: string) => {
    setSelectedPdf(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    if (selectedPdf) {
      window.open(selectedPdf, '_blank');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-12 py-8">
      <div className="mb-8">
        <Slider {...settings}>
          {templates.map((template, index) => (
            <div key={index} className="px-4">
              <div
                className="bg-white rounded-lg shadow-lg p-6 h-80 flex flex-col items-center justify-center cursor-pointer transform transition-transform hover:scale-105 border border-gray-200"
                onClick={() => openModal(template)}
              >
                <div className="w-full h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <p className="text-lg font-medium text-gray-600">
                    {template.split("/").pop()?.replace(".pdf", "").replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Preview
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-xl p-6 outline-none relative"
        overlayClassName="fixed inset-0 bg-black/50 flex items-start justify-center overflow-y-auto"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <h3 className="text-2xl font-semibold mb-6">Template Preview</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          {selectedPdf && (
            <Document
              file={selectedPdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="flex justify-center"
            >
              <Page
                pageNumber={1}
                className="shadow-lg"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Download
          </button>
        </div>
      </Modal>
    </div>
  );
}