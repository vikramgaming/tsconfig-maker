import { writeFile, existsSync, mkdirSync } from "fs";
import { cwd } from "process";
import type { TSConfig } from "./tsConfigType.ts";

export function tsc(config: TSConfig, inFolder = ""): void {
    if (inFolder && !inFolder.endsWith("/")) inFolder += "/";
    const path = cwd() + "/" + inFolder;
    
    if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
    }
    
    writeFile(path + "tsconfig.json", JSON.stringify(config, null, 4), (err) => {
        if (err) console.log(err);
    });
}