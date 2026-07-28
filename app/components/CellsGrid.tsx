"use client";
import { useMemo,useState } from "react";
import { cells } from "../site-content";
import { Icon } from "./Icons";
export function CellsGrid(){
  const [query,setQuery]=useState(""); const [audience,setAudience]=useState("Todas");
  const filtered=useMemo(()=>cells.filter(c=>{
    const text=`${c.name} ${c.neighborhood} ${c.age} ${c.day}`.toLowerCase();
    return text.includes(query.trim().toLowerCase())&&(audience==="Todas"||c.age.toLowerCase().includes(audience.toLowerCase()));
  }),[query,audience]);
  return <><div className="cell-filters">
    <label><span>Buscar por nome ou bairro</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ex.: A Forja ou Itaguaí"/></label>
    <label><span>Público</span><select value={audience} onChange={e=>setAudience(e.target.value)}><option>Todas</option><option>Jovens</option><option>Adultos</option><option>Famílias</option></select></label>
  </div><div className="cells-grid">{filtered.map(c=><article className="cell-card" key={c.id}>
    <div className="cell-image" style={{backgroundImage:`url(${c.image})`}}><span>{c.neighborhood}</span></div>
    <div className="cell-body"><p className="eyebrow dark">{c.age}</p><h2>{c.name}</h2><p>{c.audience}</p><dl>
      <div><dt><Icon name="user"/>Líder</dt><dd>{c.leader}</dd></div>
      <div><dt><Icon name="clock"/>Encontro</dt><dd>{c.day} · {c.time}</dd></div>
      <div><dt><Icon name="pin"/>Endereço</dt><dd>{c.address}</dd></div>
    </dl><a href={c.mapUrl} className="text-link" target="_blank" rel="noreferrer">Abrir rota no Google Maps <Icon name="arrow"/></a></div>
  </article>)}</div>{!filtered.length&&<div className="empty"><p>Nenhuma célula corresponde a esses filtros.</p><button className="text-link" onClick={()=>{setQuery("");setAudience("Todas")}}>Limpar filtros</button></div>}</>;
}
