'use client';

import React from 'react';
import broadbandData from './broadband-data.json';

// TypeScript interfaces for the JSON data structure
interface AdditionalCharge {
  description: string;
  amount: number;
  type: 'monthly' | 'one-time';
}

interface Performance {
  typicalDownloadSpeed: number;
  typicalUploadSpeed: number;
  typicalLatency: number;
  packetLoss: number;
}

interface DataAllowance {
  monthlyDataIncluded: string;
  additionalDataCharges: string;
  dataUnit: string;
}

interface DiscountsAndBundles {
  acpEligible: boolean;
  bundleOptions: string;
  discountUrl: string;
}

interface NetworkManagement {
  applicationSpecific: boolean;
  subscriberTriggered: boolean;
}

interface Pricing {
  monthlyPrice: number;
  isIntroductoryRate: boolean;
  introductoryPeriod: string | null;
  priceAfterIntro: number | null;
  contractLength: string;
  earlyTerminationFee: number;
}

interface Plan {
  id: string;
  planName: string;
  serviceType: string;
  pricing: Pricing;
  additionalCharges: AdditionalCharge[];
  performance: Performance;
  dataAllowance: DataAllowance;
  discountsAndBundles: DiscountsAndBundles;
  taxes: string;
  networkManagement: NetworkManagement;
}

interface Provider {
  name: string;
  logo: string;
  supportPhone: string;
  supportWebsite: string;
  privacyPolicyUrl: string;
  networkManagementUrl: string;
  termsOfServiceUrl: string;
}

interface BroadbandData {
  provider: Provider;
  plans: Plan[];
}

interface BroadbandFactsLabelProps {
  planId?: string;
}

export default function BroadbandFactsLabel({ planId = 'standard-100' }: BroadbandFactsLabelProps) {
  const typedBroadbandData = broadbandData as BroadbandData;
  const plan = typedBroadbandData.plans.find(p => p.id === planId) || typedBroadbandData.plans[1];
  const provider = typedBroadbandData.provider;

  return (
    <article className="text-sm leading-tight border-2 border-black p-2 mb-2 bg-white min-w-[250px] max-w-[380px] text-black mx-auto" style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
      {/* Header Section */}
      <section className="border-b-[10px] border-black pb-1 mb-[-6px]">
        <h1 className="font-black text-4xl border-b-2 border-black mb-0.5 text-black leading-none tracking-tight">Broadband Facts</h1>
        <h2 className="font-bold  mb-0.1 text-black">{provider.name}</h2>
        <h3 className="font-bold  mb-0.1 text-black">{plan.planName}</h3>
        <p className="m-0 text-black">{plan.serviceType} Broadband Consumer Disclosure</p>
      </section>

      {/* Monthly Price Section */}
      <section className="border-b-2 border-black mb-1 ">
        <div className="flex justify-between items-baseline border-b-[5px] border-black mb-1">
          <h4 className="font-black text-xs text-black leading-tight">
            Monthly Price
          </h4>
          <span className="font-black text-xl text-black">
            ${plan.pricing.isIntroductoryRate ? plan.pricing.monthlyPrice.toFixed(2) : plan.pricing.monthlyPrice.toFixed(2)}
          </span>
        </div>
        
        <p className="mt-1.5 m-0 text-black text-xs">
          This monthly price <span className="float-none font-bold text-black">
            {plan.pricing.isIntroductoryRate ? 'is' : 'is not'}
          </span> an introductory rate.
        </p>
        
        {plan.pricing.isIntroductoryRate && plan.pricing.introductoryPeriod && (
          <p className="mt-1.5 m-0 text-black text-xs">
            This rate expires after <span className="float-none font-bold text-black">{plan.pricing.introductoryPeriod}</span> and will revert to <span className="float-none font-bold text-black">${plan.pricing.priceAfterIntro?.toFixed(2)}</span> per month.
          </p>
        )}
        
        <p className="mt-1.5 m-0 text-black text-xs">
          Length of contract: <span className="float-none font-bold text-black">{plan.pricing.contractLength}</span>
        </p>
        
        <p className="mt-1.5 m-0 text-black text-xs">
          Link to Terms of Contract: <a href={provider.termsOfServiceUrl} target="_blank" className="text-[#007bff] float-none" title={provider.termsOfServiceUrl}>
            {provider.termsOfServiceUrl}
          </a>
        </p>
      </section>

      {/* Additional Charges & Terms */}
      <section className="border-b-2 border-black pb-1 mb-2 ">
        <h4 className="font-black text-xs mb-0.5 text-black leading-tight">Additional Charges & Terms</h4>
        
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Provider Monthly Fees
        </h5>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Data Included with Monthly Price
          <span className="float-right font-bold text-black pr-6"> <strong >{plan.dataAllowance.monthlyDataIncluded}</strong></span>
        </h5>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Charges for Additional Data Usage
          <span className="float-right font-bold text-black pr-6">${plan.dataAllowance.additionalDataCharges}</span>
        </h5>
        
        {plan.additionalCharges
          .filter(charge => charge.type === 'monthly')
          .map((charge, index) => (
            <h5 key={index} className="font-normal text-xs pl-4 m-0 flex justify-between text-black">
              {charge.description}
              <span className="float-right font-bold text-black pr-6">${charge.amount.toFixed(2)}</span>
            </h5>
          ))}

        <h5 className="font-normal text-xs pl-4 m-0 mb-1 text-black">One-Time Purchase Fees</h5>
        
        {plan.additionalCharges
          .filter(charge => charge.type === 'one-time')
          .map((charge, index) => (
            <h5 key={index} className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
              {charge.description}
              <span className="float-right font-bold text-black pr-6">${charge.amount.toFixed(2)}</span>
            </h5>
          ))}

        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Early Termination Fee 
          <span className="float-right font-bold text-black pr-6">
            {plan.pricing.earlyTerminationFee > 0 ? `$${plan.pricing.earlyTerminationFee.toFixed(2)}` : 'None'}
          </span>
        </h5>

        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Government Taxes 
          <span className="float-right font-bold text-black pr-6">Varies by Location</span>
        </h5>
      </section>

      {/* Discounts & Bundles */}
      <section className="border-b-2 border-black pb-1 mb-2">
        <h4 className="font-black text-xs mb-0.5 text-black leading-tight">Discounts & Bundles</h4>
        <p className="pl-4 mt-0.5 m-0 text-black">
          Visit the link below for available billing discounts and pricing options for broadband service bundled with other services like video, phone, and wireless service, and use of your own equipment.
        </p>
        <p className="pl-4 mt-0.5 m-0 text-black">
          <a href={plan.discountsAndBundles.discountUrl} target="_blank" className="text-[#007bff] float-none" title={plan.discountsAndBundles.discountUrl}>
            {plan.discountsAndBundles.discountUrl}
          </a>
        </p>
      </section>

      {/* Speeds Provided with Plan */}
      <section className="border-b-2 border-black pb-1 mb-2">
        <h4 className="font-black text-xs mb-0.5 text-black leading-tight">Speeds Provided with Plan</h4>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Typical Download Speed 
          <span className="float-right font-bold text-black pr-6">{plan.performance.typicalDownloadSpeed} Mbps</span>
        </h5>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Typical Upload Speed 
          <span className="float-right font-bold text-black pr-6">{plan.performance.typicalUploadSpeed} Mbps</span>
        </h5>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Typical Latency 
          <span className="float-right font-bold text-black pr-6">{plan.performance.typicalLatency} ms</span>
        </h5>
      </section>

      {/* Data Included with Monthly Price */}
      <section className="border-b-2 border-black pb-1 mb-2">
        <h4 className="font-black text-xs mb-0.5 text-black leading-tight">Data Included with Monthly Price</h4>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Data Allowance
          <span className="float-right font-bold text-black pr-6">{plan.dataAllowance.monthlyDataIncluded}</span>
        </h5>
        <h5 className="font-normal text-xs pl-4 m-0 flex justify-between text-black mb-1">
          Charges for Additional Data Usage 
          <span className="float-right font-bold text-black pr-6">{plan.dataAllowance.additionalDataCharges}</span>
        </h5>
      </section>

      {/* Policies */}
      <section className="border-b-2 border-black pb-1 mb-2">
        <p className="font-black text-xs mb-0.5 text-black leading-tight ">
          Network Management Policy
        </p>
        <p className="pl-4 m-0 text-black text-xs">
          <a href={provider.networkManagementUrl} target="_blank" className="text-[#007bff]" title={provider.networkManagementUrl}>
            {provider.networkManagementUrl}
          </a>
        </p>
        <p className="font-black text-xs mb-0.5 text-black leading-tight">
          Privacy Policy
        </p>
        <p className="pl-4 m-0 text-black text-xs">
          <a href={provider.privacyPolicyUrl} target="_blank" className="text-[#007bff]" title={provider.privacyPolicyUrl}>
            {provider.privacyPolicyUrl}
          </a>
        </p>
      </section>

      {/* Customer Support */}
      <section className="border-b-2 border-black pb-1 mb-2">
        <h4 className="font-black text-xs mb-0.5 text-black leading-tight">Customer Support</h4>
        <p className="pl-4 mt-1 m-0 text-black text-xs">
          Phone:{' '}
          <a href={`tel:${provider.supportPhone.replace(/\D/g, '')}`} target="_blank" className="text-[#007bff] float-none" title={provider.supportPhone}>
            {provider.supportPhone}
          </a>
        </p>
        <p className="pl-4 mt-1 m-0 text-black">
          Website:{' '}
          <a href={provider.supportWebsite} target="_blank" className="text-[#007bff]  float-none" title={provider.supportWebsite}>
            {provider.supportWebsite}
          </a>
        </p>
      </section>

      {/* Footer */}
      <section className="border-b-0 mb-0 pb-0 text-xs">
        <p className="m-0 text-black">
          Learn about the terms used on this label. Visit the Federal Communications Commission's Consumer Resource Center.
        </p>
        <div className="flex justify-end my-1">
          <a href="https://fcc.gov/consumer" target="_blank" className="text-[#007bff]">
            fcc.gov/consumer
          </a>
        </div>
        <p className="m-0 text-black">Unique Plan Identifier: F{plan.id.toUpperCase()}</p>
      </section>
    </article>
  );
} 