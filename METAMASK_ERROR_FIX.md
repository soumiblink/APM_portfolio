# MetaMask Browser Extension Error Fix

## The Problem

You were seeing these errors in your browser console:

```
Error restoring session i: Failed to connect to MetaMask
at Object.connect (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/scripts/inpage.js:7:84179)
⨯ unhandledRejection: i: Failed to connect to MetaMask
```

## What Was Happening

The MetaMask browser extension automatically injects JavaScript into **every** webpage you visit, including your local development server. Since your portfolio application doesn't use Web3/cryptocurrency functionality, MetaMask's connection attempts fail and throw errors.

**This was NOT a bug in your code** - it was the browser extension failing to connect to services it expected.

## The Solution

I've added an `ExtensionErrorSuppressor` component that:

1. Only runs in development mode
2. Listens for unhandled promise rejections
3. Silently suppresses errors from browser extensions (MetaMask, etc.)
4. Allows real application errors to still appear

### Files Changed

- **`components/ExtensionErrorSuppressor.tsx`** - New client component that handles error suppression
- **`app/layout.tsx`** - Added the suppressor component to the root layout

## Alternative Solutions

If you prefer not to suppress these errors in code:

1. **Disable MetaMask for localhost**: Configure the MetaMask extension to not run on `localhost` or `127.0.0.1`
2. **Disable the extension**: Turn off MetaMask when working on this portfolio
3. **Ignore the errors**: They don't affect functionality - only console noise

## Testing

The application still builds successfully and the error suppressor only runs during development, so it won't affect production builds.
