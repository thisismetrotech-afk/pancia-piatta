/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TerminiCondizioni from './pages/TerminiCondizioni';
import {
  Leaf, Check, Star, X,
  ArrowRight, FlaskConical, Utensils, Clock,
  Waves, TrendingUp, Heart, ExternalLink, ChevronDown,
  Shield, Gift, Zap, Users
} from 'lucide-react';

const STRIPE_URL = "https://buy.stripe.com/eVq9ALcvjczA9332CsgYU01";

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
  { q: "Come ricevo l'ebook?", a: "Email immediata con link ebook dopo l'acquisto. Nessuna attesa." },
  { q: "E se non sono soddisfatta?", a: "Hai 30 giorni di garanzia soddisfatta o rimborsata. Nessuna domanda, rimborso immediato." }
];

const purchaseNotifications = [
  { name: "Valentina", city: "Milano" },
  { name: "Chiara", city: "Roma" },
  { name: "Serena", city: "Napoli" },
  { name: "Marta", city: "Torino" },
  { name: "Laura", city: "Bologna" },
  { name: "Giulia", city: "Firenze" },
  { name: "Elisa", city: "Palermo" },
  { name: "Sofia", city: "Venezia" },
  { name: "Federica", city: "Bari" },
  { name: "Irene", city: "Catania" },
];

// --- Hooks ---

function useCountdown(targetHours: number) {
  const totalSeconds = targetHours * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = sessionStorage.getItem('countdown_end');
    if (stored) {
      const remaining = Math.floor((parseInt(stored) - Date.now()) / 1000);
      if (remaining > 0) return remaining;
    }
    const end = Date.now() + totalSeconds * 1000;
    sessionStorage.setItem('countdown_end', end.toString());
    return totalSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          const end = Date.now() + totalSeconds * 1000;
          sessionStorage.setItem('countdown_end', end.toString());
          return totalSeconds;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [totalSeconds]);

  const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  return { h, m, s };
}

function useLiveViewers() {
  const [count, setCount] = useState(() => 28 + Math.floor(Math.random() * 20));
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        const delta = Math.random() < 0.5 ? 1 : -1;
        return Math.min(72, Math.max(18, c + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return count;
}

// --- Components ---

function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5 && !dismissed) {
      setVisible(true);
    }
  }, [dismissed]);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('exit_popup_seen');
    if (alreadySeen) { setDismissed(true); return; }
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 15000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('exit_popup_seen', '1');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className="bg-beige rounded-[2.5rem] p-10 md:p-14 max-w-lg w-full relative shadow-2xl text-center"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={close} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-brown/5 hover:bg-brown/10 flex items-center justify-center transition-colors">
              <X className="w-5 h-5 text-brown/50" />
            </button>
            <div className="text-5xl mb-6">⏳</div>
            <h3 className="text-3xl font-serif font-bold text-brown mb-4 leading-tight">Aspetta — stai lasciando l'offerta sul tavolo</h3>
            <p className="text-brown/70 text-lg mb-3 leading-relaxed">
              L'ebook è in offerta lancio a <strong className="text-brown">€19,99</strong> invece di €39,99.
            </p>
            <p className="text-brown/60 mb-8">L'offerta scade presto. Non tornerà a questo prezzo.</p>
            <a
              href={STRIPE_URL}
              onClick={close}
              className="cta-pulse bg-sage text-white px-10 py-5 rounded-full text-lg font-black hover:bg-sage-dark shadow-xl shadow-sage/30 transition-all flex items-center justify-center gap-3 group mb-5"
            >
              Voglio l'Ebook a €19,99 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={close} className="text-sm text-brown/40 hover:text-brown/60 transition-colors underline">
              No grazie, rinuncio all'offerta
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LivePurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const show = () => {
      setIdx(i => (i + 1) % purchaseNotifications.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };
    const delay = setTimeout(show, 9000);
    const interval = setInterval(show, 20000);
    return () => { clearTimeout(delay); clearInterval(interval); };
  }, []);

  const n = purchaseNotifications[idx];
  const minsAgo = 2 + (idx * 3);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          className="fixed bottom-24 left-4 z-50 bg-white border border-sage/20 shadow-2xl rounded-2xl px-5 py-4 flex items-center gap-4 max-w-[290px]"
        >
          <div className="w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center text-xl flex-shrink-0">🛒</div>
          <div>
            <p className="text-sm font-bold text-brown leading-tight"><span className="text-sage">{n.name}</span> di {n.city}</p>
            <p className="text-xs text-brown/60 font-medium">ha acquistato l'ebook · {minsAgo} min fa</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LiveViewersBadge() {
  const viewers = useLiveViewers();
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-sage/15 shadow-md rounded-full px-4 py-2 text-sm font-bold text-brown">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
      </span>
      <span><strong className="text-sage">{viewers}</strong> persone stanno guardando questa pagina ora</span>
    </div>
  );
}

function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-sage/20 shadow-2xl p-4"
        >
          <a
            href={STRIPE_URL}
            className="cta-pulse flex items-center justify-center gap-3 bg-sage text-white w-full py-4 rounded-2xl text-base font-black shadow-lg shadow-sage/30"
          >
            Scarica l'Ebook — <span className="line-through opacity-60 font-normal text-sm">€39,99</span> €19,99 <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


function UrgencyBanner() {
  const { h, m, s } = useCountdown(4);
  return (
    <div className="bg-brown text-white text-center py-3 px-4 text-sm font-bold tracking-wide">
      <span className="opacity-80">🔥 Offerta lancio termina tra:</span>{' '}
      <span className="font-black text-yellow-300 tabular-nums">{h}:{m}:{s}</span>
      <span className="opacity-80 ml-3">· <span className="line-through opacity-60">€39,99</span> <span className="text-yellow-300">€19,99</span></span>
    </div>
  );
}

const SectionHeader = ({ title, subtitle, label }: { title: string, subtitle?: string, label?: string }) => (
  <div className="text-center mb-16 px-4">
    {label && <span className="text-sage font-bold tracking-widest uppercase text-xs mb-2 block">{label}</span>}
    <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6 text-brown">{title}</h2>
    {subtitle && <p className="text-lg text-brown/70 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-beige text-brown selection:bg-sage selection:text-white">

      {/* URGENCY BANNER */}
      <UrgencyBanner />

      {/* OVERLAYS */}
      <ExitIntentPopup />
      <LivePurchaseNotification />
      <StickyMobileCTA />

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-beige/90 backdrop-blur-md border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Leaf className="w-8 h-8 text-sage" fill="currentColor" />
            <span className="text-2xl font-serif font-bold text-brown">PanciaPiatta</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="mailto:panciapiattainfo@gmail.com" className="hidden md:block text-sm font-bold text-brown/60 hover:text-sage transition-colors">
              panciapiattainfo@gmail.com
            </a>
            <a
              href={STRIPE_URL}
              className="hidden sm:flex cta-pulse bg-sage text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-sage-dark shadow-lg shadow-sage/20 items-center gap-2 transition-all"
            >
              Scarica Ora — €19,99 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-12 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage rounded-full text-xs font-bold tracking-widest uppercase mb-6">✨ Novità Estate 2026</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-brown">
            Pancia <span className="italic text-sage">Piatta</span> in 21 Giorni
          </h1>
          <p className="text-xl md:text-2xl text-brown/80 mb-6 leading-relaxed">
            Il piano alimentare estivo che funziona davvero. Basato sulla scienza, progettato per risultati reali.
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
            <span className="text-sm font-bold text-brown/70">4.9/5 · <span className="text-sage">+1.500 donne</span> ci hanno già provato</span>
          </div>
          {/* Live viewers */}
          <div className="mb-10">
            <LiveViewersBadge />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-10">
            <a href={STRIPE_URL} className="cta-pulse bg-sage text-white px-10 py-5 rounded-full text-lg font-black hover:bg-sage-dark shadow-2xl shadow-sage/30 text-center transition-all flex items-center justify-center gap-3 group">
              Scarica l'Ebook — €19,99 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#metodo" className="border-2 border-sage text-sage px-10 py-5 rounded-full text-lg font-bold hover:bg-sage hover:text-white transition-all text-center">
              Scopri il metodo ↓
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-brown/50 uppercase tracking-widest mb-12">
            <span>🔒 Pagamento sicuro</span>
            <span>📧 Ebook immediato</span>
            <span>✅ 30gg rimborso garantito</span>
          </div>
          <div className="grid grid-cols-3 gap-8 border-t border-sage/20 pt-10">
            <div><div className="text-3xl font-serif font-bold text-sage">21</div><div className="text-xs uppercase tracking-widest font-bold text-brown/50 mt-1">Giorni</div></div>
            <div><div className="text-3xl font-serif font-bold text-sage">+300</div><div className="text-xs uppercase tracking-widest font-bold text-brown/50 mt-1">Studi</div></div>
            <div><div className="text-3xl font-serif font-bold text-sage">+1500</div><div className="text-xs uppercase tracking-widest font-bold text-brown/50 mt-1">Donne</div></div>
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
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-sage/10 max-w-[220px] hidden sm:block">
            <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
            <p className="text-base italic font-serif text-brown leading-snug">"I jeans mi stanno finalmente bene!"</p>
            <p className="text-xs font-bold text-brown/50 uppercase tracking-widest mt-2">— Tiziana Marletta</p>
          </div>
        </motion.div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-20 bg-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-8 text-white/80">Ti riconosci?</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight">
              Hai già provato tutto<br />— ma la pancia non sparisce
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-14">
            {[
              { icon: "😩", text: "Hai fatto diete e dopo qualche settimana hai mollato tutto" },
              { icon: "👗", text: "I vestiti dell'estate scorsa non chiudono più come prima" },
              { icon: "🤰", text: "La sera la pancia è gonfia anche se hai mangiato poco" },
              { icon: "😤", text: "Segui influencer fitness ma i loro metodi non funzionano per te" },
              { icon: "📋", text: "Non sai cosa mangiare senza sentirti in colpa ogni giorno" },
              { icon: "🏖️", text: "L'estate si avvicina e ti senti ancora lontana dalla forma che vuoi" },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-white/85 font-medium leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-sage rounded-3xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-4">
              Non è colpa tua. È che nessuno ti ha mai dato un piano vero — basato sulla scienza, fatto per la vita reale.
            </p>
            <p className="text-white/80 text-lg">Questo ebook è esattamente quello.</p>
          </motion.div>
        </div>
      </section>

      {/* PER CHI È / PER CHI NON È */}
      <section className="py-32 bg-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Questo ebook fa per te?" label="Qualificazione" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Per chi È */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-sage/8 border-2 border-sage/25 rounded-[2.5rem] p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brown">È per te se...</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Vuoi ridurre il gonfiore addominale prima dell'estate",
                  "Cerchi un piano concreto, non consigli generici",
                  "Vuoi mangiare bene senza ossessionarti con le calorie",
                  "Hai poco tempo e vuoi ricette veloci e gustose",
                  "Vuoi capire *perché* funziona, non solo cosa fare",
                  "Sei stanca di diete rigide che non reggono più di 2 settimane",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-sage font-black mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-brown/80 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Per chi NON è */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-brown/5 border-2 border-brown/10 rounded-[2.5rem] p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brown/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-brown/60" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brown">Non è per te se...</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Cerchi una pillola magica o una scorciatoia senza impegno",
                  "Vuoi perdere 10 kg in una settimana (non è realistico)",
                  "Non sei disposta a cambiare nulla nella tua alimentazione",
                  "Stai cercando solo esercizi fisici (questo è un piano alimentare)",
                  "Hai una condizione medica che richiede supervisione specialistica",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brown/40 font-black mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-brown/60 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="py-32 bg-cream">
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
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-10 rounded-[2.5rem] bg-beige border border-sage/10 hover:border-sage/30 transition-all shadow-sm">
                <div className="w-14 h-14 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mb-8">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-5 text-brown">{item.title}</h3>
                <p className="text-brown/70 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENZA */}
      <section id="scienza" className="py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="La Scienza Dietro il Piano" label="Evidence Based" subtitle="Non è magia, è biologia. Ecco gli studi che hanno guidato la creazione di questo ebook." />
          <div className="grid md:grid-cols-3 gap-10">
            {studies.map((study, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-sage/15 shadow-md hover:shadow-2xl transition-all">
                <div className="bg-sage p-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-90 mb-2">Studio {study.id} — {study.journal}</div>
                  <h3 className="text-xl font-serif font-bold leading-tight">{study.title}</h3>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-base text-brown/80 mb-8 italic leading-relaxed">"{study.explanation}"</p>
                  <div className="mt-auto">
                    <div className="bg-sage/5 border border-sage/20 p-6 rounded-3xl mb-6">
                      <p className="text-base font-bold text-sage leading-snug">{study.discovery}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] text-brown/50 font-bold uppercase tracking-wider max-w-[150px]">{study.source}</span>
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
      <section id="contenuto" className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 text-brown leading-tight">48 pagine che cambiano il tuo rapporto con il cibo.</h2>
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
                  <span className="text-brown/80 text-lg leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative flex justify-center">
            <img
              src="/copertina.png"
              alt="Pancia Piatta in 21 Giorni - Copertina Ebook"
              className="rounded-[2.5rem] shadow-2xl object-contain w-4/5 border border-sage/10"
            />
          </motion.div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 bg-sage/10 border-y border-sage/15">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-left">
              <p className="text-2xl font-serif font-bold text-brown">Pronta a iniziare?</p>
              <p className="text-brown/60 font-medium">Accesso immediato · Garanzia 30 giorni</p>
            </div>
            <a href={STRIPE_URL} className="cta-pulse flex-shrink-0 bg-sage text-white px-10 py-5 rounded-full text-lg font-black hover:bg-sage-dark shadow-xl shadow-sage/25 transition-all flex items-center gap-3 group">
              Scarica — €19,99 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section id="testimonianze" className="py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Cosa dicono le donne che l'hanno provato" subtitle="Risultati reali da donne reali — non modelle, non influencer." />
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { quote: "Non ci credevo, ma alla fine della prima settimana i jeans mi stavano già meglio. Senza morire di fame.", author: "Giulia M., Napoli", result: "-4 cm di girovita in 21 giorni", initial: "G" },
              { quote: "Finalmente un piano per la vita reale. Ho mangiato anche la pizza il sabato e ho comunque perso il gonfiore.", author: "Alessia R., Milano", result: "Gonfiore sparito dopo 10 giorni", initial: "A" },
              { quote: "Gli studi scientifici mi hanno convinto. Non è il solito ebook copia-incolla.", author: "Francesca L., Roma", result: "+3 kg in meno alla fine", initial: "F" }
            ].map((testimonial, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-[2.5rem] border border-sage/15 shadow-lg relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center text-2xl font-black text-sage flex-shrink-0">{testimonial.initial}</div>
                  <div>
                    <div className="flex gap-1 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                    <p className="text-sm font-black text-brown/50 uppercase tracking-widest">{testimonial.author}</p>
                  </div>
                </div>
                <blockquote className="text-xl font-serif italic mb-8 leading-relaxed text-brown">"{testimonial.quote}"</blockquote>
                <div className="bg-sage text-white px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest shadow-md inline-block">{testimonial.result}</div>
              </motion.div>
            ))}
          </div>
          {/* Mini-testimonianze */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "Pensavo fosse la solita roba. Invece al giorno 7 mi sono guardata allo specchio e ho notato la differenza.", author: "Roberta T., Bari" },
              { quote: "La lista della spesa inclusa è geniale. Compro tutto in un colpo solo, nessun ingrediente strano.", author: "Monica S., Verona" },
              { quote: "Ho seguito il piano anche mangiando fuori 3 volte a settimana. Funziona davvero.", author: "Ilaria B., Genova" },
              { quote: "30 giorni di garanzia? Mi ha convinto a provare. Non ho avuto bisogno del rimborso.", author: "Daniela C., Catania" },
            ].map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="bg-white border border-sage/10 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/15 flex items-center justify-center text-sage font-black text-lg">{t.author[0]}</div>
                <div>
                  <p className="text-brown/80 italic mb-2 leading-snug">"{t.quote}"</p>
                  <p className="text-xs font-black text-brown/40 uppercase tracking-widest">— {t.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANZIA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white border-2 border-sage/20 rounded-[2.5rem] p-10 md:p-14 text-center shadow-xl">
            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-sage" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown">Garanzia 30 Giorni</h2>
            <p className="text-xl text-brown/75 leading-relaxed mb-8">
              Se entro 30 giorni dall'acquisto non sei soddisfatta — per qualsiasi motivo — ti rimborsiamo tutto. <strong className="text-brown">Senza domande, senza scuse.</strong>
            </p>
            <p className="text-sm font-bold text-sage uppercase tracking-widest">Rischio zero. Solo risultati.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA ACQUISTO */}
      <section id="acquista" className="py-32 bg-sage text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-15"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="inline-block px-6 py-2 bg-white/20 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-10">🛒 Offerta Lancio Estate 2026</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Prendi l'Ebook Adesso</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium leading-relaxed">Piano completo, 6 studi scientifici, 5 ricette bonus. Ebook immediato.</p>

            {/* Value Stack */}
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 mb-12 text-left max-w-xl mx-auto">
              <p className="text-sm font-black uppercase tracking-widest text-white/70 mb-6 text-center">Cosa ricevi oggi</p>
              {[
                { icon: <Utensils className="w-5 h-5" />, item: "Piano pasti 21 giorni completo", value: "€25" },
                { icon: <FlaskConical className="w-5 h-5" />, item: "6 studi scientifici spiegati", value: "€15" },
                { icon: <Zap className="w-5 h-5" />, item: "5 ricette sgonfianti in 15 minuti", value: "€10" },
                { icon: <Gift className="w-5 h-5" />, item: "Bonus: tisana sgonfiante serale", value: "Gratis" },
                { icon: <Users className="w-5 h-5" />, item: "Guida mangiare fuori casa", value: "Gratis" },
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="opacity-70">{row.icon}</div>
                    <span className="font-medium text-sm">{row.item}</span>
                  </div>
                  <span className="text-sm font-black text-yellow-300">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-5 mt-2">
                <span className="font-black uppercase tracking-widest text-sm">Valore totale</span>
                <div className="flex items-center gap-3">
                  <span className="text-xl line-through opacity-50 font-serif">€50+</span>
                  <span className="text-3xl font-black text-yellow-300 font-serif">€19,99</span>
                </div>
              </div>
            </div>

            <a href={STRIPE_URL} target="_blank" rel="noopener" className="cta-pulse-white bg-white text-sage px-16 py-8 rounded-full text-2xl md:text-3xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto mb-8 group w-fit">
              Scarica Ora <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-white/80 uppercase tracking-widest mb-8">
              <span>🔒 Pagamento sicuro Stripe</span>
              <span>📄 Ebook immediato via email</span>
              <span>✅ 30gg Garanzia rimborso</span>
            </div>
            <p className="text-white/50 text-xs">Accesso immediato dopo l'acquisto. Compatibile con tutti i dispositivi.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Hai dubbi? Ti rispondo." />
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <details className="group bg-beige rounded-3xl border border-sage/10 overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-xl font-bold pr-8 text-brown leading-tight">{item.q}</h3>
                    <div className="bg-sage/10 p-3 rounded-full group-open:rotate-180 transition-transform flex-shrink-0"><ChevronDown className="w-6 h-6 text-sage" /></div>
                  </summary>
                  <div className="px-8 pb-8 text-brown/70 leading-relaxed text-lg font-medium">{item.a}</div>
                </details>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
            <p className="text-brown/70 text-lg mb-6">Ancora indecisa? Ricorda: hai 30 giorni per chiedere il rimborso.</p>
            <a href={STRIPE_URL} className="cta-pulse inline-flex items-center gap-3 bg-sage text-white px-12 py-5 rounded-full text-lg font-black hover:bg-sage-dark shadow-xl shadow-sage/25 transition-all group">
              Scarica l'Ebook — €19,99 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-beige border-t border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center gap-3">
            <Leaf className="w-10 h-10 text-sage" fill="currentColor" />
            <span className="text-3xl font-serif font-bold text-brown">PanciaPiatta</span>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
            <div className="text-sm font-bold text-brown/40 uppercase tracking-widest">© 2025 PanciaPiatta. Tutti i diritti riservati.</div>
            <a href="mailto:panciapiattainfo@gmail.com" className="text-sm font-bold text-sage hover:text-sage-dark transition-colors">
              panciapiattainfo@gmail.com
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-brown/50 uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-sage transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-sage transition-colors">Cookie Policy</Link>
            <Link to="/termini-e-condizioni" className="hover:text-sage transition-colors">Termini e Condizioni</Link>
          </div>
          <p className="text-xs text-brown/50 uppercase tracking-[0.2em] leading-loose font-bold">
            Disclaimer: Questo ebook è a scopo informativo. I risultati individuali possono variare. Consulta un medico prima di modificare la tua dieta.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/termini-e-condizioni" element={<TerminiCondizioni />} />
    </Routes>
  );
}
