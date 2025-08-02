# ✨ Custom React Component Library

This repository contains a **scalable and reusable set of UI components**, designed for production-grade React applications. The architecture follows a modular approach with a focus on flexibility, theming, accessibility, and consistent UX patterns.

## 🏗️ Component Architecture

Each component is structured with:

- **Component Folder Structure**:
  - `Component.tsx` (Functional Component)
  - `Component.module.scss` (Scoped Styles)
  - `Component.props.ts` (TypeScript Props Definition)
  - `index.ts` (Export file)
- **Props Driven**: All components are designed to be fully customizable via props.
- **Utility Interfaces**: Shared enums like `Variant`, `Size`, and utility types like `OverrideProps` are defined centrally.
- **Theming**: CSS Variables are used for dynamic theming (Light/Dark Modes).

## 🚀 Components Available

### 1. **Button**

- Variants: `primary`, `secondary`, `outline`
- Sizes: `small`, `medium`, `large`
- Supports: Loading state, Disabled state, Left/Right Icons
- Can render as `<button>` or `<a>` using the `as` prop.

### 2. **Input**

- Supports floating labels.
- Dynamic error styling with error messages.
- Sizes: `small`, `medium`, `large`
- Fully accessible and theme-compatible.

### 3. **DropdownButton**

- Fully accessible custom dropdown.
- Keyboard Navigation (ArrowUp/ArrowDown/Enter/Escape).
- Supports click-outside to close, scroll-into-view.
- Selectable items passed as props.
- Controlled via `selectedValue` and `onSelect`.

### 4. **SearchBar**

- Advanced search input with dropdown suggestions.
- Keyboard navigation for results.
- Mouse hover highlights results.
- Auto-fills the selected value into the input.
- Supports icons and descriptions in suggestions.
- Fully theme-compatible.

### 5. **ThemeSwitch**

- Custom switch component that toggles between Dark and Light modes.
- Icon support for On/Off states (Example: 🌞/🌙).
- Sizes: `small`, `medium`, `large`
- Fully accessible with keyboard interactions (Enter/Space toggle).

### 6. **Text Component**

- A scalable typography component for headings, paragraphs, captions, etc.
- Supports semantic tags (`p`, `h1`, `h2`, etc.) using the `tag` prop.
- Styling variants like headings, captions, body via the `variant` prop.
- Inline styling options for `bold`, `italic`.
- **i18n Translation Support via `tx` prop**:
  - If `tx` is provided, it will fetch the translated string automatically using i18n hooks.
  - If `children` is passed, it will render the plain text.

## 🌗 Dark Mode / Light Mode

- The entire library supports theme toggling.
- CSS Variables are used for defining colors and are dynamically switched using a global `.dark` class.
- ThemeSwitch component provides the toggle interaction.

## 🛠️ Developer Features

- **Atomic Design Principles** followed for component scalability.
- **TypeScript Strict Typing** for reliable API usage.
- **Scoped SCSS Modules** ensure no global style conflicts.
- Easily extendable component patterns for future components like Modal, Tabs, Toasts, etc.

## 📝 How to Use

```tsx
import { Button, Input, DropdownButton, SearchBar, ThemeSwitch, Text } from '@/components';

<Button variant="primary" size="medium">Click Me</Button>

<Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

<DropdownButton
  items={[{ id: 'en', label: 'English' }, { id: 'hi', label: 'Hindi' }]}
  selectedValue={selectedLanguage}
  onSelect={handleLanguageChange}
/>

<SearchBar items={searchData} onSelect={handleSearch} />

<ThemeSwitch
  checked={isDarkMode}
  onChange={toggleTheme}
  onIcon={<SunIcon />}
  offIcon={<MoonIcon />}
/>

<Text tag="h1" variant="heading" bold tx="welcomeMessage" />
<Text tag="p" variant="body">This is a static text paragraph</Text>
```

## 📦 Future Components (Planned)

- Modal
- Dropdown Menu
- Tabs
- Toast Notifications
- Tooltip
- Card

## ⚡️ Summary

This is a **custom-built component library**, designed to provide reusable, theme-friendly, and accessible UI components, optimized for modern React projects. The architecture is intentionally kept scalable for easy extension and maintenance.
