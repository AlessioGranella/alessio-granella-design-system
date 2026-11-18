# Template preventivo

Modello di preventivo con il brand personale: 2 pagine A4, DT Augustina Slab, palette paper/verde/rust, logo tondo, payoff «Al tuo fianco ad ogni passo».
Esempio compilato con un cliente inventato: `esempio.html` (il PDF è in `public/brand/template/esempio.pdf`). Non mettere qui preventivi veri: il DS è pubblico.

Fa parte del design system del brand: `Alessio Granella/design-system/templates/preventivo/`.
`Clienti/03_Materiali/Template_Preventivo` è un collegamento a questa cartella.

## Come si usa
1. Copia questa cartella in `04_Trattative/<Nome Cliente>/`.
2. Compila `preventivo.html` sostituendo tutti i `[SEGNAPOSTO]`. Usa `esempio.html` come riferimento per tono e lunghezza.
3. Lancia `./build.sh preventivo.html Preventivo_<Cliente>_<Progetto>.pdf`. Lo script avvisa se il documento non sta più su 2 pagine.

## Struttura fissa
- **Pag. 1:** copertina verde (titolo su 2 righe, per / da / validità), 01 Obiettivo, 02 Cosa ricevi (massimo 6 voci).
- **Pag. 2:** 03 Investimento (cifra in rust, acconto 40% e saldo), 04 Tempi, 05 Condizioni, 06 Per partire mi servono (fascia verde, 4 punti), prossimo passo e firme.

## Regole
- Prezzi + IVA 22% (regime ordinario, niente rivalsa INPS: iscrizione artigiani).
- Acconto 40% all'avvio, saldo alla consegna. Revisioni extra a 45 €/h. Validità 30 giorni.
- Tono: caldo, essenziale, frasi corte, del «tu». L'obiettivo parla del risultato per il cliente, non del lavoro di Alessio.
