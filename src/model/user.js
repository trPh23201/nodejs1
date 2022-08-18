const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'user'; //Truy vấn sẽ lấy tên của th này
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'password'],

            properties: {
                id: { type: 'integer' },
                username: { type: 'string', minLength: 1, maxLength: 20 },
                password: { type: 'string', minLength: 1, maxLength: 255 },
                role: { type: 'number' },
            }
        };
    }

    static get relationMappings(){
        const Post = require('./post');
        
        return{
            post: {
                relation: Model.HasManyRelation,
                modelClass: Post,
                join: {
                    from: 'user.id',
                    to: 'post.userId'
                }
            }
        }
    }
}

module.exports = User