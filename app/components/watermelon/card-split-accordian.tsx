'use client';

import React, { useState, type FC } from 'react';
import { motion, MotionConfig, type Transition } from 'framer-motion';
import { ChevronDown, FileCheck2, Layers, FlaskConical, Truck, CheckCircle2 } from 'lucide-react';
import useMeasure from 'react-use-measure';

export interface AccordionItemData {
  id: number;
  title: string;
  subtitle?: string;
  badge?: string;
  complianceStandard?: string;
  icon: React.ReactNode;
  content: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  setOpenId: (id: number | null) => void;
  index: number;
  total: number;
  openIndex: number;
}

export interface CardSplitAccordionProps {
  items?: AccordionItemData[];
  defaultOpenId?: number | null;
  onOpenChange?: (openId: number | null) => void;
  className?: string;
}

const springTransition: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 40,
  mass: 0.9,
};

export const VERIFIED_QUALITY_PROCESS_STEPS: AccordionItemData[] = [
  {
    id: 1,
    title: 'Product Specifications & Pharmacopeial Master',
    subtitle: 'Formulation Baseline',
    badge: 'Protocol',
    complianceStandard: 'IP / BP / USP Pharmacopeial Standards',
    icon: <FileCheck2 className="w-5 h-5" />,
    content:
      'Standardized drug master specifications, cleanroom compounding references, approved pharmacopeial limits, and primary packaging integrity established prior to commercial manufacturing authorization.',
  },
  {
    id: 2,
    title: 'Batch Manufacturing Records (BMR Execution)',
    subtitle: 'Production Rigor',
    badge: 'Execution',
    complianceStandard: 'Audited cGMP, WHO & US FDA Partner Plant',
    icon: <Layers className="w-5 h-5" />,
    content:
      'Contract manufacturing partners maintain real-time compounding logs, automated autoclave sterilization cycles, and cleanroom environmental air handling records with distinct batch and lot tracking.',
  },
  {
    id: 3,
    title: 'Analytical Quality Verification & Release Testing',
    subtitle: 'Laboratory Clearance',
    badge: 'Clearance',
    complianceStandard: 'Documented CoA Batch Verification',
    icon: <FlaskConical className="w-5 h-5" />,
    content:
      'Active pharmaceutical ingredient (API) assay quantification via HPLC, sterility confirmation for parenteral injectable lines, and particulate matter evaluations documented in certified Certificate of Analysis archives.',
  },
  {
    id: 4,
    title: 'Product Release & Temperature-Controlled Dispatch',
    subtitle: 'Traceable Handover',
    badge: 'Dispatch',
    complianceStandard: 'GDP-Compliant 2°C–8°C Cold Chain',
    icon: <Truck className="w-5 h-5" />,
    content:
      'Invoiced consignment documentation matches batch records down to regional distributors and hospital pharmacy receiving departments with strict cold-chain logging for temperature-sensitive injectable formulations.',
  },
];

const AccordionItem: FC<AccordionItemProps> = ({
  item,
  setOpenId,
  index,
  total,
  openIndex,
}) => {
  const [ref, bounds] = useMeasure();
  const isOpen = index === openIndex;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const isBeforeOpen = index === openIndex - 1;
  const isAfterOpen = index === openIndex + 1;

  const isAlone = (isAfterOpen && isLast) || (isBeforeOpen && isFirst);

  const BORDER_WIDTH = '1px';
  const BORDER_STYLE = 'solid';
  const borderTopWidth =
    isFirst || isAfterOpen || isOpen ? BORDER_WIDTH : '0px';
  const borderBottomWidth =
    isLast || isBeforeOpen || isOpen ? BORDER_WIDTH : '0px';
  const borderLeftWidth = BORDER_WIDTH;
  const borderRightWidth = BORDER_WIDTH;

  let borderTopLeftRadius = 0;
  let borderTopRightRadius = 0;
  let borderBottomLeftRadius = 0;
  let borderBottomRightRadius = 0;

  if (isOpen || isAlone) {
    borderTopLeftRadius = 20;
    borderTopRightRadius = 20;
    borderBottomLeftRadius = 20;
    borderBottomRightRadius = 20;
  } else if (isBeforeOpen) {
    borderBottomLeftRadius = 20;
    borderBottomRightRadius = 20;
  } else if (isAfterOpen) {
    borderTopLeftRadius = 20;
    borderTopRightRadius = 20;
  } else if (isFirst) {
    borderTopLeftRadius = 20;
    borderTopRightRadius = 20;
  } else if (isLast) {
    borderBottomLeftRadius = 20;
    borderBottomRightRadius = 20;
  }

  return (
    <MotionConfig transition={springTransition}>
      <motion.li layout className="list-none">
        <motion.div
          animate={{
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
          }}
          className={`overflow-hidden border-solid transition-all duration-300 will-change-transform ${
            isOpen
              ? 'border-emerald-500/50 bg-gradient-to-br from-white via-emerald-50/25 to-white shadow-[0_8px_28px_-4px_rgba(13,158,113,0.12)] ring-1 ring-emerald-500/20'
              : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xs'
          }`}
          style={{
            borderTopWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderRightWidth,
            borderStyle: BORDER_STYLE,
            marginBlock: isOpen ? '10px' : '0px',
          }}
        >
          <button
            type="button"
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className="flex w-full cursor-pointer items-center justify-between p-4.5 sm:p-5.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9E71]"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 pr-3">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#0D9E71] text-white shadow-[0_4px_14px_rgba(13,158,113,0.4)]'
                    : 'bg-emerald-50 text-[#0D9E71] border border-emerald-100'
                }`}
              >
                {item.icon}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {item.badge && (
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#065F46] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                      {item.badge}
                    </span>
                  )}
                  {item.subtitle && (
                    <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                      {item.subtitle}
                    </span>
                  )}
                </div>
                <span className="text-sm sm:text-base font-editorial font-bold text-[#0A192F] block leading-snug">
                  {item.title}
                </span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-emerald-100/80 text-[#0D9E71]' : 'text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? bounds.height : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="overflow-hidden will-change-transform"
          >
            <div ref={ref}>
              <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 space-y-3">
                <p>{item.content}</p>

                {item.complianceStandard && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#065F46] bg-emerald-50/80 px-3 py-1 rounded-lg border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9E71]" />
                    <span>{item.complianceStandard}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.li>
    </MotionConfig>
  );
};

export const CardSplitAccordion: FC<CardSplitAccordionProps> = ({
  items = VERIFIED_QUALITY_PROCESS_STEPS,
  defaultOpenId = 1,
  onOpenChange,
  className = '',
}) => {
  const [openId, setOpenId] = useState<number | null>(defaultOpenId);
  const openIndex = items.findIndex((item) => item.id === openId);

  const handleOpenChange = (id: number | null) => {
    setOpenId(id);
    onOpenChange?.(id);
  };

  return (
    <div className={`w-full ${className}`}>
      <ul className="w-full space-y-0 p-0 m-0">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            setOpenId={handleOpenChange}
            index={index}
            total={items.length}
            openIndex={openIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardSplitAccordion;
