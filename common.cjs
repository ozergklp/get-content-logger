const fs = require('fs/promises');
const path = require('path');

const dashes = '--------------------------------------------------------';

const getContent = async (folderPath, logFilePath) => {
    try {
        const files = await fs.readdir(folderPath);
        const readableFiles = files.map(fileName => path.join(folderPath, fileName));

        for (const fileName of readableFiles) {
            const stats = await fs.stat(fileName);
            if (stats.isFile()) {
                await fs.writeFile(logFilePath, `Current file: ${fileName}\n`, { flag: 'a+' });
                const data = await fs.readFile(fileName, { encoding: 'utf8' });
                await fs.writeFile(logFilePath, 'The content of the current file: \n\n', { flag: 'a+' });
                await fs.writeFile(logFilePath, `${data}\n`, { flag: 'a+' });
                await fs.writeFile(logFilePath, `${dashes}\n`, { flag: 'a+' });
            }
            if (stats.isDirectory()) {
                await fs.writeFile(logFilePath, `Current directory: .${path.sep}${fileName}\n`, { flag: 'a+' });
                await getContent(`.${path.sep}${fileName}`, logFilePath);
            }
        }
    } catch (err) {
        console.error(err);
    }
};

const getContentWithSnapshot = async (folderPath, logFilePath, snapshot = 0) => {
    await fs.writeFile(logFilePath, `Snapshot ${snapshot}\n`, { flag: 'a+' });
    await fs.writeFile(logFilePath, `${dashes}\n`, { flag: 'a+' });
    await getContent(folderPath, logFilePath);
};

const getContentEvery = async (folderPath, logFilePath) => {
    await fs.writeFile(logFilePath, '');
    await getContent(folderPath, logFilePath);
};

module.exports = {
    getContent,
    getContentWithSnapshot,
    getContentEvery
};

//getContentEvery('./', './now-common.txt') 