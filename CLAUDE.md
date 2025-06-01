# Vue SAM Component Development

## 🚀 WORKFLOW RULES

### PROMPT 1 BEHAVIOR:
- **IF** user provides specific props, emits, slots → **EXECUTE IMMEDIATELY** (no questions)
- **IF** user only provides image + folder name → **CREATE PLAN** and **WAIT FOR APPROVAL**

### PROMPT 2 BEHAVIOR:
- **IF** previous was plan → **EXECUTE PLAN** after approval
- **IF** previous was execution → **VERIFY/REFINE** component

## 📁 Required File Structure
Each component needs exactly these files:
```
src/components/{folder-name}/
├── Sam{ComponentName}.vue
├── Sam{ComponentName}.stories.ts  
├── Sam{ComponentName}.test.ts
```

## 🎨 Image Analysis Guidelines
When user provides design image:
1. Analyze visual elements: colors, spacing, typography, layout
2. Identify interactive elements: buttons, inputs, states
3. Determine component complexity and required props
4. Map visual variants to Vue SAM design system

## ⚡ EXECUTION MODE (when props provided)
When user gives specific props/emits/slots:
1. **DO NOT ASK QUESTIONS** - proceed immediately
2. Create all 3 files following patterns
3. Add TypeScript interface
4. Update exports
5. Create documentation and update navigation
6. **VERIFY AUTOMATICALLY** using verification workflow
7. Report completion with verification results

## 📋 PLANNING MODE (when only image + name)
When user only provides image and folder name:
1. Analyze image thoroughly
2. Create detailed technical plan including:
   - Required props with types
   - Events to emit
   - Slots needed
   - Variants to support
   - Component complexity estimate
3. **STOP and WAIT** for user approval
4. **DO NOT CREATE FILES** until approved

## 🔧 Component Patterns

### Vue Component Template
```vue
<template>
  <div :class="componentClasses">
    <slot name="before" />
    <!-- Component content based on design -->
    <slot />
    <slot name="after" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Sam{ComponentName}Props } from '@/types/components'

const props = withDefaults(defineProps<Sam{ComponentName}Props>(), {
  variant: 'filled',
  size: 'md',
  color: 'primary'
})

const emit = defineEmits<{
  // Based on user specification or image analysis
}>()

const componentClasses = computed(() => [
  'sam-{component-name}',
  `sam-{component-name}--${props.variant}`,
  `sam-{component-name}--${props.size}`,
  `sam-{component-name}--${props.color}`,
  {
    [`sam-{component-name}--${props.state}`]: props.state
  }
])
</script>

<style lang="scss" scoped>
.sam-{component-name} {
  @include sam-component;
  
  // Design tokens based on image analysis
  // Colors, spacing, typography to match design
}
</style>
```

### TypeScript Interface Template
```typescript
export interface Sam{ComponentName}Props {
  variant?: 'filled' | 'outlined' | 'text' | 'tonal'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  // Additional props based on design analysis
}
```

### Stories Template
```typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Sam{ComponentName} from './Sam{ComponentName}.vue'

const meta: Meta<typeof Sam{ComponentName}> = {
  title: 'Components/Sam{ComponentName}',
  component: Sam{ComponentName},
  parameters: { layout: 'centered' },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Default props based on design
  }
}

// Additional stories based on design variants
```

### Test Template
```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Sam{ComponentName} from './Sam{ComponentName}.vue'

describe('Sam{ComponentName}', () => {
  it('renders correctly', () => {
    const wrapper = mount(Sam{ComponentName})
    expect(wrapper.find('.sam-{component-name}').exists()).toBe(true)
  })
  
  // Additional tests based on functionality
})
```

## 🎯 Design System Mapping
Always map design elements to Vue SAM tokens:
- **Colors** → var(--sam-color-primary), sam-color() function
- **Spacing** → sam-spacing('md'), var(--sam-spacing-md)
- **Typography** → sam-font-size('base'), var(--sam-font-size-base)
- **Radius** → sam-radius('base'), var(--sam-radius-base)
- **Shadows** → sam-shadow('md'), var(--sam-shadow-md)

## ✅ Completion Checklist
After creating component:
- [ ] All 3 files created in correct folder
- [ ] TypeScript interface added to src/types/components.ts
- [ ] Component exported in src/index.ts
- [ ] Documentation file created in docs/components/{component-name}.md
- [ ] Component added to VitePress navigation in docs/.vitepress/config.ts
- [ ] Styles use design tokens consistently
- [ ] Component follows Vue SAM patterns exactly
- [ ] All variants from design implemented
- [ ] **AUTOMATIC VERIFICATION COMPLETED**:
  - [ ] Tests passing (`yarn test`)
  - [ ] Storybook (`yarn storybook:dev`)
  - [ ] Use poppeter mcp and check that every version is correct in storybook
  - [ ] Build successful (`yarn build`)
  - [ ] Final report with all details provided

## 📚 Documentation Integration
When creating a new component, always:
1. Create docs/components/{component-name}.md following button.md pattern
2. Add entry to docs/.vitepress/config.ts in sidebar → "API de Componentes" → items:
   ```typescript
   { text: 'Sam{ComponentName}', link: '/components/{component-name}' }
   ```

## 🔍 AUTOMATIC VERIFICATION WORKFLOW
After creating all files, ALWAYS run this verification sequence:

### Step 1: Test Verification
1. Execute `yarn test` using Bash tool
2. **IF TESTS FAIL**:
   - Analyze error messages
   - Fix the issues automatically
   - Re-run `yarn test` until all tests pass
3. **IF TESTS PASS**: Continue to Step 2

### Step 2: Storybook Visual Verification
1. Execute `yarn storybook:dev` in background
2. Wait 10 seconds for Storybook to start
3. Use Puppeteer MCP to:
   - Navigate to `http://localhost:6006`
   - Navigate to the new component story
   - Take screenshot of Default story
   - Take screenshot of Variants story (if exists)
4. Save screenshots with descriptive names
5. Stop Storybook server

### Step 3: Build Verification
1. Execute `yarn build` using Bash tool
2. **IF BUILD FAILS**:
   - Analyze error messages
   - Fix the issues automatically
   - Re-run `yarn build` until successful
3. **IF BUILD PASSES**: Continue to completion

### Step 4: Final Report
Provide final report including:
- ✅ All files created successfully
- ✅ Tests passing (show test count)
- ✅ Storybook screenshots taken
- ✅ Build successful
- 📁 List of all generated files
- 🖼️ Screenshot file paths
- 💰 Estimated cost for this component

## 🚨 IMPORTANT NOTES
- **NEVER** create files during planning mode
- **ALWAYS** wait for explicit approval after creating plan
- **FOLLOW** user's explicit specifications without questions
- **MATCH** the visual design as closely as possible using Vue SAM tokens
- **ALWAYS** run complete verification workflow after file creation
- **AUTO-FIX** any test or build failures before reporting completion
- **CAPTURE** Storybook screenshots for visual verification

## 🛠️ Available Tools for Verification
- **Bash tool**: Execute `yarn test`, `yarn build`, `yarn storybook:dev`
- **Puppeteer MCP**: Navigate to Storybook, take screenshots
- **File operations**: Read error logs, fix issues automatically
- **Process management**: Start/stop Storybook server as needed
