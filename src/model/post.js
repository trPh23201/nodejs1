const { Model } = require('objection');

class Post extends Model {
    static get tableName() {
        return 'post';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title', 'body'],

            properties: {
                id: { type: 'integer' },
                userId: {type: 'integer'},
                title: { type: 'string', minLength: 1, maxLength: 255 },
                body: { type: 'string', minLength: 1, maxLength: 1000 },
            }
        };
    }

    static get relationMappings(){
        const User = require('./user');
        const Comment = require('./comment');

        return{
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'post.userId',
                    to: 'user.id'
                }
            },

            comment: {
                relation: Model.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: 'post.id',
                    to: 'comment.postId'
                }
            }
        }
    }
}

module.exports = Post