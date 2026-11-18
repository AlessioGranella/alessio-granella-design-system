#!/bin/bash
# Genera il brandbook in PDF: build del sito, server locale, controllo traboccamenti, stampa con Chrome.
# Uso: npm run brandbook   →   brandbook/Alessio_Granella_Brandbook_v1.0.pdf
set -e
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4319
OUT="brandbook/Alessio_Granella_Brandbook_v1.0.pdf"
mkdir -p brandbook

npx vite build >/dev/null
npx vite preview --port $PORT --strictPort >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT
for i in $(seq 1 40); do curl -s -o /dev/null "http://localhost:$PORT/brandbook.html" && break; sleep 0.25; done

# 1. Nessun elemento deve uscire dalla pagina o dall'area utile
ESITO=$("$CHROME" --headless=new --disable-gpu --window-size=1200,900 --virtual-time-budget=8000 \
  --dump-dom "http://localhost:$PORT/brandbook.html?verifica" 2>/dev/null | grep -o 'data-verifica="[^"]*"' || true)
echo "Verifica: ${ESITO:-nessun esito}"
case "$ESITO" in *'"OK"'*) ;; *) echo "ATTENZIONE: contenuto fuori pagina, il PDF non è stato generato."; exit 1;; esac

# 2. Stampa
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" "http://localhost:$PORT/brandbook.html" 2>/dev/null
echo "$OUT — $(pdfinfo "$OUT" | awk '/Pages/{print $2}') pagine, $(pdfinfo "$OUT" | awk -F': *' '/Page size/{print $2}')"
cp "$OUT" public/brand/
