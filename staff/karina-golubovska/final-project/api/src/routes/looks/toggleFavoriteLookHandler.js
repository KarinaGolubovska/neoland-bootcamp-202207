const { runWithErrorHandling, verifyToken } = require("../../utils");
const{ looks : {toggleFavoriteLook} }= require("../../logic");
  const logger = require("../../utils/createLogger")(module);



function toggleFavoriteLookHandler(req, res) {
  runWithErrorHandling(
    async () => {
    
      const userId = await verifyToken(req);

      const { body: { lookId } } = req;

      await toggleFavoriteLook(userId, lookId );

      res.status(204).send();

      logger.info(`User: ${userId} updated favorites succesfully`);
    },
    res,logger
  );
}

module.exports = toggleFavoriteLookHandler;