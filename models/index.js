// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
foreign_key: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
// no foreign key??
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_id',
  foreign_key: 'tag_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tag_id',
  foreign_key: 'product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
