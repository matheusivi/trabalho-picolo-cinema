exports.validarUsuario = (req, res) => {
    if(req.body.usuario == 'matheus' && req.body.senha == '1234'){
        
         res.redirect('/home/inicio')
        }else {
            res.status(400).send({error: 'Usuário não existe'})
        }
    }


exports.mostrarLogin = (req, res) => {

    res.render('../views/filmes/senha')

}



exports.buscarHome = (req, res) => {

    res.render(`../views/filmes/inicio`, {title: `Bem vindo à avaliação`})

}


exports.buscarPagina = (req, res) => {
        const pagina = req.params.pagina
    
        const paginasPermitidas = ['sobreNos', 'visualizacao'] 

        if (paginasPermitidas.includes(pagina)){
            res.render(`filmes/${pagina}`)
          
        }else {
              
            res.send(`Página não encontrada!`)
            console.log(req.params)
        }
    }


exports.buscarCatalago = (req, res) => {
        const catalago = req.params.catalago
    
        const catalagoPermitidas = ['narnia1', 'narnia2', 'predador1', 'predador2', 'senhorAneis'] 

        if (catalagoPermitidas.includes(catalago)){
            
            res.render(`catalago/${catalago}`)
            
        }else {
            res.send(`Página não encontrada!`)
            console.log(req.params)
        }
    }