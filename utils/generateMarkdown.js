// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ## Licensing
  ### <img src=https://img.shields.io/badge/License-MIT-yellow.svg></img>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  ### <a href src=https://opensource.org/licenses/MIT>License Link</a>`
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `### This project uses the ${license} license.`
}

function renderDescription(description) {
  return `
  ## Project Description
  ${description}`
}

function renderInstallation(install) {
  return `
  ## Installation Instructions
  ${install}`
}

function renderUsage(usage) {
  return `
  ## Usage Information
  ${usage}`
}

function renderContribution(contribution) {
  return `
  ## Contribution
  ${contribution}`
}

function renderTesting(test) {
  return `
  ## Testing Information
  ${test}`
}

function renderGithub(github) {
  return `
  ### Contact Information
  <a href src=https://github.com/${github}>${github}</a>`
}

function renderEmail(email) {
  return `
  ${email}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderDescription(data.description)}
  ${renderInstallation(data.install)}
  ${renderUsage(data.usage)}
  ${renderContribution(data.contribution)}
  ${renderTesting(data.test)}
  ${renderGithub(data.github)}
  ${renderEmail(data.email)}

`;
}

module.exports = generateMarkdown;
