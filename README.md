# sample-nodejs-typescript-api
Base for an NodeJS API with typescript, lint verification based on standardJS and using git-commit-msg-linter, lint-staged, husk and jest. 

## Install Packages
Use `npm` or `yarn` to create or run the project.

## Running the server
Use `npm` or `yarn` to run the scripts below, like:
- `yarn dev` to run the api in devlopment mode;
- `yarn start` to run the api in production mode;
- `yarn build` to build a production version;
- `yarn test` to run the unit tests;
- `yarn lint` to run the code lint;
- `yarn prepare` to install husky git hooks, **to be able to commit files**.

### Development Dependencies
- Eslint, install with `yarn add -D eslint`;
- Eslint plugin, install with `yarn -D @typescript-eslint/eslint-plugin`;
- Git Commit message linter, install with `yarn add -D -D git-commit-msg-linter`;
- Husk, install with `yarn add -D husk`;
- Lint Staged, install with `yarn add -D lint-staged`;
- Jest, install with `yarn add -D jest @types/jest ts-jest`.

### Visual Studio Code Extensions
- ESLint, the extension ID is: `dbaeumer.vscode-eslint`;
- StandardJS, the extension ID is: `standard.vscode-standard`;
- Import Cost, the extension ID is: `wix.vscode-import-cost`;
- GitHub Actions, the extension ID is: `cschleiden.vscode-github-actions`;
- TypeScript Extension Pack, the extension ID is: `loiane.ts-extension-pack`.
