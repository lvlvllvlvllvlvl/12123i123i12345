const fs = require('fs');
const searchDocuments = JSON.parse(fs.readFileSync('docs.json', 'utf8'));
const ids = new Set()
Object.values(searchDocuments).forEach(({id_str}) => ids.add(id_str))
ids.forEach(id_str => {
    let file = `incorn_it/status/${id_str}/index.html`;
    const html = fs.readFileSync(file, 'utf8')
    const fix = html.replace(/href="https:\/\/\w+.com\/\w+\/status\/(\d+)"/g, (url, id_str) => ids.has(id_str) ? `href="https://lvlvllvlvllvlvl.github.io/12123i123i12345/incorn_it/status/${id_str}/"` : url)
    if (html !== fix) fs.writeFileSync(file, fix);
})
