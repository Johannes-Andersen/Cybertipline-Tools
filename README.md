# CyberTipline Tools

A **unofficial** collection of tools for interacting with the National Center for Missing & Exploited Children's [CyberTipline Reporting API](https://report.cybertip.org/ispws/documentation).

## Installation

```bash
pnpm install cybertipline-tools
```

## Requirements

We officially support Node.js 22.x and later, but the library may work on older versions.

The package exports ESM modules, so you may need to do some extra configuration to use it in a CommonJS environment.

## Features

- TypeScript support
  - We export TypeScript declaration files with the package for all documented APIs.
- Inline documentation
  - We document all our APIs and types with JSDoc comments to give you inline documentation in your editor.
- Standalone utils
  - Don't need the API client? Just import the utils you need.

Coming soon™️:
- [ ] API client, ability to call the CyberTipline APIs.
  - [ ] JSON to XML builder. Convert input JSON objects to XML for post calls.
  - [ ] XML to JSON conversion for responses from the API.
  - APIs to support:
    - [ ] GET /status
    - [ ] POST /submit
    - [ ] POST /upload
    - [ ] POST /fileinfo
    - [ ] POST /finish
    - [ ] POST /retract 
- [ ] Support batch reporting.
  - [ ] Generate a full report and batch send.
- [ ] Strict schema validation (Zod, or similar).
- [ ] Full test coverage.


Maybe in the future:
- [ ] E2E Validation against the CyberTipline API test endpoint.
- [ ] Automatically generate TypeScript types from the CyberTipline xsd schema.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- Official API documentation: [CyberTipline Reporting API](https://report.cybertip.org/ispws/documentation)
- Apply for access to [NCMEC CyberTipline](https://esp.ncmec.org/registration)