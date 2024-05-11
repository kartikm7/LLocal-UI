# llocal-ui
Is an Ollama based LLM chat frontend application. Focused, on the benifits of locally running LLM's.

Current roadmap:
- Implement streaming.
- Implement chat history with local db storing.
- Have a more interactive environment, with usernames and avatars.
- Share a message.
- Automatic Ollama installation if not already there.

Long term goals:
- Implement RAG.
- Have multiple model support (Currently only supporting PHI-3).
- Give a short brief on whether the model is a valid choice for the system or not.
- Vision model support.


It's being built with the help of ElectronVite with React (Javascript) and Tailwind.

### Note: Currently no build has been officially released.

The below are the steps for seting up the project locally:

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
