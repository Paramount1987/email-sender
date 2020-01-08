const toBase64 = file => new Promise((resolve, reject) => { // TODO: ломается файл после отправки(конвертации?)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function convertToBase64(file) {
   const file64 = await toBase64(file);
   return {
       name: file.name,
       content: file64,
       encoding: 'base64',
       size: file.size,
   };
}

export {
    convertToBase64,
}
