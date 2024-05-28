const express = require('express');
const client_gRPC = require('./client');
const app = express();

app.get('/', (req, res) => {
    client_gRPC.getAll(null, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.customers);
            res.status(200).json(data.customers);
        }
    })
});

app.post('/create', (req, res) => {
    client_gRPC.insert(req.body, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data);
            res.status(200).json(data);
        }
    })
});

app.post('/update', (req, res) => {
    client_gRPC.update(req.body, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data);
            res.status(200).json(data);
        }
    }); 
});

app.post('/remove', (req, res) => {
    client_gRPC.remove(req.body, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data);
            res.status(200).json(data);
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});