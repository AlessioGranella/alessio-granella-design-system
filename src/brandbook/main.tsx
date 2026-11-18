import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/colors_and_type.css';
import './brandbook.css';
import { Brandbook } from './Brandbook';

createRoot(document.getElementById('root')!).render(<StrictMode><Brandbook /></StrictMode>);

// Collaudo per build.sh: con ?verifica segnala ogni elemento che esce dalla sua pagina
// o dall'area utile (.bb-pad). Il risultato finisce in <body data-verifica>.
if (new URLSearchParams(location.search).has('verifica')) {
  const controlla = () => {
    const errori: string[] = [];
    document.querySelectorAll<HTMLElement>('.bb-page').forEach((pag, i) => {
      const box = pag.getBoundingClientRect();
      const pad = pag.querySelector<HTMLElement>(':scope > .bb-pad')?.getBoundingClientRect();
      pag.querySelectorAll<HTMLElement>('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) return;
        const limite = pad && el.closest('.bb-pad') ? pad : box;
        const fuori = r.right > limite.right + 1 || r.bottom > limite.bottom + 1;
        if (fuori) errori.push(`p${i + 1} <${el.tagName.toLowerCase()} class="${el.className}"> +${Math.round(Math.max(r.bottom - limite.bottom, r.right - limite.right))}px`);
      });
    });
    document.body.dataset.verifica = errori.length ? errori.slice(0, 30).join(' | ') : 'OK';
  };
  // «load» arriva quando anche le immagini sono pronte; poi si aspettano i font.
  window.addEventListener('load', () => { document.fonts.ready.then(controlla); });
}
