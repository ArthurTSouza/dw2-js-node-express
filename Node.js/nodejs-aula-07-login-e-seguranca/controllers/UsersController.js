import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login",{
    hasNoSession: true,
  });
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro",{
    hasNoSession: true,
  });
});

router.post("/createUser", (req, res) => {
  //Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email: email } }).then((user) => {
    //Se o usuário não existir
    if (user == undefined) {
      //Fará o cadastro
      //Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      //Enviando para o banco
      User.create({
        //coluna: variavel
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //Se o usuário já existir
    else {
      res.send(`O usuário informado já está cadastrado! <br>
        <a href="/login"> Tentar novamente.</a>`);
    }
  });
});

router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //Busca o usuário no Banco
  User.findOne({ where: { email: email } }).then((user) => {
    //SE o usuário existir
    if (user != undefined) {
      //Valida a senha
      const correct = bcrypt.compareSync(password, user.password);
      //Se a senha for válida
      if (correct) {
        //Autoriza o login
        //Gerando a sessão para o usuário
        req.session.user={
          id: user.id,
          email: user.email
        }
        // res.send(`Usuário logado é: <br>
        //   ID: ${req.session.user['id']}<br>
        //   E-mail ${req.session.user['email']}`)
        res.redirect("/");
      }
      //Se a senha não for válida
      else {
        res.send(`A senha digitada está incorreta! <br>
        <a href="/login"> Tentar novamente</a>`);
      }
    }
    //SE o usuário não existir
    else{
      res.send(`Usuário informado não existe! <br>
        <a href="/login"> Tentar novamente</a>`);
    }
  });
});

export default router;
