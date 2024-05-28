const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('customers.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;
const client = new CustomerService('localhost:30043', grpc.credentials.createInsecure());
module.exports = client;