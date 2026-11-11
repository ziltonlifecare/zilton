'use client';

import React, { useState, type ReactNode, type FC } from 'react';
import { motion } from 'framer-motion';
import { Pill, Syringe, Droplets, Package } from 'lucide-react';

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  count?: number;
}

export interface FluidTabsProps {
  tabs?: TabItem[];
  activeId?: string;
  defaultActive?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export const PHARMA_DEFAULT_TABS: TabItem[] = [
  { id: 'all', label: 'All Formulations', icon: <Pill className="w-4 h-4" /> },
  { id: 'critical-care-injection', label: 'Critical Care Injections', icon: <Syringe className="w-4 h-4" /> },
  { id: 'nutrition-iv', label: 'Nutrition IV', icon: <Droplets className="w-4 h-4" /> },
  { id: 'nutrition-sachet', label: 'Nutrition Sachets', icon: <Package className="w-4 h-4" /> },
];

export const FluidTabs: FC<FluidTabsProps> = ({
  tabs = PHARMA_DEFAULT_TABS,
  activeId,
  defaultActive = tabs[0]?.id || 'all',
  onChange,
  className = '',
}) => {
  const [internalActive, setInternalActive] = useState<string>(defaultActive);
  const active = activeId !== undefined ? activeId : internalActive;

  const handleChange = (id: string) => {
    setInternalActive(id);
    onChange?.(id);
  };

  return (
    <div
      className={`relative inline-flex flex-wrap items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/90 p-1.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur-md transition-colors ${className}`}
      role="tablist"
      aria-label="Product categories"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => handleChange(tab.id)}
            className="group relative cursor-pointer rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold outline-none transition-colors select-none focus-visible:ring-2 focus-visible:ring-[#0D9E71]"
          >
            {isActive && (
              <motion.div
                layoutId="active-pharma-pill"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 32,
                  mass: 0.8,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0D9E71] via-[#10B981] to-[#059669] shadow-[0_4px_16px_rgba(13,158,113,0.35)]"
              />
            )}

            <div
              className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${
                isActive
                  ? 'text-white font-extrabold'
                  : 'text-slate-600 hover:text-[#0A192F] font-semibold'
              }`}
            >
              {tab.icon && (
                <span className={`shrink-0 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                  {tab.icon}
                </span>
              )}
              <span className="whitespace-nowrap tracking-tight">
                {tab.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default FluidTabs;
