const {Router} = require('express');

const userController = require('../../../controllers/articlesControllers'); //importamos el controlador de los articulos
const router = Router(); //creamos del Routers

router.get("/", userController.getAllArticles);
router.get('/:ArticleId', userController.getArticle);
router.post('/', userController.createArticle);
router.put('/:ArticleId', userController.updateArticle);
router.delete('/:ArticleId', userController.deleteArticle);

module.exports = router;
