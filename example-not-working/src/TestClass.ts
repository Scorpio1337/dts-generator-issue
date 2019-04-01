import * as fs from 'fs';

export default class TestClass {
    public getStats(path: string): Promise<fs.Stats> {
        return new Promise<fs.Stats>((resolve, reject) => {
            fs.stat(path, (err: Error, stats: fs.Stats) => {
                if (err) {
                    return reject(err);
                }

                resolve(stats);
            })
        })
    }
}