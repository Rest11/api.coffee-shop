module.exports = routerController => async (req, res, next) => {
  try {
    await routerController(req, res, next);
  } catch (err) {
    next(err);
  }
};
