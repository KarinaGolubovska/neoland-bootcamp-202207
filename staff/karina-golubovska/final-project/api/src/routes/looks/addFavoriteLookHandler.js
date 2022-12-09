const { runWithErrorHandling, verifyToken } = require("../../utils");
const{ looks : {addFavoriteLook} }= require("../../logic");
  const logger = require("../../utils/createLogger")(module);



function addFavoriteLookHandler(req, res) {
  runWithErrorHandling(
    async () => {
    
      const userId = await verifyToken(req);

      const { body: { lookId } } = req;

      await addFavoriteLook(userId, lookId );

      res.status(204).send();

      logger.info(`User: ${userId} updated favorites succesfully`);
    },
    res,logger
  );
}

module.exports = addFavoriteLookHandler;