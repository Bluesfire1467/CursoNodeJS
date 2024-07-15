"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const n = 5;
let outputMessage = '';
const headerMessage = `
=============================
      Tabla del ${n}
=============================
`;
for (let i = 1; i <= 10; i++) {
    outputMessage += `${n} x ${i} = ${i * n}\n`;
}
const output = headerMessage + outputMessage;
console.log(output);
const outputPath = 'outputs';
try {
    fs_1.default.mkdirSync(outputPath, { recursive: true });
    fs_1.default.writeFileSync(`${outputPath}/tabla-${n}.txt`, output);
    console.log("File created");
}
catch (error) {
    console.error("Error creating file:", error);
}
