// Component-specific types

import type { SamSize, SamColor, SamVariant } from './index'

// Button types
export interface SamButtonProps {
  variant?: SamVariant
  color?: SamColor
  size?: SamSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  rounded?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  to?: string | object
  tag?: string
}

// TextField types
export interface SamTextFieldProps {
  modelValue?: string | number
  label?: string
  placeholder?: string
  hint?: string
  error?: string | boolean
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  size?: SamSize
  variant?: 'outlined' | 'filled' | 'underlined'
  prependIcon?: string
  appendIcon?: string
  maxLength?: number
  autofocus?: boolean
  required?: boolean
}

export interface SamTextFieldEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  (e: 'change', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'clear'): void
  (e: 'click:prepend'): void
  (e: 'click:append'): void
}
