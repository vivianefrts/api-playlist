import { db } from "../db.js"; //importaçao do banco que configurei

//exportaçao de uma getUsers passando a requisiçao e o response
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`) VALUES(?)";

  const values = [ //valores que vou passar no body
    req.body.nome,
  ];

  //chamada do banco
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro adicionado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro deletado com sucesso.");
  });
};