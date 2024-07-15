// const { emailTemplate } = require('./js-foundation/01-template');
// const { getAge, uuidv4 } = require('./plugins')
// require('./js-foundation/05-factory');
// const getPokemonById =  require('./js-foundation/06-promises');

// getPokemonById(4)
//     .then( pokemon => console.log({pokemon}) )
//     .catch( err => console.log(err) )


const {buildLogger} = require('./plugins')

const logger = buildLogger('app.ts')

logger.log("Hola Mundo")
logger.error("Esto es algo malo")

// ! referencia a factory
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const makePerson = buildMakePerson({ uuidv4, getAge });
//
// const obj ={
//     name: "Rey",
//     birthday: "2001-09-06",
// }
// const rey = makePerson(obj);
// console.log(rey)