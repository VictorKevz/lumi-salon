"use client";

import { FormField as FormFieldType } from "@/app/types/contact";
import { ChangeEvent, FocusEvent } from "react";

interface FormFieldProps {
  field: FormFieldType;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormField = ({
  field,
  value,
  error,
  onChange,
  onBlur,
}: FormFieldProps) => {
  const baseClasses =
    "w-full px-4 py-3 rounded-lg bg-[var(--primary-3)] border-2 transition-all duration-200 focus:outline-none";
  const errorClasses = error
    ? "border-red-500 focus:border-red-500"
    : "border-[var(--primary-3)] focus:border-[var(--primary-5)]";

  const inputClasses = `${baseClasses} ${errorClasses}`;

  return (
    <div className="w-full">
      <label
        htmlFor={field.name}
        className="block text-sm font-semibold mb-2 text-[var(--text-primary)]"
      >
        {field.label}
        {field.required && (
          <span className="text-[var(--error)] ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required={field.required}
          minLength={field.validation?.minLength}
          maxLength={field.validation?.maxLength}
          rows={5}
          className={`${inputClasses} resize-vertical`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${field.name}-error` : undefined}
        />
      ) : (
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          required={field.required}
          minLength={field.validation?.minLength}
          maxLength={field.validation?.maxLength}
          pattern={field.validation?.pattern?.source}
          className={inputClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${field.name}-error` : undefined}
        />
      )}

      {error && (
        <p
          id={`${field.name}-error`}
          className="text-red-500 text-sm mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
