import * as fs from "fs";
import * as ini from "ini";
import { dirname } from "path";

const iniPath = `${__dirname}/config.ini`;
const config_ini = ini.parse(fs.readFileSync(iniPath, { encoding: "utf-8" }));

interface Config {
  cat: string;
}

export const config: Config = config_ini.Cat;
