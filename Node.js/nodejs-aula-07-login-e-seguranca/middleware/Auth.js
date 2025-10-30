//Middleware de autenticação
function Auth(req, res, next) {
    //O usuário possui uma sessão do site
    if (req.session.user != undefined) {
        //Permite a continuação da requisição
        next();
    }
    else {
        res.render("login", {
            hasNoSession: true,
        })
    }
}

export default Auth;