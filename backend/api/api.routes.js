const router = require('express').Router();
const { Theme, Flash } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const themesFlashes = await Theme.findAll({
      include: [
        {
          model: Flash,
        },
      ],
    });
    res.json(themesFlashes);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
