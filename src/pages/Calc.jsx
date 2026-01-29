import { useState, useEffect } from "react";
import Select from "react-select";

export default function Calc() {
  const [categories] = useState([
    {
      key: "gipszkartonozas",
      label: "Gipszkartonozás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/gipszkartonozas/gipszkartonozas.json",
    },
    {
      key: "tapetazas",
      label: "Tapézátás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/tapetazas/tapetazas.json",
    },
    {
      key: "mazolas",
      label: "Mázolás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/mazolas/mazolas.json",
    },
    {
      key: "festes",
      label: "Festés",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/festes/festes.json",
    },
    {
      key: "egyebmunkak",
      label: "Egyéb munkák",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/egyeb-munkak/egyeb-munkak.json",
    },
    {
      key: "alapmunkak",
      label: "Alapmunkák",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/alapmunkak/alapmunkak.json",
    },
  ]);

  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [area, setArea] = useState("");
  const [total, setTotal] = useState(null);

  const categoryOptions = categories.map((cat) => ({
    value: cat.key,
    label: cat.label,
  }));

  const itemOptions = items.map((item) => ({
    value: item.id,
    label: item.nev,
  }));

  useEffect(() => {
    if (!selectedCategoryKey) return;

    const category = categories.find((c) => c.key === selectedCategoryKey);
    if (!category) return;

    fetch(category.url)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setSelectedItemId("");
        setTotal(null);
      });
  }, [selectedCategoryKey, categories]);

  const selectedItem = items.find((i) => i.id === selectedItemId);

  useEffect(() => {
    if (selectedItem && area > 0) {
      const total =
        Number(area) * selectedItem.munkadij +
        Number(area) * selectedItem.anyagdij;
      setTotal(total);
    } else {
      setTotal(null);
    }
  }, [selectedItem, area]);

  return (
    <div className="calcPage ">
      <h1 className="title ">Ár kalkulátor</h1>

      <div className="priceCalcCard">
        <div>
          {/* Első select – kategória  */}

          <Select
            className="react-select job"
            options={categoryOptions}
            placeholder="Válassz kategoriát"
            onChange={(opt) => setSelectedCategoryKey(opt.value)}
          ></Select>

          {/* Második select – munkatípus */}
          <Select
            className="react-select category"
            options={itemOptions}
            placeholder="Válassz munkát"
            onChange={(opt) => setSelectedItemId(opt.value)}
            isDisabled={!items.length}
          ></Select>

          {selectedItem && (
            <>
              <h2 className="workTitle">{selectedItem.nev}</h2>
              <p>💼 Munkadíj: {selectedItem.munkadij} Ft/m²</p>
              <p>🧱 Anyagdíj: {selectedItem.anyagdij} Ft/m²</p>
            </>
          )}
        </div>

        <div>
          <label style={{marginRight: 5}}>Adja meg a területet (m²):</label>
          
          <input
            type="number"
            min="0"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="pl. 50"
          />

          {total !== null && (
            <div className="result">
              <strong>Összesen:</strong> {total.toLocaleString()} Ft
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
