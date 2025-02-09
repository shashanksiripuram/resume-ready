"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      id="next-arrow-button"
      onClick={onClick}
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 transition-colors -mr-5`}
    >
      <ChevronRight className="h-6 w-6 text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      id="prev-arrow-button"
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 transition-colors -ml-5"
    >
      <ChevronLeft className="h-6 w-6 text-white" />
    </button>
  );
}

export function TemplatesCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  // Set up Modal app element
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     Modal.setAppElement("body");
  //   }
  // }, []);

  const templates = [
    "/templates/ScienceResumedocx.pdf",
    "/templates/Student_Athlete_Resume.pdf",
    "/templates/Basic_Resume_docx.pdf",
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
    autoplaySpeed: 3000,
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
    setPreviewPdf(template);
    setIsModalOpen(true);
    // console.log(template);

    // Disable Previous and Next Arrow Buttons
    document
      .getElementById("prev-arrow-button")
      ?.classList.add("hidden");
    document
      .getElementById("next-arrow-button")
      ?.classList.add("hidden");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewPdf(null);

    document
      .getElementById("prev-arrow-button")
      ?.classList.remove("hidden");
    document
      .getElementById("next-arrow-button")
      ?.classList.remove("hidden");
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    if (selectedPdf) {
      window.open(selectedPdf, "_blank");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <Slider {...settings}>
          {templates.map((template, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <Card
                className={`h-80 m-2 z-5 flex flex-col justify-between items-center shadow-md border border-gray-300 hover:shadow-lg transition-all 
              ${
                selectedPdf === template
                  ? "border-purple-500 ring-2 ring-purple-300"
                  : ""
              }`}
                onClick={() => setSelectedPdf(template)}
              >
                {/* Radio Button */}
                <input
                  type="radio"
                  name="template"
                  value={template}
                  checked={selectedPdf === template}
                  onChange={() => setSelectedPdf(template)}
                  className="hidden"
                />

                {/* Card Header - PDF Name */}
                <CardHeader className="text-center text-base font-semibold py-2">
                  {template
                    .split("/")
                    .pop()
                    ?.replace(".pdf", "")
                    .replace("docx", "")
                    .replace(/_/g, " ")
                    .replace(/([A-Z])/g, " $1")
                    .trim()}
                </CardHeader>

                {/* PDF Preview */}
                <CardContent className="flex-grow flex items-center justify-center overflow-hidden">
                  <Document
                    file={template}
                    className="w-full flex justify-center"
                  >
                    <Page
                      pageNumber={1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={220} // Adjust for scaling
                    />
                  </Document>
                </CardContent>
              </Card>
              <button
                onClick={() => openModal(template)}
                className="p-2 w-fit bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Preview
              </button>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="relative z-50 w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
        ariaHideApp={false}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full transition"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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

        {/* Modal Title */}
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          {previewPdf &&
            previewPdf
              .split("/")
              .pop()
              ?.replace(".pdf", "")
              .replace("docx", "")
              .replace(/_/g, " ")
              .replace(/([A-Z])/g, " $1")
              .trim()}
        </h3>

        {/* PDF Preview */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner max-h-[60vh] overflow-y-auto flex justify-center">
          {previewPdf && (
            <div className="border p-2 shadow-lg rounded-md bg-white">
              <Document file={previewPdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => {
              setSelectedPdf(previewPdf);
              closeModal();
            }}
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Use Template
          </button>
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
