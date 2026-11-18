import { space } from '../../tokens';
import { Codice } from '../Codice';

export function Layout() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Fondamenta</p>
          <h1>Spazio e layout</h1>
          <p className="ag-lead">Il vuoto è uno strumento, non un avanzo. Ogni sezione ha un elemento dominante
            chiarissimo e tutto il resto gli respira intorno.</p>
        </div>

        <h2>Contenitore</h2>
        <table className="dx-tabella">
          <tbody>
            <tr><td><code>--ag-max</code></td><td>1280 px</td><td>Larghezza massima del contenuto</td></tr>
            <tr><td><code>--ag-gutter</code></td><td>32 px (20 sotto i 520)</td><td>Margine laterale</td></tr>
            <tr><td><code>--ag-band-pad</code></td><td>72 → 132 px</td><td>Respiro verticale di ogni fascia</td></tr>
            <tr><td><code>--ag-nav-h</code></td><td>96 px</td><td>Altezza della navigazione</td></tr>
          </tbody>
        </table>
        <Codice>{`<section class="⟦ag-band ag-band--dark⟧">
  <div class="⟦ag-wrap⟧"> … </div>
</section>`}</Codice>
      </section>

      <section className="dx-section">
        <h2>Fasce</h2>
        <p>La pagina è una sequenza di fasce a tutta larghezza. Alternare chiaro e scuro: Paper → Ink → Paper → Soft → Verde (footer).
          Due fasce scure non si toccano mai.</p>
        <div className="dx-demo dx-demo--flush">
          {(['paper', 'dark', 'soft', 'verde'] as const).map(f => (
            <div key={f} className={`ag-band ag-band--tight${f !== 'paper' ? ` ag-band--${f}` : ''}`} style={{ paddingBlock: 28 }}>
              <div className="ag-wrap"><p className="ag-eyebrow">.ag-band{f !== 'paper' && `--${f}`}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="dx-section">
        <h2>Intestazione di sezione</h2>
        <p>La firma del layout: eyebrow a sinistra (⅕), titolo a destra (⅘). Sotto i 760 px si impilano.</p>
        <div className="dx-demo dx-demo--paper">
          <header className="ag-head" style={{ marginBottom: 0 }}>
            <p className="ag-eyebrow">Come lavoro</p>
            <div><h2>Prima le domande giuste, poi il design.</h2></div>
          </header>
        </div>
      </section>

      <section className="dx-section">
        <h2>Scala di spaziatura</h2>
        <p>Multipli di 4. Padding, gap e margini usano sempre <code>var(--ag-space-*)</code>.</p>
        {Object.entries(space).map(([k, v]) => (
          <div className="dx-spazio" key={k}><span>--ag-space-{k}</span><span>{v}px</span><i style={{ width: v }} /></div>
        ))}
      </section>

      <section className="dx-section">
        <h2>Forma</h2>
        <div className="dx-do-dont">
          <div className="dx-do"><h4>Sì</h4><ul>
            <li>Angoli vivi: raggio 0 su bottoni, card, campi.</li>
            <li>Filetti da 1 px per separare, invece di box e sfondi.</li>
            <li>Tutto piatto: la profondità la danno le fasce scure.</li>
          </ul></div>
          <div className="dx-dont"><h4>No</h4><ul>
            <li>Ombre, gradienti, glow, vetri smerigliati (salvo la nav).</li>
            <li>Card dentro card.</li>
            <li>Icone decorative a riempire: meglio una foto o niente.</li>
          </ul></div>
        </div>
      </section>
    </>
  );
}
