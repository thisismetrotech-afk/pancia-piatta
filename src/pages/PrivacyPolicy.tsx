import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-serif font-bold text-brown mb-4">Privacy Policy</h1>
        <p className="text-sm text-brown/50 mb-12">Ultimo aggiornamento: aprile 2025</p>

        <div className="space-y-10 text-brown/80 leading-relaxed text-lg">

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">1. Titolare del Trattamento</h2>
            <p>Il titolare del trattamento dei dati personali è <strong>PanciaPiatta</strong>, raggiungibile all'indirizzo email: <a href="mailto:panciapiattainfo@gmail.com" className="text-sage hover:underline">panciapiattainfo@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">2. Tipologia di Dati Raccolti</h2>
            <p className="mb-3">I dati personali raccolti dal presente sito web possono includere:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orario di accesso.</li>
              <li><strong>Dati forniti volontariamente:</strong> indirizzo email e nome forniti in fase di acquisto o contatto.</li>
              <li><strong>Dati di pagamento:</strong> gestiti esclusivamente da Stripe Inc. Il titolare non tratta né conserva dati di carte di credito o strumenti di pagamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">3. Finalità del Trattamento</h2>
            <p className="mb-3">I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Erogazione del servizio di vendita dell'ebook e invio del prodotto digitale acquistato.</li>
              <li>Gestione delle richieste di assistenza e comunicazioni via email.</li>
              <li>Adempimento di obblighi legali, fiscali e contabili.</li>
              <li>Analisi statistica anonima sull'utilizzo del sito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">4. Base Giuridica</h2>
            <p>Il trattamento dei dati è fondato sull'esecuzione di un contratto (acquisto dell'ebook), sul consenso dell'interessato ove richiesto, e sul legittimo interesse del titolare per le finalità analitiche e di sicurezza.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">5. Conservazione dei Dati</h2>
            <p>I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti, e comunque non oltre 10 anni per gli obblighi fiscali e contabili previsti dalla normativa vigente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">6. Comunicazione e Diffusione</h2>
            <p>I dati personali non sono venduti, affittati né ceduti a terzi. Possono essere comunicati a soggetti terzi che forniscono servizi strumentali alle finalità indicate (es. Stripe per i pagamenti, provider email per la consegna del prodotto), i quali agiscono in qualità di responsabili del trattamento.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">7. Diritti dell'Interessato</h2>
            <p className="mb-3">In conformità al Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accedere ai propri dati personali.</li>
              <li>Richiederne la rettifica o la cancellazione.</li>
              <li>Opporsi al trattamento o chiederne la limitazione.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
              <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).</li>
            </ul>
            <p className="mt-4">Per esercitare questi diritti, scrivere a: <a href="mailto:panciapiattainfo@gmail.com" className="text-sage hover:underline">panciapiattainfo@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">8. Modifiche alla Privacy Policy</h2>
            <p>Il titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in cima al documento.</p>
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
