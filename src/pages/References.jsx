import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "/src/styles/References.css";
import Navbar from "../components/Navbar";
const categories = [
  "Összes",
  "Emelőkosaras",
  "Gépi Festés",
  "Gipszkartonozás",
  "Homlokzat festés",
  "Homlokzat tisztítás",
  "Ipari munkák",
  "Lazúrozás",
  "Kerítés festés",
  "Komplett felújítás",
  "Mázolás",
  "Szobafestés",
  "Tapétázás",
  "Tűzvédelmi festés",
];

const dataSources = [
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/emelokosaras-kepek/emelokosaras.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/tapetazas-kepek/tapetazas.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/szobafestes-kepek/szobafestes.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/mazolas-kepek/mazolas.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/lazurozas-kepek/lazurozas.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/komplettFelujitas-kepek/komplettfelujista.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/keritesFestes-kepek/keritesfestes.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/ipariMunkak-kepek/iparimunkak.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/homlokzatTisztitas-kepek/homlokzattisztitas.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/homlokzatFestes-kepek/homlokzatfestes.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/gipszkarton-kepek/gipszkartonozas.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/gepiFestes-kepek/gepifestes.json",
  "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/emelokosaras-kepek/emelokosaras.json",
];

const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function References() {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const [images, setImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Összes");
  const [loading, setLoading] = useState(true);
  const isVideo = (url) =>
    url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");

  useEffect(() => {
    Promise.all(dataSources.map((url) => fetch(url).then((res) => res.json())))
      .then((results) => {
        const merged = results.flat();
        setImages(merged);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hiba a JSON betöltésekor:", err);
        setLoading(false);
      });
  }, []);

  const filteredImages =
    activeCategory === "Összes"
      ? images
      : images.filter(
          (img) => normalize(img.name) === normalize(activeCategory)
        );
  if (loading) return <p>Betöltés..........</p>;

  return (
    <>
      <div className="referencesPage">
        <nav className={"navbar navbar-expand-lg"}>
        <div className="container">
          <Navbar
            homePage={"/"}
            pricesPage={"/prices"}
            contactPage={"/contactus"}
            referencesPage={"/references"}
            isOpen={isOpen}
            toggleMenu={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      <div className="gallery-container">
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              disabled={cat === "Tűzvédelmi festés"}
              id={cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              {isVideo(img.image) ? (
                <video controls>
                  <source src={img.image} type="video/mp4" />
                </video>
              ) : (
                <>
                  <img src={img.image} alt={img.name} />

                  <div className="overlay">
                    <span>{img.name}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
