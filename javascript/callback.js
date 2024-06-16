const cart = ["Shoes", "Pants", "Kurta"];

function createOrder(cart, callback) {
    console.log('Order is created');
    setTimeout(function () {
        callback(`${Date.now()}`);
    }, 2000);
}

function proceedToPayment(orderId, callback) {
    console.log('Payment is proceeded of orderId', orderId);
    setTimeout(function () {
        callback(`${Date.now()}`);
    }, 2000);
}

function generateInvoice(transactionId, callback) {
    console.log('Invoice is generated for transactionId', transactionId);
    setTimeout(function () {
        callback(`${Date.now()}`);
    }, 2000);
}

createOrder(cart, function (order) {
    proceedToPayment(order, function (transactionId) {
        generateInvoice(transactionId, function (invoiceId) {
            console.log('This is your Invoice', invoiceId);
        })
    })
})