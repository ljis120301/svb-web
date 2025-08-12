'use client';

import React, { useState } from 'react';
import BroadbandLabel from './FCCbroadbandLabels';
// Import as type-safe JSON
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - JSON import is enabled via tsconfig resolveJsonModule
import broadbandData from './broadband-data.json';

type SelectorPlan = {
  id: string;
  planName: string;
  pricing: { monthlyPrice: number };
  performance: { typicalDownloadSpeed: number };
};

export default function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState('standard-100');

  return (
    <div className="w-full">
      {/* Plan Selection Controls */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Select a Broadband Plan</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {(broadbandData.plans as SelectorPlan[]).map((plan: SelectorPlan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedPlan === plan.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400'
              }`}
            >
              <div className="text-center">
                <div className="font-bold">{plan.planName}</div>
                <div className="text-sm">${plan.pricing.monthlyPrice}/mo</div>
                <div className="text-xs">{plan.performance.typicalDownloadSpeed} Mbps</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Plan Label */}
      <BroadbandLabel planId={selectedPlan} />
    </div>
  );
} 