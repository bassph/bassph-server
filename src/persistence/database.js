import { MongoClient } from 'mongodb'

export class Database {
    constructor({ mongoConnectionUrl, databaseName }) {
        this.connect(mongoConnectionUrl, databaseName)
    }

    connect(mongoConnectionUrl, databaseName) {
        return new Promise((resolve, reject) => {
            if (this.db) resolve()
            MongoClient.connect(mongoConnectionUrl, (err, client) => {
                if (err) reject(err)
                this.db = client.db(databaseName)
                resolve()
            })
        })
    }

    get() {
        return this.db
    }

    close() {
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.close((err, result) => {
                    if (err) reject(err)
                    this.db = null
                    resolve()
                })
            }
        })
    }
}