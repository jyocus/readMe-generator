// function to generate markdown for README
function generateMarkdown(data) {
  return `# Repo Link: ${data.repoLink}
          # Project Title: ${data.title}
          # Description: ${data.description}
          # Installation Instructions: ${data.install}
          # Usage Information: ${data.usageInfo}
          # Contribution Guidelines: ${data.contribution}
          # Testing Instructions: ${data.testing}
          # License: ${data.license}
          # Email: ${data.email}
`;
}

module.exports = generateMarkdown;
