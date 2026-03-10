# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Special Acknowledges
## Thanks to all the co-workers from HIST 12B Discussion 1M Winter 2026 at UCLA for this project:
**ACHYUTA, CHAITANYA SOMESWARYA** \
**BYUN, JESSUP** \
**COOPER, PAYTEN NICHOL** \
**CURTIN, PIERCE** \
**DALLA RICCA, ELISA NANCY** \
**FUENTES, ELENA VALADEZ** \
**GARDNER-ORR, OWEN MICHAEL** \
**HUSSEIN, ABDELRAHMAN AHMED** \
**IYER, ASHWIN VISWANATH** \
**JOE, HANNA LEE** \
**KANG, ETHAN** \
**MASTORAKOS, NICO LEE** \
**MEHELBA, YOUSSEF ABDALLAH ALY HASSAN** \
**MORROW, JAMES** \
**NAGAI, MIA CHANG** \
**PERCASTEGUI, KARLA** \
**SALAZAR, EVAN VICTOR** \
**SINGH, SAMANYU** \
**WANG, LEONARD SUNHAOXIANG** \
**WANG, WILSON** 
## And Special Thanks to
**Professor KELLEY, ROBIN** \
**TA ALVAREZ, LUCIA** \
for advice
