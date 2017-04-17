declare module 'bitcoin-core' {
    export = Client;

    type TypeOptions = {
        headers?: boolean,
        host?: string,
        port?: number,
        network?: string,
        username?: string,
        password?: string,
        ssl?: boolean | {
            enabled: boolean,
            strict: boolean,
        },
        timeout?: number,
        agentOptions?: {
            cert: any,
            key: any,
            passphrase: string,
            securityOptions: string,
        },
        version?: string
    }

    type TypeGetInfo = {
        version: number,
        protocolversion: number,
        walletversion: number,
        balance: number,
        blocks: number,
        timeoffset: number,
        connections: number,
        proxy: string,
        difficulty: number,
        testnet: boolean,
        keypoololdest: number,
        keypoolsize: number,
        paytxfee: number,
        relayfee: number,
        errors: string
    }

    type TypeCmdParamaters = {
        method: string,
        parameters: any[]
    }
    class Client {
        constructor(opts: TypeOptions);

        getInfo(): Promise<[TypeGetInfo, headers]>;
        command(cmd: string | TypeCmdParamaters[]): Promise<any>;
        getBlockByHash(hash: string, opts?: { extension: 'json' | 'hex' | 'bin' }, callback?): Promise<any>;

    }
}