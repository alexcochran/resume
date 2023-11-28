# alexcochran's JSON Resume

<div align="center">

[![Web Version](https://img.shields.io/badge/resume.acochran.dev-blue?style=for-the-badge&color=%23470ff4)](https://resume.acochran.dev)

[![API Documentation](https://img.shields.io/badge/API%20Docs-%23554488?logo=gitlab&style=for-the-badge)](https://resume.acochran.dev/api/v1/docs)
[![Code](https://img.shields.io/badge/Code-%23554488?logo=gitlab&style=for-the-badge)](https://gitlab.com/alexcochran/resume)

</div>

Code for editing and deploying my [JSON Resume](https://jsonresume.org/), and a REST API to query it.

A CI/CD job synchronizes a rendered HTML version of the `resume.json` file to GitLab Pages, where it can be viewed by anyone. [View my JSON Resume generated from the `resume.json` for this project on Pages right now.](https://alexcochran.gitlab.io/resume/resume)

This project makes use of [rbardini's `resumed` project](https://github.com/rbardini/resumed), which offers a CLI for JSON Resume utilities.

## Usage

This repo is equipped with a [Dev Container](https://containers.dev/) configuration that sets up VS Code with
extensions and settings that help with editing JSON files according to the [JSON Resume schema](https://jsonresume.org/schema/).

The [JSON Resume schema](https://jsonresume.org/schema/) is configured with the editor to lint and provide field suggestions.

### Scripts

- `npm run dev` - Uses `ts-node` to run the project in development mode
- `npm start` - Compile and start the project **(also run by the Dockerfile during builds)**
- `npm run validate` - Uses `resumed` to ensure the `resume.json` file at the project's root is valid JSON.
- `npm run render` - Uses `resumed` to render the `resume.json` data into an HTML file using the theme specified in the `meta.theme` value.
- `npm run husky-ready` - Installs Husky hooks

### Themes

The default theme for this project is [`jsonresume-theme-class`](https://github.com/jsonresume/jsonresume-theme-class). If you
want to use [a different theme](https://jsonresume.org/themes/), install one with npm and then swap the `meta.theme` value.

### Branches as Distinct Resume Versions

Different branches can be used to produce alternate versions of my resume for various jobs.

### API

If you would like to consume my resume as JSON data via HTTP, a Node.js-based API is available
[here](https://resume.acochran.dev/api/v1). Documentation is provided at this location.

---

<sub>Emoji used for repository logo designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0</sub>

---
