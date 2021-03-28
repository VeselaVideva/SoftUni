function extractFile(str) {
    let i = str.lastIndexOf('.');
    let extension = str.substring(i + 1);

    let index = str.lastIndexOf('\\');
    let fileName = str.substring(index + 1, i);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
// File name: Template
// File extension: pptx

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
// File name: LinkedList
// File extension: cs