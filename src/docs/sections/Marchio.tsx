import { asset } from '../../asset';
import { palette } from '../../tokens';
import { Lockup } from '../../components/Marchio';
import { Codice } from '../Codice';

const VARIANTI: { colore: 'rust' | 'ink' | 'paper' | 'muschio'; fondo: string; nota: string }[] = [
  { colore: 'rust', fondo: palette.paper, nota: 'Principale, su carta' },
  { colore: 'ink', fondo: palette.soft, nota: 'Monocromo, su chiaro' },
  { colore: 'paper', fondo: palette.ink, nota: 'Negativo, su verde' },
  { colore: 'muschio', fondo: palette.verde, nota: 'Tono su tono, su verde' },
];

function Tessera({ file, fondo, nota, w }: { file: string; fondo: string; nota: string; w: number }) {
  return (
    <div className="dx-tessera">
      <div className="dx-tessera__fondo" style={{ background: fondo }}>
        <img src={asset(`brand/loghi/${file}`)} width={w} alt="" />
      </div>
      <div className="dx-tessera__meta"><span>{nota}</span><a href={asset(`brand/loghi/${file}`)} download>{file}</a></div>
    </div>
  );
}

export function Marchio() {
  return (
    <>
      <section className="dx-section">
        <div className="dx-h">
          <p className="ag-eyebrow">Fondamenta</p>
          <h1>Marchio</h1>
          <p className="ag-lead">Tre forme: il monogramma AG, il logo tondo che lo incornicia e il wordmark
            «alessio granella» in minuscolo, disegnato a mano.</p>
        </div>

        <h2>Monogramma</h2>
        <p>La A e la G condividono la diagonale: è l'elemento strutturale. La A entra nell'apertura della G.
          Compatto, funziona da avatar, favicon e timbro.</p>
        <div className="dx-griglia">
          {VARIANTI.map(v => <Tessera key={v.colore} file={`monogramma-${v.colore}.svg`} fondo={v.fondo} nota={v.nota} w={110} />)}
        </div>

        <h2>Logo tondo</h2>
        <p>Il monogramma dentro la corona «Alessio Granella · Graphic Design Studio». È la firma ufficiale:
          intestazioni, preventivi, copertine, navigazione del sito.</p>
        <div className="dx-griglia">
          {VARIANTI.map(v => <Tessera key={v.colore} file={`tondo-${v.colore}.svg`} fondo={v.fondo} nota={v.nota} w={150} />)}
        </div>
      </section>

      <section className="dx-section">
        <h2>Lockup di navigazione</h2>
        <div className="dx-demo dx-demo--paper"><Lockup /></div>
        <Codice>{`<Lockup ruolo="Brand designer" />   // logo tondo 62px + nome Medium + ruolo`}</Codice>
        <p>Il nome nel lockup è composto in Augustina Medium minuscolo, in attesa del wordmark disegnato in vettoriale.</p>
      </section>

      <section className="dx-section">
        <h2>Regole d'uso</h2>
        <div className="dx-do-dont">
          <div className="dx-do">
            <h4>Sì</h4>
            <ul>
              <li>Rust su Paper è la versione di riferimento.</li>
              <li>Su fondi scuri: Paper o Muschio, mai Rust (contrasto 3,2:1).</li>
              <li>Area di rispetto (proposta): almeno ¼ del diametro per lato.</li>
              <li>Minimo (proposta): logo tondo 48 px / 15 mm, sotto la corona non si legge; monogramma 16 px / 5 mm.</li>
            </ul>
          </div>
          <div className="dx-dont">
            <h4>No</h4>
            <ul>
              <li>Deformare, ruotare, aggiungere ombre o contorni.</li>
              <li>Ricolorare fuori dai quattro colori previsti.</li>
              <li>Mettere il logo su foto senza una zona calma dietro.</li>
              <li>Usare il wordmark in maiuscolo o con altri caratteri.</li>
            </ul>
          </div>
        </div>
        <div className="dx-note">
          <p><b>Da completare.</b> Il wordmark «alessio granella» disegnato a mano non è ancora in vettoriale
            nel sistema. Quando c'è, va aggiunto in <code>public/brand/loghi/</code> nelle stesse quattro varianti.</p>
          <p>Il file sorgente del monogramma usava <code>#D64123</code>: allineato a Rust <code>#D14124</code> (differenza invisibile, ΔE &lt; 1).</p>
        </div>
      </section>
    </>
  );
}
