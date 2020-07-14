const protobuf = require('protobufjs')

test('adds 1 + 2 to equal 3', (done) => {
    protobuf.loadSync("awesome.proto");
    expect(1 + 2).toBe(3);
});