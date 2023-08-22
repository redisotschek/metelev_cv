import { cp } from 'fs/promises';
import { join } from 'path';

const copyAssets = async () => {
    try {
        await cp(join(process.cwd(), "node_modules", "cat_module", "dist", "cat_module", "assets"),
            join(process.cwd(), 'public', 'cat_module', "assets"), {
            recursive: true,
        });
        console.log("Assets copied successfully!");
    } catch (error) {
        console.error(error);
    }
}

await copyAssets();