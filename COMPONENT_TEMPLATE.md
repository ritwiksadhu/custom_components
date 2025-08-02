
# COMPONENT_TEMPLATE.md

## 🧩 Component Template Guide — Custom Scalable Component Library

This template defines **how every component folder should be structured**, including **file names, code skeletons, and best practices**.

## Folder Structure
```
/ComponentName/
 ├── ComponentName.tsx
 ├── ComponentName.module.scss
 ├── ComponentName.props.ts
 ├── index.ts
 └── README.md
```

## Prop Types
Define prop types in `ComponentName.props.ts` clearly, using shared interfaces like `Variant`, `Size`, etc.

## Component (.tsx)
Structure components with scalability, flexibility, and reusability in mind. Use `clsx` for classNames, support common props like `variant`, `size`, `disabled`.

## SCSS Modules
Follow **BEM Naming Convention**. Use CSS variables for dynamic theming (light/dark modes).

## README.md (inside component folder)
Each component folder should have a README explaining:
- Component Purpose
- Props table
- Usage Examples
- States Supported (Hover, Active, Disabled, etc.)

## Guidelines
- Accessibility (Keyboard support where needed)
- i18n support where relevant (Text Component with `tx` prop)
- No hardcoded icons in components, icons passed via props
- CSS variables for theming flexibility

---
