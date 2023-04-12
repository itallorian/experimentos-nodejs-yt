import express from "express";
const porta = 5000;

const startup = express();
startup(express.json());

// Entradas da nossa API
startup.route("/").get((request, response) => {
    response.status(403).send();
});

startup.listen(porta);