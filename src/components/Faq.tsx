import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '../lib/cn';
import { faqs as defaultFaqs, type Faq as FaqItem } from '../data/faqs';
import { WHATSAPP_URL } from '../config/siteConfig';

type FaqProps = {
  /** FAQ items to render. Defaults to the full `faqs` list. */
  items?: FaqItem[];
  /** Section heading. */
  title?: string;
  /** Section subheading. */
  subtitle?: string;
};

const DEFAULT_TITLE = 'Preguntas frecuentes';
const DEFAULT_SUBTITLE =
  'Respuestas directas a las dudas más comunes de distribuidores y compradores B2B en México.';

/**
 * Accessible accordion section for FAQ items.
 *
 * - Multiple panels can be open at once.
 * - Each trigger is a real `<button>` with `aria-expanded` and `aria-controls`.
 * - Each panel is a `<div role="region">` labelled by its trigger for screen readers.
 * - Animation uses `motion/react` and respects `prefers-reduced-motion`.
 */
export default function Faq({
  items = defaultFaqs,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
}: FaqProps) {
  const reduceMotion = useReducedMotion();
  const instanceId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
        </div>

        <ul className="space-y-3">
          {items.map((item) => {
            const open = openIds.has(item.id);
            const panelId = `${instanceId}-${item.id}`;
            const triggerId = `${panelId}-trigger`;
            return (
              <li key={item.id} className="glass card-hover rounded-2xl overflow-hidden">
                <h3 className="m-0">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left text-base sm:text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors focus-ring"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300',
                        open && 'rotate-180 text-blue-600'
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-slate-600">
          ¿No encuentras tu respuesta?{' '}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Pregunta por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
