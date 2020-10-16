// function to generate markdown for README
//https://guides.github.com/features/mastering-markdown/ referenced
function generateMarkdown(data) {
  return `# ${data.title}
          
          # Description:

          ${data.description}

          ## Table of Contents
          [Description](#Description)
          [Installation](#Installation)
          [Usage](#Usage)
          {License}(#License)
          [Contributions](#Contributions)
          [Testing](#Testing)
          [Questions or Comments](#Questions or Comments)

          ## Installation Instructions: 
          
          ${data.install}

          ## Usage Information: 
          
          ${data.usageInfo}

          ## Contribution Guidelines: 
          
          ${data.contribution}

          ## Testing Instructions: 
          
          ${data.testing}

          ## License: 
          
          ${data.license}
        
          
          ##Questions or Comments
          ${data.email}+"\n";
        
          
          ${data.repoLink}+"\n";
`;
}

module.exports = generateMarkdown;
