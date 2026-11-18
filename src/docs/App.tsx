import { useEffect, useState } from 'react';
import { LogoTondo } from '../components/Marchio';
import { Inizio } from './sections/Inizio';
import { Voce } from './sections/Voce';
import { Marchio } from './sections/Marchio';
import { Colore } from './sections/Colore';
import { Stampa } from './sections/Stampa';
import { Tipografia } from './sections/Tipografia';
import { Layout } from './sections/Layout';
import { Fotografia } from './sections/Fotografia';
import { Componenti } from './sections/Componenti';
import { Pagina } from './sections/Pagina';
import { Template } from './sections/Template';

const NAV = [
  { gruppo: 'Partire da qui', voci: [
      { id: 'inizio', label: 'Posizionamento e valori', el: <Inizio /> },
      { id: 'voce', label: 'Tono di voce', el: <Voce /> },
  ]},
  { gruppo: 'Fondamenta', voci: [
      { id: 'marchio', label: 'Marchio', el: <Marchio /> },
      { id: 'colore', label: 'Colore', el: <Colore /> },
      { id: 'stampa', label: 'Pantone e stampa', el: <Stampa /> },
      { id: 'tipografia', label: 'Tipografia', el: <Tipografia /> },
      { id: 'layout', label: 'Spazio e layout', el: <Layout /> },
      { id: 'fotografia', label: 'Fotografia', el: <Fotografia /> },
  ]},
  { gruppo: 'Costruire', voci: [
      { id: 'componenti', label: 'Componenti', el: <Componenti /> },
      { id: 'pagina', label: 'Pagina d\'esempio', el: <Pagina /> },
      { id: 'template', label: 'Template preventivo', el: <Template /> },
  ]},
];

const VOCI = NAV.flatMap(g => g.voci);
const daHash = () => {
  const id = window.location.hash.replace('#', '');
  return VOCI.some(v => v.id === id) ? id : 'inizio';
};

export function App() {
  const [attiva, setAttiva] = useState(daHash);

  // La sezione vive nell'hash: ogni pagina è linkabile e «indietro» funziona.
  useEffect(() => {
    const onHash = () => { setAttiva(daHash()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const corrente = VOCI.find(v => v.id === attiva)!;
  const piena = attiva === 'pagina';
  return (
    <div className="dx">
      <nav className="dx-nav">
        <div className="dx-nav__brand">
          <LogoTondo colore="paper" diametro={88} />
          <small>Design System</small>
        </div>
        {NAV.map(g => (
          <div className="dx-nav__group" key={g.gruppo}>
            <h5>{g.gruppo}</h5>
            {g.voci.map(v => (
              <a key={v.id} href={`#${v.id}`} className="dx-nav__link" aria-current={attiva === v.id}>{v.label}</a>
            ))}
          </div>
        ))}
        <p className="dx-nav__nota">
          v1.0 · ottobre 2026<br />Fonte: alessiogranella.com e asset AI Brand System
        </p>
      </nav>
      <main className={piena ? 'dx-main dx-main--piena' : 'dx-main'}>{corrente.el}</main>
    </div>
  );
}
