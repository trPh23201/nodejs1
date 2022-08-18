const { Model } = require('objection');

class Comment extends Model {
    static get tableName() {
        return 'comment';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'body'],

            properties: {
                id: { type: 'integer' },
                postId: {type: 'integer'},
                username: { type: 'string', minLength: 1, maxLength: 20 },
                body: { type: 'string', minLength: 1, maxLength: 1000 },
            }
        };
    }

    static get relationMappings(){
        const Post = require('./post');

        return{
            post: {
                relation: Model.BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from: 'comment.postId',
                    to: 'post.id'
                }
            }
        }
    }
}

module.exports = Comment