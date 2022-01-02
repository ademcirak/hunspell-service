import { promises} from 'fs';
import path from "path";

export async function getLoadedLanguages(): Promise<string[]> {

    const dictionariesPath = path.join(process.cwd(), 'dictionaries');

    const allItems = await promises.readdir(dictionariesPath, { withFileTypes: true });

    return allItems.filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}
