<template>
  <component
    :is="componentTag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :type="type"
    :href="href"
    :to="to"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="loading" class="sam-button__loader">
      <svg class="sam-button__spinner" viewBox="0 0 24 24">
        <circle
          class="sam-button__spinner-circle"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke-width="3"
        />
      </svg>
    </span>
    
    <span v-if="icon && iconPosition === 'left'" class="sam-button__icon sam-button__icon--left">
      <i :class="icon" />
    </span>
    
    <span class="sam-button__content">
      <slot />
    </span>
    
    <span v-if="icon && iconPosition === 'right'" class="sam-button__icon sam-button__icon--right">
      <i :class="icon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SamButtonProps } from '@/types/components'

const props = withDefaults(defineProps<SamButtonProps>(), {
  variant: 'filled',
  color: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  rounded: false,
  iconPosition: 'left',
  type: 'button',
  tag: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const componentTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return props.tag
})

const buttonClasses = computed(() => [
  'sam-button',
  `sam-button--${props.variant}`,
  `sam-button--${props.color}`,
  `sam-button--${props.size}`,
  {
    'sam-button--disabled': props.disabled,
    'sam-button--loading': props.loading,
    'sam-button--full-width': props.fullWidth,
    'sam-button--rounded': props.rounded,
    'sam-button--with-icon': props.icon
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.sam-button {
  @include sam-component;
  @include sam-button-base;
  @include sam-focus-ring;
  
  // Sizes
  &--xs {
    height: 28px;
    padding: 0 sam-spacing('xs');
    font-size: sam-font-size('xs');
    border-radius: sam-radius('sm');
    
    &.sam-button--rounded {
      border-radius: 14px;
    }
  }
  
  &--sm {
    height: 32px;
    padding: 0 sam-spacing('sm');
    font-size: sam-font-size('sm');
    border-radius: sam-radius('sm');
    
    &.sam-button--rounded {
      border-radius: 16px;
    }
  }
  
  &--md {
    height: 40px;
    padding: 0 sam-spacing('md');
    font-size: sam-font-size('base');
    border-radius: sam-radius('base');
    
    &.sam-button--rounded {
      border-radius: 20px;
    }
  }
  
  &--lg {
    height: 48px;
    padding: 0 sam-spacing('lg');
    font-size: sam-font-size('lg');
    border-radius: sam-radius('base');
    
    &.sam-button--rounded {
      border-radius: 24px;
    }
  }
  
  &--xl {
    height: 56px;
    padding: 0 sam-spacing('xl');
    font-size: sam-font-size('xl');
    border-radius: sam-radius('md');
    
    &.sam-button--rounded {
      border-radius: 28px;
    }
  }
  
  // Variants
  &--filled {
    @each $color-name, $color-value in $sam-colors {
      &.sam-button--#{$color-name} {
        background-color: sam-color($color-name);
        color: white;
        
        &:hover:not(:disabled) {
          background-color: sam-color('#{$color-name}-dark');
        }
        
        &:focus-visible {
          box-shadow: 0 0 0 3px rgba($color-value, 0.3);
        }
      }
    }
  }
  
  &--outlined {
    background-color: transparent;
    
    @each $color-name, $color-value in $sam-colors {
      &.sam-button--#{$color-name} {
        border-color: sam-color($color-name);
        color: sam-color($color-name);
        
        &:hover:not(:disabled) {
          background-color: rgba($color-value, 0.1);
        }
        
        &:focus-visible {
          box-shadow: 0 0 0 3px rgba($color-value, 0.3);
        }
      }
    }
  }
  
  &--text {
    background-color: transparent;
    border-color: transparent;
    
    @each $color-name, $color-value in $sam-colors {
      &.sam-button--#{$color-name} {
        color: sam-color($color-name);
        
        &:hover:not(:disabled) {
          background-color: rgba($color-value, 0.1);
        }
        
        &:focus-visible {
          box-shadow: 0 0 0 3px rgba($color-value, 0.3);
        }
      }
    }
  }
  
  &--tonal {
    border-color: transparent;
    
    @each $color-name, $color-value in $sam-colors {
      &.sam-button--#{$color-name} {
        background-color: rgba($color-value, 0.2);
        color: sam-color($color-name);
        
        &:hover:not(:disabled) {
          background-color: rgba($color-value, 0.3);
        }
        
        &:focus-visible {
          box-shadow: 0 0 0 3px rgba($color-value, 0.3);
        }
      }
    }
  }
  
  // States
  &--full-width {
    width: 100%;
  }
  
  &--loading {
    position: relative;
    color: transparent !important;
  }
  
  // Elements
  &__content {
    display: inline-flex;
    align-items: center;
    gap: sam-spacing('xs');
  }
  
  &__icon {
    display: inline-flex;
    align-items: center;
    font-size: 1.2em;
    
    &--left {
      margin-right: sam-spacing('xs');
    }
    
    &--right {
      margin-left: sam-spacing('xs');
    }
  }
  
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &__spinner {
    width: 20px;
    height: 20px;
    animation: sam-spin 1s linear infinite;
  }
  
  &__spinner-circle {
    stroke: currentColor;
    stroke-dasharray: 63;
    stroke-dashoffset: 63;
    animation: sam-spinner 1.5s ease-in-out infinite;
  }
}

@keyframes sam-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes sam-spinner {
  0% {
    stroke-dashoffset: 63;
  }
  50% {
    stroke-dashoffset: 15;
  }
  100% {
    stroke-dashoffset: 63;
  }
}
</style>
