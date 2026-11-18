import { Navigazione, Fascia, IntestazioneSezione, Bottone, Passi, Citazione, Faq, PieDiPagina } from '../../components/Blocchi';

/** Una pagina composta solo con i componenti del sistema: è il test che il sistema regge da solo. */
export function Pagina() {
  return (
    <div>
      <Navigazione voci={[{ label: 'Lavori', href: '#pagina' }, { label: 'Come lavoro', href: '#pagina' }]}
        cta={{ label: 'Parliamone', href: '#pagina' }} />

      <Fascia fondo="dark">
        <p className="ag-eyebrow">Brand designer · per founder e imprenditori</p>
        <h1 className="ag-display" style={{ margin: '24px 0 0', maxWidth: '14ch' }}>
          Ogni brand ha una storia <em>vera</em> da raccontare.
        </h1>
        <p className="ag-lead" style={{ marginTop: 32 }}>
          Ti accompagno a trovarla, e poi a renderla visibile, coerente e riconoscibile ovunque il tuo brand vive.
        </p>
        <div className="ag-actions">
          <Bottone variante="primary" href="#pagina">Parliamone</Bottone>
          <Bottone href="#pagina">Vedi i lavori</Bottone>
        </div>
      </Fascia>

      <Fascia>
        <IntestazioneSezione eyebrow="Come lavoro" titolo="Prima le domande giuste, poi il design.">
          Un'identità visiva che dura nasce sempre dalla chiarezza. Per questo si parte dall'ascolto.
        </IntestazioneSezione>
        <Passi passi={[
          { titolo: 'Ascolto', testo: 'Un incontro per capire la storia, le persone, dove volete arrivare.' },
          { titolo: 'Definizione', testo: 'Posizionamento, voce e identità visiva prendono forma insieme.' },
          { titolo: 'Declinazione', testo: 'Il sistema arriva su ogni touchpoint: sito, stampa, social.' },
          { titolo: 'Al tuo fianco', testo: 'Resto accanto al brand mentre cresce.' },
        ]} />
      </Fascia>

      <Fascia fondo="soft">
        <Citazione firma="Manifesto">Un'identità si costruisce insieme. E per farlo bene, bisogna prima imparare ad <em>ascoltarsi</em>.</Citazione>
      </Fascia>

      <Fascia>
        <IntestazioneSezione eyebrow="Domande" titolo="Prima di iniziare" />
        <Faq voci={[
          { domanda: 'Lavori anche con chi ha già un logo?', risposta: 'Sì. Si parte da quello che c\'è e si decide insieme cosa tenere e cosa costruire.' },
          { domanda: 'Come si comincia?', risposta: 'Con una chiamata, senza impegno. Poi una proposta scritta, chiara, valida trenta giorni.' },
        ]} />
      </Fascia>

      <PieDiPagina />
    </div>
  );
}
