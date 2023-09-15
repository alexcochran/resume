# jsonresume-dev-environment

Very simple, containerized dev environment for editing my [JSON Resume](https://jsonresume.org/) in Visual Studio Code.

This repo is equipped with a [Dev Container](https://containers.dev/) configuration that sets your editor up with
extensions and settings that will help you edit JSON files according to the [JSON Resume schema](https://jsonresume.org/schema/).
A CI/CD job also synchronizes a rendered HTML version of the `resume.json` file to GitLab Pages, where it can be viewed by anyone.

[View my JSON Resume generated from the `resume.json` for this project on Pages right now.](https://alexcochran.gitlab.io/resume/resume)

This project makes use of [rbardini's `resumed` project](https://github.com/rbardini/resumed), which offers a CLI for JSON Resume utilities.

## Usage

The goal of this project is to provide a quick, easy way to get started with and maintain the JSON Resume format. Just fork the code
over to your profile, open the project in Visual Studio Code with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), and get started.

The [JSON Resume schema](https://jsonresume.org/schema/) is configured with the editor to lint and provide field suggestions.

### Scripts

- `npm run validate` - Uses `resumed` to ensure the `resume.json` file at the project's root is valid JSON.
- `npm run render` - Uses `resumed` to render the `resume.json` data into an HTML file using the theme specified in the `meta.theme` value. The
  default theme for this project is [`jsonresume-theme-class`](https://github.com/jsonresume/jsonresume-theme-class). If you
  want to use [a different theme](https://jsonresume.org/themes/), install one with npm and then swap the `meta.theme` value.
- `npm run prepare` - Installs Husky.

### Branches as Distinct Resume Versions

Different branches are used to produce alternate versions of my resume for various jobs.

---

<sub>Emoji used for repository logo designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0</sub>

---
