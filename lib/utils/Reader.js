const fs = require('fs')

class Reader{
    static readJsonFile(path){
        const rawData = fs.readFileSync(path)
        const json = JSON.parse(rawData)

        return json
    }
}

module.exports = Reader