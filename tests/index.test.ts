
import RedisManagerImpl from "../src/redis_lib/libs";


describe('testing tedis', () => {
    test('the data is test', async () => {
        let manager = RedisManagerImpl.create("127.0.0.1", 6379, "tedis")
        await manager.setData("test", "test").then( x => {
            expect(x).toBe('OK');
        })
        const data = await manager.getData("test");
        expect(data).toBe('test');
    });
});
