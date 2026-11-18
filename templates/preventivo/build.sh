#!/bin/bash
# Genera il PDF da un preventivo HTML. Uso: ./build.sh [file.html] [Nome_Output.pdf]
# Il file HTML deve stare accanto alla cartella assets/ (font Augustina + logo).
cd "$(dirname "$0")"
SRC="${1:-preventivo.html}"
OUT="${2:-${SRC%.html}.pdf}"
DIR="$(cd "$(dirname "$SRC")" && pwd)"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-pdf-header-footer --allow-file-access-from-files \
  --print-to-pdf="$OUT" "file://$DIR/$(basename "$SRC")" 2>/dev/null
PAGES=$(pdfinfo "$OUT" 2>/dev/null | awk '/Pages/{print $2}')
echo "$OUT — $PAGES pagine"
[ "$PAGES" = "2" ] || echo "ATTENZIONE: il preventivo deve stare su 2 pagine, accorcia i testi."
