# Alessio Granella — Design System

Token, componenti e libreria consultabile del brand personale. Regole di sistema in `DESIGN.md`.

```sh
npm install
npm run dev        # libreria su http://localhost:5173
npm run build      # versione statica in dist/
```

## Struttura
- `src/styles/colors_and_type.css` — token `--ag-*` e @font-face (fonte di verità)
- `src/styles/components.css` — componenti via classe (`.ag-band`, `.ag-btn`, `.ag-head`, …)
- `src/tokens.ts` — specchio JS (palette, Pantone, contrasti, scala tipo) per PDF, slide, grafici
- `src/components/` — componenti React (`Fascia`, `Bottone`, `IntestazioneSezione`, `Lockup`, …)
- `src/docs/` — la libreria consultabile (non fa parte del sistema consegnabile)
- `public/brand/loghi/` — monogramma e logo tondo in 4 colori
- `scripts/pantone.py` — ricalcolo delle corrispondenze Pantone (ΔE2000)

## Usarlo
- Pagina HTML: importare i due CSS e mettere `class="ag"` sul body.
- Progetto React dentro `Operativa/`: importare da `../design-system/src` (con `resolve.dedupe: ['react','react-dom']`).
- Se cambi un token nel CSS, aggiorna anche `tokens.ts` e `DESIGN.md`.

## Brandbook PDF
`npm run brandbook` → `brandbook/Alessio_Granella_Brandbook_v1.0.pdf` (copiato anche in `public/brand/`).
Sorgente: `brandbook.html` + `src/brandbook/` (legge `tokens.ts`). Lo script controlla che nessun
contenuto esca dalle pagine prima di stampare.

## Template preventivo
`templates/preventivo/` (fonte). `Clienti/03_Materiali/Template_Preventivo` è un collegamento qui.
Anteprime in `public/brand/template/` (esempio con cliente inventato, pubblicabile).

## Pantone
`npm pack color-books` in una cartella isolata, poi
`npm run pantone -- <cartella>/package/color-books out.json`.

## Licenza font
DT Augustina Slab: licenza Monotype **solo desktop** (ordine MyFonts 5695894913194, copia in
`Alessio Granella/Brand/`). Gli OTF in `src/styles/font/` sono esclusi da git (`*.otf`).
Non pubblicare il design system con il font e non convertirlo in WOFF/WOFF2 finché non c'è
una licenza Web. Il workflow `.github/workflows/deploy.yml` è pronto ma inutilizzato.
