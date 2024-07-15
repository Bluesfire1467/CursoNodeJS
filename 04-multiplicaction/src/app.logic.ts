import fs from 'fs';
import {yarg} from './config/plugins/args.plugin';
import yargs from "yargs";

console.log(yarg.l);
let outputMessage = ''
const headerMessage = `
=============================
      Tabla del ${yarg.b}
=============================
`

for (let i = 1; i <= yarg.l; i++) {
    outputMessage += `${yarg.b} x ${i} = ${i*yarg.b}\n`
}

const output = headerMessage + outputMessage;

if (yarg.s)console.log(output)

const outputPath = 'outputs'

try {
    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(`${outputPath}/tabla-${yarg.b}.txt`, output);
    console.log("File created")
} catch (error) {
    console.error("Error creating file:", error);
}