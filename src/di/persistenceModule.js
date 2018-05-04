import { asClass } from 'awilix'
import { Database } from '../persistence/database'

export const persistenceManagerProvider = {
    persistenceManager: asClass(Database).singleton()
}