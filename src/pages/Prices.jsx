import { useEffect, useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { flexRender } from "@tanstack/react-table";
import Navbar from "../components/Navbar";
import Btn from "../components/Btn";

export default function Prices() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrendIndex] = useState(0);

  const categories = [
    {
      name: "Gipszkartonozás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/gipszkartonozas/gipszkartonozas.json",
    },
    {
      name: "Tapézátás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/tapetazas/tapetazas.json",
    },
    {
      name: "Mázolás",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/mazolas/mazolas.json",
    },
    {
      name: "Festés",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/festes/festes.json",
    },
    {
      name: "Egyéb munkák",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/egyeb-munkak/egyeb-munkak.json",
    },
    {
      name: "Alapmunkák",
      url: "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/alapmunkak/alapmunkak.json",
    },
  ];

  useEffect(() => {
    fetch(categories[currentIndex].url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [currentIndex]);

  const columns = useMemo(
    () => [
      { accessorKey: "nev", header: "Név" },
      {
        accessorKey: "leiras",
        header: "Munka leirás",
        cell: ({ getValue }) => <tt>{getValue()}</tt>,
      },
      { accessorKey: "munkadij", header: "Munka dij" },
      { accessorKey: "anyagdij", header: "Anyag dij" },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <div className="pricePage">
      <div className="navbar navbar-expand-lg">
        <div className="container">
          <Navbar
            homePage={"/"}
            pricesPage={"/prices"}
            contactPage={"/contactus"}
            referencesPage={"/references"}
            isOpen={isOpen ? "show" : ""}
            toggleMenu={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div className="site">
        <div className="p-6">
          <div  className="prices-header my-3 text-lg text-center">
            <h1>
              {categories[currentIndex].name}
            </h1>
            <Link to={"/calc"} target="_blank">
              <Btn
                content={"Ár kalkulátor"}
                btnClass={"pricesCalculatorBtn"}
                btnMargin={""}
              />
            </Link>
          </div>
          <div className="prices-category-nav d-flex gap-4 mb-4 text-center">
            <button
              className="pricesBtn"
              onClick={() => setCurrendIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
            >
              ⬅️ {categories[currentIndex - 1]?.name || "Vége"}
            </button>

            <button
              className="pricesBtn"
              onClick={() =>
                setCurrendIndex((prev) =>
                  Math.min(prev + 1, categories.length - 1)
                )
              }
              disabled={currentIndex === categories.length - 1}
            >
              {categories[currentIndex + 1]?.name || "Vége"} ➡️
            </button>
          </div>

          <table className="desktop-table min-w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className=" px-3 py-2 cursor-pointer"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="border px-3 py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mobile-cards">
            {table.getRowModel().rows.map((row) => {
              const item = row.original;
              return (
                <div key={row.id} className="price-card">
                  <h3>{item.nev}</h3>
                  <tt>{item.leiras}</tt>
                  <p>
                    <strong>Munkadíj:</strong> {item.munkadij} Ft
                  </p>
                  <p>
                    <strong>Anyagdíj:</strong> {item.anyagdij} Ft
                  </p>
                </div>
              );
            })}
          </div>
          <div className="prices-pagination d-flex gap-2 mt-4">
            <button
              className="pricesBtn"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Előző oldal oldal
            </button>
            <button
              className="pricesBtn"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Következő oldal
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
