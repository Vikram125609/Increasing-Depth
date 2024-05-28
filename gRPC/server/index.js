const grpc = require('@grpc/grpc-js');

const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('customers.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);

const customers = [
    {
        id: '1',
        name: 'John Doe',
        age: '30',
        address: '123 Main St'
    },
    {
        id: '2',
        name: 'Jane Doe',
        age: '25',
        address: '456 Main St'
    }
]

const server = new grpc.Server();

server.addService(customerProto.CustomerService.service, {
    getAll: (call, callback) => {
        // here we don't want to pass any information to the client expect the list of customers
        callback(null, { customers })
    },
    get: (call, callback) => {
        let customer = customers.find((customer) => customer.id === call.request.id)
        if (customer) {  
            callback(null, customer)
        }
        else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: 'Customer not found'
            })
        }

    },
    insert: (call, callback) => {
        let customer = call.request;
        customer.id = customers.length + 1;
        customers.push(customer);
        callback(null, customer);
    },
    update: (call, callback) => {
        const customerId = call.request.id;
        const customer = customers.find((customer) => customer.id === customerId);
        if (customer) {
            customer.name = call.request.name;
            customer.age = call.request.age;
            customer.address = call.request.address;
            callback(null, customer);
        }
        else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: 'Customer not found'
            })
        }
    },
    remove: (call, callback) => {
        const customerId = call.request.id;
        const index = customers.findIndex((customer) => customer.id === customerId);
        if (index !== -1) {
            customers.splice(index, 1);
            callback(null, {});
        }
        else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: 'Customer not found'
            })
        }
    }
});

server.bindAsync('127.0.0.1:30043', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Server running at http://127.0.0.1:30043');
});