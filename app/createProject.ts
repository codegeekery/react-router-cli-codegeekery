#!/usr/bin/env node
// import chalk from 'chalk';
// import path from 'path';
// import { exec } from 'child_process';
// import { askProjectInfo } from './prompts.js';
// import { createStructure } from './utils.js';
// import { structure } from './structure.ts';
// import fs from 'fs';

// export async function runCreator() {
//   const { projectName, projectPath, initializeGit } = await askProjectInfo();

//   const fullPath = path.join(projectPath, projectName);
//   console.log(chalk.blue(`Creando proyecto: ${projectName} en ${fullPath}`));

//   createStructure(fullPath, structure);

//   const packageJson = {
//     name: projectName,
//     version: "1.0.0",
//     main: "index.js",
//     type: "module",
//     scripts: {
//       dev: "react-router dev",
//       build: "react-router build",
//       start: "react-router-serve ./build/server/index.js"
//     },
//     dependencies: {
//       "@react-router/node": "^7.4.0",
//       "@react-router/serve": "^7.4.0",
//       isbot: "^5",
//       react: "^19.0.0",
//       "react-dom": "^19.0.0",
//       "react-router": "^7.4.0"
//     },
//     devDependencies: {
//       "@react-router/dev": "^7.4.0",
//       "@tailwindcss/vite": "^4.0.15",
//       "@types/node": "^22.13.10",
//       "@types/react": "^19.0.12",
//       "@types/react-dom": "^19.0.4",
//       typescript: "^5.8.2",
//       vite: "^6.2.2",
//       "vite-tsconfig-paths": "^5.1.4"
//     }
//   };

//   fs.writeFileSync(path.join(fullPath, 'package.json'), JSON.stringify(packageJson, null, 2));

//   process.chdir(fullPath);
//   console.log(chalk.blue('Instalando dependencias...'));

//   exec('npm install', (err, stdout, stderr) => {
//     if (err) {
//       console.error(chalk.red(`Error instalando dependencias: ${stderr}`));
//       process.exit(1);
//     }

//     console.log(chalk.green('Dependencias instaladas correctamente'));

//     if (initializeGit) {
//       console.log(chalk.blue('Inicializando repositorio Git...'));
//       exec('git init', (err, stdout, stderr) => {
//         if (err) {
//           console.error(chalk.red(`Error inicializando Git: ${stderr}`));
//           process.exit(1);
//         }
//         console.log(chalk.green('Repositorio Git inicializado correctamente'));
//         console.log(chalk.blue('¡Proyecto listo!'));
//       });
//     } else {
//       console.log(chalk.blue('¡Proyecto listo!'));
//     }
//   });
// }





import chalk from 'chalk';
import path from 'path';
import { exec } from 'child_process';
import { askProjectInfo } from './prompts.js';
import { createStructure } from './utils.js';
import { structure } from './structure.ts';
import fs from 'fs';

export async function runCreator() {
  const { projectName, projectPath, initializeGit } = await askProjectInfo();

  const fullPath = path.join(projectPath, projectName);
  console.log(chalk.blue(`📦 Creando proyecto: ${projectName} en ${fullPath}`));

  // 1. Crear la estructura de archivos base
  createStructure(fullPath, structure);

  // 2. Crear un package.json mínimo
  const packageJson = {
    name: projectName,
    version: "1.0.0",
    type: "module",
    main: "index.js",
    scripts: {
      dev: "react-router dev",
      build: "react-router build",
      start: "react-router-serve ./build/server/index.js"
    }
    // No definimos dependencies ni devDependencies aquí
  };

  fs.writeFileSync(
    path.join(fullPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // 3. Cambiar al directorio del nuevo proyecto
  process.chdir(fullPath);
  console.log(chalk.blue('📥 Instalando dependencias...'));

  // 4. Definir las dependencias a instalar
  const deps = [
    '@react-router/node@latest',
    '@react-router/serve@latest',
    'isbot@latest',
    'react@latest',
    'react-dom@latest',
    'react-router@latest'
  ].join(' ');

  const devDeps = [
    '@react-router/dev@latest',
    '@tailwindcss/vite@latest',
    '@types/node@latest',
    '@types/react@latest',
    '@types/react-dom@latest',
    'typescript@latest',
    'vite@latest',
    'vite-tsconfig-paths@latest'
  ].join(' ');

  // 5. Ejecutar instalación
  exec(
    `npm i ${deps} && npm i -D ${devDeps}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(chalk.red(`❌ Error instalando dependencias: ${stderr}`));
        process.exit(1);
      }

      console.log(chalk.green('✅ Dependencias instaladas correctamente'));

      // 6. Inicializar Git si el usuario lo eligió
      if (initializeGit) {
        console.log(chalk.blue('🌀 Inicializando repositorio Git...'));
        exec('git init', (err, stdout, stderr) => {
          if (err) {
            console.error(chalk.red(`❌ Error inicializando Git: ${stderr}`));
            process.exit(1);
          }
          console.log(chalk.green('✅ Repositorio Git inicializado correctamente'));
          console.log(chalk.blue('🚀 ¡Proyecto listo!'));
        });
      } else {
        console.log(chalk.blue('🚀 ¡Proyecto listo!'));
      }
    }
  );
}
