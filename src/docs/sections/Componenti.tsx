import type { ReactNode } from 'react';
import { asset } from '../../asset';
import { Bottone, Citazione, Passi, CardProgetto, Faq, IntestazioneSezione } from '../../components/Blocchi';
import { Codice } from '../Codice';

function Demo({ titolo, testo, scuro, children, codice }:
  { titolo: string; testo?: string; scuro?: boolean; children: ReactNode; codice: string }) {
  return (
    <section className="dx-section">
      <h2>{titolo}</h2>
      {testo && <p>{testo}</p>}
      <div className="dx-demo dx-demo--flush">
        <div className="ag-band ag-band--tight">{children}</div>
        {scuro && <div className="ag-band ag-band--tight ag-band--dark">{children}</div>}
      </div>
      <Codice>{codice}</Codice>
    </section>
  );
}

const PASSI = [
  { titolo: 'Ascolto', testo: 'Un incontro per capire la storia, le persone, dove volete arrivare.' },
  { titolo: 'Definizione', testo: 'Posizionamento, voce e identità visiva prendono forma insieme.' },
  { titolo: 'Declinazione', testo: 'Il sistema arriva su ogni touchpoint: sito, stampa, social.' },
  { titolo: 'Al tuo fianco', testo: 'Resto accanto al brand mentre cresce, un passo alla volta.' },
];

export function Componenti() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Costruire</p>
          <h1>Componenti</h1>
          <p className="ag-lead">Pochi pezzi, tutti ricavati dal sito e dagli asset AI Brand System. Ognuno funziona
            su chiaro e su scuro senza varianti: dentro una fascia scura i token si rimappano da soli.</p>
        </div>
      </section>

      <Demo titolo="Bottoni" scuro testo="Un solo primario per vista. Il primario resta Rust anche su scuro; il ghost diventa chiaro."
        codice={`<Bottone ⟦variante="primary"⟧ href="#contatti">Parliamone</Bottone>
<Bottone href="#lavori">Vedi i lavori</Bottone>

<a class="⟦ag-btn ag-btn--primary⟧" href="#">Parliamone</a>`}>
        <div className="ag-wrap"><div className="dx-row">
          <Bottone variante="primary" href="#componenti">Parliamone</Bottone>
          <Bottone href="#componenti">Vedi i lavori</Bottone>
          <a className="ag-link ag-link--arrow" href="#componenti">Leggi il caso</a>
        </div></div>
      </Demo>

      <Demo titolo="Intestazione di sezione" scuro
        codice={`<IntestazioneSezione eyebrow="Come lavoro" titolo="Prima le domande giuste, poi il design.">
  Testo d'apertura facoltativo.
</IntestazioneSezione>`}>
        <div className="ag-wrap">
          <IntestazioneSezione eyebrow="Come lavoro" titolo={<>Prima le domande <em>giuste</em>, poi il design.</>}>
            Un'identità visiva che dura nasce sempre dalla chiarezza.
          </IntestazioneSezione>
        </div>
      </Demo>

      <Demo titolo="Passi" testo="Il percorso con il cliente. Numerazione automatica a due cifre in colore d'accento. I testi qui sono d'esempio."
        codice={`<Passi passi={[{ titolo: 'Ascolto', testo: '…' }, …]} />`}>
        <div className="ag-wrap"><Passi passi={PASSI} /></div>
      </Demo>

      <Demo titolo="Card progetto" testo="Per casi studio e lavori. Fondo bianco su Paper; su Soft perde il bordo."
        codice={`<CardProgetto titolo="OpenEconomics" testo="…" immagine={…} href="/case-study/" />`}>
        <div className="ag-wrap">
          <div className="dx-griglia dx-griglia--2" style={{ marginBottom: 0 }}>
            <CardProgetto titolo="OpenEconomics" href="#componenti" immagine={asset('brand/esempi/case-openeconomics.webp')}
              testo="Un brand system vivo per un istituto di ricerca: dai token ai report, in mano al cliente." />
            <CardProgetto titolo="Produttori Arborea" href="#componenti"
              testo="Quattro marchi, tre temi, un solo sistema: dal brandbook alle schede prodotto." />
          </div>
        </div>
      </Demo>

      <Demo titolo="Citazione" scuro
        codice={`<Citazione firma="Manifesto">Un'identità si costruisce insieme.</Citazione>`}>
        <div className="ag-wrap"><Citazione firma="Manifesto">Un'identità si costruisce <em>insieme</em>.</Citazione></div>
      </Demo>

      <Demo titolo="Elenco a filetti" testo="Per servizi, consegne, specifiche. Etichetta a sinistra, descrizione a destra."
        codice={`<ul class="⟦ag-list⟧"><li><b>Origine</b><span>…</span></li></ul>`}>
        <div className="ag-wrap">
          <ul className="ag-list">
            <li><b>Origine</b><span>L'identità che nasce: posizionamento, marchio, sistema visivo.</span></li>
            <li><b>Presenza</b><span>Il brand che si fa vedere: sito, stampa, social.</span></li>
            <li><b>Alleanza</b><span>L'accompagnamento continuativo, mese dopo mese.</span></li>
          </ul>
        </div>
      </Demo>

      <Demo titolo="Dati" codice={`<div class="⟦ag-stat⟧"><b>30 gg</b><span>validità della proposta</span></div>`}>
        <div className="ag-wrap">
          <div className="dx-griglia" style={{ marginBottom: 0 }}>
            <div className="ag-stat"><b>3</b><span>servizi: Origine, Presenza, Alleanza</span></div>
            <div className="ag-stat"><b>1</b><span>interlocutore per tutto il percorso</span></div>
            <div className="ag-stat"><b>30 gg</b><span>validità di ogni proposta</span></div>
          </div>
        </div>
      </Demo>

      <Demo titolo="FAQ" codice={`<Faq voci={[{ domanda: '…', risposta: '…' }]} />`}>
        <div className="ag-wrap">
          <Faq voci={[
            { domanda: 'Lavori anche con chi ha già un logo?', risposta: 'Sì. Si parte da quello che c\'è e si decide insieme cosa tenere, cosa sistemare e cosa costruire da zero.' },
            { domanda: 'Quanto dura un progetto di identità?', risposta: 'Dipende da cosa serve al brand. Il calendario si fissa insieme, dopo il primo incontro.' },
          ]} />
        </div>
      </Demo>

      <Demo titolo="Campi" testo="Per il modulo di contatto: solo una linea sotto, etichetta in maiuscoletto."
        codice={`<div class="⟦ag-field⟧"><label for="n">Nome</label><input id="n" class="⟦ag-input⟧" /></div>`}>
        <div className="ag-wrap">
          <div className="dx-griglia dx-griglia--2" style={{ marginBottom: 0 }}>
            <div className="ag-field"><label htmlFor="dx-n">Nome</label><input id="dx-n" className="ag-input" placeholder="Come ti chiami" /></div>
            <div className="ag-field"><label htmlFor="dx-e">Email</label><input id="dx-e" className="ag-input" placeholder="nome@azienda.it" /></div>
            <div className="ag-field" style={{ gridColumn: '1 / -1' }}><label htmlFor="dx-m">Raccontami</label><textarea id="dx-m" className="ag-input" placeholder="A che punto è il tuo brand?" /></div>
          </div>
        </div>
      </Demo>
    </>
  );
}
