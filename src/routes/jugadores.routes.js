const { Router } = require("express");
const {
  getPlayers,
  createPlayer,
} = require("../controllers/jugadores.controllers");

const router = Router();

//Vamos a utirlizar la constante y le asignamos su controlador
router.get("/Jose", getPlayers);
router.post("/Jose", createPlayer);

module.exports = router;
