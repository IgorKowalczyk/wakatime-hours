import chalk from "chalk";

export function info(...args) {
 return chalk.cyan("info  ") + chalk.white("- " + args);
}

export function event(...args) {
 return chalk.magenta("event ") + chalk.white("- " + args);
}

export function error(...args) {
 return chalk.red("error") + chalk.white("- " + args);
}

export function warn(...args) {
 return chalk.yellow("warn  ") + chalk.white("- " + args);
}

export function ready(...args) {
 return chalk.green("ready ") + chalk.white("- " + args);
}
