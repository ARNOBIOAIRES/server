import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import Fastify from 'fastify'


import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'
import { guessRoutes } from './routes/guess'
import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'


async function boot(){
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })
//deois colocar em variavel de ambiente
  await fastify.register(jwt, {
    secret: 'nlwcopa'
  })

  await fastify.register(poolRoutes)
  await fastify.register(authRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(userRoutes)

  

  await fastify.listen({ port: 3333})
}

boot()