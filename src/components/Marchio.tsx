import { asset } from '../asset';

export type ColoreMarchio = 'rust' | 'ink' | 'paper' | 'muschio';

/** Monogramma AG: la diagonale condivisa tra A e G. Avatar, favicon, timbro. */
export function Monogramma({ colore = 'rust', larghezza = 48, titolo = 'Alessio Granella' }:
  { colore?: ColoreMarchio; larghezza?: number; titolo?: string }) {
  return <img src={asset(`brand/loghi/monogramma-${colore}.svg`)} width={larghezza} alt={titolo} />;
}

/** Logo tondo: monogramma con «Alessio Granella · Graphic Design Studio» in corona. */
export function LogoTondo({ colore = 'rust', diametro = 96, titolo = 'Alessio Granella — Graphic Design Studio' }:
  { colore?: ColoreMarchio; diametro?: number; titolo?: string }) {
  return <img src={asset(`brand/loghi/tondo-${colore}.svg`)} width={diametro} height={diametro} alt={titolo} />;
}

/** Lockup di navigazione: logo tondo + nome + ruolo. */
export function Lockup({ ruolo = 'Brand designer', href = '/', colore = 'rust' }:
  { ruolo?: string; href?: string; colore?: ColoreMarchio }) {
  return (
    <a className="ag-lockup" href={href}>
      <LogoTondo colore={colore} diametro={62} titolo="" />
      <span><b>alessio granella</b><small>{ruolo}</small></span>
    </a>
  );
}
