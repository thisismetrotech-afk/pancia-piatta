/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Leaf, Sun, Moon, Check, Star, 
  ArrowRight, FlaskConical, Utensils, Clock, 
  Waves, TrendingUp, Heart, ExternalLink, ChevronDown 
} from 'lucide-react';

// --- Data ---
const studies = [
  {
    id: "01",
    journal: "Journal of Nutrition, 2015",
    title: "Dieta Low-Carb e Grasso Addominale",
    explanation: "Ricercatori hanno confrontato per 16 settimane una dieta low-carb con una dieta standard su adulti in sovrappeso.",
    discovery: "📉 Una dieta low-carb riduce dell'11% il grasso addominale profondo rispetto a una dieta standard.",
    source: "Gower et al., 2015",
    link: "https://pubmed.ncbi.nlm.nih.gov/25527677/"
  },
  {
    id: "02",
    journal: "Clinical Gastroenterology & Hepatology, 2024",
    title: "Carboidrati, Geni e Gonfiore Cronico",
    explanation: "Studio internazionale su migliaia di pazienti con gonfiore cronico, ha identificato la causa genetica spesso scambiata per intolleranza al glutine.",
    discovery: "🧬 Variazioni negli enzimi digestivi dei carboidrati causano gonfiore in 1 persona su 10.",
    source: "Husein et al., 2024",
    link: "https://pubmed.ncbi.nlm.nih.gov/38266892/"
  },
  {
    id: "03",
    journal: "Journal of Clinical Investigation, 2002",
    title: "Il Gene SCD-1 e l'Accumulo di Grasso",
    explanation: "Il team Ntambi all'Università del Wisconsin ha isolato il gene SCD-1 nel fegato, responsabile della sintesi di grassi da carboidrati.",
    discovery: "🔬 Il gene SCD-1 converte i carboidrati raffinati in eccesso direttamente in grasso addominale.",
    source: "Ntambi et al., 2002",
    link: "https://pubmed.ncbi.nlm.nih.gov/12208855/"
  },
  {
    id: "04",
    journal: "American Journal of Clinical Nutrition, 2020",
    title: "Fibre Solubili e Riduzione del Gonfiore",
    explanation: "Analisi dell'effetto delle fibre solubili sul gonfiore addominale cronico per 4 settimane.",
    discovery: "🌾 Le fibre solubili riducono il gonfiore addominale cronico del 26% in sole 4 settimane.",
    source: "Lambeau & McRorie, 2020",
    link: "https://pubmed.ncbi.nlm.nih.gov/28382516/"
  },
  {
    id: "05",
    journal: "Gut, BMJ Publishing, 2021",
    title: "Microbioma e Zuccheri Raffinati",
    explanation: "Monitoraggio del microbioma intestinale di partecipanti che hanno eliminato gli zuccheri raffinati per 2 settimane.",
    discovery: "🦠 Eliminare gli zuccheri raffinati migliora il microbioma in 14 giorni, riducendo i gas del 40%.",
    source: "Dahl et al., 2021",
    link: "https://pubmed.ncbi.nlm.nih.gov/34103407/"
  },
  {
    id: "06",
    journal: "European Journal of Nutrition, 2019",
    title: "Acqua e Limone a Digiuno",
    explanation: "Misurazione della motilità gastrica in soggetti che assumevano acqua tiepida con limone ogni mattina.",
    discovery: "🍋 Acqua tiepida con limone a digiuno aumenta la motilità gastrica del 18% e riduce il gonfiore.",
    source: "Murakami et al., 2019",
    link: "https://pubmed.ncbi.nlm.nih.gov/30232663/"
  }
];

const faqItems = [
  { q: "È adatto anche se non sono a dieta da anni?", a: "Sì, pensato per chi parte da zero. Le prime settimane sono graduali e fattibili." },
  { q: "Devo comprare ingredienti particolari?", a: "No, tutto al supermercato italiano. Niente integratori o superfoods." },
  { q: "Funziona anche se mangio fuori casa spesso?", a: "Sì, l'ebook ha una sezione dedicata per ristoranti, bar e pranzi di lavoro." },
  { q: "In quanto tempo vedo i risultati?", a: "Riduzione del gonfiore già nella prima settimana. Girovita ridotto entro 21 giorni." },
  { q: "Posso seguirlo da vegetariana/vegana?", a: "Sì con le sostituzioni indicate nell'ebook per ogni pasto proteico." },
  { q: "Come ricevo l'ebook?", a: "Email immediata con link PDF dopo l'acquisto. Nessuna attesa." }
];

// --- Components ---

const SectionHeader = ({ title, subtitle, label }: { title: string, subtitle?: string, label?: string }) => (
  <div className="text-center mb-16 px-4">
    {label && <span className="text-sage font-bold tracking-widest uppercase text-xs mb-2 block">{label}</span>}
    <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6 text-brown dark:text-beige">{title}</h2>
    {subtitle && <p className="text-lg text-brown/70 dark:text-beige/70 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div id="top" className="min-h-screen bg-beige dark:bg-zinc-950 text-brown dark:text-beige selection:bg-sage selection:text-white">
      {/* HEADER SEMPLIFICATO */}
      <header className="sticky top-0 z-50 bg-beige/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Leaf className="w-8 h-8 text-sage" fill="currentColor" />
            <span className="text-2xl font-serif font-bold text-brown dark:text-beige">PanciaPiatta</span>
          </a>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2.5 rounded-full bg-sage/5 hover:bg-sage/15 text-sage transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="#acquista" 
              className="hidden sm:flex bg-sage text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-sage-dark shadow-lg shadow-sage/20 items-center gap-2 transition-all"
            >
              Scarica Ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-12 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage rounded-full text-xs font-bold tracking-widest uppercase mb-8">✨ Novità Estate 2025</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-brown dark:text-beige">
            Pancia <span className="italic text-sage">Piatta</span> in 21 Giorni
          </h1>
          <p className="text-xl md:text-2xl text-brown/80 dark:text-beige/80 mb-12 leading-relaxed">
            Il piano alimentare estivo che funziona davvero. Basato sulla scienza, adatto alla vita italiana.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a href="#acquista" className="bg-sage text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-sage-dark shadow-2xl shadow-sage/30 text-center transition-all">
              Scarica l'Ebook — €9,99
            </a>
            <a href="#metodo" className="border-2 border-sage text-sage px-10 py-5 rounded-full text-lg font-bold hover:bg-sage hover:text-white transition-all text-center">
              Scopri il metodo ↓
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 border-t border-sage/20 pt-10">
            <div><div className="text-3xl font-serif font-bold text-sage">21</div><div className="text-xs uppercase tracking-widest font-bold text-brown/50 dark:text-beige/50 mt-1">Giorni</div></div>
            <div><div className="text-3xl font-serif font-bold text-sage">6</div><div className="text-xs uppercase tracking-widest font-bold text-brown/50 dark:text-beige/50 mt-1">Studi</div></div>
            <div><div className="text-3xl font-serif font-bold text-sage">+500</div><div className="text-xs uppercase tracking-widest font-bold text-brown/50 dark:text-beige/50 mt-1">Donne</div></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative flex justify-center">
          <div className="absolute -inset-4 bg-sage/5 rounded-[3rem] rotate-2"></div>
          <img
            src="/copertina.png"
            alt="Pancia Piatta in 21 Giorni - Copertina Ebook"
            width="500"
            height="625"
            loading="lazy"
            className="relative rounded-[2.5rem] shadow-2xl object-contain w-3/5 border border-sage/10"
          />
          <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-2xl border border-sage/10 max-w-[220px] hidden sm:block">
            <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
            <p className="text-base italic font-serif text-brown dark:text-beige leading-snug">"I jeans mi stanno finalmente bene!"</p>
          </div>
        </motion.div>
      </section>

      {/* METODO */}
      <section id="metodo" className="py-32 bg-cream dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Il Metodo" subtitle="Un approccio olistico e scientifico per trasformare il tuo corpo in meno di un mese." />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <FlaskConical />, title: "Basato sulla Scienza", desc: "6 studi peer-reviewed supportano ogni scelta del piano." },
              { icon: <Utensils />, title: "Ingredienti Italiani", desc: "Tutto al supermercato sotto casa, niente superfoods esotici." },
              { icon: <Clock />, title: "Max 30 Min in Cucina", desc: "Ricette veloci anche dopo una giornata di lavoro." },
              { icon: <Waves />, title: "Pronta per l'Estate", desc: "Meno gonfiore, più energia, più fiducia in 21 giorni." },
              { icon: <TrendingUp />, title: "3 Fasi Progressive", desc: "Reset → Accelerazione → Mantenimento." },
              { icon: <Heart />, title: "Senza Fame", desc: "Piano bilanciato che sazia ad ogni pasto." }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-10 rounded-[2.5rem] bg-beige dark:bg-zinc-800 border border-sage/10 hover:border-sage/30 transition-all shadow-sm">
                <div className="w-14 h-14 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mb-8">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-5 text-brown dark:text-beige">{item.title}</h3>
                <p className="text-brown/70 dark:text-beige/70 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENZA */}
      <section id="scienza" className="py-32 bg-beige dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="La Scienza Dietro il Piano" label="Evidence Based" subtitle="Non è magia, è biologia. Ecco gli studi che hanno guidato la creazione di questo ebook." />
          <div className="grid md:grid-cols-3 gap-10">
            {studies.map((study, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-white dark:bg-zinc-800 rounded-[2.5rem] overflow-hidden border border-sage/15 shadow-md hover:shadow-2xl transition-all">
                <div className="bg-sage p-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-90 mb-2">Studio {study.id} — {study.journal}</div>
                  <h3 className="text-xl font-serif font-bold leading-tight">{study.title}</h3>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-base text-brown/80 dark:text-beige/80 mb-8 italic leading-relaxed">"{study.explanation}"</p>
                  <div className="mt-auto">
                    <div className="bg-sage/5 dark:bg-sage/10 border border-sage/20 p-6 rounded-3xl mb-6">
                      <p className="text-base font-bold text-sage leading-snug">{study.discovery}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] text-brown/50 dark:text-beige/50 font-bold uppercase tracking-wider max-w-[150px]">{study.source}</span>
                      <a href={study.link} target="_blank" rel="noopener" className="bg-sage/10 text-sage p-2.5 rounded-full hover:bg-sage hover:text-white transition-all"><ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENUTO */}
      <section id="contenuto" className="py-32 bg-cream dark:bg-zinc-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 text-brown dark:text-beige leading-tight">35 pagine che cambiano il tuo rapporto con il cibo.</h2>
            <ul className="space-y-6">
              {[
                "Piano pasti completo 21 giorni — colazione, spuntino, pranzo, merenda, cena",
                "Lista della spesa settimana per settimana — pronta da stampare",
                "5 ricette sgonfianti in 15 minuti — semplici e gustose",
                "I 6 studi scientifici illustrati con grafici e spiegazioni",
                "Guida \"Come mangiare fuori casa\" — ristoranti, mare, aperitivi",
                "Sezione \"Gestire i giorni di strappo\" senza sensi di colpa",
                "Piano di idratazione ottimale per l'estate",
                "Bonus: tisana sgonfiante serale (ricetta esclusiva)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-sage text-white rounded-full p-1 flex-shrink-0"><Check className="w-4 h-4" /></div>
                  <span className="text-brown/80 dark:text-beige/80 text-lg leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[3/4] bg-sage rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-16 text-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20"></div>
            <Leaf className="w-20 h-20 mb-10 mx-auto opacity-90" />
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Pancia Piatta in 21 Giorni</h3>
            <div className="w-24 h-1.5 bg-white/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl font-serif italic opacity-90">Il Piano Alimentare Estivo</p>
            <div className="absolute -top-8 -right-8 bg-yellow-400 text-brown px-8 py-4 rounded-3xl font-black shadow-2xl rotate-12 text-lg tracking-tight">PDF ISTANTANEO</div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section id="testimonianze" className="py-32 bg-beige dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Cosa dicono le donne che l'hanno provato" />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { quote: "Non ci credevo, ma alla fine della prima settimana i jeans mi stavano già meglio. Senza morire di fame.", author: "Giulia M., Napoli", result: "-4 cm di girovita in 21 giorni" },
              { quote: "Finalmente un piano per la vita reale. Ho mangiato anche la pizza il sabato e ho comunque perso il gonfiore.", author: "Alessia R., Milano", result: "Gonfiore sparito dopo 10 giorni" },
              { quote: "Gli studi scientifici mi hanno convinto. Non è il solito ebook copia-incolla.", author: "Francesca L., Roma", result: "+3 kg in meno alla fine" }
            ].map((testimonial, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-zinc-800 p-10 rounded-[2.5rem] border border-sage/15 shadow-lg relative">
                <div className="flex gap-1.5 mb-8">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}</div>
                <blockquote className="text-2xl font-serif italic mb-10 leading-relaxed text-brown dark:text-beige">"{testimonial.quote}"</blockquote>
                <div className="flex items-center justify-between pt-8 border-t border-sage/10">
                  <div className="text-sm font-black text-brown/50 dark:text-beige/50 uppercase tracking-widest">{testimonial.author}</div>
                  <div className="bg-sage text-white px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-md">{testimonial.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA ACQUISTO */}
      <section id="acquista" className="py-32 bg-sage text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-15"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="inline-block px-6 py-2 bg-white/20 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10">🛒 Offerta Lancio</span>
            <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">Prendi l'Ebook Adesso</h2>
            <p className="text-xl md:text-3xl text-white/90 mb-16 font-medium leading-relaxed">Piano completo, 6 studi scientifici, 5 ricette bonus. PDF immediato.</p>
            <div className="mb-16 flex items-center justify-center gap-8">
              <span className="text-3xl line-through opacity-60 font-serif">€29,99</span>
              <span className="text-7xl md:text-9xl font-serif font-black">€9,99</span>
            </div>
            <button className="bg-white text-sage px-16 py-8 rounded-full text-3xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto mb-12 group">
              Scarica Ora <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-white/80 uppercase tracking-widest">
              <span className="flex items-center gap-2">🔒 Pagamento sicuro</span>
              <span className="flex items-center gap-2">📄 PDF istantaneo</span>
              <span className="flex items-center gap-2">✅ 30gg Garanzia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-cream dark:bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Hai dubbi? Ti rispondo." />
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <details className="group bg-beige dark:bg-zinc-800 rounded-3xl border border-sage/10 overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-xl font-bold pr-8 text-brown dark:text-beige leading-tight">{item.q}</h3>
                    <div className="bg-sage/10 p-3 rounded-full group-open:rotate-180 transition-transform flex-shrink-0"><ChevronDown className="w-6 h-6 text-sage" /></div>
                  </summary>
                  <div className="px-8 pb-8 text-brown/70 dark:text-beige/70 leading-relaxed text-lg font-medium">{item.a}</div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-beige dark:bg-zinc-950 border-t border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center gap-3">
            <Leaf className="w-10 h-10 text-sage" fill="currentColor" />
            <span className="text-3xl font-serif font-bold text-brown dark:text-beige">PanciaPiatta</span>
          </div>
          <div className="text-sm font-bold text-brown/40 dark:text-beige/40 uppercase tracking-widest">© 2025 PanciaPiatta. Tutti i diritti riservati.</div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-xs text-brown/50 dark:text-beige/50 uppercase tracking-[0.2em] leading-loose font-bold">
            Disclaimer: Questo ebook è a scopo informativo. I risultati individuali possono variare. Consulta un medico prima di modificare la tua dieta.
          </p>
        </div>
      </footer>
    </div>
  );
}
