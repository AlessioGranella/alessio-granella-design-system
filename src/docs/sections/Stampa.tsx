import { palette, schede, type RifPantone } from '../../tokens';

function Rif({ r }: { r: RifPantone }) {
  const classe = r.dE < 2 ? 'dx-de--ok' : r.dE < 5 ? 'dx-de--medio' : 'dx-de--lontano';
  return (
    <span className="dx-pms">
      <i style={{ background: r.hex }} />
      <span>{r.codice}<br /><small className={classe}>ΔE {r.dE.toFixed(1).replace('.', ',')}</small></span>
    </span>
  );
}

export function Stampa() {
  const stampabili = schede.filter(s => s.pantone);
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Fondamenta</p>
          <h1>Pantone e stampa</h1>
          <p className="ag-lead">Per ogni colore il Pantone più vicino in quattro librerie: tinte piatte su carta
            patinata (Solid Coated) e naturale (Solid Uncoated), e la loro simulazione in quadricromia
            (Color Bridge Coated e Uncoated).</p>
        </div>

        <div className="dx-scroll">
          <table className="dx-tabella">
            <thead>
              <tr><th>Brand</th><th>Solid Coated</th><th>Solid Uncoated</th><th>Color Bridge Coated</th><th>Color Bridge Uncoated</th></tr>
            </thead>
            <tbody>
              {stampabili.map(s => (
                <tr key={s.nome}>
                  <td><span className="dx-pms"><i style={{ background: palette[s.nome] }} /><span>{s.etichetta}<br /><small>{palette[s.nome]}</small></span></span></td>
                  <td><Rif r={s.pantone!.solidCoated} /></td>
                  <td><Rif r={s.pantone!.solidUncoated} /></td>
                  <td><Rif r={s.pantone!.bridgeCoated} /></td>
                  <td><Rif r={s.pantone!.bridgeUncoated} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ag-small">
          ΔE2000: <span className="dx-de--ok">sotto 2</span> indistinguibile a colpo d'occhio ·{' '}
          <span className="dx-de--medio">2–5</span> si nota solo affiancando ·{' '}
          <span className="dx-de--lontano">oltre 5</span> colore diverso, la carta non ci arriva.
          Il quadratino mostra il Pantone, non il colore di brand.
        </p>
      </section>

      <section className="dx-section">
        <h2>Note per colore</h2>
        <ul className="ag-list">
          {stampabili.filter(s => s.pantone!.nota).map(s => <li key={s.nome}><b>{s.etichetta}</b><span>{s.pantone!.nota}</span></li>)}
        </ul>
      </section>

      <section className="dx-section">
        <h2>Cosa significa in pratica</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Carta patinata o opaca coated</h4>
            <ul>
              <li>Il brand si riproduce fedele: 7597 C, 5605 C, 2262 C, Warm Gray 1 C.</li>
              <li>È la scelta giusta per tutto ciò che ha fondi verdi pieni: copertine, biglietti, cartelline.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Carta naturale (uncoated)</h4>
            <ul>
              <li>Rust e Muschio reggono (2349 U, 2262 U).</li>
              <li>Ink, Verde e Blu-nero si schiariscono molto: nessun Pantone uncoated arriva a quella profondità.</li>
              <li>Su naturale, usare il verde per testo e filetti, non per campiture grandi.</li>
            </ul>
          </div>
        </div>
        <div className="dx-note">
          <p><b>Fonte e limiti.</b> Corrispondenze calcolate in CIEDE2000 sui valori Lab ufficiali delle librerie
            PANTONE+ V3 (X-Rite, distribuite con Adobe), con conversione sRGB → Lab D50. Pantone ha
            ritoccato alcuni valori dal 2019 in Pantone Connect: prima di andare in stampa, confermare
            sempre sulla mazzetta fisica e con una prova colore del tipografo.</p>
          <p>Ricalcolo: <code>npm run pantone -- &lt;cartella color-books&gt; out.json</code> (script in <code>scripts/pantone.py</code>).</p>
        </div>
      </section>
    </>
  );
}
