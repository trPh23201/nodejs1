const { Model } = require('objection');

class Token extends Model {
    static get tableName() {
        return 'refresh_token';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['token'],

            properties: {
                id: { type: 'integer' },
                token: { type: 'string'}
            }
        };
    }
}

module.exports = Token