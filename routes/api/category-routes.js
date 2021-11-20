const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll()
    // {
    // attributes: [
    //   'id',
    //   'category_name'
    
    // ]
    // }
  //  {
  //    include: [Product]
  //  }

  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne(
    {
    where: {
      // //should this actually be product id?
      id: req.params.id
     },
      include: [Product]
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      where: {
        id: req.params.id
      },
      category_name: req.body.category_name
    }
  )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
    where: {
      id: req.params.id
    }
  }
  )
});

module.exports = router;
