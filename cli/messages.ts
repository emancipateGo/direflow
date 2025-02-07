import chalk from 'chalk';
import boxen from 'boxen';

export const projectFinishedMessage = (projectName: string) => `

  Your Direflow Project is ready!
  To get started:

    cd ${projectName}
    yarn install

  Then you can create your first component:

    direflow create --component
`;

export const componentFinishedMessage = (componentName: string) => `

  Your Direflow Component is ready!
  To get started:

    cd ${componentName}
    yarn install
    yarn start

  The Direflow Component will be running at: ${chalk.magenta('localhost:3000')}
`;

export const moreInfoMessage = `
  To learn more about Direflow, visit:
  https://direflow.io
`;

export const updateAvailable = (currentVersion: string, newVersion: string) => {
  const content = `There is a new version of direflow-cli available: ${chalk.greenBright(newVersion)}.
You are currently running direflow-cli version: ${chalk.blueBright(currentVersion)}.
Run '${chalk.magenta('npm i -g direflow-cli')}' to get the latest version.`;

  return boxen(content, { padding: 1, align: 'center', margin: 1 });
};
