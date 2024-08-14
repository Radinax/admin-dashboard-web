# ADMIN DASHBOARD: THOR ENTERPRISE

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

## Folder distribution

- api
- components
  - ...components
  - ui
    ...ui-components
- context
- hooks
- lib
  - ...rest of libs
  - schema
- routes
- utils

Inside a component we will name them after their father name with a dot, for example:

- auth
  - auth.form.tsx

Meanwhile, for file names that use two words, instead of `camelCase`, we will use `kebab-case`

- get-json.tsx
