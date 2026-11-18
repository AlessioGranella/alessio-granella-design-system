# Alessio Granella — DESIGN.md

Regole di sistema del brand personale di Alessio Granella. Valgono per sito, landing, proposte,
preventivi, presentazioni, social. Fonte di verità del codice: `src/styles/colors_and_type.css`
(specchio JS: `src/tokens.ts`). Libreria consultabile: `npm run dev`.

## Carattere del brand
Brand designer che accompagna founder e imprenditori. Ruolo: guida, non fornitore. Artigiano che
sceglie lo strumento giusto, AI compresa. Payoff: **Al tuo fianco ad ogni passo.**
Tono visivo: essenziale ed elegante, caldo e personale, artigianale ma contemporaneo.

## Colore
| Nome | HEX | Ruolo | Pantone C / U |
|---|---|---|---|
| Paper | `#F0EFEE` | Fondo di pagina (carta, non bianco) | è la carta: non si stampa |
| Soft | `#DFDAD5` | Fasce chiare alternate | Warm Gray 1 C / Warm Gray 1 U |
| Ink | `#1A2B1E` | Testo, fasce scure | 5605 C / 5535 U* |
| Verde | `#243728` | Fasce scure secondarie, footer | 5605 C / 5535 U* |
| Rust | `#D14124` | L'unico accento: CTA, eyebrow, monogramma | 7597 C / 2349 U |
| Muschio | `#8FAF90` | Accento su fondo scuro | 2262 C / 2262 U |
| Blu-nero | `#0F1821` | Fondi fotografici, raro | Black 6 C / 5395 U* |

\* su uncoated i verdi e i neri si schiariscono molto (ΔE > 12): fondi pieni scuri solo su carta coated.
Color Bridge e tabella completa con ΔE: pagina «Pantone e stampa» della libreria.

Servizio (mai campiture): rust-strong `#B8381F`, body `#344238`, muted `#5D6A60`, line `#C8C6C2`,
line-dark `#485349`, on-dark `#E4E8E4`, on-dark-muted `#ADB8AE`.

Regole:
- Alternare fasce chiare (Paper/Soft) e scure (Ink/Verde). Due fasce scure non si toccano.
- Rust è raro: un primario per vista, eyebrow, monogramma. Su fondo scuro l'accento è Muschio, mai Rust.
- Massimo tre colori per sezione.
- I componenti usano solo i token semantici (`--ag-bg`, `--ag-fg`, `--ag-accent`…); `.ag-band--dark` li rimappa.

## Tipografia
- Un solo carattere: **DT Augustina Slab** (`--ag-font`). Nessuna sans, mai.
- Titoli Light 300, tracking −0,035em, interlinea 0,92–1. Display fino a 7,4rem.
- Corpo Regular 18px / 1,55, paragrafi entro 62ch.
- Eyebrow: 0,72rem Medium, MAIUSCOLO +0,15em, Rust. Bottoni/nav: 0,8rem MAIUSCOLO +0,09em.
- Enfasi = una parola in Rust (`<em>`), non corsivo. Corsivo solo per citazioni.
- Massimo due pesi per vista. Niente grassetti nei titoli.

## Layout
- Contenitore 1280px, gutter 32px (20 sotto 520). Fascia: padding verticale `clamp(72px, 9vw, 132px)`.
- Intestazione di sezione: eyebrow a sinistra (0,4fr), titolo a destra (1,6fr).
- Spaziatura in multipli di 4 (`--ag-space-*`).
- Tutto piatto: raggio 0, nessuna ombra, nessun gradiente. Filetti da 1px invece di box.

## Marchio
- Monogramma AG (diagonale condivisa) e logo tondo «Alessio Granella · Graphic Design Studio».
- Colori ammessi: Rust (principale su Paper), Ink, Paper (su scuro), Muschio (su Verde).
- File: `public/brand/loghi/{monogramma,tondo}-{rust,ink,paper,muschio}.svg`.
- Wordmark «alessio granella»: sempre minuscolo. Il vettoriale disegnato a mano è ancora da aggiungere.

## Voce
Caldo ma non informale, gentile, diretto, concreto, autentico, riflessivo, essenziale.
Frasi corte, una idea per frase, chiusa secca. Titoli in registro piano: niente frasi a effetto,
niente «non X, ma Y». Parole sì: accompagno, ascolto, fiducia, cura, chiarezza, percorso, insieme.
Parole no: trasformo, metodo, eseguo, template, pixel perfect, «gli imprenditori».

## Fotografia
Luce naturale calda, grana da pellicola, ambienti reali (legno, libri, carta, cuoio). Mai stock,
mai patinato, mai flash. Comunica il modo di lavorare, non il modo di vivere.
Immagini AI solo dopo averlo deciso col cliente/Alessio, caso per caso.
