"use client";

import { ServiceCategory } from "@/app/types/contact";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";

interface AccordionServiceSelectorProps {
  categories: ServiceCategory[];
  selectedServices: string[];
  onSelectionChange: (serviceIds: string[]) => void;
  error?: string;
  summaryText: string;
  noneSelectedText: string;
}

export const AccordionServiceSelector = ({
  categories,
  selectedServices,
  onSelectionChange,
  error,
  summaryText,
  noneSelectedText,
}: AccordionServiceSelectorProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleService = (serviceId: string) => {
    const newSelection = selectedServices.includes(serviceId)
      ? selectedServices.filter((id) => id !== serviceId)
      : [...selectedServices, serviceId];
    onSelectionChange(newSelection);
  };

  const getSummary = () => {
    if (selectedServices.length === 0) return noneSelectedText;
    return summaryText.replace("{count}", selectedServices.length.toString());
  };

  return (
    <div className="w-full">
      <label
        htmlFor="service-selector"
        className="block text-sm font-semibold mb-2 text-[var(--text-primary)]"
      >
        Select Services
        <span className="text-red-500 ml-1" aria-label="required">
          *
        </span>
      </label>

      {/* Summary Display */}
      <div
        id="service-selector"
        className={`w-full px-4 py-3 rounded-lg bg-[var(--primary-2)] border-2 mb-3 ${
          error ? "border-red-500" : "border-[var(--primary-3)]"
        }`}
        aria-live="polite"
      >
        <p className="text-sm text-[var(--text-secondary)]">{getSummary()}</p>
      </div>

      {/* Accordion */}
      <div className="space-y-2" role="group" aria-label="Service categories">
        {categories.map((category) => {
          const isExpanded = expandedCategory === category.id;
          const categoryServices = category.services.map((s) => s.id);
          const selectedInCategory = categoryServices.filter((id) =>
            selectedServices.includes(id)
          ).length;

          return (
            <div
              key={category.id}
              className="border-2 border-[var(--primary-3)] rounded-lg overflow-hidden"
            >
              {/* Category Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 bg-[var(--primary-2)] hover:bg-[var(--primary-3)] transition-colors duration-200"
                aria-expanded={isExpanded}
                aria-controls={`category-${category.id}`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={category.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="font-semibold text-[var(--text-primary)]">
                    {category.label}
                  </span>
                  {selectedInCategory > 0 && (
                    <span className="text-xs bg-[var(--accent)] text-[var(--neutral-0)] px-2 py-1 rounded-full">
                      {selectedInCategory}
                    </span>
                  )}
                </div>
                <ExpandMore
                  className={`transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Category Services */}
              {isExpanded && (
                <div
                  id={`category-${category.id}`}
                  className="p-4 bg-[var(--primary-1)] space-y-3"
                  role="group"
                  aria-label={`${category.label} services`}
                >
                  {category.services.map((service) => {
                    const isSelected = selectedServices.includes(service.id);

                    return (
                      <label
                        key={service.id}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--primary-2)] cursor-pointer transition-colors duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleService(service.id)}
                          className="mt-1 w-5 h-5 rounded accent-[var(--accent)] cursor-pointer"
                          aria-label={service.title}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-[var(--text-primary)]">
                              {service.title}
                            </span>
                            <span className="text-sm font-semibold text-[var(--accent)] ml-2">
                              {service.price}
                            </span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] mt-1">
                            {service.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
