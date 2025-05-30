<template>
  <div>
    <slot :theme="currentTheme" :toggleTheme="toggleTheme" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'

// Props para Storybook
interface Props {
  theme?: 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  theme: undefined
})

const internalTheme = ref<'light' | 'dark'>('dark')

// Usar theme de props (Storybook) o internal theme (app normal)
const currentTheme = computed(() => props.theme || internalTheme.value)

// Set initial theme from localStorage or system preference (solo si no hay prop)
onMounted(() => {
  if (!props.theme) {
    const savedTheme = localStorage.getItem('sam-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      internalTheme.value = savedTheme as 'light' | 'dark'
    } else if (systemPrefersDark) {
      internalTheme.value = 'dark'
    } else {
      internalTheme.value = 'light'
    }
  }
})

// Watch for theme changes and update DOM
watch(currentTheme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
  // Solo guardar en localStorage si no estamos en Storybook (no hay prop)
  if (!props.theme) {
    localStorage.setItem('sam-theme', newTheme)
  }
}, { immediate: true })

// Toggle between light/dark themes (solo para uso fuera de Storybook)
const toggleTheme = () => {
  if (!props.theme) {
    internalTheme.value = internalTheme.value === 'light' ? 'dark' : 'light'
  }
}
</script>
