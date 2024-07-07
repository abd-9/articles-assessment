# Frontend Technology Assessment

Build a simple app to hit the NY Times Most Popular Articles API and show a list of articles
that shows details when items on the list are tapped (a typical master/detail web app).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_API_URL` #backend url

`NEXT_PUBLIC_API_KEY` #NY ApiKey

## Installation

Install Dependencies with pnpm or yarn

```bash
  pnpm install
  pnpm perpare
```

Check eslint

```bash
  pnpm lint:fix
```

## Run Locally

Clone the project

```bash
 git clone git@github.com:abd-9/articles-assessment.git
```

Install dependencies

```bash
pnpm install
```

Start the server

```bash
pnpm dev
```

## Running Tests

To run tests, run the following command

```bash
  pnpm test

```

To run tests with covering report

```bash
 pnpm test:cover
```

## Build

To run tests, run the following command

```bash
  pnpm build
  pnpm start  # to run production version locally
```

## Technology Stack

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- ⚛️ React Query - React hooks
- 📏 Axios
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color

- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow
- 👷 Github Actions — Lint your code on PR

## Page Component Structure

The project adheres to the Container/Presentational design pattern. The page.tsx files act as containers, while components under components and logic under hooks manage presentational and stateful components respectively.

Example of a custom hook (hooks/article.ts):

```javascript
import { useQuery } from '@tanstack/react-query';

import { articleApi } from '@/services/api';

export default function useArticles() {
  const {
    data,
    isFetching: isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleApi.getArticles(),
    select: (data) => data, // for data formating
    initialData: { result: [], kind: 'ok' },
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    list: data.kind == 'ok' ? data?.result : [],
  };
}
```

```
├───app
│   │
│   └───articles
│       │   layout.tsx    # layout for the articles page
│       │   page.tsx
│       │
│       ├───components    # includes all components related to article page
│       │       ArticleCard.tsx
│       │       ArticleList.tsx
│       │
│       └───hooks
│               article.ts
│

```

## Folder Structure

```
├───app
│   │   error.tsx         # global error
│   │   layout.tsx        # global layout
│   │   not-found.tsx
│   │   page.tsx
│   │   Providers.tsx     # includes all providers such as react query
│   │
│   │
│   └───articles
│       │   layout.tsx    # layout for the articles page
│       │   page.tsx
│       │
│       ├───components    # includes all components related to article page
│       │       ArticleCard.tsx
│       │       ArticleList.tsx
│       │
│       └───hooks
│               article.ts
│
├───components
│   │   Accent.tsx
│   │   ContentPlaceholder.tsx
│   │   NextImage.tsx
│   │   Skeleton.tsx
│   │   Tag.tsx
│   │
│   ├───buttons
│   │       Button.tsx
│   │       IconButton.tsx
│   ├───form
│   │       StyledInput.tsx
│   │
│   ├───images
│   │       CloudinaryImg.tsx
│   │       NextImage.tsx
│   ├───layout
│   │       Header.tsx
│   │       Layout.tsx
│   │
│   └───links
│           ArrowLink.tsx
│           ButtonLink.tsx
│
├───constant
│       config.ts
│       env.ts
│
├───lib
│   │   env.ts
│   │   helper.ts
│   │   logger.ts
│   │   og.ts
│   │   utils.ts
│   │
│   └───__tests__
│           og.test.ts
│
├───services
│   └───api
│       │   api.ts
│       │   api.types.ts
│       │   apiProblem.test.ts
│       │   apiProblem.ts
│       │   index.ts
│       │
│       └───article
│               article.ts
│               article.types.ts
│               urls.ts
│
├───styles
│       colors.css
│       globals.css
│       nprogress.css
│
├───__mocks__
│       mockEnvVariables.js
│       svg.tsx
│
└───__tests__
    ├───app
    │   └───articles
    │       ├───components
    │       │       ArticleCard.test.tsx
    │       │       ArticleList.test.tsx
    │       │
    │       └───hooks
    └───pages
            HomePage.test.tsx
```

## Test Reports coverages

| File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ----------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files               | 93.75   | 75       | 78.94   | 93.5    |
| app                     | 100     | 100      | 100     | 100     |
| page.tsx                | 100     | 100      | 100     | 100     |
| app/articles/components | 100     | 75       | 75      | 100     |
| ArticleCard.tsx         | 100     | 100      | 100     | 100     |
| ArticleList.tsx         | 100     | 75       | 66.66   | 100     | 28                |
| components              | 100     | 0        | 100     | 100     |
| Accent.tsx              | 100     | 100      | 100     | 100     |
| ContentPlaceholder.tsx  | 100     | 0        | 100     | 100     | 4                 |
| components/buttons      | 90      | 50       | 66.66   | 88.88   |
| ThemeButton.tsx         | 90      | 50       | 66.66   | 88.88   | 25                |
| components/layout       | 93.75   | 57.14    | 80      | 93.75   |
| Header.tsx              | 93.75   | 57.14    | 80      | 93.75   | 19                |
| components/links        | 100     | 66.66    | 100     | 100     |
| UnstyledLink.tsx        | 100     | 66.66    | 100     | 100     | 17-19             |
| lib                     | 80      | 100      | 50      | 80      |
| og.ts                   | 100     | 100      | 100     | 100     |
| utils.ts                | 50      | 100      | 0       | 50      | 5-6               |
| services/api            | 93.33   | 100      | 100     | 93.33   |
| apiProblem.ts           | 93.33   | 100      | 100     | 93.33   | 32                |

```
Test Suites: 5 passed, 5 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        6.669 s
Ran all test suites.
```
