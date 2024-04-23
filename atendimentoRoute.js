const { Router} = require ("express");
const router = Router();


router.get("/atendimentos", (req, res) =>{
    res.send("Bem-vindo!")
} );

router.post("/atendimentos", (req, res) => {
    res.send("estamos criando um novo atedimento")
});

router.put("/atendimentos/:id", (req, res) => {
        const { id }= req.params
    res.send("estamos atualizando um novo atedimento" + id + "...")
});

router.delete("/atendimentos/:id", (req, res) => {
    const { id }= req.params
    res.send("etsamos deletando um novo atedimento"  + id + "...")
});

module.exports = router;