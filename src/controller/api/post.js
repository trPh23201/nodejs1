const Post = require("../../model/post");
const baseFiler = require("../../utils/baseFilter");

//GET /api/post
async function getAllPost(req, res) {
    const reqQuery = req.query;
    const { _sort, _order, _page, _limit, _embed } = reqQuery
    try {
        let query = Post.query();
        query = baseFiler(query, reqQuery, _sort, _order, _page, _limit, _embed)
        if (_embed) query.withGraphFetched(`[${_embed}]`)

        const result = await query;
        console.log(query.toKnexQuery().toSQL().toNative());
        res.status(200).json({
            data: _page ? result.results : result,
            total: _page ? result.total : result.length,
            totalPage: Math.ceil(result.total / (_limit ? +_limit : 10)),
            currentPage: +_page + 1,
            pageSize: _limit ? +_limit : (_page ? 10 : null),
        })
    } catch (error) {
        console.log(error);
        res.status(400).json([])
    }
}

module.exports = { getAllPost }