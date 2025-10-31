import { Messages } from "@/lib/header";
import { ComponentType } from "react";

// Contact card types for left column
export interface ContactCard {
  id: string;
  icon: ComponentType;
  title: string;
  details: ContactDetail[];
}

export interface ContactDetail {
  id: string;
  label?: string;
  value: string;
  href?: string;
  type?: "phone" | "email" | "link" | "text";
}

// Form field types
export interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    errorMessage?: string;
  };
}

// Service selection types
export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
  services: ServiceOption[];
}

export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  price: string;
}

// Form state and validation
export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedServices: string[];
  message: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  selectedServices?: string;
  message?: string;
}

export interface ContactFormProps {
  messages: Messages;
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
}
