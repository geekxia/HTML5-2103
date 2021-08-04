const jwt = require('../utils/jwt')

module.exports = async (ctx, next) => {
    let user = await jwt.verifyToken(ctx)
    ctx.user = user
    // console.log('user', user)
    await next()
}
