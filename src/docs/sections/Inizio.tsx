import { asset } from '../../asset';
const VALORI: [string, string][] = [
  ['Libertà', 'Scegliere come lavorare e con chi.'],
  ['Rispetto', 'Per il percorso del cliente e per il suo tempo.'],
  ['Onestà', 'Dire le cose come stanno, con garbo.'],
  ['Cooperazione', 'Il lavoro è sempre un atto in due.'],
  ['Determinazione', 'Il motore silenzioso dietro ogni scelta.'],
  ['Serenità', 'Una condizione da mantenere, non da inseguire.'],
];

export function Inizio() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Design system · v1.0</p>
          <h1 className="ag-display">Ogni brand ha una storia <em>vera</em> da raccontare.</h1>
          <p className="ag-lead">
            Questo è il sistema del brand personale di Alessio Granella: le regole che tengono insieme
            sito, proposte, presentazioni, preventivi e social. Un solo carattere, una carta calda,
            un verde profondo e un accento ruggine usato con parsimonia.
          </p>
        </div>
        <div className="dx-note dx-note--neutra">
          <p><b>Da dove vengono i valori.</b> La fonte di verità visiva è il sito alessiogranella.com e gli
            asset AI Brand System (landing, whitepaper, case study), che ne condividono esattamente i token.
            Voce, valori e direzione fotografica vengono dal documento di strategia (aprile 2026).</p>
          <p>Dove il documento di strategia e il sito non coincidono (Cormorant + DM Sans contro Augustina Slab),
            vince il sito: le vecchie ipotesi non fanno parte del sistema.</p>
        </div>
      </section>

      <section className="dx-section">
        <h2>Posizionamento</h2>
        <p className="ag-lead">
          Accompagno founder e imprenditori a costruire un'identità di brand che li rappresenti davvero —
          e rimango al loro fianco per declinarla su ogni touchpoint, mentre il brand cresce.
        </p>
        <p>Il tratto distintivo è l'ascolto. Prima le domande giuste, poi il design. Il ruolo è quello di una
          guida: qualcuno che accompagna il cliente in un territorio che non conosce. Il metodo è quello
          dell'artigiano che sceglie ogni volta lo strumento giusto, AI compresa: lo strumento cambia,
          la mano che guida e la testa che pensa no.</p>
        <p>Il sito pubblico parla in inglese a due pubblici: <b>For Brands</b> e <b>For Creative Agencies</b>.
          Headline: «Brands that look right. Feel right. Last.»</p>
      </section>

      <section className="dx-section">
        <h2>Valori</h2>
        <div className="dx-valori">
          {VALORI.map(([v, d]) => <div key={v}><b>{v}</b><span>{d}</span></div>)}
        </div>
      </section>

      <section className="dx-section">
        <h2>Payoff</h2>
        <div className="dx-demo dx-demo--paper">
          <p className="ag-display" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.6rem)' }}>Al tuo fianco<br />ad ogni passo.</p>
        </div>
        <p className="ag-small">Chiude il manifesto, il footer e le proposte. Sempre su una riga sua, mai dentro un paragrafo.</p>
      </section>

      <section className="dx-section">
        <h2>Come usare questo sistema</h2>
        <ul>
          <li><b>Pagine web:</b> importa <code>src/styles/colors_and_type.css</code> e <code>components.css</code>, aggiungi la classe <code>ag</code> al body.</li>
          <li><b>React:</b> <code>import {'{ Fascia, Bottone }'} from '…/design-system/src'</code>.</li>
          <li><b>PDF, slide, grafici:</b> leggi i valori da <code>src/tokens.ts</code>.</li>
          <li><b>Stampa:</b> i riferimenti Pantone sono nella pagina «Pantone e stampa».</li>
          <li><b>Brandbook PDF:</b> <a href={asset('brand/Alessio_Granella_Brandbook_v1.0.pdf')} target="_blank" rel="noreferrer">Alessio_Granella_Brandbook_v1.0.pdf</a>
            (20 pagine A4 orizzontali). Si rigenera con <code>npm run brandbook</code> e legge gli stessi token.</li>
          <li><b>Preventivi:</b> pagina «Template preventivo».</li>
          <li><b>Regole di sistema per agenti:</b> <code>DESIGN.md</code> nella cartella del design system.</li>
        </ul>
      </section>
    </>
  );
}
