import fs from 'fs'
import JsYaml from 'js-yaml'

const json = JsYaml.load(fs.readFileSync('./public/data.yml', 'utf8'))
fs.writeFileSync('./public/data.json', JSON.stringify(json), error => {
  if (error) {
    console.error(error)
  }
})
