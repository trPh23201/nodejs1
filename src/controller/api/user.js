const knex = require("../../../knexfile");
const User = require("../../model/user");
const baseFiler = require("../../utils/baseFilter");

//GET /api/post
async function getAllUser(req, res) {
    const reqQuery = req.query;
    const { _sort, _order, _page, _limit, _embed } = reqQuery
    try {
        let query = User.query()
        query = baseFiler(query, reqQuery, _sort, _order, _page, _limit, _embed)

        const result = await query
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

function getUserById(req, res) {
    User.query().findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json([])
        })
}

async function getOtherTable(req, res) {
    const reqQuery = req.query;
    const { _sort, _order, _page, _limit } = reqQuery
    try {
        let query = User.relatedQuery(req.params.slug).for(req.params.id)
        query = baseFiler(query, reqQuery, _sort, _order, _page, _limit)

        const result = await query
        console.log(result);
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

module.exports = { getAllUser, getUserById, getOtherTable }