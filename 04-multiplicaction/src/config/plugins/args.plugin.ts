import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

export const yarg = yargs(process.argv)
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show multiplication table',
    })
    .check(( argv, options) => {
        if (argv.b < 0 ) {
            throw 'Error: base must be positive'
        }

        return true
    })
    .parseSync()