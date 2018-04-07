import { asClass, Lifetime } from 'awilix'
import { StoreScanResult } from '../domain/interactors/StoreScanResult'

export const storeScanResultProvider = {
    storeScanResult: asClass(StoreScanResult).singleton()
}
