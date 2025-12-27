// components/ui/TextField.tsx
'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../lib/utils'

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string
  error?: string
  onChange: (value: string) => void
  onBlur?: () => void // ✅ Add this (optional since InputHTMLAttributes has it)
  helperText?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, helperText, className, onChange, onBlur, ...props }, ref) => {
    const hasError = Boolean(error)
    const hasValue = Boolean(props.value)
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(
            'peer w-full p-2 rounded-md outline-none transition-colors bg-background border border-border-c placeholder-transparent',
            hasError
              ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'focus:border-orange-400 focus:ring-1 focus:ring-orange-400',
            className
          )}
          
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur} // ✅ Add this
          aria-invalid={hasError}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        />
        <label
          htmlFor={props.id}
          className={cn(
            'absolute left-3 text-sm  bg-background rounded px-1 transition-all duration-200 pointer-events-none',
            // default (no value or focus)
            'top-3 text-forground',
            // when focused or has value
            'peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-600',
            hasValue && '-top-2 text-xs text-orange-700',
            hasError && 'text-red-600 peer-focus:text-red-600'
          )}
        >
          {label}
        </label>
        {error && (
          <p id={`${props.id}-error`} className="text-red-500 text-xs mt-1" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${props.id}-helper`} className="text-gray-500 text-xs mt-1">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'