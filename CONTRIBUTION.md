
# Contribution Guidelines

Thank you for your interest in contributing to this custom React Component Library!

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Development**:
   - All components reside in `src/components/` with a strict folder architecture (`Component/Component.tsx`, `Component.module.scss`, `Component.props.ts`, `index.ts`).
   - Follow Atomic Design principles where applicable.
   - Maintain consistency with existing components in terms of structure, naming, and code patterns.
   - Follow BEM conventions for SCSS module naming.

4. **Component Requirements**:
   - Must follow scalable structure with separation of concerns (JSX, Styles, Props, Exports).
   - Ensure accessibility (ARIA attributes, keyboard navigation).
   - Should support dark mode/light mode themes using CSS variables.
   - Reusable icons must be passed via props (no hard-coded SVGs inside components).
   - Multi-language support where necessary (use `tx` prop for i18n in Text components).

5. **Commit Guidelines**:
   - Follow conventional commits (e.g., `feat: Add new Button variant`, `fix: Resolve Dropdown keyboard bug`).

6. **Pull Request Process**:
   - Ensure your branch is up-to-date with `main`.
   - Write unit tests if applicable.
   - Document any new components in the README if needed.
   - A PR template will guide you through the checklist.

## Code Style

- **React**: Functional Components with TypeScript
- **CSS**: SCSS Modules, BEM naming, and CSS Variables
- **Folder Structure**: Strict component folder isolation
- **Linting**: Follow ESLint & Prettier configurations

## Contact
For questions, discussions, or ideas, feel free to raise an Issue or start a Discussion thread.
