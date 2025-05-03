#!/usr/bin/env node
import { Command } from 'commander';
import { runCreator } from './../app/createProject.ts';

const program = new Command();

program
  .version('1.0.0')
  .description('Un CLI para crear la estructura de tu proyecto con React Router v7')
  .action(runCreator);

program.parse(process.argv);
