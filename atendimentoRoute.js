const { Router} = require ("express");
const router = Router();


router.get("/estoque", (req, res) =>{
    res.send("Bem-vindo!")
} );

router.post("/estoque", (req, res) => {
    res.send("estamos criando um novo atedimento")
});

router.put("/estoque/:id", (req, res) => {
        const { id }= req.params
    res.send("estamos atualizando uma alteração" + id + "...")
});

router.delete("/estoque/:id", (req, res) => {
    const { id }= req.params
    res.send("estamos deletando uma alteração"  + id + "...")
});

module.exports = router;