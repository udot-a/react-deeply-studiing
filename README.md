# Production-grade React — FSD app

A React 18 + TypeScript articles platform built to practise production-level frontend architecture: Feature-Sliced Design, hand-written build tooling and a four-level test suite.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![webpack](https://img.shields.io/badge/webpack-5-8DD6F9?style=flat-square&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![Vite](https://img.shields.io/badge/Vite-3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-6.5-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Jest](https://img.shields.io/badge/Jest-27-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing%20Library-React-E33332?style=flat-square&logo=testinglibrary&logoColor=white)](https://testing-library.com/)
[![Cypress](https://img.shields.io/badge/Cypress-11-17202C?style=flat-square&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![i18next](https://img.shields.io/badge/i18next-21-26A69A?style=flat-square&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Sass](https://img.shields.io/badge/SCSS-Modules-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Feature--Sliced%20Design-5C6BC0?style=flat-square)](https://feature-sliced.design/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)](.github/workflows)

**Author:** Andrii Udot · [CV](https://udot-a.github.io/front-end-developer-cv/) · Repository: `react-deeply-studiing` · [Test reports](https://udot-a.github.io/react-deeply-studiing/)

---

## Overview

This is a learning and showcase project. I built it to study how a large React codebase is organised, built, tested and kept consistent in production. The product itself is a small articles platform with auth, profiles, comments, ratings and notifications. The engineering around it is the real point: a typed webpack config written from scratch, Feature-Sliced Design boundaries enforced by my own ESLint plugin, and a test pyramid that runs from unit tests to screenshot and end-to-end tests.

## Highlights

- **Feature-Sliced Design.** Layers and slices with a public API (`index.ts`) per slice. Import rules are enforced by a custom ESLint plugin I wrote and published to npm ([`eslint-plugin-udot-project-plugin`](https://www.npmjs.com/package/eslint-plugin-udot-project-plugin)).
- **Two build pipelines.** A hand-written, fully typed webpack 5 config split into small builders (`config/build`), plus a Vite config for fast local development.
- **Four levels of testing.** Jest unit tests, React Testing Library component tests, Loki screenshot tests (230 reference images, desktop and mobile) and Cypress e2e and component tests.
- **Storybook as a UI catalogue.** 50+ story files across the `shared`, `entities`, `features`, `widgets` and `pages` layers, with theme, Redux, router and i18n decorators and mocked API requests.
- **Code splitting.** Pages are lazy-loaded, slice reducers are injected at runtime by a reducer manager, and the animation libraries load on demand.
- **Data layer.** Redux Toolkit, RTK Query with `injectEndpoints`, `EntityAdapter` normalisation, and async thunks that receive the API client through `extraArgument`.
- **i18n.** English and Russian, lazy-loaded namespaces, and a lint rule that rejects hard-coded strings in JSX.
- **Theming.** Light, dark and orange themes built on CSS variables, persisted to `localStorage`.
- **CI on GitHub Actions.** Production build, Storybook build, linting, unit tests and screenshot tests. HTML reports are published to GitHub Pages.
- **Developer tooling.** A slice generator, ts-morph codemods, Husky and lint-staged pre-commit hooks, and a custom Babel plugin that strips `data-testid` from production bundles.

## What the app does

- **Auth and roles.** Username and password login against the mock API, with the session kept in `localStorage`. A `RequireAuth` route guard checks user roles (`ADMIN`, `MANAGER`, `USER`) and redirects to a Forbidden page when a required role is missing.
- **Profile.** An editable profile card with client-side validation and country and currency selects.
- **Articles feed.** Infinite scroll (`IntersectionObserver`), debounced search, sorting, type tabs and a tile or list view. Filters are synced to URL query params, and the scroll position is restored per route.
- **Article details.** Text, code and image blocks, a comments list with an add-comment form, star rating with feedback, and recommendations.
- **Notifications.** A popover on desktop and an animated bottom drawer on mobile (react-spring and @use-gesture).
- **Scaffolded routes.** The article create/edit page and the admin panel are placeholder pages behind the role guard.

## Tech stack

| Area | Tools |
| --- | --- |
| Core | React 18, TypeScript 4.9 (`strict`) |
| State and data | Redux Toolkit 1.9, RTK Query, React Redux 8, Axios |
| Routing | React Router 6 |
| Styling | SCSS, CSS Modules, CSS-variable themes |
| UI and interaction | Headless UI, react-spring, @use-gesture, react-device-detect |
| i18n | i18next, react-i18next, i18next-http-backend, i18next-browser-languagedetector, babel-plugin-i18next-extract |
| Build | webpack 5 (custom config), Vite 3, Babel, SVGR, ForkTsChecker, circular-dependency-plugin, webpack-bundle-analyzer |
| Testing | Jest 27, ts-jest, React Testing Library, Loki, reg-cli, Cypress 11 |
| UI catalogue | Storybook 6.5 (webpack 5 builder), storybook-addon-mock |
| Code quality | ESLint 8 with a custom FSD plugin, Stylelint, Prettier, Husky, lint-staged |
| Mock backend | json-server |
| CI/CD | GitHub Actions, GitHub Pages (test reports), Netlify SPA config |

## Architecture

The project follows [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial). A layer may import only from the layers below it:

```
app  →  pages  →  widgets  →  features  →  entities  →  shared
```

```
src/
├── app/        # App bootstrap: providers (Store, Router, Theme, ErrorBoundary), global styles, themes
├── pages/      # Route-level screens, lazy-loaded through *.async.tsx
├── widgets/    # Composite UI blocks: Navbar, Sidebar, Page, PageError, PageLoader, LangSwitcher, ThemeSwitcher
├── features/   # User interactions: AuthByUsername, AddCommentForm, articleRating, ...
├── enteties/   # Business entities: Article, Comment, Profile, User, ... (the folder is spelled "enteties" in the codebase)
└── shared/     # Reusable foundation: ui kit, api, lib (hooks, helpers, test utils), config, const, types
```

Each slice is split into segments and exposes a single public API:

```
features/AuthByUsername/
├── model/      # slice, selectors, services (async thunks), types
├── ui/         # LoginForm, LoginModal, with their stories and styles
└── index.ts    # public API: the only entry point other slices may import from
```

### Slices

| Layer | Slices |
| --- | --- |
| pages | `MainPage`, `AboutPage`, `ArticlesPage`, `ArticleDetailsPage`, `ArticleEditPage`, `ProfilePage`, `AdminPanelPage`, `ForbiddenPage`, `NotFoundPage` |
| widgets | `Navbar`, `Sidebar`, `Page`, `PageError`, `PageLoader`, `LangSwitcher`, `ThemeSwitcher` |
| features | `AuthByUsername`, `AddCommentForm`, `articleRating`, `articleRecommendationsList`, `avatarDropdown`, `notificationButton`, `UI` |
| entities | [`Article`](src/enteties/Article/README.md), [`Comment`](src/enteties/Comment/README.md), `Counter`, `Country`, `Currency`, `Notification`, `Profile`, `Rating`, `User` |
| shared/ui | `AppImage`, `AppLink`, `Avatar`, `Button`, `Card`, `Code`, `Drawer`, `Icon`, `Input`, `Loader`, `Modal`, `Overlay`, `Popups` (Dropdown, ListBox, Popover), `Portal`, `Select`, `Skeleton`, `Stack` (Flex, HStack, VStack), `StarRating`, `Tabs`, `Text` |

### State and data

- State is managed with **Redux Toolkit**. Reusable entities are normalised with `createEntityAdapter` where it makes sense (article lists, comments, recommendations).
- Server requests go through [RTK Query](src/shared/api/rtkApi.ts). Slices extend the base API with `injectEndpoints` (notifications, article rating, recommendations).
- Async thunks receive the shared Axios instance ([`$api`](src/shared/api/api.ts)) via `thunk.extraArgument`, which makes them easy to test in isolation.
- Reducers are attached asynchronously so they stay out of the main bundle. The store has a custom [reducer manager](src/app/providers/StoreProvider/config/reducerManager.ts), and the [`DynamicModuleLoader`](src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) component adds and removes reducers when a slice mounts and unmounts.
- [`buildSlice` and `buildSelector`](src/shared/lib/store) wrap RTK to return bound action hooks and selector-plus-hook pairs.
- `react-spring` and `@use-gesture` are loaded on demand through [`AnimationProvider`](src/shared/lib/components/AnimationProvider/AnimationProvider.tsx), so they are split into a separate chunk and loaded only when a `Drawer` mounts.

## Getting started

Requirements: Node.js (CI runs on 17.x) and npm. Docker is needed only for the screenshot tests.

```bash
git clone https://github.com/udot-a/react-deeply-studiing.git
cd react-deeply-studiing

npm install                # CI uses `npm ci --force`; add --force if npm reports peer-dependency conflicts

npm run start:dev          # webpack dev server (http://localhost:3000) + mock API (http://localhost:8000)
# or
npm run start:dev:vite     # Vite dev server + mock API
```

Log in with one of the seeded users from [`json-server/db.json`](json-server/db.json) (for example `admin`).

### Mock backend

[`json-server/index.js`](json-server/index.js) serves `db.json` on port **8000**. It adds a few things on top of the default json-server routes:

- a custom `POST /login` endpoint;
- an artificial 800 ms delay on every request, to imitate a real API;
- a check that returns `403` for any request without an `Authorization` header.

### webpack or Vite

| | webpack | Vite |
| --- | --- | --- |
| Config | [`webpack.config.ts`](webpack.config.ts) and [`config/build/`](config/build) | [`vite.config.ts`](vite.config.ts) |
| Used for | Dev server, dev and production builds; its loaders are reused by Storybook | Fast local development |
| Dev port | 3000 (`--env port=...`) | Vite default (5173) |

Both bundlers are set up for the app's main features: the `@/` alias, SVG imports as React components, and the global constants listed below. The webpack config accepts `--env mode=development|production`, `--env port=<n>` and `--env apiUrl=<url>`, and builds into `build/`. Cypress expects the app on port 3000, so use the webpack dev server for e2e runs.

## Scripts

| Script | Description |
| --- | --- |
| **Development** | |
| `npm run start` | Start the frontend on the webpack dev server (port 3000) |
| `npm run start:vite` | Start the frontend on Vite |
| `npm run start:dev` | webpack dev server + mock backend |
| `npm run start:dev:vite` | Vite dev server + mock backend |
| `npm run start:dev:server` | Start only the mock backend (json-server, port 8000) |
| **Build** | |
| `npm run build:prod` | Production build (minified, pointed at the hosted API) |
| `npm run build:dev` | Development build (not minified) |
| **Testing** | |
| `npm run test:unit` | Run unit and component tests with Jest |
| `npm run test:ui` | Run Loki screenshot tests against a running Storybook |
| `npm run test:ui:ok` | Approve new screenshots as references |
| `npm run test:ui:ci` | Run screenshot tests against the static Storybook build (used in CI) |
| `npm run test:ui:udate:reference` | Regenerate reference screenshots from the static Storybook build |
| `npm run test:ui:report` | Generate the full screenshot report (JSON + HTML) |
| `npm run test:ui:json` | Generate the JSON report for screenshot tests |
| `npm run test:ui:html` | Generate the HTML report for screenshot tests (reg-cli) |
| `npm run test:e2e` | Open Cypress |
| **Code quality** | |
| `npm run lint:ts` | Lint `.ts` / `.tsx` files with ESLint |
| `npm run lint:ts:fix` | Lint and auto-fix `.ts` / `.tsx` files |
| `npm run lint:scss` | Lint `.scss` files with Stylelint |
| `npm run lint:scss:fix` | Lint and auto-fix `.scss` files |
| `npm run prettier` | Format all `.ts` / `.tsx` files with Prettier |
| **Storybook** | |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run storybook:build` | Build a static Storybook into `storybook-static/` |
| **Tooling** | |
| `npm run prepare` | Install Husky pre-commit hooks |
| `npm run generate:slice` | Generate an FSD slice scaffold (see [Code generation](#code-generation-and-codemods)) |
| `postinstall` | Clears `node_modules/.cache` after install |

## Testing

The project uses four kinds of tests.

| # | Type | Tooling | Command |
| --- | --- | --- | --- |
| 1 | Unit | Jest | `npm run test:unit` |
| 2 | Component | React Testing Library | `npm run test:unit` |
| 3 | Screenshot | Loki + reg-cli | `npm run test:ui` |
| 4 | End-to-end | Cypress | `npm run test:e2e` |

### Unit tests

Jest 27 with `ts-jest` and `jsdom`. Test files (`*.test.ts`) sit next to the code in `src/`. They cover selectors, slices, async thunks and utilities. The [`TestAsyncThunk`](src/shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts) helper mocks `dispatch`, `getState` and the Axios extra argument. An HTML report is written to `reports/unit/report.html`. Config: [`config/jest`](config/jest).

### Component tests

React Testing Library tests (`*.test.tsx`) use the [`renderComponent`](src/shared/lib/tests/componentRender/componentRender.tsx) helper. It wraps a component in `MemoryRouter`, `StoreProvider` (with optional initial state and async reducers), an i18n provider and `ThemeProvider`. For example, the `AppRouter` tests cover guest redirects, authorised access and missing-role cases.

### Screenshot tests

[Loki](https://loki.js.org/) captures every Storybook story in Dockerised Chrome in two configurations: `chrome.laptop` (1366×768) and `chrome.iphone7`. The reference images live in [`.loki/reference`](.loki/reference). Failed comparisons are turned into an HTML diff report with reg-cli.

```bash
npm run storybook          # Loki compares against a running Storybook
npm run test:ui            # run the screenshot tests (Docker required)
npm run test:ui:ok         # accept intentional visual changes
npm run test:ui:report     # build .loki/report.html
```

### End-to-end tests

Cypress 11 specs in [`cypress/e2e`](cypress/e2e) cover routing (guest and authorised users), profile editing, the articles list and article details. Custom commands (`cy.login`, `cy.getByTestId`, plus profile, article, comment and rating helpers) live in [`cypress/support/commands`](cypress/support/commands), and fixtures in [`cypress/fixtures`](cypress/fixtures). Cypress component testing is set up too (webpack bundler; see [`cypress/component`](cypress/component)).

```bash
npm run start:dev          # app on :3000 + API on :8000
npm run test:e2e           # opens the Cypress runner
```

Elements are selected through `data-testid`. A custom Babel plugin ([`config/babel/babelRemovePropsPlugin.ts`](config/babel/babelRemovePropsPlugin.ts)) removes these attributes from production `.tsx` bundles.

## Linting and formatting

- **ESLint** checks TypeScript and React code: `@typescript-eslint`, `react`, `react-hooks`, `storybook`, `unused-imports` and `eslint-config-prettier`. `i18next/no-literal-string` rejects hard-coded strings in JSX markup, so all UI text goes through `t()`.
- **Stylelint** checks style files with `stylelint-config-standard-scss`.
- **Prettier** handles formatting (2 spaces, single quotes, trailing commas).

### Custom ESLint plugin

The main architectural rules are enforced by my own plugin, [`eslint-plugin-udot-project-plugin`](https://www.npmjs.com/package/eslint-plugin-udot-project-plugin). It has three rules:

1. **`path-checker`**: forbids absolute (`@/...`) imports within the same slice; imports inside a slice must be relative.
2. **`layer-imports`**: checks that layers are used correctly according to FSD. For example, `widgets` cannot be imported into `features` or `entities`.
3. **`public-api-imports`**: allows importing from other slices only through their public API. It supports auto-fix.

### Running the linters

```bash
npm run lint:ts            # ESLint
npm run lint:ts:fix        # ESLint with auto-fix
npm run lint:scss          # Stylelint
npm run lint:scss:fix      # Stylelint with auto-fix
```

## Storybook

Components are documented with story cases in a `*.stories.tsx` file next to the component. API requests are mocked with `storybook-addon-mock`. Reusable decorators live in [`src/shared/config/storybook`](src/shared/config/storybook): `ThemeDecorator`, `StyleDecorator`, `ReduxDecorator`, `RouterDecorator`, `SuspenseDecorator` and `TranslationDecorator`.

```bash
npm run storybook          # http://localhost:6006
npm run storybook:build    # static build into storybook-static/
```

Example, abridged from [`ArticleRating.stories.tsx`](src/features/articleRating/ui/ArticleRating/ArticleRating.stories.tsx):

```tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Dark = Template.bind({});
Dark.args = { articleId: '10' };
Dark.decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.DARK),
  ReduxDecorator({ user: { authData: { id: '1' } } }),
];
Dark.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=10`,
      method: 'GET',
      status: 200,
      response: [{ userId: '1', articleId: '10', rate: 1 }],
    },
  ],
};
```

## Internationalisation

Translations use [i18next](https://react.i18next.com/) with `react-i18next`.

- Translation files live in [`public/locales/{en,ru}`](public/locales). They are split into namespaces (`translation`, `about`, `article`, `profile`) and loaded lazily over HTTP.
- The language is detected from the browser; the fallback is `ru`. Users can switch language in the UI with `LangSwitcher`.
- `babel-plugin-i18next-extract` collects translation keys into [`extractedTranslations/`](extractedTranslations).
- Tests use a separate instance ([`i18nForTests`](src/shared/config/i18n/i18nForTests.ts)).

An i18n plugin for WebStorm or VS Code makes working with the translation keys easier.

## Project configuration

The project has two bundler configs for development: **webpack** (`config/build`) and **Vite** (`vite.config.ts`). Both are set up for the app's main features. All other configuration lives in [`config/`](config):

| Path | Contents |
| --- | --- |
| [`config/build`](config/build) | webpack config, split into typed builders: `buildWebpackConfig`, `buildLoaders`, `buildPlugins`, `buildResolvers`, `buildDevServer` |
| [`config/babel`](config/babel) | Custom Babel plugin that removes props (`data-testid`) from production builds |
| [`config/jest`](config/jest) | Jest config and test environment setup (`jest-dom`, `whatwg-fetch`, SVG stub) |
| [`config/storybook`](config/storybook) | Storybook `main` / `preview` and a webpack override that reuses the app's CSS and SVG loaders |

The webpack build includes:

- CSS Modules for `*.module.scss`, with readable class names in development and short hashes in production;
- SVGs imported as React components (SVGR);
- type checking in a separate process (`fork-ts-checker-webpack-plugin`);
- a build that fails on circular imports (`circular-dependency-plugin`);
- a bundle analyzer report in development builds;
- in production, content-hashed CSS extracted into separate files and locales copied into `build/`.

### Global constants

These constants are injected through `DefinePlugin` (webpack and Storybook), `define` (Vite) or `globals` (Jest), and declared in [`src/app/types/global.d.ts`](src/app/types/global.d.ts):

| Constant | Meaning | webpack | Vite | Storybook | Jest |
| --- | --- | --- | --- | --- | --- |
| `__IS_DEV__` | Development mode flag | `mode === 'development'` | `true` | `true` | `true` |
| `__API__` | API base URL | `--env apiUrl` (default `http://localhost:8000`) | `http://localhost:8000` | stub URL, requests are mocked | `''` |
| `__PROJECT__` | Runtime environment | `frontend` | `frontend` | `storybook` | `jest` |

### Code generation and codemods

The [`scripts/`](scripts) folder holds scripts for refactoring, scaffolding code and generating reports:

- **Slice generator.** `npm run generate:slice -- <features|entities|pages> <sliceName>` scaffolds a slice. It creates `model/` (types, slices, selectors, services) with a Redux slice and a state schema, `ui/` with a component, story and SCSS module, and an `index.ts` public API.
- **ts-morph codemods** (run with `ts-node`):
  - [`updateImports.ts`](scripts/refactoring/updateImports.ts) rewrites bare layer imports to the `@/` alias.
  - [`createPublicApiForSharedUI.ts`](scripts/refactoring/createPublicApiForSharedUI.ts) generates `index.ts` public APIs for `shared/ui` components.
- **[`generate-visual-json-report.js`](scripts/generate-visual-json-report.js)** builds the JSON report that reg-cli turns into the screenshot diff report.

### Experimental

[`src/app/providers/Firebase`](src/app/providers/Firebase) and [`public/firebase-messaging-sw.js`](public/firebase-messaging-sw.js) contain a Firebase Cloud Messaging web-push setup (client-side config, a token hook and a service worker). It is not wired into the app yet.

## CI pipeline and pre-commit hooks

The GitHub Actions workflow is in [`.github/workflows`](.github/workflows). It runs on every push and pull request to `main`, on Node.js 17.x, with two jobs:

| Job | Steps |
| --- | --- |
| `build-and-ui-testing` | `npm ci` → production build → Storybook build → Loki screenshot tests → unit tests → HTML reports → deploy reports to GitHub Pages |
| `checks` | `npm ci` → ESLint → Stylelint → unit tests |

The unit-test and screenshot reports are published at **[udot-a.github.io/react-deeply-studiing](https://udot-a.github.io/react-deeply-studiing/)**. Cypress e2e tests run locally and are not part of CI.

Pre-commit hooks are managed by **Husky** (config in [`.husky`](.husky)). Before each commit, `lint-staged` runs Prettier and ESLint on the staged `.ts` / `.tsx` files.

## Deployment

- `npm run build:prod` produces an optimised build in `build/`, with `__API__` set to the hosted backend URL given in the script.
- [`netlify.toml`](netlify.toml) adds an SPA fallback redirect (`/* → /index.html`) so client-side routes work on Netlify.

---

Built by **Andrii Udot** — [CV](https://udot-a.github.io/front-end-developer-cv/) · [LinkedIn](https://www.linkedin.com/in/andrii-udot-09181519a)
