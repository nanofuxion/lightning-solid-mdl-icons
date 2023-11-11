import { promises as fs } from 'fs';
import { extname, join } from 'path';

const directoryPath = join(__dirname, './Icons');

const generateIndexTs = async (dirPath) => {
  try {
    const files = await fs.readdir(dirPath);
    const tsFiles = files.filter(file => extname(file) === '.tsx' && file !== 'index.ts');

    const importStatements = tsFiles.map((file, index) => {
      const moduleName = file.slice(0, -4); // Remove the .ts extension
      return (
`${index == 0 && 
`import { FontTypes as _FontTypes } from './common';
export const FontTypes = _FontTypes;
`}
import _${moduleName} from './Icons/${moduleName}';
export const ${moduleName} = _${moduleName}; `);
    }).join('\n');

    const outputPath = join(__dirname, 'index.ts');
    await fs.writeFile(outputPath, importStatements);
    console.log('index.ts generated successfully');
  } catch (err) {
    console.error('Error generating index.ts:', err);
  }
};

generateIndexTs(directoryPath);
