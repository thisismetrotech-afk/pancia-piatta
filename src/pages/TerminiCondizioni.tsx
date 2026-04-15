import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TerminiCondizioni() {
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
        <h1 className="text-4xl font-serif font-bold text-brown mb-4">Termini e Condizioni</h1>
        <p className="text-sm text-brown/50 mb-12">Ultimo aggiornamento: aprile 2025</p>

        <div className="space-y-10 text-brown/80 leading-relaxed text-lg">

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">1. Informazioni Generali</h2>
            <p>Il presente sito web è gestito da <strong>PanciaPiatta</strong>. Accedendo e utilizzando questo sito, l'utente accetta integralmente i presenti Termini e Condizioni. Si prega di leggerli attentamente prima di procedere all'acquisto.</p>
            <p className="mt-3">Per qualsiasi informazione: <a href="mailto:panciapiattainfo@gmail.com" className="text-sage hover:underline">panciapiattainfo@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">2. Oggetto della Vendita</h2>
            <p>PanciaPiatta commercializza esclusivamente prodotti digitali (ebook in formato PDF). Il prodotto acquistato è:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Pancia Piatta in 21 Giorni</strong> — ebook in formato PDF, disponibile per download immediato dopo il pagamento.</li>
            </ul>
            <p className="mt-3">Il contenuto dell'ebook ha finalità puramente informative e non sostituisce il parere di un professionista della salute o della nutrizione.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">3. Prezzi e Pagamento</h2>
            <p className="mb-3">Il prezzo dell'ebook è indicato in euro (€) e comprende le eventuali imposte applicabili. I pagamenti vengono processati in modo sicuro tramite <strong>Stripe Inc.</strong>, piattaforma certificata PCI DSS.</p>
            <p>PanciaPiatta non memorizza né ha accesso ai dati della carta di credito o degli strumenti di pagamento dell'acquirente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">4. Consegna del Prodotto</h2>
            <p>Essendo un prodotto digitale, la consegna avviene tramite invio del link di download all'indirizzo email fornito in fase di acquisto, <strong>immediatamente dopo la conferma del pagamento</strong>. Si raccomanda di verificare anche la cartella spam/posta indesiderata.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">5. Diritto di Recesso</h2>
            <p className="mb-3">Ai sensi dell'art. 59, lett. o) del D.Lgs. 206/2005 (Codice del Consumo), <strong>il diritto di recesso non si applica</strong> ai contenuti digitali forniti su supporto non materiale la cui esecuzione sia iniziata con il consenso espresso del consumatore.</p>
            <p>Procedendo all'acquisto e al download del prodotto digitale, l'utente acconsente espressamente all'esecuzione immediata del contratto e dichiara di rinunciare al diritto di recesso.</p>
            <p className="mt-3">Tuttavia, in caso di problemi tecnici che impediscano l'accesso al prodotto acquistato, PanciaPiatta garantisce assistenza e, se necessario, un rimborso completo entro 30 giorni dall'acquisto. Contattare: <a href="mailto:panciapiattainfo@gmail.com" className="text-sage hover:underline">panciapiattainfo@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">6. Proprietà Intellettuale</h2>
            <p className="mb-3">Tutti i contenuti presenti su questo sito e nell'ebook (testi, immagini, loghi, grafica) sono di proprietà esclusiva di PanciaPiatta e sono protetti dalla normativa sul diritto d'autore.</p>
            <p>È vietata qualsiasi riproduzione, distribuzione, vendita, modifica o utilizzo commerciale del materiale acquistato senza esplicita autorizzazione scritta. L'ebook è concesso in licenza personale e non trasferibile per uso individuale.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">7. Limitazione di Responsabilità</h2>
            <p className="mb-3">I contenuti dell'ebook hanno finalità esclusivamente informative. PanciaPiatta non garantisce risultati specifici derivanti dall'applicazione dei consigli contenuti nel prodotto, in quanto i risultati individuali possono variare.</p>
            <p>Si raccomanda di consultare un medico o un professionista della nutrizione prima di apportare modifiche significative alla propria alimentazione, in particolare in presenza di patologie, gravidanza o allattamento.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">8. Legge Applicabile e Foro Competente</h2>
            <p>I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'interpretazione o dall'esecuzione del presente contratto, sarà competente il Foro del luogo di residenza o domicilio del consumatore, come previsto dalla normativa vigente a tutela del consumatore.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-brown mb-4">9. Modifiche ai Termini</h2>
            <p>PanciaPiatta si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data. L'utilizzo continuato del sito dopo la pubblicazione delle modifiche implica l'accettazione dei nuovi termini.</p>
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
