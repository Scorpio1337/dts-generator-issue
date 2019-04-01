import {Stats} from 'fs';
const fs = require('fs');

export default class TestClass {
    public getStats(path: string): Promise<Stats> {
        return new Promise<Stats>((resolve, reject) => {
            fs.stat(path, (err: Error, stats: Stats) => {
                if (err) {
                    return reject(err);
                }

                resolve(stats);
            })
        })
    }
}