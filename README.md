# React CSR Dashboard integrated with a bun-hono-drizzle API

Personal frontend stack for private SAAS projects as a showcase for new members of the coaching system.

We use Vite CSR to create this project with Tailwind, React Router and React Query.

## Install

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
  - ...rest of components
  - ui
    ...ui-components
- context
- features
  - ...rest of features
  - home
    - components
      - home-charts
        - home.chart.tsx
    - home.tsx
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

## Fetching strategy with React Query

Create Schema:

```javascript
const userSchema = z.object({
  username: z.string(),
  sessionId: z.string(),
});

export type User = z.infer<typeof userSchema>;
```

Create Fetcher:

```javascript
export const getUser = (): Promise<User> => {
  return fetchData("/me");
};
```

Create Query Options:

```javascript
export function getUserQueryOptions() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return queryOptions({
    queryKey: ["get-user"],
    queryFn: getUser,
  });
}
```

Generate the type for `getUser` which is used in the `routes` to produce the route Loader which is used in `@providers/react-router.provider.tsx`:

```javascript
export interface GetUserOptions {
  queryConfig?: QueryOptions<typeof getUserQueryOptions>;
}
```

With this you don't need to check `if its loading then fetch` in every route, its done automatically.

Create the Hook to be used:

```javascript
export const useUser = ({ queryConfig }: GetUserOptions = {}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return useQuery({
    ...getUserQueryOptions(),
    ...queryConfig,
  });
};
```

Finally export these 3 functions in `@api/index.ts` to be used:

```javascript
export { useUser, getUserQueryOptions, type User } from "./user"
```

## Final words

This is an example of how to create a medium to large project, more often than not creating the repo and doing all the setups is what takes the most time out of a developer.

**Made by Engineer Adrian Beria**
