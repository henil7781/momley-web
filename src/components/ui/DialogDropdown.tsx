import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
    value: string | number;
    label: string;
    icon?: string | React.ReactNode;
}

interface DialogDropdownProps {
    value: string | number;
    onChange: (value: string | number) => void;
    options: (string | Option)[];
    placeholder?: string;
    className?: string;
    error?: boolean;
}

/**
 * DialogDropdown - A custom-styled, accessible dropdown component.
 */
export default function DialogDropdown({
    value,
    onChange,
    options = [],
    placeholder = "Select...",
    className = "",
    error = false,
}: DialogDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => {
        const val = typeof opt === "string" ? opt : opt.value;
        return String(val) === String(value);
    });

    const displayLabel = selectedOption
        ? typeof selectedOption === "string"
            ? selectedOption
            : selectedOption.label
        : placeholder;

    const handleSelect = (opt: string | Option) => {
        const val = typeof opt === "string" ? opt : opt.value;
        onChange(val);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full cursor-pointer max-h-[360px]" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-12 flex items-center justify-between px-5 text-[13px] font-bold rounded-xl border transition-all duration-200 bg-white shadow-sm focus:outline-none ${error
                        ? "border-red-400 text-red-500"
                        : "border-slate-100 text-slate-700 hover:border-slate-200"
                    } ${className}`}
            >
                <span className="truncate">{displayLabel}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 z-[999] mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="max-h-64 overflow-y-auto p-2 scrollbar-hide">
                        {options.map((opt, i) => {
                            const val = typeof opt === "string" ? opt : opt.value;
                            const label = typeof opt === "string" ? opt : opt.label;
                            const isActive = String(val) === String(value);

                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => handleSelect(opt)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm mb-1 last:mb-0 transition-colors flex items-center justify-between group ${isActive 
                                        ? "bg-slate-900 text-white" 
                                        : "hover:bg-slate-50 text-slate-600"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {typeof opt !== "string" && opt.icon && (
                                            <span className="text-base">{opt.icon}</span>
                                        )}
                                        <span>{label}</span>
                                    </div>
                                    {isActive && (
                                        <div className="w-1.5 h-1.5 bg-brand-pink rounded-full shadow-[0_0_8px_rgba(233,30,99,0.8)]" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
