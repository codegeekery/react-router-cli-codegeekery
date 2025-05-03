import inquirer from 'inquirer';

export async function askProjectInfo() {
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '¿Cómo quieres llamar a tu proyecto?',
      default: 'mi-proyecto',
    },
  ]);

  const { projectPath } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectPath',
      message: '¿Dónde quieres guardar el proyecto? (deja vacío para usar la ruta actual)',
      default: process.cwd(),
    },
  ]);

  const { initializeGit } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'initializeGit',
      message: '¿Deseas inicializar un repositorio Git?',
      default: true,
    },
  ]);

  return { projectName, projectPath, initializeGit };
}
