const TRATTI: [string, string][] = [
  ['Caldo ma non informale', 'Mai freddo, mai colloquiale o scherzoso. Una compostezza di fondo: rispetta chi legge e si rispetta.'],
  ['Gentile ed educato', 'La gentilezza è un valore, non un modo di fare. Mai brusco, mai condiscendente, mai frettoloso.'],
  ['Diretto ma non brusco', 'Va al punto senza giri di parole. Una cosa sola, detta bene.'],
  ['Concreto', 'Niente metafore costruite a tavolino: cose che si possono toccare.'],
  ['Autentico', 'Una frase semplice e vera batte una frase brillante ma forzata.'],
  ['Riflessivo', 'Nel testo non c\'è fretta, c\'è ponderazione.'],
  ['Essenziale', 'Ogni parola ha un motivo per stare lì. Togliere non è una moda.'],
];

const SI = ['Accompagno', 'Guido', 'Ascolto', 'Fiducia', 'Cura', 'Chiarezza', 'Definire', 'Storia', 'Identità', 'Partner', 'Percorso', 'Insieme', 'Gentilezza', 'Rispetto'];
const NO = ['Trasformo', 'Metodo', 'Eseguo', 'Fretta', 'Template', 'Gli imprenditori', 'Pixel perfect'];

export function Voce() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Partire da qui</p>
          <h1>Tono di voce</h1>
          <p className="ag-lead">Essenziale, caldo, gentile, preciso. Il ritmo di riferimento è quello del
            manifesto: paragrafi brevi, un'idea ciascuno, una chiusa secca.</p>
        </div>
        <ul className="ag-list">
          {TRATTI.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
        </ul>
      </section>

      <section className="dx-section">
        <h2>Parole</h2>
        <p className="ag-small">Quelle che vengono naturali</p>
        <ul className="dx-parole">{SI.map(p => <li key={p}>{p}</li>)}</ul>
        <p className="ag-small">Quelle che non gli appartengono</p>
        <ul className="dx-parole dx-parole--no">{NO.map(p => <li key={p}>{p}</li>)}</ul>
        <p className="ag-small">«Imprenditori» sì, «gli imprenditori» con l'articolo no: suona come una categoria, non come persone.</p>
      </section>

      <section className="dx-section">
        <h2>Ritmo</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Così</h4>
            <ul>
              <li>Frasi corte. Una sola idea per frase.</li>
              <li>A capo spesso: unità di pensiero respirabili.</li>
              <li>Chiudere con una frase breve e memorabile.</li>
              <li>Titoli in registro piano, descrittivi.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>Non così</h4>
            <ul>
              <li>Periodi lunghi con molte subordinate.</li>
              <li>Frasi a effetto e costruzioni «non X, ma Y».</li>
              <li>Toni da venditore, superlativi, urgenza.</li>
              <li>Racconti sulle origini «da strada»: si racconta il metodo e il percorso col cliente.</li>
            </ul>
          </div>
        </div>
        <div className="dx-demo dx-demo--paper">
          <p style={{ maxWidth: '52ch' }}>
            Credo che ogni brand abbia una storia vera da raccontare. Il mio lavoro è aiutarti a trovarla —
            e poi a renderla visibile, coerente e riconoscibile in ogni luogo in cui il tuo brand vive.
          </p>
          <p style={{ maxWidth: '52ch' }}>Perché un'identità si costruisce insieme. E per farlo bene, bisogna prima imparare ad ascoltarsi.</p>
          <p style={{ margin: 0 }}><b>Al tuo fianco ad ogni passo.</b></p>
        </div>
        <p className="ag-small">Dal manifesto: la voce al massimo della sua espressione.</p>
      </section>
    </>
  );
}
