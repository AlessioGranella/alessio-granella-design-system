import type { CSSProperties, ReactNode } from 'react';
import { asset } from '../asset';
import { palette, servizio, schede, contrasti, type NomeColore } from '../tokens';

/* Il brandbook legge i valori da tokens.ts: se cambia un token, cambia anche qui. */

const VERSIONE = 'v1.0 · ottobre 2026';
const img = (p: string) => asset(`brand/${p}`);
const virgola = (n: number) => n.toFixed(1).replace('.', ',');
const SCURI: NomeColore[] = ['ink', 'verde', 'rust', 'bluNero'];

type Fondo = 'paper' | 'soft' | 'ink' | 'verde';
type DefPagina = { sezione?: string; titolo?: string; fondo?: Fondo; folio?: boolean; el: (n: number) => ReactNode };

function Pagina({ fondo = 'paper', n, sezione, folio = true, children }:
  { fondo?: Fondo; n: number; sezione?: string; folio?: boolean; children: ReactNode }) {
  return (
    <section className={`bb-page${fondo !== 'paper' ? ` bb-page--${fondo}` : ''}`}>
      {children}
      {folio && (
        <footer className="bb-folio">
          <span>alessio granella — Brandbook {VERSIONE}</span>
          <span>{sezione ? `${sezione} · ` : ''}{String(n).padStart(2, '0')}</span>
        </footer>
      )}
    </section>
  );
}

function Testa({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <header className="bb-head">
      <p className="bb-eyebrow">{eyebrow}</p>
      <h2 className="bb-h1">{children}</h2>
    </header>
  );
}

/* ---------------------------------------------------------------- pagine */

const copertina: DefPagina = {
  fondo: 'ink', folio: false,
  el: () => (
    <div className="bb-cover">
      <div className="bb-cover__row" style={{ alignItems: 'start' }}>
        <img src={img('loghi/tondo-paper.svg')} style={{ width: '38mm' }} alt="" />
        <p className="bb-eyebrow" style={{ textAlign: 'right', lineHeight: 1.9 }}>Identità visiva<br />{VERSIONE}</p>
      </div>
      <div>
        <h1 className="bb-cover__title">Brand<br />book</h1>
        <div className="bb-cover__row" style={{ marginTop: '8mm', borderTop: '.3mm solid var(--ag-line-dark)', paddingTop: '4mm' }}>
          <p style={{ fontSize: '11pt', fontWeight: 500, letterSpacing: '-.01em' }}>alessio granella</p>
          <p style={{ fontSize: '11pt', fontStyle: 'italic', fontWeight: 300, color: 'var(--ag-on-dark-muted)' }}>Al tuo fianco ad ogni passo.</p>
        </div>
      </div>
    </div>
  ),
};

const posizionamento: DefPagina = {
  sezione: '01 Il brand', titolo: 'Il brand', folio: false,
  el: (n) => (
    <div className="bb-split">
      <img src={img('foto/ritratto.jpg')} alt="Alessio Granella" style={{ objectPosition: '50% 40%' }} />
      <div className="bb-split__copy">
        <p className="bb-eyebrow">01 — Posizionamento</p>
        <div>
          <h2 className="bb-h1" style={{ fontSize: '34pt' }}>Ogni brand ha una storia <span className="bb-em">vera</span> da raccontare.</h2>
          <p className="bb-p" style={{ marginTop: '7mm' }}>Accompagno founder e imprenditori a costruire un'identità di brand che li rappresenti
            davvero. E rimango al loro fianco per declinarla su ogni touchpoint, mentre il brand cresce.</p>
          <p className="bb-p">Il mio approccio parte dall'ascolto. Prima le domande giuste, poi il design.
            Perché un'identità visiva che dura nasce sempre dalla chiarezza.</p>
        </div>
        <footer className="bb-folio" style={{ left: '14mm' }}><span>alessio granella — Brandbook</span><span>01 Il brand · {String(n).padStart(2, '0')}</span></footer>
      </div>
    </div>
  ),
};

const manifesto: DefPagina = {
  sezione: '01 Il brand', fondo: 'verde',
  el: () => (
    <div className="bb-pad">
      <p className="bb-eyebrow">Manifesto</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12mm', marginTop: '14mm' }}>
        <p style={{ fontSize: '21pt', fontWeight: 300, lineHeight: 1.18, letterSpacing: '-.015em', color: 'var(--ag-on-dark)' }}>
          Credo che ogni brand abbia una storia vera da raccontare. Il mio lavoro è aiutarti a trovarla, e poi a renderla
          visibile, coerente e riconoscibile in ogni luogo in cui il tuo brand vive.
        </p>
        <div>
          <p className="bb-p">Accompagno i miei clienti dall'inizio: dalla definizione dell'identità fino alla sua declinazione su ogni
            touchpoint. Come un partner, qualcuno che conosce il tuo brand quanto te e costruisce con te un rapporto fondato sul
            rispetto, sulla fiducia e sulla gentilezza.</p>
          <p className="bb-p">Lavoro come un artigiano, con cura per ogni dettaglio. Scelgo ogni volta lo strumento più adatto al
            problema. L'AI è parte del mio toolkit, come lo sono stati prima di lei gli altri strumenti che hanno reso il mio lavoro
            più preciso. Quello che non cambia è la mano che guida, e la testa che pensa.</p>
          <p className="bb-p">Perché un'identità si costruisce insieme. E per farlo bene, bisogna prima imparare ad ascoltarsi.</p>
        </div>
      </div>
      <p style={{ position: 'absolute', left: 0, bottom: 0, fontSize: '38pt', fontWeight: 300, letterSpacing: '-.03em', lineHeight: 1, color: 'var(--ag-paper)' }}>
        Al tuo fianco ad ogni passo.
      </p>
    </div>
  ),
};

const VALORI: [string, string][] = [
  ['Libertà', 'Scegliere come lavorare e con chi.'],
  ['Rispetto', 'Per il percorso del cliente e per il suo tempo.'],
  ['Onestà', 'Dire le cose come stanno, con garbo.'],
  ['Cooperazione', 'Il lavoro è sempre un atto in due.'],
  ['Determinazione', 'Il motore silenzioso dietro ogni scelta.'],
  ['Serenità', 'Una condizione da mantenere, non da inseguire.'],
];

const valori: DefPagina = {
  sezione: '01 Il brand',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Valori e ruolo">Una guida in un territorio che il cliente non conosce.</Testa>
      <div className="bb-body">
        <div>
          <p className="bb-h3">L'artigiano tecnologico</p>
          <p className="bb-p" style={{ marginTop: '2mm' }}>Lo strumento si sceglie in base al problema, AI compresa. La cura del dettaglio non cambia.</p>
          <p className="bb-h3" style={{ marginTop: '8mm' }}>La metafora guida</p>
          <p className="bb-p" style={{ marginTop: '2mm' }}>Una guida: qualcuno che accompagna il cliente in un territorio che non conosce, un passo alla volta.</p>
        </div>
        <div className="bb-values">
          {VALORI.map(([v, d]) => <div key={v}><b>{v}</b><span>{d}</span></div>)}
        </div>
      </div>
    </div>
  ),
};

const TRATTI: [string, string][] = [
  ['Caldo, non informale', 'Una compostezza di fondo: rispetta chi legge e si rispetta.'],
  ['Gentile', 'Mai brusco, mai condiscendente, mai frettoloso.'],
  ['Diretto', 'Va al punto. Una cosa sola, detta bene.'],
  ['Concreto', 'Cose che si possono toccare, non concetti che fluttuano.'],
  ['Autentico', 'Una frase semplice e vera batte una frase brillante ma forzata.'],
  ['Riflessivo', 'Nel testo non c\'è fretta, c\'è ponderazione.'],
  ['Essenziale', 'Ogni parola ha un motivo per stare lì.'],
];

const voce: DefPagina = {
  sezione: '02 Voce', titolo: 'Tono di voce',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="02 — Tono di voce">Essenziale, caldo, gentile, preciso.</Testa>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10mm', marginTop: '9mm' }}>
        <ul className="bb-list">
          {TRATTI.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
        </ul>
        <div>
          <p className="bb-small" style={{ marginBottom: '2mm' }}>Parole che vengono naturali</p>
          <ul className="bb-words">
            {['Accompagno', 'Guido', 'Ascolto', 'Fiducia', 'Cura', 'Chiarezza', 'Definire', 'Storia', 'Identità', 'Partner', 'Percorso', 'Insieme', 'Gentilezza', 'Rispetto'].map(p => <li key={p}>{p}</li>)}
          </ul>
          <p className="bb-small" style={{ margin: '4mm 0 2mm' }}>Parole che non appartengono al brand</p>
          <ul className="bb-words bb-words--no">
            {['Trasformo', 'Metodo', 'Eseguo', 'Fretta', 'Template', 'Gli imprenditori', 'Pixel perfect'].map(p => <li key={p}>{p}</li>)}
          </ul>
          <div className="bb-dd" style={{ marginTop: '6mm' }}>
            <div><h4>Così</h4><ul><li>Frasi corte, un'idea per frase.</li><li>A capo spesso.</li><li>Chiusa breve e memorabile.</li></ul></div>
            <div><h4>Non così</h4><ul><li>Periodi lunghi e subordinate.</li><li>Frasi a effetto, «non X, ma Y».</li><li>Superlativi e urgenza.</li></ul></div>
          </div>
        </div>
      </div>
    </div>
  ),
};

const monogramma: DefPagina = {
  sezione: '03 Marchio', titolo: 'Marchio',
  el: () => (
    <div className="bb-pad" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12mm' }}>
      <div>
        <p className="bb-eyebrow">03 — Marchio</p>
        <h2 className="bb-h1" style={{ marginTop: '6mm' }}>Il monogramma AG</h2>
        <p className="bb-p" style={{ marginTop: '7mm' }}>La A e la G condividono la diagonale: è l'elemento che regge tutta la forma.
          La A entra nell'apertura della G. Compatto, funziona da avatar, favicon e timbro.</p>
        <p className="bb-p">Il marchio si usa in tre forme: il monogramma da solo, il logo tondo che lo incornicia con
          «Alessio Granella · Graphic Design Studio», e il nome in minuscolo «alessio granella».</p>
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <img src={img('loghi/monogramma-rust.svg')} style={{ width: '112mm' }} alt="Monogramma AG" />
      </div>
    </div>
  ),
};

const VERSIONI: { c: 'rust' | 'ink' | 'paper' | 'muschio'; fondo: string; testo: string; nota: string }[] = [
  { c: 'rust', fondo: palette.paper, testo: palette.ink, nota: 'Principale · Rust su Paper' },
  { c: 'ink', fondo: palette.soft, testo: palette.ink, nota: 'Monocromo · Ink su chiaro' },
  { c: 'paper', fondo: palette.ink, testo: servizio.onDark, nota: 'Negativo · Paper su Ink' },
  { c: 'muschio', fondo: palette.verde, testo: servizio.onDark, nota: 'Tono su tono · Muschio su Verde' },
];

const versioni: DefPagina = {
  sezione: '03 Marchio',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Logo tondo e versioni colore">La firma ufficiale, in quattro colori.</Testa>
      <div className="bb-tiles" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '9mm', height: '92mm' }}>
        {VERSIONI.map(v => (
          <div key={v.c} className="bb-tile" style={{ background: v.fondo, border: v.c === 'rust' ? '.3mm solid var(--ag-line)' : undefined }}>
            <img src={img(`loghi/tondo-${v.c}.svg`)} style={{ width: '40mm' }} alt="" />
            <small style={{ color: v.testo }}>{v.nota}</small>
          </div>
        ))}
      </div>
      <p className="bb-small" style={{ marginTop: '4mm', maxWidth: '200mm' }}>File: <span className="bb-mono">design-system/public/brand/loghi/tondo-*.svg</span> e
        <span className="bb-mono"> monogramma-*.svg</span>. Nessun altro colore è previsto.</p>
    </div>
  ),
};

const rispetto: DefPagina = {
  sezione: '03 Marchio',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Area di rispetto e dimensioni">Spazio intorno, sempre.</Testa>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: '10mm', marginTop: '10mm', alignItems: 'center' }}>
        <div style={{ display: 'grid', placeItems: 'center', background: 'var(--ag-white)', height: '100mm' }}>
          <div className="bb-clear" style={{ padding: '12mm' }}>
            <img src={img('loghi/tondo-rust.svg')} style={{ width: '48mm', display: 'block', outline: '.2mm solid rgb(209 65 36 / .35)' }} alt="" />
            <span className="bb-clear__mark" style={{ top: '4.5mm', left: '50%', transform: 'translateX(-50%)' }}>¼ ø</span>
            <span className="bb-clear__mark" style={{ left: '3mm', top: '50%', transform: 'translateY(-50%)' }}>¼ ø</span>
          </div>
        </div>
        <div>
          <p className="bb-h3">Area di rispetto</p>
          <p className="bb-p" style={{ marginTop: '2mm' }}>Intorno al logo tondo resta libero almeno un quarto del suo diametro, su ogni lato.
            Per il monogramma vale un quarto della sua altezza. Nessun testo, filetto o bordo entra in quest'area.</p>
          <p className="bb-h3" style={{ marginTop: '7mm' }}>Dimensioni minime</p>
          <ul className="bb-list" style={{ marginTop: '2mm' }}>
            <li><b>Logo tondo</b><span>15 mm in stampa · 48 px a schermo. Sotto, la corona non si legge.</span></li>
            <li><b>Monogramma</b><span>5 mm in stampa · 16 px a schermo.</span></li>
          </ul>
        </div>
        <div style={{ display: 'grid', gap: '6mm', justifyItems: 'start' }}>
          <div style={{ display: 'flex', alignItems: 'end', gap: '8mm' }}>
            <img src={img('loghi/tondo-rust.svg')} style={{ width: '15mm' }} alt="" />
            <img src={img('loghi/monogramma-rust.svg')} style={{ width: '5mm' }} alt="" />
          </div>
          <p className="bb-small">Al minimo: logo tondo 15 mm, monogramma 5 mm.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4mm', marginTop: '6mm' }}>
            <img src={img('loghi/tondo-rust.svg')} style={{ width: '16mm' }} alt="" />
            <span><b style={{ display: 'block', fontSize: '11pt', fontWeight: 500 }}>alessio granella</b><small className="bb-small">Brand designer</small></span>
          </div>
          <p className="bb-small">Lockup orizzontale: logo tondo + nome in Medium minuscolo + ruolo.</p>
        </div>
      </div>
    </div>
  ),
};

const ERRORI: { nota: string; stile?: CSSProperties; fondo?: string; file?: string; foto?: boolean }[] = [
  { nota: 'Non deformare', stile: { transform: 'scaleX(1.45)' } },
  { nota: 'Non ruotare', stile: { transform: 'rotate(-18deg)' } },
  { nota: 'Non ricolorare', stile: { filter: 'hue-rotate(150deg) saturate(1.6)' } },
  { nota: 'Non Rust su fondo scuro', fondo: palette.ink },
  { nota: 'Niente ombre o effetti', stile: { filter: 'drop-shadow(1.2mm 1.6mm 1.2mm rgb(0 0 0 / .45))' } },
  { nota: 'Non su foto senza zona calma', foto: true },
];

const errori: DefPagina = {
  sezione: '03 Marchio',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Usi scorretti">Il marchio non si tocca.</Testa>
      <div className="bb-tiles" style={{ gridTemplateColumns: 'repeat(6, 1fr)', marginTop: '10mm', height: '78mm' }}>
        {ERRORI.map(e => (
          <div key={e.nota} className="bb-tile" style={{ background: e.fondo ?? 'var(--ag-white)', overflow: 'hidden' }}>
            {e.foto && <img src={img('foto/al-lavoro.jpg')} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '20% 50%' }} />}
            <img src={img('loghi/tondo-rust.svg')} style={{ width: '24mm', position: 'relative', ...e.stile }} alt="" />
            <i className="bb-x" />
            <small style={{ color: e.fondo || e.foto ? servizio.onDark : palette.ink, right: '3mm' }}>{e.nota}</small>
          </div>
        ))}
      </div>
      <p className="bb-p" style={{ marginTop: '6mm', maxWidth: '200mm' }}>Si usano solo i file originali, nelle quattro versioni colore. Il wordmark resta sempre minuscolo
        e non si ricompone con altri caratteri.</p>
    </div>
  ),
};

const colori: DefPagina = {
  sezione: '04 Colore', titolo: 'Colore', folio: false,
  el: (n) => (
    <div className="bb-swatches">
      {(['paper', 'soft', 'muschio', 'rust', 'verde', 'ink', 'bluNero'] as NomeColore[]).map((k, i) => {
        const s = schede.find(x => x.nome === k)!;
        const scuro = SCURI.includes(k);
        const col = scuro ? (k === 'rust' ? palette.white : servizio.onDark) : palette.ink;
        return (
          <div key={k} className="bb-sw" style={{ background: palette[k], color: col }}>
            <div>
              {i === 0 && <p className="bb-eyebrow" style={{ position: 'absolute', top: '9mm', left: '4mm' }}>04 — Colore</p>}
              <b>{s.etichetta}</b>
            </div>
            <div>
              <dl>
                <dt>HEX</dt><dd>{palette[k]}</dd>
                <dt>RGB</dt><dd>{s.rgb.join(' ')}</dd>
                <dt>CMYK</dt><dd>{s.cmyk?.join(' ')}</dd>
                <dt>PMS C</dt><dd>{k === 'paper' ? 'carta' : s.pantone?.solidCoated.codice}</dd>
                <dt>PMS U</dt><dd>{k === 'paper' ? 'carta' : s.pantone?.solidUncoated.codice}</dd>
              </dl>
              <p>{s.ruolo}</p>
            </div>
            {i === 6 && <span style={{ position: 'absolute', right: '4mm', bottom: '9mm', fontSize: '7pt', opacity: .7 }}>04 Colore · {String(n).padStart(2, '0')}</span>}
          </div>
        );
      })}
    </div>
  ),
};

const proporzioni: DefPagina = {
  sezione: '04 Colore',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Proporzioni e combinazioni">Il Rust è raro. Per questo si vede.</Testa>
      <div style={{ display: 'flex', height: '18mm', marginTop: '9mm' }}>
        {([['paper', 46], ['ink', 22], ['soft', 16], ['verde', 9], ['muschio', 4], ['rust', 3]] as const).map(([c, w]) => (
          <div key={c} style={{ flex: w, background: palette[c], border: c === 'paper' ? '.3mm solid var(--ag-line)' : undefined }} />
        ))}
      </div>
      <p className="bb-small" style={{ marginTop: '2mm' }}>Indicativo: Paper 46 · Ink 22 · Soft 16 · Verde 9 · Muschio 4 · Rust 3. Massimo tre colori per sezione.
        Le pagine alternano fasce chiare e fasce scure; due fasce scure non si toccano.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '3mm', marginTop: '8mm' }}>
        {contrasti.filter(c => c.ratio >= 3).slice(0, 12).map(c => (
          <div key={c.testo + c.fondo} style={{ background: c.fondo, color: c.testo, padding: '3mm', height: '27mm', border: '.3mm solid var(--ag-line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '17pt', fontWeight: 300, lineHeight: 1 }}>Aa</span>
            <span style={{ fontSize: '6.4pt', lineHeight: 1.3 }}>{virgola(c.ratio)}:1 · {c.ratio >= 7 ? 'AAA' : c.ratio >= 4.5 ? 'AA' : 'AA grande'}<br />{c.uso}</span>
          </div>
        ))}
      </div>
      <p className="bb-small" style={{ marginTop: '3mm' }}>Su fondo scuro l'accento è Muschio, mai Rust (3,2:1). Rust su Paper (4,1:1) è per titoli grandi ed eyebrow; per testo piccolo si usa Rust scuro {servizio.rustStrong}.</p>
    </div>
  ),
};

const pantone: DefPagina = {
  sezione: '04 Colore',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Pantone e stampa">Gli inchiostri di riferimento.</Testa>
      <table className="bb-table" style={{ marginTop: '8mm' }}>
        <thead><tr><th>Colore</th><th>CMYK (FOGRA39)</th><th>Solid Coated</th><th>Solid Uncoated</th><th>Color Bridge C</th><th>Color Bridge U</th></tr></thead>
        <tbody>
          {schede.filter(s => s.pantone && s.nome !== 'paper').map(s => (
            <tr key={s.nome}>
              <td><span className="bb-chip"><i style={{ background: palette[s.nome] }} /><span>{s.etichetta}<small>{palette[s.nome]}</small></span></span></td>
              <td>{s.cmyk?.join(' · ')}</td>
              {(['solidCoated', 'solidUncoated', 'bridgeCoated', 'bridgeUncoated'] as const).map(k => {
                const r = s.pantone![k];
                return <td key={k}><span className="bb-chip"><i style={{ background: r.hex }} /><span>{r.codice}<small>ΔE {virgola(r.dE)}</small></span></span></td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8mm', marginTop: '6mm' }}>
        <p className="bb-small"><b>Carta patinata:</b> il brand si riproduce fedele. È la scelta per tutto ciò che ha fondi verdi pieni.</p>
        <p className="bb-small"><b>Carta naturale:</b> Rust (2349 U) e Muschio reggono; Ink, Verde e Blu-nero si schiariscono molto. Usare il verde per testo e filetti.</p>
        <p className="bb-small"><b>Paper</b> è la carta: si sceglie un supporto bianco naturale e non si stampa. ΔE2000 sotto 2 = indistinguibile. Confermare sempre con mazzetta e prova colore.</p>
      </div>
    </div>
  ),
};

const carattere: DefPagina = {
  sezione: '05 Tipografia', titolo: 'Tipografia',
  el: () => (
    <div className="bb-pad" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '12mm' }}>
      <div>
        <p className="bb-eyebrow">05 — Tipografia</p>
        <p style={{ fontSize: '190pt', fontWeight: 300, lineHeight: .9, letterSpacing: '-.05em', marginTop: '4mm' }}>Aa</p>
        <p style={{ fontSize: '13pt', fontWeight: 300, lineHeight: 1.5, letterSpacing: '.01em', marginTop: '4mm' }}>
          abcdefghijklmnopqrstuvwxyz<br />ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />0123456789 «àèéìòù» & € % — ?!</p>
      </div>
      <div>
        <h2 className="bb-h1">DT Augustina Slab</h2>
        <p className="bb-p" style={{ marginTop: '5mm' }}>Un solo carattere per tutto, titoli e testo. Nessuna sans di supporto.
          La gerarchia la fa il contrasto di scala: titoli grandi e leggeri, testo piccolo e calmo.</p>
        <ul className="bb-list" style={{ marginTop: '7mm' }}>
          {([[200, 'UltraLight', 'Numeri grandi'], [300, 'Light', 'Titoli; testo in stampa'], [400, 'Regular', 'Testo a schermo, H3'], [500, 'Medium', 'Etichette, nome, enfasi'], [600, 'SemiBold', 'Solo stampa piccola']] as const).map(([w, n, u]) => (
            <li key={w}><b style={{ fontWeight: w, fontSize: '13pt' }}>{n}</b><span>{w} · {u}</span></li>
          ))}
        </ul>
        <p className="bb-small" style={{ marginTop: '4mm' }}>Corsivo solo per citazioni e sottotitoli. L'enfasi è una parola in colore d'accento. Massimo due pesi per pagina.
          Licenza Monotype desktop: il font non si distribuisce e non si converte.</p>
      </div>
    </div>
  ),
};

const SCALA: [string, string, string, number, string][] = [
  ['Display', '56–120 pt', 'fino a 7,4 rem', 300, 'Ogni brand ha una storia'],
  ['Titolo', '28–40 pt', '2,2–4,1 rem', 300, 'Prima le domande giuste'],
  ['Sottotitolo', '13–18 pt', '1,65 rem', 400, 'Il percorso con il cliente'],
  ['Testo', '9,5–10,5 pt · interl. 1,5', '18 px · interl. 1,55', 300, 'Accompagno founder e imprenditori a costruire un\'identità che li rappresenti.'],
  ['Etichetta', '7,4–7,6 pt · +0,22 em', '0,72 rem · +0,15 em', 500, 'COME LAVORO'],
  ['Note', '7–8 pt', '0,92 rem', 300, 'Didascalie, note, piè di pagina'],
];

const scala: DefPagina = {
  sezione: '05 Tipografia',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="Gerarchia">Un elemento domina, il resto respira.</Testa>
      <div style={{ marginTop: '7mm', borderTop: '.3mm solid var(--ag-ink)' }}>
        <div className="bb-scale" style={{ borderBottomColor: 'var(--ag-ink)' }}>
          <small><b>Livello</b></small><small><b>Esempio</b></small><small><b>Stampa / schermo</b></small>
        </div>
        {SCALA.map(([n, st, sc, w, es], i) => (
          <div className="bb-scale" key={n}>
            <small>{n}</small>
            <span style={{
              fontWeight: w, lineHeight: 1.05,
              fontSize: ['40pt', '24pt', '14pt', '9.6pt', '7.4pt', '7.6pt'][i],
              letterSpacing: i < 2 ? '-.03em' : i === 4 ? '.22em' : undefined,
              color: i === 4 ? 'var(--ag-rust)' : i === 5 ? 'var(--ag-muted)' : undefined,
            }}>{es}</span>
            <small>{st}<br />{sc}</small>
          </div>
        ))}
      </div>
      <p className="bb-small" style={{ marginTop: '3mm' }}>Titoli: tracking −0,03/−0,035 em, interlinea 0,92–1. Testo: righe entro 62 caratteri.</p>
    </div>
  ),
};

const layout: DefPagina = {
  sezione: '06 Layout', titolo: 'Spazio e layout',
  el: () => (
    <div className="bb-pad">
      <Testa eyebrow="06 — Spazio e layout">Il vuoto è uno strumento.</Testa>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8mm', marginTop: '9mm' }}>
        <div>
          <div style={{ height: '46mm', display: 'grid', gridTemplateRows: '1fr 1.3fr 1fr .8fr', border: '.3mm solid var(--ag-line)' }}>
            <div style={{ background: palette.paper }} /><div style={{ background: palette.ink }} /><div style={{ background: palette.soft }} /><div style={{ background: palette.verde }} />
          </div>
          <p className="bb-h3" style={{ marginTop: '3mm' }}>Fasce</p>
          <p className="bb-small" style={{ marginTop: '1mm' }}>Pagine come sequenza di fasce a tutta larghezza: chiaro, scuro, chiaro. Il footer è Verde.</p>
        </div>
        <div>
          <div style={{ height: '46mm', background: 'var(--ag-white)', border: '.3mm solid var(--ag-line)', padding: '6mm', display: 'grid', gridTemplateColumns: '.4fr 1.6fr', gap: '4mm', alignContent: 'start' }}>
            <span className="bb-eyebrow" style={{ fontSize: '5pt', paddingTop: '1mm' }}>Come lavoro</span>
            <span style={{ fontSize: '13pt', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-.02em' }}>Prima le domande giuste, poi il design.</span>
          </div>
          <p className="bb-h3" style={{ marginTop: '3mm' }}>Intestazione di sezione</p>
          <p className="bb-small" style={{ marginTop: '1mm' }}>Etichetta a sinistra (⅕), titolo a destra (⅘). È la firma del layout, sul sito e nei documenti.</p>
        </div>
        <div>
          <div style={{ height: '46mm', background: 'var(--ag-white)', border: '.3mm solid var(--ag-line)', padding: '6mm', display: 'flex', gap: '3mm', alignItems: 'end' }}>
            {[4, 8, 12, 16, 24, 32, 48, 64].map(v => <i key={v} style={{ width: '4mm', height: `${v / 2}mm`, background: palette.rust }} />)}
          </div>
          <p className="bb-h3" style={{ marginTop: '3mm' }}>Spazio a multipli di 4</p>
          <p className="bb-small" style={{ marginTop: '1mm' }}>Contenitore web 1280 px, margini 32 px. In stampa: margini 16–18 mm.</p>
        </div>
      </div>
      <div className="bb-dd" style={{ marginTop: '8mm' }}>
        <div><h4>Forma</h4><ul><li>Angoli vivi, raggio zero su bottoni, card e campi.</li><li>Filetti da 1 px invece di box e sfondi.</li></ul></div>
        <div><h4>Mai</h4><ul><li>Ombre, gradienti, glow.</li><li>Icone decorative a riempire: meglio una foto, o niente.</li></ul></div>
      </div>
    </div>
  ),
};

const fotografia: DefPagina = {
  sezione: '07 Fotografia', titolo: 'Fotografia', folio: false,
  el: (n) => (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1.25fr 1fr' }}>
      <img src={img('foto/al-lavoro.jpg')} alt="Alessio al lavoro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ display: 'grid', gridTemplateRows: '78mm 1fr' }}>
        <img src={img('foto/mani.jpg')} alt="Mani che disegnano" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ padding: '9mm 14mm 18mm 10mm', position: 'relative' }}>
          <p className="bb-eyebrow">07 — Fotografia</p>
          <h2 className="bb-h2" style={{ marginTop: '3mm' }}>Il modo di lavorare, non il modo di vivere.</h2>
          <ul className="bb-list" style={{ marginTop: '4mm' }}>
            <li style={{ gridTemplateColumns: '18mm 1fr', fontSize: '7.6pt' }}><b>Luce</b><span>Naturale, dalle finestre. Mai flash, mai fredda.</span></li>
            <li style={{ gridTemplateColumns: '18mm 1fr', fontSize: '7.6pt' }}><b>Resa</b><span>Grana, toni caldi o bianco e nero. Mai patinata.</span></li>
            <li style={{ gridTemplateColumns: '18mm 1fr', fontSize: '7.6pt' }}><b>Soggetti</b><span>Alessio al lavoro, mani, carta, strumenti. Niente stock.</span></li>
          </ul>
          <span style={{ position: 'absolute', right: '14mm', bottom: '9mm', fontSize: '7pt', color: 'var(--ag-muted)' }}>07 Fotografia · {String(n).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  ),
};

const preventivo: DefPagina = {
  sezione: '08 Applicazioni', titolo: 'Applicazioni', fondo: 'soft',
  el: () => (
    <div className="bb-pad" style={{ display: 'grid', gridTemplateColumns: '78mm 1fr', gap: '10mm' }}>
      <div>
        <p className="bb-eyebrow">08 — Applicazioni</p>
        <h2 className="bb-h1" style={{ marginTop: '6mm' }}>Il preventivo</h2>
        <p className="bb-p" style={{ marginTop: '6mm' }}>Due pagine A4. Copertina verde con titolo e destinatario, poi obiettivo, cosa ricevi,
          investimento, tempi, condizioni e cosa serve per partire.</p>
        <p className="bb-p">L'obiettivo parla del risultato per il cliente, non del lavoro. La cifra è in Rust, grande: è l'unica informazione che
          deve vedersi da lontano.</p>
        <p className="bb-small" style={{ marginTop: '5mm' }}>Template: <span className="bb-mono">design-system/templates/preventivo/</span></p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6mm', alignItems: 'start' }}>
        <img className="bb-shot" src={img('template/esempio-1.png')} alt="Preventivo, pagina 1" />
        <img className="bb-shot" src={img('template/esempio-2.png')} alt="Preventivo, pagina 2" />
      </div>
    </div>
  ),
};

const sito: DefPagina = {
  sezione: '08 Applicazioni',
  el: () => (
    <div className="bb-pad" style={{ display: 'grid', gridTemplateColumns: '78mm 1fr', gap: '10mm' }}>
      <div>
        <p className="bb-eyebrow">Web</p>
        <h2 className="bb-h1" style={{ marginTop: '6mm' }}>Il sito</h2>
        <p className="bb-p" style={{ marginTop: '6mm' }}>Navigazione chiara su Paper, apertura scura con il titolo più grande della pagina,
          un solo bottone Rust. Poi fasce che si alternano fino al footer Verde con il payoff.</p>
        <p className="bb-p">Tutti i pezzi sono componenti del design system: fasce, intestazioni, bottoni, passi, citazioni, FAQ.</p>
        <p className="bb-small" style={{ marginTop: '5mm' }}>Libreria: <span className="bb-mono">design-system/ → npm run dev</span></p>
      </div>
      <img className="bb-shot" src={img('esempi/sito-pagina.jpg')} alt="Pagina d'esempio" style={{ height: '174mm', width: 'auto', justifySelf: 'end', objectFit: 'cover', objectPosition: 'top' }} />
    </div>
  ),
};

const retro: DefPagina = {
  fondo: 'verde', folio: false,
  el: () => (
    <div className="bb-cover">
      <img src={img('loghi/monogramma-paper.svg')} style={{ width: '22mm' }} alt="" />
      <div>
        <p style={{ fontSize: '64pt', fontWeight: 300, lineHeight: .95, letterSpacing: '-.035em', color: 'var(--ag-paper)' }}>Al tuo fianco<br />ad ogni passo.</p>
        <div className="bb-cover__row" style={{ marginTop: '10mm', borderTop: '.3mm solid var(--ag-line-dark)', paddingTop: '4mm', fontSize: '9pt', color: 'var(--ag-on-dark-muted)' }}>
          <span>info@alessiogranella.com · alessiogranella.com</span>
          <span>Brandbook {VERSIONE}</span>
        </div>
      </div>
    </div>
  ),
};

/* ---------------------------------------------------------------- indice */

const CORPO: DefPagina[] = [
  posizionamento, manifesto, valori,
  voce,
  monogramma, versioni, rispetto, errori,
  colori, proporzioni, pantone,
  carattere, scala,
  layout,
  fotografia,
  preventivo, sito,
];

const indice: DefPagina = {
  el: () => {
    const voci = CORPO.map((p, i) => ({ p, n: i + 3 })).filter(x => x.p.titolo);
    return (
      <div className="bb-pad" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '12mm' }}>
        <div>
          <p className="bb-eyebrow">Indice</p>
          <h2 className="bb-h1" style={{ marginTop: '6mm' }}>Le regole che tengono insieme il brand.</h2>
          <p className="bb-p" style={{ marginTop: '6mm' }}>Questo brandbook è la versione stampabile del design system. I valori vengono dagli
            stessi token usati dal codice: sito, documenti e presentazioni parlano la stessa lingua.</p>
        </div>
        <ol className="bb-toc">
          {voci.map(({ p, n }) => (
            <li key={p.sezione}><span>{p.sezione!.slice(0, 2)}</span><b>{p.titolo}</b><span>{String(n).padStart(2, '0')}</span></li>
          ))}
        </ol>
      </div>
    );
  },
};

const PAGINE: DefPagina[] = [copertina, indice, ...CORPO, retro];

export function Brandbook() {
  return (
    <main className="bb">
      {PAGINE.map((p, i) => (
        <Pagina key={i} n={i + 1} fondo={p.fondo} sezione={p.sezione} folio={p.folio}>{p.el(i + 1)}</Pagina>
      ))}
    </main>
  );
}
