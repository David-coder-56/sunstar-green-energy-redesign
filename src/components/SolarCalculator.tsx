import React, { useState } from 'react';
import { Calculator, Zap, DollarSign, Sun, Battery, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface SolarCalculatorProps {
  onOpenQuoteModal: (specs: string) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [propertyType, setPropertyType] = useState<'home' | 'small-biz' | 'commercial'>('home');
  const [generatorSpendUSD, setGeneratorSpendUSD] = useState<number>(200);
  const [selectedAppliances, setSelectedAppliances] = useState<{ [key: string]: boolean }>({
    lights: true,
    tv: true,
    fans: true,
    fridge: true,
    freezer: false,
    ac: false,
    waterpump: false,
  });

  const applianceWattage: { [key: string]: { name: string; watts: number; icon: string } } = {
    lights: { name: 'LED Lights (6-10 bulbs)', watts: 100, icon: '💡' },
    tv: { name: 'TV & Sound System', watts: 150, icon: '📺' },
    fans: { name: 'Standing Fans (2-3 fans)', watts: 180, icon: '💨' },
    fridge: { name: 'Double Door Refrigerator', watts: 300, icon: '❄️' },
    freezer: { name: 'Chest Freezer', watts: 450, icon: '🧊' },
    ac: { name: '1.5 HP Air Conditioner', watts: 1400, icon: '❄️' },
    waterpump: { name: '1 HP Water Pump', watts: 750, icon: '🚰' },
  };

  const toggleAppliance = (key: string) => {
    setSelectedAppliances(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate estimated total watts running concurrently
  const calculateTotalWatts = () => {
    let totalWatts = 0;
    Object.keys(selectedAppliances).forEach(key => {
      if (selectedAppliances[key]) {
        totalWatts += applianceWattage[key].watts;
      }
    });
    return Math.max(totalWatts, 250);
  };

  const totalWatts = calculateTotalWatts();

  // Recommended specs based on watts & generator spend
  const recommendedInverterkW = Math.max(1.5, Math.ceil((totalWatts * 1.5) / 1000 * 2) / 2);
  const recommendedPanelkW = Math.max(1.1, Math.ceil((totalWatts * 2.2) / 1000 * 10) / 10);
  const recommendedPanelCount = Math.ceil((recommendedPanelkW * 1000) / 550);
  const recommendedBatterykWh = Math.max(2.5, Math.ceil((totalWatts * 12 * 0.7) / 1000 * 10) / 10);
  
  // Fuel & electricity savings math (Liberian diesel average $4.80/gal)
  const estimatedMonthlySavingsUSD = Math.round(generatorSpendUSD * 0.85);
  const estimatedAnnualSavingsUSD = estimatedMonthlySavingsUSD * 12;
  const estimatedSystemCostUSD = Math.round(recommendedInverterkW * 350 + recommendedBatterykWh * 280 + recommendedPanelkW * 400 + 400);
  const paybackMonths = Math.max(14, Math.round(estimatedSystemCostUSD / estimatedMonthlySavingsUSD));

  const generatedSpecsSummary = `System Recommendation: ${recommendedInverterkW}kW Hybrid Inverter, ${recommendedPanelkW}kW Solar Panels (${recommendedPanelCount}x 550W), ${recommendedBatterykWh}kWh Lithium LiFePO4 Battery. Estimated Monthly Savings: $${estimatedMonthlySavingsUSD}`;

  return (
    <section id="calculator" className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive ROI &amp; Sizing Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Liberia Solar <span className="text-gradient-sun">Savings Estimator</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Find out how much money you can save by replacing expensive diesel generator fuel with clean Sun Star solar power in Montserrado &amp; across Liberia.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Appliance & Spend Controls */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 backdrop-blur-md space-y-8 shadow-xl">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Step 1: Select Property Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'home', label: 'Residential Home', icon: '🏡' },
                  { id: 'small-biz', label: 'Small Business', icon: '🏪' },
                  { id: 'commercial', label: 'Office / Clinic', icon: '🏢' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setPropertyType(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      propertyType === item.id
                        ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-bold shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Monthly Generator / LEC Spend Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Step 2: Monthly Fuel / Generator Spend
                </label>
                <span className="text-xl font-extrabold text-amber-400 font-heading">
                  ${generatorSpendUSD} <span className="text-xs text-slate-400 font-normal">/ month (approx. LRD {(generatorSpendUSD * 200).toLocaleString()})</span>
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={generatorSpendUSD}
                onChange={(e) => setGeneratorSpendUSD(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$50/mo (Small Kit)</span>
                <span>$500/mo (Medium Home)</span>
                <span>$1,000+/mo (Commercial)</span>
              </div>
            </div>

            {/* Step 3: Select Appliances to Power */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Step 3: Select Appliances You Need to Run
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.keys(applianceWattage).map((key) => {
                  const item = applianceWattage[key];
                  const isChecked = selectedAppliances[key];
                  return (
                    <button
                      key={key}
                      onClick={() => toggleAppliance(key)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-emerald-950/40 border-emerald-500/60 text-white shadow-sm'
                          : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <div className="text-xs font-semibold text-slate-200">{item.name}</div>
                          <div className="text-[11px] text-slate-400">~{item.watts}W load</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Instant System Sizing & Savings Result */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/40 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
              <Sun className="w-3 h-3 text-amber-400" />
              <span>Recommended System</span>
            </div>

            <div className="space-y-6 text-left">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Calculated Power Demand</div>
                <div className="text-3xl font-extrabold text-white mt-1 font-heading flex items-baseline gap-2">
                  <span>{totalWatts.toLocaleString()} Watts</span>
                  <span className="text-xs text-slate-400 font-normal">peak load capacity</span>
                </div>
              </div>

              {/* System Component Specs */}
              <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Solar Panels:</span>
                  </span>
                  <span className="text-xs font-bold text-amber-300">
                    {recommendedPanelkW} kW ({recommendedPanelCount}x 550W Panels)
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Battery className="w-4 h-4 text-emerald-400" />
                    <span>Lithium Storage:</span>
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {recommendedBatterykWh} kWh (48V LiFePO4)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>Hybrid Inverter:</span>
                  </span>
                  <span className="text-xs font-bold text-sky-400">
                    {recommendedInverterkW} kW Pure Sine Wave
                  </span>
                </div>
              </div>

              {/* Financial Return Summary */}
              <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 p-4 rounded-xl border border-emerald-500/40 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Est. Monthly Fuel Savings:</span>
                  <span className="text-lg font-extrabold text-emerald-400 font-heading">${estimatedMonthlySavingsUSD} / mo</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Annual Fuel Savings:</span>
                  <span className="font-bold text-white">${estimatedAnnualSavingsUSD.toLocaleString()} / year</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-emerald-900/50">
                  <span className="text-slate-400">Estimated Payback Term:</span>
                  <span className="font-bold text-amber-400">~{paybackMonths} months</span>
                </div>
              </div>

              {/* Request Quote with Specs */}
              <button
                onClick={() => onOpenQuoteModal(generatedSpecsSummary)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Custom Quote For This System</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 justify-center text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Includes professional installation by certified Liberian engineers</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
