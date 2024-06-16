const cart = ['Shoes', 'Pants', 'Kurta'];
const createOrder = (cart) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ orderId: Date.now(), cart: cart }), 5000);
    });
};
const proceedToPayment = (orderDetails) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ transactionId: Date.now(), orderDetails: orderDetails }), 10000);
    });
};
const createInvoice = (transactionDetails) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ invoiceId: Date.now(), transactionDetails: transactionDetails }), 2000);
    })
}
createOrder(cart).then((orderDetails) => {
    console.log('Order Details', orderDetails);
    return proceedToPayment(orderDetails);
}).then((transactionDetails) => {
    console.log('Transaction Details', transactionDetails);
    return createInvoice(transactionDetails);
}).then((invoiceDetails) => {
    console.log('Invoice Details', invoiceDetails);
}).catch((err) => {
    console.log('Error', err);
})
