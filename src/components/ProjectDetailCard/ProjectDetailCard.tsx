import React, { useState } from "react";
import { createPortal } from "react-dom";
import staticImg from "../../assets/Static.png";
import sipmitImg from "../../assets/SIPMIT.png";
import plnImg from "../../assets/PLN.png";
import sipemaImg from "../../assets/sipema .png";
import vt1Img from "../../assets/VT1.png";
import vt2Img from "../../assets/VT2.png";
import vt3Img from "../../assets/VT3.png";
import mpImg from "../../assets/MP.png";
import mp1Img from "../../assets/MP1.png";
import './ProjectDetailCard.css'; 

interface ProjectDetailCardProps {
  image: string;
  title: string;
  description: React.ReactNode;
  onClose: () => void;
}

export function ProjectDetailCard({ image, title, description, onClose }: ProjectDetailCardProps) {
  // Determine which image to show for each card
  const isVirtualMeet = title === "Application Virtual-Meet";
  const isPortofolio = title === "My Portofolio || Mares GH Siagian";
  const vtImages = [vt1Img, vt2Img, vt3Img];
  const mpImages = [mpImg, mp1Img];
  const [vtIndex, setVtIndex] = useState(0);

  let displayImg = staticImg;
  let images = null;
  let index = vtIndex;
  let setIndex = setVtIndex;

  if (title === "SIPMIT - Sistem Informasi Prasmanan Mahasiswa IT DEL (SIPMIT)") {
    displayImg = sipmitImg;
  } else if (title === "SISTEM INFORMASI ATTB ( Aset tetap tidak Beropersi) PLN UP 3 MEDAN") {
    displayImg = plnImg;
  } else if (title === "SISTEM INFORMASI PENGADUAN MASYRAKATA (SIPEMA)") {
    displayImg = sipemaImg;
  } else if (isVirtualMeet) {
    images = vtImages;
    displayImg = vtImages[vtIndex];
    index = vtIndex;
    setIndex = setVtIndex;
  } else if (isPortofolio) {
    images = mpImages;
    displayImg = mpImages[vtIndex % mpImages.length];
    index = vtIndex % mpImages.length;
    setIndex = setVtIndex;
  }

  // Tambahkan pengecekan khusus untuk Farmy.ID
  const isFarmy = title === "User Experience Design Farmy.ID";

  return createPortal(
    <div
      className="project-detail-overlay"
      onClick={onClose}
    >
      <div className="project-detail-card-outer" style={{ position: "relative", display: "inline-block" }}>
        {/* Close button absolutely positioned outside the card, but attached to top-right */}
        <button
          className="project-detail-close-outside"
          onClick={onClose}
          aria-label="Close"
          tabIndex={0}
        >
          &times;
        </button>
        <div
          className="project-detail-card optimized"
          onClick={e => e.stopPropagation()}
          style={{ position: "relative" }}
        >
          {/* Figma: judul = Figma, deskripsi = teks, tidak ada list */}
          {isFarmy ? (
            <>
        
              <div
                className="project-detail-img-vertical-scroll optimized-img-scroll"
                style={{
                  height: 240,
                  maxHeight: 240,
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  background: "#222",
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18
                }}
              >
                <img
                  className="project-detail-img full"
                  src={displayImg}
                  alt={title}
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "unset",
                    display: "block"
                  }}
                />
              </div>
              <div className="project-detail-content optimized">
                <h4 style={{ color: "#e48315", textAlign: "center", margin: "0 0 1rem 0" }}>Figma</h4>
                <div className="project-detail-desc" style={{ marginBottom: 0 }}>
                This project involves designing a user-friendly platform that enables customers to easily browse, select, and purchase fresh produce and meat products. The prototype focuses on creating an intuitive user interface, smooth navigation, efficient search and filter functionalities, and a seamless checkout process.
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image wrapper */}
              <div className="project-detail-img-noscr">
                <img
                  className="project-detail-img full"
                  src={displayImg}
                  alt={title}
                />
              </div>
              {/* Navigation buttons and dots moved below image */}
              {images && (
                <div className="img-nav-bottom">
                  <button
                    className="img-nav-btn left"
                    onClick={() => setIndex(i => (i === 0 ? images.length - 1 : i - 1))}
                    aria-label="Previous image"
                  >
                    {"<"}
                  </button>
                  <div className="img-dots">
                    {images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`img-dot${idx === index ? " active" : ""}`}
                      />
                    ))}
                  </div>
                  <button
                    className="img-nav-btn right"
                    onClick={() => setIndex(i => (i === images.length - 1 ? 0 : i + 1))}
                    aria-label="Next image"
                  >
                    {">"}
                  </button>
                </div>
              )}
              {/* Deskripsi tampil untuk semua card */}
              <div className="project-detail-content optimized">
                <h4>{title}</h4>
                <div className="project-detail-desc">
                  {description}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
