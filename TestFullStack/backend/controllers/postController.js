const ApiError = require("../error/ApiError");
const {get} = require("axios");

class PostController {
    async getAll(req, res, next) {
        try {
            const { page = 1} = req.query;
            const pageNumber = parseInt(page);
            const limitNumber = 5
            const response = await get("https://jsonplaceholder.typicode.com/posts");
            const startIndex = (pageNumber- 1)*limitNumber;

            const paginatedData = response.data.slice(startIndex, startIndex + limitNumber);
            res.json({
                currentPage: page,
                totalPages: Math.ceil(response.data.length / limitNumber),
                totalPosts: response.data.length,
                posts: paginatedData
            });
        } catch (error) {
            res.status(500).json({ message: "Помилка отримання постів" });
        }
    }
    async getOne(req, res, next) {
        try {
            const {id} = req.params
            if(!id) {
                next(ApiError.badRequest("Не вказаний ID поста"))
            }
            const response = await get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            res.json(response.data)
        } catch (error) {
            res.status(500).json({ message: "Помилка отримання поста користувача" })
        }
    }
    async getUser(req, res, next) {
        try {
            const {id} = req.params
            if(!id) {
                next(ApiError.badRequest("Не вказаний ID користувача"))
            }
            const response = await get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            res.json(response.data)
        } catch (error) {
            res.status(500).json({ message: "Помилка отримання поста користувача" })
        }
    }
    async getCommentToPost(req, res, next) {
        try {
            const {id} = req.params;
            if(!id) {
                next(ApiError.badRequest("Не вказаний ID поста"))
            }
            const response = await get(`https://jsonplaceholder.typicode.com/post/${id}/comments`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ message: "Помилка отримання коментарів" });
        }
    }
}
module.exports = new PostController();