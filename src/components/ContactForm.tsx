import { FormEvent, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { cn } from '../lib/cn';

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: '', email: '', company: '', phone: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(state: FormState): Errors {
  const errors: Errors = {};
  if (!state.name.trim())            errors.name = 'Ingresa tu nombre completo.';
  if (!EMAIL_RE.test(state.email))   errors.email = 'Ingresa un correo electrónico válido.';
  if (!state.company.trim())         errors.company = 'Ingresa la razón social.';
  if (!/^\d{10}$/.test(state.phone.replace(/\D/g, ''))) errors.phone = 'Ingresa un teléfono de 10 dígitos.';
  return errors;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setState((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...state, [key]: value }));
    }
  };

  const onBlur = (key: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(state));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate(state);
    setErrors(v);
    setTouched({ name: true, email: true, company: true, phone: true, message: true });
    if (Object.keys(v).length > 0) return;

    setStatus('submitting');
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setState(initial);
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-slate-600">Un ejecutivo B2B se pondrá en contacto contigo pronto.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-blue-600 font-semibold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="form-help">
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Nombre completo"
          placeholder="Juan Pérez"
          value={state.name}
          onChange={update('name')}
          onBlur={onBlur('name')}
          error={touched.name ? errors.name : undefined}
          autoComplete="name"
        />
        <Field
          id="email"
          type="email"
          label="Correo electrónico"
          placeholder="juan@empresa.com"
          value={state.email}
          onChange={update('email')}
          onBlur={onBlur('email')}
          error={touched.email ? errors.email : undefined}
          autoComplete="email"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field
          id="company"
          label="Empresa"
          placeholder="Razón social"
          value={state.company}
          onChange={update('company')}
          onBlur={onBlur('company')}
          error={touched.company ? errors.company : undefined}
          autoComplete="organization"
        />
        <Field
          id="phone"
          type="tel"
          label="Teléfono"
          placeholder="10 dígitos"
          value={state.phone}
          onChange={update('phone')}
          onBlur={onBlur('phone')}
          error={touched.phone ? errors.phone : undefined}
          autoComplete="tel"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700">Mensaje o solicitud de SKU</label>
        <textarea
          id="message"
          rows={4}
          placeholder="¿Qué productos o marcas te interesan para tu negocio?"
          value={state.message}
          onChange={update('message')}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 outline-none transition-colors resize-none bg-white text-slate-900"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full text-base py-3.5 disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>Enviando…</>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Enviar solicitud
          </>
        )}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-rose-600 text-center">
          Hubo un problema al enviar tu solicitud. Intenta de nuevo en unos momentos.
        </p>
      )}

      <p id="form-help" className="text-center text-xs text-slate-400">
        Al enviar, aceptas nuestro Aviso de Privacidad para fines comerciales B2B.
      </p>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

function Field({ id, label, value, onChange, onBlur, error, type = 'text', placeholder, autoComplete }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full px-4 py-3 rounded-xl border outline-none transition-colors bg-white text-slate-900',
          'focus:ring-2 focus:ring-blue-600/40',
          error ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-blue-600'
        )}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs font-medium text-rose-600">{error}</p>
      )}
    </div>
  );
}
