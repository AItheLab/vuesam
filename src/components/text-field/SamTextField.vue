<template>
  <div :class="wrapperClasses">
    <label v-if="label" :for="inputId" class="sam-text-field__label">
      {{ label }}
      <span v-if="required" class="sam-text-field__required">*</span>
    </label>
    
    <div class="sam-text-field__input-wrapper">
      <span v-if="prependIcon" class="sam-text-field__icon sam-text-field__icon--prepend" @click="handlePrependClick">
        <i :class="prependIcon" />
      </span>
      
      <input
        :id="inputId"
        ref="inputRef"
        v-model="internalValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxLength"
        :required="required"
        :autofocus="autofocus"
        class="sam-text-field__input"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <span v-if="showClearButton" class="sam-text-field__icon sam-text-field__icon--clear" @click="handleClear">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </span>
      
      <span v-if="appendIcon && !showClearButton" class="sam-text-field__icon sam-text-field__icon--append" @click="handleAppendClick">
        <i :class="appendIcon" />
      </span>
    </div>
    
    <div v-if="hint || error || counter" class="sam-text-field__details">
      <span v-if="error" class="sam-text-field__error">{{ errorMessage }}</span>
      <span v-else-if="hint" class="sam-text-field__hint">{{ hint }}</span>
      <span v-if="counter" class="sam-text-field__counter">{{ characterCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import type { SamTextFieldProps, SamTextFieldEmits } from '@/types/components'

const props = withDefaults(defineProps<SamTextFieldProps>(), {
  type: 'text',
  size: 'md',
  variant: 'outlined',
  disabled: false,
  readonly: false,
  clearable: false,
  autofocus: false,
  required: false
})

const emit = defineEmits<SamTextFieldEmits>()

const inputRef = ref<HTMLInputElement>()
const internalValue = ref(props.modelValue || '')
const focused = ref(false)
const inputId = `sam-text-field-${Math.random().toString(36).substr(2, 9)}`

// Computed properties
const wrapperClasses = computed(() => [
  'sam-text-field',
  `sam-text-field--${props.variant}`,
  `sam-text-field--${props.size}`,
  {
    'sam-text-field--focused': focused.value,
    'sam-text-field--disabled': props.disabled,
    'sam-text-field--readonly': props.readonly,
    'sam-text-field--error': !!props.error,
    'sam-text-field--with-label': props.label,
    'sam-text-field--with-prepend': props.prependIcon,
    'sam-text-field--with-append': props.appendIcon || showClearButton.value
  }
])

const showClearButton = computed(() => {
  return props.clearable && internalValue.value && !props.disabled && !props.readonly
})

const errorMessage = computed(() => {
  return typeof props.error === 'string' ? props.error : 'Invalid input'
})

const counter = computed(() => {
  return props.maxLength && props.maxLength > 0
})

const characterCount = computed(() => {
  const length = String(internalValue.value).length
  return `${length}/${props.maxLength}`
})

// Watchers
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue || ''
})

// Methods
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value
  internalValue.value = value
  emit('update:modelValue', value)
  emit('input', value)
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.value)
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const handleClear = () => {
  internalValue.value = ''
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

const handlePrependClick = () => {
  emit('click:prepend')
}

const handleAppendClick = () => {
  emit('click:append')
}

// Lifecycle
onMounted(() => {
  if (props.autofocus && inputRef.value) {
    inputRef.value.focus()
  }
})

// Expose
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  select: () => inputRef.value?.select()
})
</script>

<style lang="scss" scoped>
.sam-text-field {
  @include sam-component;
  position: relative;
  width: 100%;
  
  // Label
  &__label {
    display: block;
    margin-bottom: sam-spacing('xs');
    font-size: sam-font-size('sm');
    font-weight: map-get($sam-font-weights, 'medium');
    color: sam-color('text-secondary');
    @include sam-transition((color));
  }
  
  &__required {
    color: sam-color('error');
    margin-left: 2px;
  }
  
  // Input wrapper
  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  // Input
  &__input {
    @include sam-input-base;
    @include sam-focus-ring('primary', 0);
    flex: 1;
    padding: 0 sam-spacing('md');
    
    // Remove default styling
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
    
    // Number input - remove spinners
    &[type="number"] {
      -moz-appearance: textfield;
      
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  
  // Icons
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: sam-color('text-secondary');
    @include sam-transition((color));
    
    &--prepend {
      left: sam-spacing('md');
    }
    
    &--append,
    &--clear {
      right: sam-spacing('md');
    }
    
    &--clear {
      cursor: pointer;
      
      &:hover {
        color: sam-color('text-primary');
      }
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
  
  // With icons padding adjustment
  &--with-prepend .sam-text-field__input {
    padding-left: calc(sam-spacing('md') * 2 + 20px);
  }
  
  &--with-append .sam-text-field__input {
    padding-right: calc(sam-spacing('md') * 2 + 20px);
  }
  
  // Details
  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: sam-spacing('xs');
    min-height: 20px;
  }
  
  &__hint,
  &__error,
  &__counter {
    font-size: sam-font-size('xs');
    line-height: 1.5;
  }
  
  &__hint {
    color: sam-color('text-secondary');
  }
  
  &__error {
    color: sam-color('error');
  }
  
  &__counter {
    color: sam-color('text-secondary');
    margin-left: auto;
  }
  
  // Sizes
  &--xs &__input {
    height: 28px;
    font-size: sam-font-size('xs');
    padding: 0 sam-spacing('xs');
  }
  
  &--sm &__input {
    height: 32px;
    font-size: sam-font-size('sm');
    padding: 0 sam-spacing('sm');
  }
  
  &--md &__input {
    height: 40px;
    font-size: sam-font-size('base');
  }
  
  &--lg &__input {
    height: 48px;
    font-size: sam-font-size('lg');
  }
  
  &--xl &__input {
    height: 56px;
    font-size: sam-font-size('xl');
    padding: 0 sam-spacing('lg');
  }
  
  // Variants
  &--outlined {
    .sam-text-field__input {
      border-radius: sam-radius('base');
    }
  }
  
  &--filled {
    .sam-text-field__input {
      border-radius: sam-radius('base') sam-radius('base') 0 0;
      border-bottom-width: 2px;
      background-color: sam-color('background-secondary');
      
      &:hover:not(:disabled):not(:focus) {
        background-color: sam-color('background-tertiary');
      }
      
      &:focus {
        background-color: sam-color('background-tertiary');
        border-bottom-color: sam-color('primary');
      }
    }
  }
  
  &--underlined {
    .sam-text-field__input {
      border-radius: 0;
      border: none;
      border-bottom: 1px solid sam-color('border');
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
      
      &:hover:not(:disabled):not(:focus) {
        border-bottom-color: sam-color('border-light');
      }
      
      &:focus {
        border-bottom-width: 2px;
        border-bottom-color: sam-color('primary');
        margin-bottom: -1px;
      }
    }
    
    &--with-prepend .sam-text-field__input {
      padding-left: calc(sam-spacing('md') + 20px);
    }
    
    &--with-append .sam-text-field__input {
      padding-right: calc(sam-spacing('md') + 20px);
    }
  }
  
  // States
  &--focused {
    .sam-text-field__label {
      color: sam-color('primary');
    }
  }
  
  &--error {
    .sam-text-field__input {
      border-color: sam-color('error') !important;
      
      &:focus {
        outline-color: sam-color('error');
      }
    }
    
    .sam-text-field__label {
      color: sam-color('error');
    }
  }
}
</style>
