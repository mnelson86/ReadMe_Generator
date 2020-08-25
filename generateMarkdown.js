function generateMarkdown(data) {
  return ` # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  ${renderLicenseLink(data.license, data.username)}

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation
  To install the necessary depepndencies, use the following command:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Test
  To run a test, enter the following command:

  ${data.test}

  If you have any questions about this repository, please contact me at:
  ${data.email}

  You can find my work at:
  https://www.github.com/${data.username}/

`
}
function renderLicenseBadge(license) {
  return `apm/1/${license}`
}

function renderLicenseLink(license, username) {
  return `https://img.shields.io/badge/${license}-${username}-blue`
}

module.exports = generateMarkdown;
