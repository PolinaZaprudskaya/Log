function log(target, name, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
        descriptor.value = function(...args) {
            console.log(`Arguments: ${args}`);
            try {
                const result = original.apply(this, args);
                console.log(`Result: ${result}`);
                return result;
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }
    return descriptor;
}

class Example {
    @log
    sum(a: number, b: number): number{
        return a + b;
    }
}

const e = new Example();
e.sum(1, 2);
e.sum(4, 2);
e.sum(7, 2);
e.sum(1, 235);
e.sum(32545, 2);
