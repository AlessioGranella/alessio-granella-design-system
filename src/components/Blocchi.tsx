import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { Lockup } from './Marchio';

export type FondoFascia = 'paper' | 'soft' | 'dark' | 'verde';

/** Fascia a tutta larghezza. Alternare chiaro e scuro dà il ritmo alla pagina. */
export function Fascia({ fondo = 'paper', stretta, id, children }:
  { fondo?: FondoFascia; stretta?: boolean; id?: string; children: ReactNode }) {
  const cls = ['ag-band', fondo !== 'paper' && `ag-band--${fondo}`, stretta && 'ag-band--tight'].filter(Boolean).join(' ');
  return <section id={id} className={cls}><div className="ag-wrap">{children}</div></section>;
}

/** Eyebrow a sinistra, titolo (ed eventuale testo) a destra. */
export function IntestazioneSezione({ eyebrow, titolo, children }:
  { eyebrow: string; titolo: ReactNode; children?: ReactNode }) {
  return (
    <header className="ag-head">
      <p className="ag-eyebrow">{eyebrow}</p>
      <div><h2>{titolo}</h2>{children && <p>{children}</p>}</div>
    </header>
  );
}

type PropsBottone = AnchorHTMLAttributes<HTMLAnchorElement> & { variante?: 'primary' | 'ghost' };

/** Un solo primario per vista. Il ghost accompagna, non compete. */
export function Bottone({ variante = 'ghost', className, ...props }: PropsBottone) {
  return <a {...props} className={['ag-btn', variante === 'primary' && 'ag-btn--primary', className].filter(Boolean).join(' ')} />;
}

export function Citazione({ children, firma }: { children: ReactNode; firma?: string }) {
  return (
    <blockquote className="ag-quote-block">
      <p>{children}</p>
      {firma && <footer>{firma}</footer>}
    </blockquote>
  );
}

export function Passi({ passi }: { passi: { titolo: string; testo: string }[] }) {
  return (
    <ol className="ag-steps">
      {passi.map(p => <li key={p.titolo}><h3>{p.titolo}</h3><p>{p.testo}</p></li>)}
    </ol>
  );
}

export function CardProgetto({ titolo, testo, immagine, href, etichetta = 'Leggi il caso' }:
  { titolo: string; testo: string; immagine?: string; href: string; etichetta?: string }) {
  return (
    <a className="ag-card" href={href}>
      {immagine && <div className="ag-card__media"><img src={immagine} alt="" loading="lazy" /></div>}
      <div className="ag-card__body">
        <h3>{titolo}</h3>
        <p>{testo}</p>
        <span className="ag-link ag-link--arrow">{etichetta}</span>
      </div>
    </a>
  );
}

export function Faq({ voci }: { voci: { domanda: string; risposta: string }[] }) {
  return (
    <div className="ag-faq">
      {voci.map(v => <details key={v.domanda}><summary>{v.domanda}</summary><p>{v.risposta}</p></details>)}
    </div>
  );
}

export function Navigazione({ voci, cta }: { voci: { label: string; href: string }[]; cta?: { label: string; href: string } }) {
  return (
    <nav className="ag-nav">
      <div className="ag-wrap ag-nav__inner">
        <Lockup />
        <div className="ag-nav__links">
          {voci.map(v => <a key={v.href} className="ag-link" href={v.href}>{v.label}</a>)}
          {cta && <Bottone variante="primary" href={cta.href}>{cta.label}</Bottone>}
        </div>
      </div>
    </nav>
  );
}

export function PieDiPagina({ email = 'info@alessiogranella.com', sito = 'alessiogranella.com' }: { email?: string; sito?: string }) {
  return (
    <footer className="ag-band ag-band--verde ag-footer">
      <div className="ag-wrap">
        <div className="ag-footer__top">
          <p className="ag-footer__payoff">Al tuo fianco<br />ad ogni passo.</p>
          <div className="ag-footer__contatti">
            <a className="ag-link" href={`mailto:${email}`}>{email}</a>
            <a className="ag-link" href={`https://${sito}`}>{sito}</a>
          </div>
        </div>
        <div className="ag-footer__bottom">
          <span>alessio granella · brand designer</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
