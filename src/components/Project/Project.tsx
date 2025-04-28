import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Figma from "../../assets/figma.svg";
import React, { useState } from "react";
import { ProjectDetailCard } from "../ProjectDetailCard/ProjectDetailCard";

export function Project() {
  const [detailIndex, setDetailIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const techList = (
    <ul
      className="tech-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.7rem",
        padding: 0,
        margin: 0,
        listStyle: "none"
      }}
    >
      <li
        style={{
          background: "linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)",
          color: "#fff",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(54,209,196,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #5b86e5 0%, #36d1c4 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >HTML</li>
      <li
        style={{
          background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
          color: "#222",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(247,151,30,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #ffd200 0%, #f7971e 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >CSS</li>
      <li
        style={{
          background: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)",
          color: "#fff",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(249,83,198,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #b91d73 0%, #f953c6 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >JavaScript</li>
      <li
        style={{
          background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
          color: "#fff",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(67,206,162,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #185a9d 0%, #43cea2 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >Boostrap</li>
      <li
        style={{
          background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
          color: "#222",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(247,151,30,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #ffd200 0%, #f7971e 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >PHP</li>
      <li
        style={{
          background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
          color: "#fff",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(17,153,142,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #38ef7d 0%, #11998e 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >MySQL</li>
      <li
        style={{
          background: "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)",
          color: "#fff",
          borderRadius: "12px",
          padding: "0.45rem 1.3rem",
          fontSize: "1.08rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 12px rgba(252,92,125,0.18)",
          transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
          cursor: "pointer"
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >Laravel</li>
    </ul>
  );

  // Data project
  const projects = [
    {
      image: Figma,
      title: "User Experience Design Farmy.ID",
      description: "This project involves designing a user-friendly platform that enables customers to easily browse, select, and purchase fresh produce and meat products.The prototype focuses on creating an intuitive user interface, smooth navigation, efficient search and filter functionalities, and a seamless checkout process.",
      detailTitle: "User Experience Design Farmy.ID",
      links: [
        {
          href: "https://www.figma.com/design/TKaqy0DKtabvnObVe4ohE9/Project-UI-UX?node-id=0-1&p=f&t=HmA1OAFXmRsrMvIP-0",
          icon: Figma,
          alt: "Figma"
        }
      ]
    },
    {
      image: githubIcon,
      title: "SIPMIT - Sistem Informasi Prasmanan Mahasiswa IT DEL (SIPMIT)",
      description: "A buffet dining platform designed to connect students, faculty, staff, and canteen operators in an easy and efficient way. The website allows users to explore daily menu offerings, place meal orders, make table reservations, and provide real-time feedback to canteen management. The design focuses on creating a seamless user experience with responsive la youts, intuitive navigation, and smart features such as meal reminders and personalized menu recommendations.",
      detailTitle: "SIPMIT - Sistem Informasi Prasmanan Mahasiswa IT DEL (SIPMIT)",
      links: [
        {
          href: "https://github.com/MaresGHSiagian/Proyek-Sistem-Informasi-Pengaduan-Masyarakat-Sipema-",
          icon: githubIcon,
          alt: "Visit site"
        }
      ]
    },
    {
      image: githubIcon,
      title: "SISTEM INFORMASI ATTB ( Aset tetap tidak Beropersi) PLN UP 3 MEDAN",
      description: "A web platform developed to help employees at PLN UP 3 Medan efficiently manage, track, and monitor company assets. The system features asset registration, real-time inventory tracking, maintenance scheduling, and reporting tools.Designed with user-friendly interfaces and secure data management, the platform aims to streamline asset management processes, minimize losses, and enhance operational efficiency within the organization",
      detailTitle: "SISTEM INFORMASI ATTB ( Aset tetap tidak Beropersi) PLN UP 3 MEDAN",
      links: [
        {
          href: "https://github.com/CodeVinayak/AI-Chatbot-Assistant",
          icon: githubIcon,
          alt: "Visit site"
        },
      ]
    },
    {
      image: githubIcon,
      title: "SISTEM INFORMASI PENGADUAN MASYRAKATA (SIPEMA)",
      description: "A modern web platform where citizens can easily voice their concerns and complaints. Clean and intuitive design ensures users of all ages can navigate effortlessly. Complaints are categorized and forwarded to the relevant authorities for action.",
      detailTitle: "SISTEM INFORMASI PENGADUAN MASYRAKATA (SIPEMA)",
      links: [
        {
          href: "https://github.com/MaresGHSiagian/Proyek-Sistem-Informasi-Pengaduan-Masyarakat-Sipema-",
          icon: githubIcon,
          alt: "Visit site"
        }
      ]
    },
    {
      image: githubIcon,
      title: "Application Virtual-Meet",
      description: `A web application designed for seamless virtual meetings, offering features like video calls, voice calls, and real-time chat. Users can easily host or join meetings with a simple and intuitive interface. The platform supports screen sharing, participant management, and breakout rooms for focused discussions.`,
      detailTitle: "Application Virtual-Meet",
      links: [
        {
          href: "https://github.com/MaresGHSiagian/Virtual-Meet",
          icon: githubIcon,
          alt: "Visit site"
        }
      ]
    },
    {
      image: githubIcon,
      title: "My Portofolio || Mares GH Siagian",
      description: "Portfolio showcases my work as a web developer, highlighting projects built with React and TypeScript. It demonstrates my skills in creating responsive, interactive applications with a focus on clean, maintainable code. The projects featured here reflect my commitment to delivering high-quality, user-friendly web experience.",
      detailTitle: "My Portofolio || Mares GH Siagian",
      links: [
        {
          href: "https://github.com/MaresGHSiagian/Portofolio",
          icon: githubIcon,
          alt: "Visit site"
        },
      ]
    }
  ];

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem"
      }}>
        {projects.map((proj, idx) => (
          <ScrollAnimation animateIn="flipInX" key={idx}>
            <div
              className="project"
              style={{
                background: hovered === idx
                  ? "linear-gradient(135deg, #ffb86c 0%, #ff7e5f 100%)"
                  : "linear-gradient(135deg, #18181b 60%, #232526 100%)",
                borderRadius: "18px",
                boxShadow: hovered === idx
                  ? "0 12px 36px rgba(255, 184, 107, 0.25), 0 6px 24px rgba(0,0,0,0.22)"
                  : "0 2px 16px rgba(0,0,0,0.10)",
                padding: "2rem 1.5rem 1.7rem 1.5rem",
                minHeight: 370,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "box-shadow 0.25s, background 0.25s, transform 0.2s",
                transform: hovered === idx ? "translateY(-10px) scale(1.045)" : "none",
                border: hovered === idx ? "2.5px solidrgb(244, 151, 51)" : "2.5px solid transparent",
                overflow: "hidden"
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Gambar Project */}
              {/* <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1.2rem",
                transition: "transform 0.3s",
                transform: hovered === idx ? "scale(1.07)" : "scale(1)"
              }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "12px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
                    objectFit: "contain",
                    background: "#fff",
                    padding: 8
                  }}
                />
              </div> */}
              <header style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.5rem"
              }}>
                <div className="project-links" style={{ display: "flex", gap: "0.5rem" }}>
                  {/* Hanya tampilkan satu icon/link saja */}
                  {proj.links.length > 0 && (
                    <a href={proj.links[0].href} target="_blank" rel="noreferrer"
                      style={{
                        background: "#fff",
                        borderRadius: "50%",
                        padding: 6,
                        boxShadow: "0 2px 8px rgba(255,184,107,0.13)",
                        transition: "box-shadow 0.2s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                      <img src={proj.links[0].icon} alt={proj.links[0].alt} style={{ width: 28, height: 28 }} />
                    </a>
                  )}
                </div>
              </header>
              <div className="body" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                minHeight: "140px",
                height: "180px"
              }}>
                <div>
                  <h3 style={{
                    margin: "0 0 0.7rem 0",
                    color: "#fff",
                    fontSize: "1.22rem",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.10)"
                  }}>{proj.title}</h3>
                  {/* Tampilkan techList di semua card */}
                  <div style={{ marginBottom: "0.7rem" }}>
                    <ul
                      className="tech-list"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.7rem",
                        padding: 0,
                        margin: 0,
                        listStyle: "none"
                      }}
                    >
                      {proj.title === "User Experience Design Farmy.ID" ? (
                        <li
                          style={{
                            background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
                            color: "#222",
                            borderRadius: "12px",
                            padding: "0.45rem 1.3rem",
                            fontSize: "1.08rem",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            boxShadow: "0 2px 12px rgba(247,151,30,0.18)",
                            transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                            cursor: "pointer"
                          }}
                          onMouseOver={e => {
                            e.currentTarget.style.background = "linear-gradient(90deg, #ffd200 0%, #f7971e 100%)";
                            e.currentTarget.style.transform = "scale(1.08)";
                          }}
                          onMouseOut={e => {
                            e.currentTarget.style.background = "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >Figma</li>
                      ) : proj.title === "My Portofolio || Mares GH Siagian" ? (
                        <>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(67,206,162,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #185a9d 0%, #43cea2 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >React</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(249,83,198,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #b91d73 0%, #f953c6 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >TypeScript</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
                              color: "#222",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(247,151,30,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #ffd200 0%, #f7971e 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >CSS</li>
                        </>
                      ) : (
                        <>
                          {/* ...existing code for other tech badges... */}
                          <li
                            style={{
                              background: "linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(54,209,196,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #5b86e5 0%, #36d1c4 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #36d1c4 0%, #5b86e5 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >HTML</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
                              color: "#222",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(247,151,30,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #ffd200 0%, #f7971e 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >CSS</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(249,83,198,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #b91d73 0%, #f953c6 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >JavaScript</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(67,206,162,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #185a9d 0%, #43cea2 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >Boostrap</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
                              color: "#222",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(247,151,30,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #ffd200 0%, #f7971e 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >PHP</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(17,153,142,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #38ef7d 0%, #11998e 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >MySQL</li>
                          <li
                            style={{
                              background: "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)",
                              color: "#fff",
                              borderRadius: "12px",
                              padding: "0.45rem 1.3rem",
                              fontSize: "1.08rem",
                              fontWeight: 700,
                              letterSpacing: "0.02em",
                              boxShadow: "0 2px 12px rgba(252,92,125,0.18)",
                              transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                              cursor: "pointer"
                            }}
                            onMouseOver={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)";
                              e.currentTarget.style.transform = "scale(1.08)";
                            }}
                            onMouseOut={e => {
                              e.currentTarget.style.background = "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >Laravel</li>
                          {/* Tambahan khusus untuk Virtual-Meet */}
                          {proj.title === "Application Virtual-Meet" && (
                            <>
                              <li
                                style={{
                                  background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                                  color: "#fff",
                                  borderRadius: "12px",
                                  padding: "0.45rem 1.3rem",
                                  fontSize: "1.08rem",
                                  fontWeight: 700,
                                  letterSpacing: "0.02em",
                                  boxShadow: "0 2px 12px rgba(67,206,162,0.18)",
                                  transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                                  cursor: "pointer"
                                }}
                                onMouseOver={e => {
                                  e.currentTarget.style.background = "linear-gradient(90deg, #185a9d 0%, #43cea2 100%)";
                                  e.currentTarget.style.transform = "scale(1.08)";
                                }}
                                onMouseOut={e => {
                                  e.currentTarget.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
                                  e.currentTarget.style.transform = "scale(1)";
                                }}
                              >React</li>
                              <li
                                style={{
                                  background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
                                  color: "#fff",
                                  borderRadius: "12px",
                                  padding: "0.45rem 1.3rem",
                                  fontSize: "1.08rem",
                                  fontWeight: 700,
                                  letterSpacing: "0.02em",
                                  boxShadow: "0 2px 12px rgba(252,70,107,0.18)",
                                  transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                                  cursor: "pointer"
                                }}
                                onMouseOver={e => {
                                  e.currentTarget.style.background = "linear-gradient(90deg, #3f5efb 0%, #fc466b 100%)";
                                  e.currentTarget.style.transform = "scale(1.08)";
                                }}
                                onMouseOut={e => {
                                  e.currentTarget.style.background = "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)";
                                  e.currentTarget.style.transform = "scale(1)";
                                }}
                              >Web-RTC</li>
                              <li
                                style={{
                                  background: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)",
                                  color: "#fff",
                                  borderRadius: "12px",
                                  padding: "0.45rem 1.3rem",
                                  fontSize: "1.08rem",
                                  fontWeight: 700,
                                  letterSpacing: "0.02em",
                                  boxShadow: "0 2px 12px rgba(6,190,182,0.18)",
                                  transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                                  cursor: "pointer"
                                }}
                                onMouseOver={e => {
                                  e.currentTarget.style.background = "linear-gradient(90deg, #48b1f3 0%, #06beb6 100%)";
                                  e.currentTarget.style.transform = "scale(1.08)";
                                }}
                                onMouseOut={e => {
                                  e.currentTarget.style.background = "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)";
                                  e.currentTarget.style.transform = "scale(1)";
                                }}
                              >Tailwind</li>
                            </>
                          )}
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                {/* Tombol Detail dengan efek highlight */}
                <button
                  onClick={() => setDetailIndex(idx)}
                  style={{
                    alignSelf: "flex-end",
                    margin: "0.7rem 0 0 0",
                    padding: "0.6rem 1.5rem",
                    background: hovered === idx
                      ? "linear-gradient(90deg, #22bb33 60%, #ffb86c 100%)"
                      : "#22bb33",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: hovered === idx
                      ? "0 4px 16px rgba(255,184,107,0.18)"
                      : "0 2px 8px rgba(255,184,107,0.10)",
                    transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
                    letterSpacing: "0.03em"
                  }}
                >
                  Detail
                </button>
                {detailIndex === idx && (
                  <ProjectDetailCard
                    image={proj.image}
                    title={proj.detailTitle}
                    description={proj.description}
                    onClose={() => setDetailIndex(null)}
                  />
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}