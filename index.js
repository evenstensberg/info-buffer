class Queue {
    constructor(opts) {
        this.size = 0;
        this.items = [];
    }

    enqueue(msg) {
        this.items.push(msg);
        this.size++;
    }

    dequeue() {
        this.items.pop();
        this.size--;
    }

    getSize() {
        return this.size;
    }
}

function InfoBuffer() {
    this.queue = new Queue();
    this.isBlocked = false;
}

InfoBuffer.prototype.log = function(msg) {
    if(!this.isBlocked) {
        this.queue.enqueue(msg);
    }
}

InfoBuffer.prototype.broadcast = function() {
    if(!this.isBlocked) {
        for(let item of this.queue.items) {
            console.log(item);
        }
    }
}

InfoBuffer.prototype.wait = function() {
    this.isBlocked = true;
}

InfoBuffer.prototype.resume = function() {
    this.isBlocked = false;
}

module.exports = InfoBuffer;
