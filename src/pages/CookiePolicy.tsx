import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-beige text-brown">
      <header className="sticky top-0 z-50 bg-beige/90 backdrop-blur-md border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Leaf className="w-8 h-8 text-sage" fill="currentColor" />
            <span className="text-2xl font-serif font-bold text-brown">PanciaPiatta</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-serif font-bold text-brown mb-4">Cookie Policy</h1>
        <p className="text-sm text-brown/50 mb-12">Ultimo aggiornamento: aprile 2025</p>

        <div className="space-y-10 text-brown/80 leading-relaxed text-lg">

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">1. Cosa sono i Cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al suo browser, dove vengono memorizzati per essere ritrasmessi allo stesso sito alla visita successiva. Servono a far funzionare i siti in modo efficiente e a fornire informazioni ai proprietari.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">2. Tipologie di Cookie Utilizzati</h2>

            <h3 className="text-xl font-bold text-brown mb-3 mt-6">Cookie Tecnici (necessari)</h3>
            <p className="mb-3">Questi cookie sono indispensabili per il corretto funzionamento del sito e non possono essere disabilitati. Non raccolgono informazioni personali e non richiedono il consenso dell'utente.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie di sessione:</strong> mantengono attiva la sessione di navigazione dell'utente.</li>
              <li><strong>Cookie di preferenza:</strong> memorizzano le scelte dell'utente (es. lingua).</li>
            </ul>

            <h3 className="text-xl font-bold text-brown mb-3 mt-6">Cookie Analitici</h3>
            <p className="mb-3">Utilizzati per raccogliere informazioni aggregate e anonime sull'utilizzo del sito, al fine di migliorare l'esperienza di navigazione. I dati raccolti non permettono l'identificazione dell'utente.</p>

            <h3 className="text-xl font-bold text-brown mb-3 mt-6">Cookie di Terze Parti</h3>
            <p className="mb-3">Il sito può utilizzare servizi di terze parti che installano propri cookie, tra cui:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stripe:</strong> per la gestione sicura dei pagamenti. Cookie strettamente necessari al completamento dell'acquisto. Privacy policy: <a href="https://stripe.com/it/privacy" target="_blank" rel="noopener" className="text-sage hover:underline">stripe.com/it/privacy</a>.</li>
              <li><strong>Vercel:</strong> per l'hosting e la distribuzione del sito. Cookie tecnici di funzionamento. Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-sage hover:underline">vercel.com/legal/privacy-policy</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">3. Durata dei Cookie</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie di sessione:</strong> vengono eliminati automaticamente alla chiusura del browser.</li>
              <li><strong>Cookie persistenti:</strong> rimangono sul dispositivo dell'utente per un periodo definito (da pochi giorni a massimo 12 mesi).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">4. Come Gestire i Cookie</h2>
            <p className="mb-3">L'utente può gestire, disabilitare o eliminare i cookie attraverso le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="text-sage hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener" className="text-sage hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener" className="text-sage hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" className="text-sage hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-4">La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">5. Contatti</h2>
            <p>Per qualsiasi domanda relativa all'utilizzo dei cookie, contattare: <a href="mailto:panciapiattainfo@gmail.com" className="text-sage hover:underline">panciapiattainfo@gmail.com</a>.</p>
          </section>

        </div>
      </main>

      <footer className="border-t border-sage/20 mt-20 py-10 bg-beige">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-brown/40 font-bold uppercase tracking-widest">
          <span>© 2025 PanciaPiatta</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-sage transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-sage transition-colors">Cookie Policy</Link>
            <Link to="/termini-e-condizioni" className="hover:text-sage transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
