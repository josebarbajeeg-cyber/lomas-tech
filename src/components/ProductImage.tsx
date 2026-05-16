import { useState } from 'react';
import {
  Package, Printer, Keyboard, Mouse, Monitor, HardDrive, Cpu, Speaker,
  Camera, Headphones, FileText, Armchair, Lightbulb, Cable, Boxes,
} from 'lucide-react';
import { cn } from '../lib/cn';

type Props = {
  src?: string;
  alt: string;
  category?: string;
  sku?: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * Categoría → icono. Cubre las categorías reales del catálogo.
 * Cualquier otra cae al default <Boxes>.
 */
const CATEGORY_ICON: Record<string, typeof Package> = {
  'Accesorios y Gaming': Keyboard,
  'Accesorios': Cable,
  'Almacenamiento': HardDrive,
  'Audio': Speaker,
  'CCTV y Seguridad': Camera,
  'Componentes': Cpu,
  'Consumibles': FileText,
  'Cómputo': Monitor,
  'Impresión y Digitalización': Printer,
  'Impresoras': Printer,
  'Mobiliario': Armchair,
  'Mouse': Mouse,
  'Papelería': FileText,
  'Periféricos': Keyboard,
  'Tóner': Printer,
  'Tinta': Printer,
  'Iluminación': Lightbulb,
  'Audífonos': Headphones,
};

function pickIcon(category?: string) {
  if (!category) return Boxes;
  if (CATEGORY_ICON[category]) return CATEGORY_ICON[category];
  // Match parcial (e.g. "Cómputo y Periféricos")
  const key = Object.keys(CATEGORY_ICON).find((k) => category.includes(k));
  return key ? CATEGORY_ICON[key] : Boxes;
}

export function ProductImage({
  src,
  alt,
  category,
  sku,
  width = 280,
  height = 280,
  className,
  imgClassName,
  priority = false,
}: Props) {
  const [errored, setErrored] = useState(!src);
  const Icon = pickIcon(category);

  if (errored || !src) {
    return (
      <div
        className={cn(
          'relative w-full h-full flex flex-col items-center justify-center select-none',
          className
        )}
        role="img"
        aria-label={alt}
      >
        {/* Patrón decorativo de fondo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)',
            backgroundSize: '14px 14px',
          }}
        />
        {/* Glow azul sutil */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-1/4 h-24 bg-blue-100/40 blur-3xl rounded-full"
        />

        <div className="relative flex flex-col items-center gap-3">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-white border border-slate-200 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.12)]">
            <Icon className="w-9 h-9 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
            <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-slate-400">
            Sin foto disponible
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setErrored(true)}
      className={cn('max-h-full object-contain mix-blend-multiply', imgClassName)}
    />
  );
}
