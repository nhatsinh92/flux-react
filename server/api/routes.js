import { users } from './data.json'
import { story } from './story.json'

const simplifyUsers = (collection) => collection
  .map(({ user, seed }) => ({ ...user, seed }))
  .map(({ email, name, seed, picture }) => ({ email, name, seed, picture }))

const getStory = (collection) => collection
  .map(({ id, link, headline }) => ({ id, link, headline }))

function routes(router) {
  router.get('/users', async (ctx) => {
    ctx.body = simplifyUsers(users.slice(0, 10))
  })

  router.get('/users/:seed', async (ctx) => {
    const { seed } = ctx.params
    const [ result ] = simplifyUsers(users.filter((user) => user.seed === seed))

    if (!result) {
      ctx.body = { error: { message: 'User not found' } }
    } else {
      ctx.body = result
    }
  })

  router.get('/guides', async (ctx) => {
    ctx.body = getStory(story);
  })
}

// can't export directly function, run into const issue
// see: https://phabricator.babeljs.io/T2892
export default routes
