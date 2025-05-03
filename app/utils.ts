import fs from 'fs';
import path from 'path';

export function createStructure(basePath: string, structure: Record<string, any>) {
  for (const key in structure) {
    const newPath = path.join(basePath, key);
    if (typeof structure[key] === 'object') {
      fs.mkdirSync(newPath, { recursive: true });
      createStructure(newPath, structure[key]);
    } else {
      fs.writeFileSync(newPath, structure[key]);
    }
  }
}
