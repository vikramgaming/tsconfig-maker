import { writeFile, mkdir } from "fs/promises";
import { cwd } from "process";
import { join } from "path";
import type { TSConfig } from "./tsConfigType";

export async function tsc(
    config: TSConfig,
    space = 2,
    inFolder = ""
): Promise<void> {
    const dirPath = join(cwd(), inFolder);
    await mkdir(dirPath, { recursive: true });

    const filePath = join(dirPath, "tsconfig.json");
    await writeFile(filePath, JSON.stringify(config, null, space), "utf-8");
}