import '@fastify/jwt'

declare module "@fastify/jwt" {
  interface FastifyJWT {
   // payload: { id: number } // payload type is used for signing and verifying
    user: {
      //id: number,
      name: string,
      avatarUrl: string,
      sub: string,
  } // user type is return type of `request.user` object
  }
}