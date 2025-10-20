import { useEffect } from 'react';
import { DollarSign, Calculator, TrendingDown, ArrowRight } from 'lucide-react';

interface CostSavingsSectionProps {
  onLinaClick: () => void;
}

declare global {
  interface Window {
    NexaCalc: {
      calculate: () => void;
      toContact: () => void;
    };
    NexaMissionClick: (est: {
      profil: string;
      pays: string;
      mois: number;
      joursSemaine: number;
      headcount: number;
      coutLocal: number;
      coutNexa: number;
      economieAbs: number;
      economiePct: number;
    }) => void;
    Lina?: {
      open: (message: string) => void;
    };
  }
}

export default function CostSavingsSection({ onLinaClick }: CostSavingsSectionProps) {
  useEffect(() => {
    window.NexaCalc = (function () {
      function v(id: string) {
        return document.getElementById(id) as HTMLInputElement | HTMLSelectElement;
      }
      function fmt(x: number) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(x);
      }
      function tjmDefaults(profile: string, level: string) {
        const base: Record<string, Record<string, number>> = {
          fullstack: { junior: 400, confirme: 550, senior: 800 },
          data: { junior: 450, confirme: 600, senior: 850 },
          devops: { junior: 500, confirme: 650, senior: 900 },
        };
        const nexa: Record<string, Record<string, number>> = {
          fullstack: { junior: 40, confirme: 100, senior: 250 },
          data: { junior: 45, confirme: 110, senior: 250 },
          devops: { junior: 50, confirme: 120, senior: 250 },
        };
        return { local: base[profile][level], nexa: nexa[profile][level] };
      }
      function calculate() {
        const months = +v('months').value,
          daysPerWeek = +v('daysPerWeek').value,
          headcount = +v('headcount').value;
        const profile = v('profile').value,
          level = v('level').value;
        const d = tjmDefaults(profile, level);
        const tjmLocal = d.local;
        const tjmNexa = d.nexa;
        const overhead = 0.45,
          recruit = 0.15,
          turnover = 0.05,
          marge = 0.15,
          onboarding = 1500;
        const daysTotal = months * 4.33 * daysPerWeek * headcount;
        const localBrut = daysTotal * tjmLocal;
        const localFull = localBrut * (1 + overhead + recruit + turnover);
        const nexa = daysTotal * tjmNexa * (1 + marge) + onboarding;
        const saving = localFull - nexa;
        const pct = (saving / localFull) * 100;
        const localEl = document.getElementById('localTotal');
        const nexaEl = document.getElementById('nexaTotal');
        const savingAbsEl = document.getElementById('savingAbs');
        const savingPctEl = document.getElementById('savingPct');
        if (localEl) localEl.innerText = fmt(localFull);
        if (nexaEl) nexaEl.innerText = fmt(nexa);
        if (savingAbsEl)
          savingAbsEl.innerText = (saving >= 0 ? '+ ' : '- ') + fmt(Math.abs(saving));
        if (savingPctEl)
          savingPctEl.innerText = (pct >= 0 ? '+ ' : '- ') + pct.toFixed(1) + ' %';
      }
      function toContact() {
        const p = v('profile').value,
          l = v('level').value;
        const msg = encodeURIComponent(
          "Bonjour, je souhaite valider une estimation d'économie pour " + p + ' ' + l + '.'
        );
        window.location.href = '/contact?msg=' + msg;
      }
      return { calculate, toContact };
    })();

    window.NexaMissionClick = function (est) {
      function formatEUR(n: number) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);
      }
      const txt =
        'Voici mon estimation de mission :\n' +
        '• Profil développeur : ' +
        est.profil +
        ' | Pays : ' +
        est.pays +
        '\n' +
        '• Durée : ' +
        est.mois +
        ' mois | ' +
        est.joursSemaine +
        ' j/sem | ' +
        est.headcount +
        ' pers\n' +
        '• Coût local estimé : ' +
        formatEUR(est.coutLocal) +
        '\n' +
        '• Coût Devit.IA : ' +
        formatEUR(est.coutNexa) +
        '\n' +
        '• Économie réalisée : ' +
        formatEUR(est.economieAbs) +
        ' (' +
        est.economiePct.toFixed(1) +
        '%)\n\n' +
        'Pouvez-vous me confirmer la faisabilité et me proposer 3 profils compatibles ?';
      if (window.Lina && window.Lina.open) {
        window.Lina.open(txt);
      } else {
        const q = new URLSearchParams({ msg: txt, source: 'simulateur-mission' }).toString();
        window.location.href = '/contact?' + q;
      }
    };

    window.NexaCalc.calculate();
  }, []);

  return (
    <section id="cost-savings" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment Devit.IA réduit vos coûts IT de{' '}
            <span className="gradient-text">40 à 50%</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simulez vos économies en temps réel avec notre calculateur transparent
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Calculator Form */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Simulateur d'économies</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Profil technique
                    </label>
                    <select
                      id="profile"
                      onChange={() => window.NexaCalc.calculate()}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-400 bg-white"
                    >
                      <option value="fullstack">Développeur Fullstack</option>
                      <option value="data">Data Analyst / Engineer</option>
                      <option value="devops">DevOps / SRE</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Niveau d'expérience
                    </label>
                    <select
                      id="level"
                      onChange={() => window.NexaCalc.calculate()}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-400 bg-white"
                    >
                      <option value="junior">Junior (0-3 ans)</option>
                      <option value="confirme">Confirmé (3-7 ans)</option>
                      <option value="senior">Senior (7+ ans)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Durée de mission (mois)
                    </label>
                    <input
                      type="number"
                      id="months"
                      defaultValue="12"
                      min="1"
                      max="36"
                      onChange={() => window.NexaCalc.calculate()}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jours par semaine
                    </label>
                    <input
                      type="number"
                      id="daysPerWeek"
                      defaultValue="5"
                      min="1"
                      max="5"
                      onChange={() => window.NexaCalc.calculate()}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de profils
                    </label>
                    <input
                      type="number"
                      id="headcount"
                      defaultValue="1"
                      min="1"
                      max="20"
                      onChange={() => window.NexaCalc.calculate()}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className="p-8 md:p-12 bg-white">
                <div className="flex items-center space-x-3 mb-8">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Vos économies</h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="text-sm font-semibold text-gray-600 mb-2">
                      Recrutement local (Europe)
                    </div>
                    <div id="localTotal" className="text-3xl font-bold text-gray-900">
                      0 €
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="text-sm font-semibold text-blue-700 mb-2">
                      Avec Devit.IA (Maroc)
                    </div>
                    <div id="nexaTotal" className="text-3xl font-bold gradient-text">
                      0 €
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                    <div className="text-sm font-semibold text-green-700 mb-2">
                      Économie totale
                    </div>
                    <div className="flex items-baseline space-x-3">
                      <div id="savingAbs" className="text-3xl font-bold text-green-600">
                        0 €
                      </div>
                      <div id="savingPct" className="text-xl font-bold text-green-600">
                        0 %
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const v = (id: string) =>
                      (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).value;
                    const months = +v('months'),
                      daysPerWeek = +v('daysPerWeek'),
                      headcount = +v('headcount');
                    const profile = v('profile'),
                      level = v('level');

                    const profileLabels: Record<string, string> = {
                      fullstack: 'Développeur Fullstack',
                      data: 'Data Analyst / Engineer',
                      devops: 'DevOps / SRE',
                    };
                    const levelLabels: Record<string, string> = {
                      junior: 'Junior (0-3 ans)',
                      confirme: 'Confirmé (3-7 ans)',
                      senior: 'Senior (7+ ans)',
                    };

                    const tjmDefaults = (prof: string, lvl: string) => {
                      const base: Record<string, Record<string, number>> = {
                        fullstack: { junior: 400, confirme: 550, senior: 800 },
                        data: { junior: 450, confirme: 600, senior: 850 },
                        devops: { junior: 500, confirme: 650, senior: 900 },
                      };
                      const nexa: Record<string, Record<string, number>> = {
                        fullstack: { junior: 40, confirme: 100, senior: 250 },
                        data: { junior: 45, confirme: 110, senior: 250 },
                        devops: { junior: 50, confirme: 120, senior: 250 },
                      };
                      return { local: base[prof][lvl], nexa: nexa[prof][lvl] };
                    };

                    const d = tjmDefaults(profile, level);
                    const overhead = 0.45,
                      recruit = 0.15,
                      turnover = 0.05,
                      marge = 0.15,
                      onboarding = 1500;
                    const daysTotal = months * 4.33 * daysPerWeek * headcount;
                    const localBrut = daysTotal * d.local;
                    const localFull = localBrut * (1 + overhead + recruit + turnover);
                    const nexa = daysTotal * d.nexa * (1 + marge) + onboarding;
                    const saving = localFull - nexa;
                    const pct = (saving / localFull) * 100;

                    window.NexaMissionClick({
                      profil: `${profileLabels[profile]} ${levelLabels[level]}`,
                      pays: 'France',
                      mois: months,
                      joursSemaine: daysPerWeek,
                      headcount: headcount,
                      coutLocal: localFull,
                      coutNexa: nexa,
                      economieAbs: saving,
                      economiePct: pct,
                    });
                  }}
                  className="btn-gradient w-full inline-flex items-center justify-center space-x-2"
                >
                  <span>Valider mon estimation</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Hypotheses Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 p-8 md:p-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-800 leading-relaxed">
                  <span className="font-bold text-blue-900">Résultat :</span> Votre économie totale représente la différence entre un recrutement local et une mission Devit.IA, avec qualité maintenue et flexibilité maximale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
