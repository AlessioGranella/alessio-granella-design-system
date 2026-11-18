import { asset } from '../../asset';
import { Codice } from '../Codice';

const PAGINE = [
  { file: 'esempio-1.png', titolo: 'Pagina 1', testo: 'Copertina verde, 01 Obiettivo, 02 Cosa ricevi (massimo 6 voci).' },
  { file: 'esempio-2.png', titolo: 'Pagina 2', testo: '03 Investimento, 04 Tempi, 05 Condizioni, 06 Per partire mi servono, firme.' },
];

export function Template() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Costruire</p>
          <h1>Template preventivo</h1>
          <p className="ag-lead">Il modello per ogni proposta economica: due pagine A4, HTML che diventa PDF. L'esempio usa un cliente inventato.</p>
        </div>
        <div className="dx-griglia dx-griglia--2">
          {PAGINE.map(p => (
            <figure key={p.file} style={{ margin: 0 }}>
              <a href={asset('brand/template/esempio.pdf')} target="_blank" rel="noreferrer">
                <img src={asset(`brand/template/${p.file}`)} alt={p.titolo} style={{ width: '100%', border: '1px solid var(--ag-line)', display: 'block' }} />
              </a>
              <figcaption className="ag-small" style={{ marginTop: 8 }}><b>{p.titolo}.</b> {p.testo}</figcaption>
            </figure>
          ))}
        </div>
        <p className="ag-small">Clic su una pagina per aprire il PDF d'esempio.</p>
      </section>

      <section className="dx-section">
        <h2>Dove sta</h2>
        <p>La fonte è <code>design-system/templates/preventivo/</code>. Il vecchio percorso
          <code> Clienti/03_Materiali/Template_Preventivo</code> è un collegamento alla stessa cartella: funziona come prima.</p>
        <ul className="ag-list">
          <li><b>preventivo.html</b><span>Il modello con i <code>[SEGNAPOSTO]</code> da compilare.</span></li>
          <li><b>esempio.html</b><span>Il riferimento per tono e lunghezza dei testi.</span></li>
          <li><b>build.sh</b><span>Genera il PDF con Chrome e avvisa se il documento supera le 2 pagine.</span></li>
          <li><b>assets/</b><span>Augustina (uso desktop, PDF non venduti) e logo tondo.</span></li>
          <li><b>LEGGIMI.md</b><span>Istruzioni e regole commerciali.</span></li>
        </ul>
      </section>

      <section className="dx-section">
        <h2>Come si usa</h2>
        <Codice>{`# 1. copia la cartella nella trattativa
cp -R "design-system/templates/preventivo" "Clienti/04_Trattative/⟦<Cliente>⟧"

# 2. compila preventivo.html (tutti i [SEGNAPOSTO])

# 3. genera il PDF
cd "Clienti/04_Trattative/⟦<Cliente>⟧"
./build.sh preventivo.html ⟦Preventivo_<Cliente>_<Progetto>⟧.pdf`}</Codice>
        <p>Prima di inviarlo, guarda l'anteprima delle due pagine: nessun testo deve toccare il piede.</p>
      </section>

      <section className="dx-section">
        <h2>Regole</h2>
        <ul className="ag-list">
          <li><b>Prezzi</b><span>Più IVA 22%, regime ordinario, niente rivalsa INPS (iscrizione artigiani).</span></li>
          <li><b>Pagamento</b><span>Acconto 40% all'avvio, saldo alla consegna.</span></li>
          <li><b>Revisioni extra</b><span>45 €/h.</span></li>
          <li><b>Validità</b><span>30 giorni dalla data di invio.</span></li>
          <li><b>Tono</b><span>Caldo, essenziale, frasi corte, del «tu». L'obiettivo parla del risultato per il cliente, non del lavoro di Alessio.</span></li>
        </ul>
        <div className="dx-note dx-note--neutra">
          <p>Nel template i numeri della fascia verde «Per partire mi servono» sono in Rust: è l'unica eccezione
            alla regola «su scuro l'accento è Muschio», tenuta perché il documento è già approvato e funziona in stampa.</p>
        </div>
      </section>
    </>
  );
}
