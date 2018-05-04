import { asValue } from 'awilix'
import * as config from '../config'

export const mongoConnectionUrlProvider = {
    mongoConnectionUrl: asValue(config.mongoUrl)
}

export const databaseNameProvider = {
    databaseName: asValue(config.dbName)
}