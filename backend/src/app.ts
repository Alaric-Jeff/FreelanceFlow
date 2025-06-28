import Fastify from "fastify";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({
  logger: true,
});

fastify.listen({
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
}).then(()=> {
    fastify.log.info(`Server is running on port ${process.env.PORT || 3000}`);
}).catch((err: unknown) => {
    fastify.log.error(err);
    process.exit(1);
});