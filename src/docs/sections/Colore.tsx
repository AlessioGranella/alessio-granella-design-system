import { palette, servizio, schede, contrasti } from '../../tokens';
import { useCopia } from '../Copiabile';

const SEMANTICI: [string, string][] = [
  ['--ag-bg', 'Fondo di pagina: Paper.'],
  ['--ag-bg-alt', 'Fascia chiara alternata: Soft.'],
  ['--ag-bg-dark / -dark-alt', 'Fasce scure: Ink, Verde (footer).'],
  ['--ag-fg / -fg-body / -fg-muted', 'Titoli, testo corrente, note.'],
  ['--ag-accent', 'Rust su chiaro. Dentro una fascia scura diventa Muschio da solo.'],
  ['--ag-accent-strong', 'Hover del primario e Rust su testo piccolo.'],
  ['--ag-border', 'Filetti: Line su chiaro, Line-dark su scuro.'],
];

function rgbHex(h: string) { return [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(' · '); }

export function Colore() {
  const [copiato, copia] = useCopia();
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Fondamenta</p>
          <h1>Colore</h1>
          <p className="ag-lead">Carta, verde bosco, ruggine. Materiali che si possono toccare: lino, cuoio,
            legno scuro. Palette ridotta e coraggiosa: al massimo tre colori per sezione.</p>
        </div>
        <p className="dx-suggerimento">Clic su un colore o su un valore per copiarlo. CMYK per carta patinata (ICC Coated FOGRA39),
          da confermare con una prova colore. I Pantone sono nella pagina «Pantone e stampa».</p>
        <div className="dx-griglia">
          {schede.map(s => {
            const hex = palette[s.nome];
            const rgb = `rgb(${s.rgb.join(', ')})`;
            const cmyk = s.cmyk ? s.cmyk.join(' · ') : '—';
            const pms = s.pantone ? `${s.pantone.solidCoated.codice} · ${s.pantone.solidUncoated.codice}` : '—';
            return (
              <div className="dx-swatch" key={s.nome}>
                <button type="button" className="dx-swatch__chip" aria-label={`Copia ${hex}`}
                        style={{ background: hex, borderBottom: '1px solid var(--ag-line)' }} onClick={() => copia(hex)} />
                <div className="dx-swatch__meta">
                  <strong>{s.etichetta}</strong>
                  <dl>
                    <dt>HEX</dt><dd><button type="button" onClick={() => copia(hex)}>{hex}</button></dd>
                    <dt>RGB</dt><dd><button type="button" onClick={() => copia(rgb)}>{s.rgb.join(' · ')}</button></dd>
                    <dt>CMYK</dt><dd><button type="button" onClick={() => copia(cmyk)}>{cmyk}</button></dd>
                    <dt>PMS</dt><dd>{pms}</dd>
                    <dt>Token</dt><dd>--ag-{s.nome === 'bluNero' ? 'blu-nero' : s.nome}</dd>
                  </dl>
                  <p>{s.ruolo}</p>
                </div>
                {(copiato === hex || copiato === rgb || copiato === cmyk) && <span className="dx-copiato">copiato</span>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="dx-section">
        <h2>Toni di servizio</h2>
        <p>Derivati per testo e filetti. Non sono colori di brand: non compaiono mai come campiture.</p>
        <div className="dx-scroll">
          <table className="dx-tabella">
            <thead><tr><th></th><th>Token</th><th>HEX</th><th>RGB</th><th>Uso</th></tr></thead>
            <tbody>
              {([
                ['rust-strong', servizio.rustStrong, 'Hover del bottone primario; Rust su testo piccolo'],
                ['body', servizio.body, 'Testo corrente su chiaro'],
                ['muted', servizio.muted, 'Note e didascalie'],
                ['line', servizio.line, 'Filetti su chiaro'],
                ['line-dark', servizio.lineDark, 'Filetti su scuro'],
                ['on-dark', servizio.onDark, 'Titoli su scuro'],
                ['on-dark-muted', servizio.onDarkMuted, 'Testo su scuro'],
              ] as const).map(([n, h, u]) => (
                <tr key={n}>
                  <td><span className="dx-pms"><i style={{ background: h }} /></span></td>
                  <td><code>--ag-{n}</code></td><td>{h}</td><td>{rgbHex(h)}</td><td>{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="dx-section">
        <h2>Proporzioni e ritmo</h2>
        <p>La pagina alterna fasce chiare e fasce verdi scure. Il Rust occupa pochissimo spazio: un bottone,
          un eyebrow, il monogramma. È raro, ed è per questo che si vede.</p>
        <div style={{ display: 'flex', height: 64, marginBottom: 8 }}>
          {([['paper', 46], ['ink', 22], ['soft', 16], ['verde', 9], ['muschio', 4], ['rust', 3]] as const).map(([c, w]) => (
            <div key={c} style={{ flex: w, background: palette[c] }} title={`${c} ${w}%`} />
          ))}
        </div>
        <p className="ag-small">Paper 46 · Ink 22 · Soft 16 · Verde 9 · Muschio 4 · Rust 3. Indicativo, a occhio sulla landing: non è una regola rigida.</p>
      </section>

      <section className="dx-section">
        <h2>Ruoli semantici</h2>
        <p>I componenti non usano mai i colori per nome, solo i ruoli. Dentro <code>.ag-band--dark</code> i ruoli
          si rimappano da soli: lo stesso componente funziona su chiaro e su scuro.</p>
        <table className="dx-tabella">
          <tbody>{SEMANTICI.map(([t, d]) => <tr key={t}><td><code>{t}</code></td><td>{d}</td></tr>)}</tbody>
        </table>
      </section>

      <section className="dx-section">
        <h2>Contrasto</h2>
        <div className="dx-scroll">
          <table className="dx-tabella">
            <thead><tr><th>Esempio</th><th>Rapporto</th><th>WCAG</th><th>Uso</th></tr></thead>
            <tbody>
              {contrasti.map(c => (
                <tr key={c.testo + c.fondo}>
                  <td><span style={{ background: c.fondo, color: c.testo, padding: '4px 12px', display: 'inline-block', border: '1px solid var(--ag-line)' }}>Aa testo</span></td>
                  <td>{c.ratio.toFixed(2).replace('.', ',')}:1</td>
                  <td>{c.ratio >= 7 ? 'AAA' : c.ratio >= 4.5 ? 'AA' : c.ratio >= 3 ? 'AA grande' : '—'}</td>
                  <td>{c.uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="dx-note">
          <p><b>Rust su Paper fa 4,07:1:</b> passa AA solo per testo grande. Sul sito è usato anche per gli eyebrow
            (12 px maiuscolo). È una scelta di brand consapevole; dove serve conformità piena, usare
            <code> --ag-accent-strong</code> (5,05:1).</p>
        </div>
      </section>
    </>
  );
}
