// const {uuidv4} = require('../plugins/get-id.plugin');
// // const {getAge} = require('../plugins/get-age.plugin')
// const {uuidv4, getAge} = require('../plugins')

const buildMakePerson = ({uuidv4, getAge}) => {
    return ({name, birthday}) => {
        return {
            id : uuidv4(),
            name,
            birthday,
            age: getAge(birthday)
        }
    }
}

const obj = {
    name: 'Rey',
    birthday: '2001-09-06'
}

module.exports = {
    buildMakePerson
}