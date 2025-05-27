<template>
  <div class="demo-block">
    <div v-if="title" class="demo-block__title">
      <h4>{{ title }}</h4>
    </div>
    
    <div v-if="description" class="demo-block__description">
      <p>{{ description }}</p>
    </div>
    
    <div class="demo-block__preview">
      <slot />
    </div>
    
    <div v-if="$slots.code && showCode" class="demo-block__code">
      <slot name="code" />
    </div>
    
    <div v-if="$slots.code" class="demo-block__actions">
      <button class="demo-block__action" @click="toggleCode">
        <svg v-if="!showCode" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 4V2m0 2v2m4-2h4v2h-4V4ZM7 12l3 3 7-7"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 18L18 6M6 6l12 12"/>
        </svg>
        {{ showCode ? 'Ocultar Código' : 'Ver Código' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title?: string
  description?: string
}

defineProps<Props>()

const showCode = ref(false)

const toggleCode = () => {
  showCode.value = !showCode.value
}
</script>

<style scoped>
.demo-block {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.demo-block__title {
  padding: 16px 24px 0;
  background-color: var(--vp-c-bg-soft);
}

.demo-block__title h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.demo-block__description {
  padding: 8px 24px 0;
  background-color: var(--vp-c-bg-soft);
}

.demo-block__description p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.demo-block__preview {
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.demo-block__code {
  border-top: 1px solid var(--vp-c-divider);
  overflow: hidden;
}

.demo-block__code :deep(div[class*="language-"]) {
  margin: 0;
  border-radius: 0;
}

.demo-block__actions {
  display: flex;
  justify-content: center;
  padding: 12px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.demo-block__action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;
}

.demo-block__action:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.demo-block__action svg {
  width: 16px;
  height: 16px;
}
</style>
