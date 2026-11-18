/**
 * Specchio JS di src/styles/colors_and_type.css.
 * Serve a grafici, canvas e documenti generati (PDF, slide) che non leggono le custom property.
 * Se cambi un valore nel CSS, cambialo anche qui.
 */

export const palette = {
  paper: '#F0EFEE',
  soft: '#DFDAD5',
  white: '#FFFFFF',
  ink: '#1A2B1E',
  verde: '#243728',
  rust: '#D14124',
  muschio: '#8FAF90',
  bluNero: '#0F1821',
} as const;

export const servizio = {
  rustStrong: '#B8381F',
  line: '#C8C6C2',
  lineDark: '#485349',
  body: '#344238',
  muted: '#5D6A60',
  onDark: '#E4E8E4',
  onDarkMuted: '#ADB8AE',
} as const;

export const color = {
  bg: palette.paper,
  bgAlt: palette.soft,
  bgDark: palette.ink,
  bgDarkAlt: palette.verde,
  fg: palette.ink,
  fgBody: servizio.body,
  fgMuted: servizio.muted,
  accent: palette.rust,
  accentStrong: servizio.rustStrong,
  accentOn: palette.white,
  accentDark: palette.muschio,
  border: servizio.line,
  borderDark: servizio.lineDark,
  onDark: servizio.onDark,
  onDarkMuted: servizio.onDarkMuted,
} as const;

export type NomeColore = keyof typeof palette;

/** Un riferimento Pantone con la sua distanza percepita dal colore di brand (CIEDE2000). */
export type RifPantone = { codice: string; dE: number; hex: string };

export type Scheda = {
  nome: NomeColore;
  etichetta: string;
  rgb: [number, number, number];
  /** CMYK per carta patinata: conversione ICC Coated FOGRA39, intento colorimetrico relativo. Da confermare con prova colore. */
  cmyk?: [number, number, number, number];
  ruolo: string;
  /** Riferimenti di stampa. Assente per i colori che non si stampano (es. bianco). */
  pantone?: {
    solidCoated: RifPantone;
    solidUncoated: RifPantone;
    bridgeCoated: RifPantone;
    bridgeUncoated: RifPantone;
    nota?: string;
  };
};

/*
 * Pantone: corrispondenza più vicina in ΔE2000 contro i valori Lab delle librerie
 * PANTONE+ (Solid Coated/Uncoated V3, Color Bridge Coated/Uncoated V3, X-Rite 2014).
 * Calcolo riproducibile: `npm run pantone -- <cartella color-books> <out.json>`.
 * Sono riferimenti di partenza: si confermano sempre sulla mazzetta fisica.
 */
export const schede: Scheda[] = [
  {
    nome: 'paper', etichetta: 'Paper', rgb: [240, 239, 238], cmyk: [6, 6, 7, 0],
    ruolo: 'Il fondo. Carta, non bianco: tutto il brand poggia qui.',
    pantone: {
      solidCoated: { codice: 'Cool Gray 1 C', dE: 5.4, hex: '#d7d8d6' },
      solidUncoated: { codice: 'Cool Gray 1 U', dE: 4.9, hex: '#dad9d7' },
      bridgeCoated: { codice: 'Cool Gray 1 CP', dE: 4.5, hex: '#dbddda' },
      bridgeUncoated: { codice: '7541 UP', dE: 4.6, hex: '#e4ebe9' },
      nota: 'In stampa Paper è la carta: si sceglie un supporto bianco naturale/avorio e non si stampa. Il Pantone serve solo se va steso come tinta su un altro supporto.',
    },
  },
  {
    nome: 'soft', etichetta: 'Soft', rgb: [223, 218, 213], cmyk: [15, 14, 16, 0],
    ruolo: 'Fasce chiare alternate a Paper, schede, campiture tenui.',
    pantone: {
      solidCoated: { codice: 'Warm Gray 1 C', dE: 2.1, hex: '#d7d2cb' },
      solidUncoated: { codice: 'Warm Gray 1 U', dE: 1.5, hex: '#dad5ce' },
      bridgeCoated: { codice: 'Warm Gray 1 CP', dE: 1.8, hex: '#dad8d2' },
      bridgeUncoated: { codice: 'Warm Gray 1 UP', dE: 2.5, hex: '#dfd8ce' },
      nota: 'Su uncoated il più vicino in assoluto è 7527 U (ΔE 0,7); Warm Gray 1 tiene lo stesso inchiostro su entrambe le carte.',
    },
  },
  {
    nome: 'ink', etichetta: 'Ink', rgb: [26, 43, 30], cmyk: [87, 63, 76, 83],
    ruolo: 'Testo e fasce scure. Il «nero» del brand è un verde.',
    pantone: {
      solidCoated: { codice: '5605 C', dE: 4.0, hex: '#21372c' },
      solidUncoated: { codice: '5535 U', dE: 16.2, hex: '#465956' },
      bridgeCoated: { codice: '5605 CP', dE: 4.5, hex: '#23382d' },
      bridgeUncoated: { codice: '2466 UP', dE: 15.3, hex: '#415354' },
      nota: 'In stampa Ink e Verde convergono su 5605. Su carta uncoated nessun Pantone arriva così scuro (ΔE > 15): per fondi pieni scuri preferire carta patinata o opaca coated.',
    },
  },
  {
    nome: 'verde', etichetta: 'Verde', rgb: [36, 55, 40], cmyk: [85, 55, 85, 71],
    ruolo: 'Fasce scure secondarie, footer. Alterna con Ink per dare profondità.',
    pantone: {
      solidCoated: { codice: '5605 C', dE: 2.2, hex: '#21372c' },
      solidUncoated: { codice: '5535 U', dE: 13.2, hex: '#465956' },
      bridgeCoated: { codice: '5605 CP', dE: 2.2, hex: '#23382d' },
      bridgeUncoated: { codice: '5535 UP', dE: 12.8, hex: '#495c52' },
    },
  },
  {
    nome: 'rust', etichetta: 'Rust', rgb: [209, 65, 36], cmyk: [11, 88, 100, 2],
    ruolo: 'L\'unico accento: azione principale, eyebrow, monogramma. Poco e preciso.',
    pantone: {
      solidCoated: { codice: '7597 C', dE: 1.1, hex: '#d64125' },
      solidUncoated: { codice: '2349 U', dE: 3.9, hex: '#c44e38' },
      bridgeCoated: { codice: '7598 CP', dE: 1.0, hex: '#cd4729' },
      bridgeUncoated: { codice: '3556 UP', dE: 7.5, hex: '#de4e46' },
      nota: '7597 su uncoated si apre troppo (ΔE 10): su carta naturale si cambia inchiostro e si usa 2349 U.',
    },
  },
  {
    nome: 'muschio', etichetta: 'Muschio', rgb: [143, 175, 144], cmyk: [50, 18, 50, 2],
    ruolo: 'L\'accento quando il fondo è scuro: eyebrow e parole in evidenza su Ink.',
    pantone: {
      solidCoated: { codice: '2262 C', dE: 1.7, hex: '#88ac8b' },
      solidUncoated: { codice: '2262 U', dE: 1.1, hex: '#8aad8e' },
      bridgeCoated: { codice: '7494 CP', dE: 5.1, hex: '#a1b48e' },
      bridgeUncoated: { codice: '2261 UP', dE: 1.1, hex: '#92b394' },
    },
  },
  {
    nome: 'bluNero', etichetta: 'Blu-nero', rgb: [15, 24, 33], cmyk: [93, 79, 60, 96],
    ruolo: 'Nero profondo per fondi fotografici e momenti notturni. Raro.',
    pantone: {
      solidCoated: { codice: 'Black 6 C', dE: 0.3, hex: '#0f1822' },
      solidUncoated: { codice: '5395 U', dE: 16.8, hex: '#454b59' },
      bridgeCoated: { codice: '7547 CP', dE: 3.6, hex: '#1a222e' },
      bridgeUncoated: { codice: '2217 UP', dE: 17.0, hex: '#3d4d55' },
      nota: 'Su uncoated vale lo stesso limite di Ink: i neri si spengono.',
    },
  },
  { nome: 'white', etichetta: 'White', rgb: [255, 255, 255], cmyk: [0, 0, 0, 0], ruolo: 'Solo testo sui bottoni Rust e fondi fotografici. Mai fondo di pagina.' },
];

/** Coppie testo/fondo verificate (WCAG 2.1). */
export const contrasti: { testo: string; fondo: string; ratio: number; uso: string }[] = [
  { testo: palette.ink, fondo: palette.paper, ratio: 12.99, uso: 'Titoli e testo' },
  { testo: servizio.body, fondo: palette.paper, ratio: 9.22, uso: 'Testo corrente' },
  { testo: servizio.muted, fondo: palette.paper, ratio: 4.95, uso: 'Note, didascalie' },
  { testo: palette.rust, fondo: palette.paper, ratio: 4.07, uso: 'Solo testo grande o eyebrow (AA large)' },
  { testo: servizio.rustStrong, fondo: palette.paper, ratio: 5.05, uso: 'Rust su testo piccolo, link' },
  { testo: palette.white, fondo: palette.rust, ratio: 4.67, uso: 'Bottone primario' },
  { testo: palette.ink, fondo: palette.soft, ratio: 10.74, uso: 'Testo su fascia Soft' },
  { testo: palette.rust, fondo: palette.soft, ratio: 3.37, uso: 'Solo titoli grandi' },
  { testo: servizio.onDark, fondo: palette.ink, ratio: 12.04, uso: 'Titoli su scuro' },
  { testo: servizio.onDarkMuted, fondo: palette.ink, ratio: 7.27, uso: 'Testo su scuro' },
  { testo: palette.muschio, fondo: palette.ink, ratio: 6.18, uso: 'Eyebrow e accento su scuro' },
  { testo: palette.rust, fondo: palette.ink, ratio: 3.19, uso: 'Da evitare: su scuro l\'accento è Muschio' },
];

export const font = {
  famiglia: "'Augustina', Georgia, 'Times New Roman', serif",
  pesi: { ultralight: 200, light: 300, regular: 400, medium: 500 },
} as const;

export const scalaTipo = [
  { nome: 'Display', token: '--ag-fs-display', valore: 'clamp(3.1rem, 7.4vw, 7.4rem)', peso: 300, interlinea: 0.92, uso: 'Hero, manifesto. Una frase per pagina.' },
  { nome: 'H1', token: '--ag-fs-h1', valore: 'clamp(2.6rem, 5.6vw, 5.4rem)', peso: 300, interlinea: 0.92, uso: 'Titolo di pagina interna' },
  { nome: 'H2', token: '--ag-fs-h2', valore: 'clamp(2.2rem, 4.4vw, 4.1rem)', peso: 300, interlinea: 1, uso: 'Titolo di sezione' },
  { nome: 'H3', token: '--ag-fs-h3', valore: '1.65rem', peso: 400, interlinea: 1.12, uso: 'Titolo di card, fase, domanda' },
  { nome: 'H4', token: '--ag-fs-h4', valore: '1.25rem', peso: 500, interlinea: 1.2, uso: 'Sottotitolo breve' },
  { nome: 'Lead', token: '--ag-fs-lead', valore: '1.14rem', peso: 400, interlinea: 1.55, uso: 'Paragrafo d\'apertura' },
  { nome: 'Body', token: '--ag-fs-body', valore: '18px', peso: 400, interlinea: 1.55, uso: 'Testo corrente' },
  { nome: 'Small', token: '--ag-fs-small', valore: '0.92rem', peso: 400, interlinea: 1.55, uso: 'Note, didascalie' },
  { nome: 'UI', token: '--ag-fs-ui', valore: '0.8rem', peso: 400, interlinea: 1, uso: 'Bottoni, nav — MAIUSCOLO +0.09em' },
  { nome: 'Eyebrow', token: '--ag-fs-eyebrow', valore: '0.72rem', peso: 500, interlinea: 1.4, uso: 'Sopra i titoli — MAIUSCOLO +0.15em, Rust' },
] as const;

export const space = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 14: 56, 16: 64, 20: 80, 24: 96, 32: 128 } as const;

export const layout = { max: 1280, gutter: 32, navH: 96, bandPad: 'clamp(72px, 9vw, 132px)' } as const;

/** Per grafici: massimo tre serie, l'accento sulla serie che conta. */
export const chartSeries = [palette.rust, palette.ink, palette.muschio, servizio.line] as const;
