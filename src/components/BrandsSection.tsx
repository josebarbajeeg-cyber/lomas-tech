import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { brands } from '../data/brands';

export default function BrandsSection() {
  const reduceMotion = useReducedMotion();
  const duplicatedBrands = reduceMotion ? brands : [...brands, ...brands];

  if (reduceMotion) {
    return (
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Marcas que distribuimos</h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Distribuidores autorizados de las mejores marcas</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {brands.slice(0, 12).map((brand) => (
            <Link
              key={brand.name}
              to="/brands"
              className="flex items-center justify-center h-32 sm:h-36 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 transition-all"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  width="200"
                  height="100"
                  loading="lazy"
                  className="max-h-20 sm:max-h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-slate-700 font-black text-lg tracking-tight">{brand.name}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Marcas que distribuimos</h2>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Distribuidores autorizados de las mejores marcas</p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-10 sm:gap-14 items-center whitespace-nowrap"
          initial={{ x: '-50%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          {duplicatedBrands.map((brand, index) => (
            <Link
              to="/brands"
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[360px] h-[160px] sm:h-[180px] flex items-center justify-center p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/60 transition-all group"
              aria-label={`Ver marca ${brand.name}`}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  width="240"
                  height="120"
                  loading="lazy"
                  className="h-24 sm:h-28 lg:h-32 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              ) : (
                <span className="text-slate-700 font-black text-2xl tracking-tight grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  {brand.name}
                </span>
              )}
            </Link>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
