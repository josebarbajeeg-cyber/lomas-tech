import type { Product } from '../data/products';

type StatusStyle = {
  bg: string;
  text: string;
  ring: string;
  label: string;
};

export const STATUS_STYLES: Record<Product['status'], StatusStyle> = {
  'En Stock':        { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-1 ring-emerald-200', label: 'En Stock' },
  'Poco Inventario': { bg: 'bg-amber-50',   text: 'text-amber-700',   ring: 'ring-1 ring-amber-200',   label: 'Poco Inventario' },
  'OEM':             { bg: 'bg-sky-50',     text: 'text-sky-700',     ring: 'ring-1 ring-sky-200',     label: 'OEM' },
  'B2B TOP':         { bg: 'bg-blue-50',    text: 'text-blue-700',    ring: 'ring-1 ring-blue-200',    label: 'B2B Top' },
  'Original':        { bg: 'bg-slate-50',   text: 'text-slate-700',   ring: 'ring-1 ring-slate-200',   label: 'Original' },
};

export function statusClasses(status: Product['status']): string {
  const s = STATUS_STYLES[status];
  return `${s.bg} ${s.text} ${s.ring}`;
}
