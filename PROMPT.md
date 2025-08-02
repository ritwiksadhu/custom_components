
# PROMPT.md — Building Scalable React Component Library

## Objective
The goal of this component library is to create **scalable, reusable, and atomic React components** that follow a strict architecture similar to Bootstrap's behavior patterns but maintain a **fully custom implementation**.

## References & Inspirations
- **Bootstrap GitHub Repo:** For understanding dropdown logic, keyboard accessibility patterns, component UX
- **Bootstrap Docs:** Interaction behaviors, states handling
- **Atomic Design Principles:** For structuring component hierarchy (Atoms, Molecules, Organisms)
- **CSS BEM Methodology:** For clean and maintainable SCSS Modules

## Our Architecture
### Folder Structure for Every Component
```
/ComponentName/
 ├── ComponentName.tsx
 ├── ComponentName.module.scss
 ├── ComponentName.props.ts
 ├── index.ts
 └── README.md
```

### Guidelines Followed:
- **clsx** for className conditionals
- Every component supports **variant**, **size**, **disabled** props
- Components like **SearchBar, DropdownButton** have **keyboard navigation** and **scroll-into-view**
- The **Text component supports i18n tx prop**
- All theme colors, backgrounds are handled through **CSS Variables**
- All icons in components like **Switch, Button** are passed as **props** (no hardcoded icons)

## Development Strategy
1. **Start from Bootstrap's JS logic (Dropdown, Modal, Switch)** → convert to TypeScript React components.
2. Ensure every interactive component has **keyboard accessibility**.
3. Modular SCSS structure using **BEM** with **CSS variables** for easy theming.
4. Each component gets a **README.md** inside its folder for documentation.
5. Shared **interfaces/enums** are defined in a centralized location (`interfaces/index.ts`).
6. Maintain flexibility for icons, custom actions, and scalability.

## Completed Components So Far:
- Button
- Input (Floating Labels, Errors)
- DropdownButton (Keyboard nav, Accessible)
- SearchBar (Dynamic Suggestions, Keyboard Support)
- Switch (Generic toggle with icons)
- Text (Semantic tags, i18n tx prop support)
- ThemeSwitch (App-level dark/light mode toggle)

## Next Steps:
- Modal Component
- Tabs
- Tooltip
- Toast Notifications
- Skeleton Loader

---
