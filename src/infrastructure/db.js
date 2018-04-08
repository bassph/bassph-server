import { MongoClient } from "mongodb"
import { mongoUrl, dbName } from '../config/index'

var state = {
  db: null
}

export const connect = (done) => {
    if (state.db)
        return done()
    MongoClient.connect(mongoUrl, function (err, client) {
        if (err)
            return done(err)
        state.db = client.db(dbName)
        done()
    })
}

export const get = () => {
    return state.db
}

export const close = (done) => {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}