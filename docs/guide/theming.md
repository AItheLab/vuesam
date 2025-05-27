# Theming

Vue SAM provides a comprehensive theming system built with CSS custom properties (CSS variables) and SCSS. This allows for easy customization while maintaining consistency across all components.

## Default Theme

Vue SAM comes with a beautiful dark theme by default, inspired by modern design systems. The theme includes:

- A carefully selected color palette
- Consistent spacing scale
- Typography system
- Shadows and elevation
- Border radius tokens

## CSS Custom Properties

All theme values are exposed as CSS custom properties, making it easy to customize the appearance of components.

### Color Properties

```css
:root {
  /* Primary colors */
  --sam-color-primary: #3b82f6;
  --sam-color-primary-light: #60a5fa;
  --sam-color-primary-dark: #2563eb;
  
  /* Secondary colors */
  --sam-color-secondary: #8b5cf6;
  --sam-color-secondary-light: #a78bfa;
  --sam-color-secondary-dark: #7c3aed;
  
  /* Status colors */
  --sam-color-success: #10b981;
  --sam-color-warning: #f59e0b;
  --sam-color-error: #ef4444;
  --sam-color-info: #3b82f6;
  
  /* Neutral colors */
  --sam-color-background: #1a1a1a;
  --sam-color-surface: #262626;
  --sam-color-text-primary: #f3f4f6;
  --sam-color-text-secondary: #9ca3af;
  --sam-color-border: #374151;
}
```

### Spacing Properties

```css
:root {
  --sam-spacing-xxs: 4px;
  --sam-spacing-xs: 8px;
  --sam-spacing-sm: 12px;
  --sam-spacing-md: 16px;
  --sam-spacing-lg: 24px;
  --sam-spacing-xl: 32px;
  --sam-spacing-xxl: 48px;
  --sam-spacing-xxxl: 64px;
}
```

### Typography Properties

```css
:root {
  /* Font sizes */
  --sam-font-size-xs: 12px;
  --sam-font-size-sm: 14px;
  --sam-font-size-base: 16px;
  --sam-font-size-lg: 18px;
  --sam-font-size-xl: 20px;
  --sam-font-size-2xl: 24px;
  --sam-font-size-3xl: 30px;
  --sam-font-size-4xl: 36px;
  --sam-font-size-5xl: 48px;
}
```

### Border Radius Properties

```css
:root {
  --sam-radius-none: 0;
  --sam-radius-sm: 4px;
  --sam-radius-base: 8px;
  --sam-radius-md: 12px;
  --sam-radius-lg: 16px;
  --sam-radius-xl: 24px;
  --sam-radius-full: 9999px;
}
```

## Creating a Custom Theme

### Method 1: CSS Override

The simplest way to customize the theme is to override CSS custom properties:

```css
/* your-theme.css */
:root {
  /* Override primary color */
  --sam-color-primary: #16a34a;
  --sam-color-primary-light: #22c55e;
  --sam-color-primary-dark: #15803d;
  
  /* Override background colors for light theme */
  --sam-color-background: #ffffff;
  --sam-color-surface: #f9fafb;
  --sam-color-text-primary: #111827;
  --sam-color-text-secondary: #6b7280;
  --sam-color-border: #e5e7eb;
}
```

### Method 2: SCSS Variables

If you're using SCSS in your project, you can override the SCSS variables before importing Vue SAM styles:

```scss
// Override variables
$sam-colors: (
  'primary': #16a34a,
  'primary-light': #22c55e,
  'primary-dark': #15803d,
  // ... other colors
);

// Then import Vue SAM styles
@import 'vue-sam/src/styles/index.scss';
```

## Theme Switching

### Dark/Light Mode Toggle

Here's an example of implementing a dark/light mode toggle:

```vue
<script setup>
import { ref, watch } from 'vue'

const isDark = ref(true)

watch(isDark, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <SamButton @click="isDark = !isDark">
    Toggle {{ isDark ? 'Light' : 'Dark' }} Mode
  </SamButton>
</template>
```

And the corresponding CSS:

```css
/* Light theme */
:root {
  --sam-color-background: #ffffff;
  --sam-color-surface: #f9fafb;
  --sam-color-text-primary: #111827;
  --sam-color-text-secondary: #6b7280;
  --sam-color-border: #e5e7eb;
}

/* Dark theme */
:root.dark {
  --sam-color-background: #1a1a1a;
  --sam-color-surface: #262626;
  --sam-color-text-primary: #f3f4f6;
  --sam-color-text-secondary: #9ca3af;
  --sam-color-border: #374151;
}
```

## Using SCSS Mixins

Vue SAM provides useful SCSS mixins for common patterns:

```scss
// In your component styles
@import 'vue-sam/src/styles/mixins';

.my-custom-component {
  // Use component base styles
  @include sam-component;
  
  // Add focus ring
  @include sam-focus-ring('primary', 2px);
  
  // Add transition
  @include sam-transition((background-color, transform));
  
  // Add elevation
  @include sam-elevation('md');
  
  // Responsive styles
  @include sam-breakpoint('md') {
    // Styles for medium screens and up
  }
}
```

## Component-Specific Theming

Some components have additional theming options through props:

```vue
<template>
  <!-- Use different color variants -->
  <SamButton color="primary">Primary</SamButton>
  <SamButton color="secondary">Secondary</SamButton>
  <SamButton color="success">Success</SamButton>
  
  <!-- Use different visual variants -->
  <SamButton variant="filled">Filled</SamButton>
  <SamButton variant="outlined">Outlined</SamButton>
  <SamButton variant="tonal">Tonal</SamButton>
</template>
```

## Accessibility Considerations

When customizing themes, ensure:

1. **Color Contrast**: Maintain WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
2. **Focus Indicators**: Keep focus states visible and distinct
3. **Motion**: Respect `prefers-reduced-motion` user preference

## Best Practices

1. **Use CSS Custom Properties**: They provide runtime flexibility and better performance
2. **Maintain Consistency**: Use the provided scale values rather than arbitrary values
3. **Test Thoroughly**: Check your theme across different components and states
4. **Document Changes**: Keep track of customizations for team members

## Example: Complete Custom Theme

Here's an example of a complete custom theme:

```css
/* custom-theme.css */
:root {
  /* Brand colors */
  --sam-color-primary: #059669;
  --sam-color-primary-light: #10b981;
  --sam-color-primary-dark: #047857;
  
  --sam-color-secondary: #7c3aed;
  --sam-color-secondary-light: #8b5cf6;
  --sam-color-secondary-dark: #6d28d9;
  
  /* Adjust spacing */
  --sam-spacing-base: 20px;
  
  /* Adjust border radius for a more rounded look */
  --sam-radius-base: 12px;
  --sam-radius-md: 16px;
  --sam-radius-lg: 20px;
  
  /* Custom font */
  font-family: 'Inter', sans-serif;
}
```
