import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Seniority = 'junior' | 'confirme' | 'senior';
type Currency = 'EUR' | 'CHF' | 'CAD';

const BASE_MAD_FULLSTACK = { junior: 10000, confirme: 12000, senior: 50000 };
const MARGE_NETTE = 0.20;
const BUFFER = 0.08;
const REMISE_6M = 0.05;
const REMISE_12M = 0.10;

const DEFAULT_FX_MAD = { EUR: 0.093, CHF: 0.095, CAD: 0.135 };
const CURRENCY_LOCALE = { EUR: "fr-FR", CHF: "fr-CH", CAD: "fr-CA" };

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function remiseDuree(months: number): number {
  if (months >= 12) return REMISE_12M;
  if (months >= 6) return REMISE_6M;
  return 0;
}

function convertMAD(valueMAD: number, to: Currency): number {
  const rate = DEFAULT_FX_MAD[to];
  return valueMAD * rate;
}

function formatMoney(value: number, currency: Currency): string {
  return new Intl.NumberFormat(CURRENCY_LOCALE[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function estimateFullstackBudget({
  seniority,
  months,
  headcount,
  currency
}: {
  seniority: Seniority;
  months: number;
  headcount: number;
  currency: Currency;
}) {
  months = clamp(months, 1, 36);
  headcount = clamp(headcount, 1, 200);

  const baseMAD = BASE_MAD_FULLSTACK[seniority];
  if (!baseMAD) {
    return { supported: false, message: "Seniorité invalide." };
  }

  const prixMADParMois = baseMAD * (1 + MARGE_NETTE);
  const remise = remiseDuree(months);
  const totalMAD = prixMADParMois * months * headcount * (1 - remise);

  const lowMAD = totalMAD * (1 - BUFFER);
  const highMAD = totalMAD * (1 + BUFFER);

  const low = Math.round(convertMAD(lowMAD, currency));
  const mid = Math.round(convertMAD(totalMAD, currency));
  const high = Math.round(convertMAD(highMAD, currency));

  return {
    supported: true,
    currency,
    totals: { low, mid, high },
    context: { months, headcount, seniority, longTermDiscount: remise }
  };
}

export default function EstimationPage() {
  const [seniority, setSeniority] = useState<Seniority>('confirme');
  const [months, setMonths] = useState(12);
  const [headcount, setHeadcount] = useState(3);
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [result, setResult] = useState(() =>
    estimateFullstackBudget({ seniority: 'confirme', months: 12, headcount: 3, currency: 'EUR' })
  );

  const computeEstimate = () => {
    const res = estimateFullstackBudget({ seniority, months, headcount, currency });
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Estimation budgétaire — Full-stack
            </h1>
            <p className="text-slate-400 mb-8">
              Estimation indicative basée sur nos barèmes internes et une marge fixe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Seniorité</label>
                <select
                  value={seniority}
                  onChange={(e) => setSeniority(e.target.value as Seniority)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="junior">Junior</option>
                  <option value="confirme">Confirmé</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Durée (mois)</label>
                <input
                  type="number"
                  min="1"
                  max="36"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Effectif</label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={headcount}
                  onChange={(e) => setHeadcount(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Devise</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="EUR">EUR (€)</option>
                  <option value="CHF">CHF (Fr.)</option>
                  <option value="CAD">CAD ($)</option>
                </select>
              </div>
            </div>

            <button
              onClick={computeEstimate}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Calculer
            </button>

            {result.supported && (
              <div className="mt-8 p-6 bg-slate-900/60 border border-slate-600/50 rounded-xl">
                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-lg text-slate-300 font-semibold">Budget estimé :</span>
                  <span className="text-2xl font-bold text-white">
                    {formatMoney(result.totals.low, result.currency)} – {formatMoney(result.totals.high, result.currency)}
                  </span>
                  {result.context.longTermDiscount > 0 && (
                    <span className="inline-block px-3 py-1 bg-green-600/20 border border-green-500/50 rounded-full text-sm text-green-300">
                      Remise long terme −{Math.round(result.context.longTermDiscount * 100)}%
                    </span>
                  )}
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  Durée : {result.context.months} mois • Équipe : {result.context.headcount} • Seniorité : {result.context.seniority}
                </div>
              </div>
            )}

            <p className="mt-6 text-sm text-slate-400">
              Le simulateur est limité au profil <strong>Développeur Full-stack</strong>. Les autres profils arrivent bientôt.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
