/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE "user" CASCADE')
  await knex.raw('TRUNCATE TABLE "post" CASCADE')
  await knex.raw('TRUNCATE TABLE "comment" CASCADE')

  await knex('user').insert([
    {
      username: 'tripham',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'John',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Amy',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Peter',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Ben',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'William',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Betty',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Chuck',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Viola',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Amee',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Smith',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    },
    {
      username: 'Teminator',
      password: 'e10adc3949ba59abbe56e057f20f883e',
    }
  ]);

  await knex('post').insert([
    {
      userId: 5,
      title: 'qui est esse',
      body: 'est rerum tempore vitae \\n sequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      userId: 5,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 5,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 't iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut'
    },
    {
      userId: 12,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit'
    }
  ]);
  await knex('comment').insert([
    {
      postId: 1,
      username: 'tripham',
      body: 'audantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium'
    },
    {
      postId: 1,
      username: 'tripham',
      body: 'I love this post'
    },
    { postId: 1, username: 'John', body: 'HEHEHEHE' },
    { postId: 3, username: 'John', body: 'HEHEHEHE' },
    { postId: 3, username: 'Viola', body: '@@@@@@' },
    {
      postId: 4,
      username: 'Viola',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam'
    },
    {
      postId: 1,
      username: 'Viola',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\\net omnis'
    },
    {
      postId: 3,
      username: 'Viola',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\\net omnis'
    }
  ]);
};
