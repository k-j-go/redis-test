import {Tedis} from "tedis";

export interface RedisManager {
    getData(key: string): Promise<string | number | null>

    setData(key: string, value: string) :  Promise<string>
}

export default class RedisManagerImpl implements RedisManager {
    public readonly client: Tedis;

    constructor( host: string, port: number, password: string ) {
        this.client = new Tedis({
            port: port,
            host: host,
            password: password,
        });
    }

    public static create(host: string, port: number, password: string): RedisManager {
        return new RedisManagerImpl(host, port, password)
    }

    async getData(key: string): Promise<string | number | null>{
        return this.client.get(key)
    }

    async setData(key: string, value: string): Promise<string> {
        return await this.client.set(key, value)
    }

}