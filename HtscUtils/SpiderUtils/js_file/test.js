function createGuid() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

var guid1 = createGuid() + createGuid() + "-" + createGuid() + "-" + createGuid() + createGuid() + "-" + createGuid() + createGuid() + createGuid();