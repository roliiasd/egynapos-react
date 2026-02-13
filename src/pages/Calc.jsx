import { useState, useEffect } from "react";
import Select from "react-select";
import "/src/styles/PriceCalc.css";

export default function Calc() {
  const [categories] = useState([
    {
      key: "gipszkartonozas",
      label: "Gipszkartonozás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/gipszkartonozas/gipszkartonozas.json",
    },
    {
      key: "tapetazas",
      label: "Tapétázás",
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
  const [cart, setCart] = useState([]);

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
        setSelectedItemId(null);
        setArea("");
      });
  }, [selectedCategoryKey, categories]);

  const selectedItem = items.find((i) => i.id === selectedItemId);

  const currentPrice =
    selectedItem && area > 0
      ? Number(area) * selectedItem.munkadij + Number(area) * selectedItem.anyagdij
      : null;

  const addToCart = () => {
    if (!selectedItem || !area || area <= 0) return;

    const categoryLabel =
      categories.find((c) => c.key === selectedCategoryKey)?.label || "";

    const newItem = {
      id: Date.now(),
      categoryKey: selectedCategoryKey,
      categoryLabel,
      itemName: selectedItem.nev,
      munkadij: selectedItem.munkadij,
      anyagdij: selectedItem.anyagdij,
      area: Number(area),
      total:
        Number(area) * selectedItem.munkadij +
        Number(area) * selectedItem.anyagdij,
    };

    setCart((prev) => [...prev, newItem]);
    setSelectedItemId(null);
    setArea("");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);
  const selectPortalStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };
  return (
    <div className="calcPage">
      <h1 className="title">Ár kalkulátor</h1>

      <div className="priceCalcCard">
        <div className="calc-section">
          <h3 className="section-title">Munka Kiválasztása</h3>

          <Select
            className="react-select job"
            classNamePrefix='react-select'
            options={categoryOptions}
            placeholder="Válassz kategóriát"
            onChange={(opt) => setSelectedCategoryKey(opt.value)}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            styles={selectPortalStyles}
          />

          <Select
            className="react-select category"
            classNamePrefix='react-select'
            options={itemOptions}
            placeholder="Válassz munkát"
            value={
              selectedItemId
                ? itemOptions.find((o) => o.value === selectedItemId)
                : null
            }
            onChange={(opt) => setSelectedItemId(opt ? opt.value : null)}
            isDisabled={!items.length}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            styles={selectPortalStyles}
          />

          {selectedItem && (
            <div className="item-details">
              <h2 className="workTitle">{selectedItem.nev}</h2>
              <p>Munkadíj: {selectedItem.munkadij.toLocaleString()} Ft/m²</p>
              <p>Anyagdíj: {selectedItem.anyagdij.toLocaleString()} Ft/m²</p>
            </div>
          )}

          <div className="area-input-group">
            <label>Terület (m²):</label>
            <input
              type="number"
              min="0"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="pl. 50"
            />
          </div>

          {currentPrice !== null && (
            <div className="current-price">
              Tétel ára: <strong>{currentPrice.toLocaleString()} Ft</strong>
            </div>
          )}

          <button
            className="add-btn"
            onClick={addToCart}
            disabled={!currentPrice}
          >
            ➕ Hozzáadás a listához
          </button>
        </div>

        <div className="cart-section">
          <h3 className="section-title">🧾 Összesítés</h3>

          {cart.length === 0 ? (
            <p className="empty-cart">Még nincs tétel hozzáadva.</p>
          ) : (
            <>
              <div className="cart-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <span className="cart-category">{item.categoryLabel}</span>
                      <span className="cart-name">{item.itemName}</span>
                      <span className="cart-details">
                        {item.area} m² × ({item.munkadij.toLocaleString()} +{" "}
                        {item.anyagdij.toLocaleString()}) Ft/m²
                      </span>
                    </div>
                    <div className="cart-item-right">
                      <span className="cart-item-total">
                        {item.total.toLocaleString()} Ft
                      </span>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Törlés"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grand-total">
                <span>Végösszeg:</span>
                <strong>{grandTotal.toLocaleString()} Ft</strong>
              </div>

              <button className="clear-btn" onClick={clearCart}>
                Összes törlése
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}