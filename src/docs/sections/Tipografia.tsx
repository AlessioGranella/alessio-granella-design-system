import { scalaTipo } from '../../tokens';
import { Codice } from '../Codice';

const PESI: [number, string, string][] = [
  [200, 'UltraLight', 'Numeri grandi, dati'],
  [300, 'Light', 'Titoli: display, H1, H2'],
  [400, 'Regular', 'Corpo, H3'],
  [500, 'Medium', 'Eyebrow, nome nel lockup, enfasi'],
  [600, 'SemiBold', 'Solo stampa piccola (preventivi)'],
];

export function Tipografia() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Fondamenta</p>
          <h1>Tipografia</h1>
          <p className="ag-lead">Un solo carattere per tutto: DT Augustina Slab. Nessuna sans. La gerarchia la fa
            il contrasto di scala, non il cambio di famiglia: titoli enormi e leggeri, corpo piccolo e calmo.</p>
        </div>
        <div className="dx-demo dx-demo--paper">
          <p className="ag-display">Aa Gg 1938</p>
          <p style={{ fontSize: '1.4rem', letterSpacing: '-.01em', margin: '24px 0 0' }}>
            abcdefghijklmnopqrstuvwxyz<br />ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />0123456789 — «àèéìòù» & € %
          </p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Pesi</h2>
        {PESI.map(([w, n, u]) => (
          <div className="dx-campione" key={w}>
            <small>{w} · {n}<br />{u}</small>
            <span style={{ fontWeight: w, fontSize: '2.2rem', letterSpacing: '-.02em', lineHeight: 1.1 }}>
              Al tuo fianco ad ogni passo <i style={{ fontWeight: w }}>· corsivo</i>
            </span>
          </div>
        ))}
        <p className="ag-small">La famiglia ha anche Bold ed ExtraBold, inclusi nei file ma fuori dal sistema: in una pagina non più di due pesi.</p>
      </section>

      <section className="dx-section">
        <h2>Scala</h2>
        {scalaTipo.map(t => {
          const maiuscolo = t.nome === 'UI' || t.nome === 'Eyebrow';
          return (
            <div className="dx-campione" key={t.nome}>
              <small>{t.nome}<br />{t.token}<br />{t.valore} · {t.peso} · lh {t.interlinea}</small>
              <span style={{
                fontSize: `var(${t.token})`, fontWeight: t.peso, lineHeight: t.interlinea,
                letterSpacing: maiuscolo ? (t.nome === 'UI' ? 'var(--ag-ls-ui)' : 'var(--ag-ls-eyebrow)') : t.peso <= 300 ? 'var(--ag-ls-title)' : undefined,
                textTransform: maiuscolo ? 'uppercase' : undefined,
                color: t.nome === 'Eyebrow' ? 'var(--ag-accent)' : undefined,
              }}>
                {t.peso <= 300 ? 'Ogni brand ha una storia vera' : t.uso}
              </span>
            </div>
          );
        })}
      </section>

      <section className="dx-section">
        <h2>Regole</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sì</h4>
            <ul>
              <li>Titoli Light con tracking −0,035em e interlinea stretta (0,92–1).</li>
              <li>Paragrafi entro 62 caratteri; FAQ e note fino a 74.</li>
              <li>L'enfasi è una parola in Rust (<code>&lt;em&gt;</code>), non il corsivo.</li>
              <li>Il corsivo resta per citazioni e titoli di opere.</li>
              <li>Maiuscolo spaziato solo per eyebrow, bottoni, nav.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>No</h4>
            <ul>
              <li>Una sans di supporto, anche «solo per l'interfaccia».</li>
              <li>Titoli in grassetto.</li>
              <li>Testo sotto i 14 px su schermo (o 8 pt in stampa).</li>
              <li>Più di due pesi nella stessa vista.</li>
            </ul>
          </div>
        </div>
        <Codice>{`font-family: ⟦var(--ag-font)⟧;   /* 'Augustina', Georgia, serif */
font-size:   ⟦var(--ag-fs-h2)⟧;
font-weight: ⟦var(--ag-fw-light)⟧;
letter-spacing: ⟦var(--ag-ls-title)⟧;`}</Codice>
        <div className="dx-note">
          <p><b>Licenza.</b> DT Augustina Slab è un font commerciale Monotype con licenza <b>solo desktop</b>
            (ordine MyFonts 5695894913194). Va bene per lavorare in locale e per PDF non venduti col font incorporato.
            Non si pubblicano i file e non si convertono in WOFF/WOFF2: per il web serve una licenza Web separata.</p>
        </div>
      </section>
    </>
  );
}
