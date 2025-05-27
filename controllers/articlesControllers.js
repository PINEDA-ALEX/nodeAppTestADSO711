// Enlazamos nuestro servicio
const Articleservice = require("../services/articleService");

// Obtener todos los artículos
const getAllArticles = async (req, res) => {
  const allArticles = await Articleservice.getAllArticles();

  if (allArticles)
    res.status(200).send({ status: "OK", data: allArticles });
  else
    res.status(400).send({ status: "FAILED", data: allArticles });
};

// Obtener un artículo por ID
const getArticle = async (req, res) => {
  let id = req.params.articleId;
  try {
    const Article = await Articleservice.getArticle(id);
    res.status(200).send({ status: "OK", data: Article });
  } catch (error) {
    res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
  }
};

// Crear un nuevo artículo
const createArticle = async (req, res) => {
  const { body } = req;
  const createdArticle = await Articleservice.createArticle(body.title, body.content, body.UserId);
  
  if (createdArticle)
    res.status(201).send({ status: "OK", data: createdArticle });
  else
    res.status(400).send({ status: "FAILED", data: createdArticle });
};

// Actualizar un artículo
const updateArticle = async (req, res) => {
  let id = req.params.ArticleId;
  let { title, content, idUser } = req.body;
  const updatedArticle = await Articleservice.updateArticle(id, title, content, idUser);
  
  if (updatedArticle)
    res.status(200).send({ status: "OK", data: updatedArticle });
  else
    res.status(400).send({ status: "FAILED", data: updatedArticle });
};

// Eliminar un artículo
const deleteArticle = async (req, res) => {
  let id = req.params.ArticleId;
  const deletedArticle = await Articleservice.deleteArticle(id);
  
  if (deletedArticle)
    res.status(200).send({ status: "OK", data: deletedArticle });
  else
    res.status(400).send({ status: "FAILED", data: deletedArticle });
};

// Exportamos los controladores
module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
