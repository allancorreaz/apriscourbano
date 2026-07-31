"use client";
import { useMemo, useState } from "react";
import { cells } from "../site-content";
import { Icon } from "./Icons";

export function CellsGrid() {
  const [neighborhood, setNeighborhood] = useState("Todos");
  const [type, setType] = useState("Todos");
  const [gender, setGender] = useState("Todos");

  const neighborhoods = useMemo(
    () => ["Todos", ...Array.from(new Set(cells.map((cell) => cell.neighborhood)))],
    [],
  );

  const filtered = useMemo(
    () =>
      cells.filter(
        (cell) =>
          (neighborhood === "Todos" || cell.neighborhood === neighborhood) &&
          (type === "Todos" || cell.type === type) &&
          (gender === "Todos" || cell.gender === gender),
      ),
    [gender, neighborhood, type],
  );

  return (
    <>
      <div className="cell-filters cell-filters-extended">
        <label>
          <span>Filtrar por bairro</span>
          <select value={neighborhood} onChange={(event) => setNeighborhood(event.target.value)}>
            {neighborhoods.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>
          <span>Filtrar por tipo</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option>Todos</option>
            <option>Jovens</option>
            <option>Adultos</option>
            <option>Adolescentes</option>
            <option>Mista</option>
          </select>
        </label>
        <label>
          <span>Filtrar por genero</span>
          <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option>Todos</option>
            <option>Masculina</option>
            <option>Feminina</option>
            <option>Mista</option>
          </select>
        </label>
      </div>
      <div className="cells-grid">
        {filtered.map((cell) => (
          <article className="cell-card" key={cell.id}>
            <div className="cell-image" style={{ backgroundImage: `url(${cell.image})` }}>
              <span>{cell.neighborhood}</span>
            </div>
            <div className="cell-body">
              <div className="cell-tags">
                <p className="eyebrow dark">{cell.type}</p>
                <p className="eyebrow dark">{cell.gender}</p>
              </div>
              <h2>{cell.name}</h2>
              <p>{cell.audience}</p>
              <dl>
                <div><dt><Icon name="user" />Lider</dt><dd>{cell.leader}</dd></div>
                <div><dt><Icon name="clock" />Encontro</dt><dd>{cell.day} às {cell.time}</dd></div>
                <div><dt><Icon name="pin" />Endereco</dt><dd>{cell.address}</dd></div>
                {cell.instagram ? <div><dt><Icon name="instagram" />Instagram</dt><dd>{cell.instagram}</dd></div> : null}
              </dl>
              <div className="cell-links">
                <a href={cell.mapUrl} className="text-link" target="_blank" rel="noreferrer">
                  Abrir rota no Google Maps <Icon name="arrow" />
                </a>
                {cell.instagram ? <a href={`https://www.instagram.com/${cell.instagram.replace("@", "")}/`} className="text-link" target="_blank" rel="noreferrer">Ver no Instagram <Icon name="arrow" /></a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length ? (
        <div className="empty">
          <p>Nenhuma celula corresponde a esses filtros.</p>
          <button className="text-link" onClick={() => {
            setNeighborhood("Todos");
            setType("Todos");
            setGender("Todos");
          }}>Limpar filtros</button>
        </div>
      ) : null}
    </>
  );
}
