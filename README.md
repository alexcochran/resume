# jsonresume-dev-environment

Very simple, containerized dev environment for editing your [JSON Resume](https://jsonresume.org/) in Visual Studio Code.

This repo is equipped with a [Dev Container](https://containers.dev/) configuration that sets your editor up with
extensions and settings that will help you edit JSON files according to the [JSON Resume schema](https://jsonresume.org/schema/).
A CI/CD job also synchronizes the `resume.json` file to a GitLab Snippet, where it can be viewed by anyone and
consumed by [applications that can build JSON Resumes](https://jsonresume.org/projects/).

## Usage

The goal of this project is to provide a quick, easy way to get started with the JSON Resume format. Just fork the code
over to your profile, open the project in Visual Studio Code with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), and get started.

The [JSON Resume schema](https://jsonresume.org/schema/) is configured with the editor to lint and provide field
field suggestions.

### Scripts

⏳

### Branches as Distinct Resume Versions

Consider using different branches to produce alternate versions of your resume for various jobs.

---

<sub>Emoji used for repository logo designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0</sub>

---
