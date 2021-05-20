# Configuration

## Environment Variables

!!! warning

    Environement Variables are sensible informations injected just before a server is starting.

    Don't forget to add the environment variable file to <b>.gitignore</b>, otherwise bots will scrape GitHub for sensible information and use your aws credentials, for example, for mining Bitcoin.

=== ".env"

```
PORT=
MONGO_ATLAS=

JWT_SECRET=
JWT_EXPIRES_IN=

SENDGRID_API=

REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=
REDIS_URL=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=

TWITTER_API_KEY=
TWITTER_API_SECRET_KEY=
TWITTER_BEARER_TOKEN=

AMAZON_S3_BUCKET=
AMAZON_KEY_ID=
AMAZON_SECRET_ACCESS_KEY=
```

<hr/>

## Eslint & Prettier

Having structured and organized code isn't a nice have, but it's a must. With the help of Eslint, a javascript linter and Prettier, a file formater, it is possible to achieve structured code organization, from solo developer to large teams.

=== "Install development dependencies"

```bash
yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

=== "Install Airbnb Style Guide"

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

The Airbnb style guide is a popular set of rules defined by Airbnb for Javascript

=== "Create Eslint Configuration Fike"

```bash
eslint --init
```

=== "Eslint Configuration"

```yaml
env:
  browser: true
  es2021: true
extends:
  - "eslint:recommended"
  - "plugin:@typescript-eslint/recommended"
  - "airbnb"

parser: "@typescript-eslint/parser"
parserOptions:
  ecmaVersion: 12
  sourceType: module
plugins:
  - "@typescript-eslint"
  - "prettier"
rules:
  {
    "quotes": ["error", "double"],
    "no-unused-vars": "warn",
    "no-console": "off",
  }
```

<hr/>