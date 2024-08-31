const products = [
  {
    category: "Coffee",
    items: [
      {
        subCategory: "Fall Features",
        items: [
          {
            name: "Vanilla Date Delight",
            description:
              "Philtered Soul Cold Brew with vanilla, all-natural date syrup, cinnamon,  and oat milk.  Contains: Milk",
            image: "//cdn.philz.us/products/66ba5dd929a16.png",
          },
          {
            name: "Spiced Vanilla Soul",
            description:
              "Philtered Soul Cold Brew with house-made spiced oat milk, and vanilla.  Contains: Milk",
            image: "//cdn.philz.us/products/66ba5e7fde640.png",
          },
        ],
      },
      {
        subCategory: "Iced",
        calRange: "5-480 Cals",
        items: [
          {
            name: "Mint Mojito",
            description: "Fresh Mint, Sweet, Creamy",
            image: "//cdn.philz.us/products/IcedCoffee_MintMojito_Cream.png",
          },
          {
            name: "Gingersnap",
            description: "Spices, Sweet, Creamy",
            image: "//cdn.philz.us/products/62a7a90534f2b.png",
          },
          {
            name: "Ecstatic",
            description: "Butterscotch, Dark Chocolate, Citrus",
            image: "//cdn.philz.us/products/IcedCoffee_Black.png",
          },
          {
            name: "Iced Coffee Rosé",
            description: "Rose, Sweet, Creamy",
            image: "//cdn.philz.us/products/IcedCoffee_Rose.png",
          },
          {
            name: "Mission Cold Brew",
            description: "Milk Chocolate, Dried Berry, Almond",
            image:
              "//cdn.staging.philz.us/products/ee118f443e80c3ae12ef38dd61e3f5c7.png",
          },
          {
            name: "Mission Cold Brew, 32 oz.",
            description: "Silky, Caramel, Malt",
            image: "//cdn.philz.us/products/63bcb4c813ed4.png",
          },
          {
            name: "Philtered Soul Cold Brew",
            description: "Hazelnut, Maple, Caramel",
            image: "//cdn.philz.us/products/5f63f8332a708.png",
          },
          {
            name: "Philtered Soul Cold Brew, 32 oz",
            description: "Rich Hazelnut, Chocolate",
            image: "//cdn.philz.us/products/63bdd6793a334.png",
          },
          {
            name: "Honey Haze",
            description: "Philtered Soul Cold Brew with Honey and Oat Milk.",
            image: "//cdn.philz.us/products/6258556ae5a8c.png",
          },
          {
            name: "Oatmeal Cookie Cold Brew",
            description: "Mission Cold Brew with cinnamon and oat milk.",
            image: "//cdn.philz.us/products/660f226d82b3e.png",
          },
        ],
      },
      {
        subCategory: "Darker Blends",
        items: [
          {
            name: "Tantalizing Turkish",
            description: "Aromatic Arabic Blend, Cardamom, Mint",
            image: "//cdn.philz.us/products/HotCoffee_Black_Mint.png",
          },
          {
            name: "Ether",
            description: "Molasses, Dried Cherry, Dark Chocolate",
            image: "//cdn.philz.us/products/5f7e0196c9437.png",
          },
          {
            name: "Aromatic Arabic",
            description: "Toffee, Cedar, Smoke",
            image: "//cdn.philz.us/products/HotCoffee_Black.png",
          },
          {
            name: "Jacob's Wonderbar",
            description: "Dark Chocolate, Berry, Smoke",
            image: "//cdn.philz.us/products/HotCoffee_Black.png",
          },
        ],
      },
      {
        subCategory: "Medium Blends",
        items: [
          {
            name: "Silken Splendor",
            description: "Toffee, Chocolate, Citrus",
            image: "//cdn.philz.us/products/HotCoffee_Soy.png",
          },
          {
            name: "Julie's Ultimate",
            description: "Berry, Fudge, Molasses",
            image: "//cdn.philz.us/products/5f7e01b537e5b.png",
          },
          {
            name: "Philtered Soul",
            description: "Hazelnut Flavoring, Maple, Caramel",
            image: "//cdn.philz.us/products/HotCoffee_Black.png",
          },
          {
            name: "Philharmonic",
            description: "Tesora, Cardamom, Mint",
            image: "//cdn.philz.us/products/HotCoffee_Cream_Mint.png",
          },
          {
            name: "Tesora",
            description: "Caramel, Chocolate, Nuts",
            image: "//cdn.philz.us/products/HotCoffee_Black.png",
          },
        ],
      },
      {
        subCategory: "Lighter Blends",
        items: [
          {
            name: "Dancing Water",
            description: "Brown Sugar, Biscuit, Citrus",
            image: "//cdn.philz.us/products/HotCoffee_Black.png",
          },
          {
            name: "Ambrosia Coffee of God",
            description: "Milk Chocolate, Dried Berry, Almond",
            image: "//cdn.philz.us/products/HotCoffee_Black.png",
          },
          {
            name: "New Manhattan",
            description: "Honey, Citrus, Graham Cracker",
            image: "//cdn.philz.us/products/HotCoffee_Soy.png",
          },
        ],
      },
      {
        subCategory: "More",
        items: [
          {
            name: "Mocha Tesora",
            description:
              "Dark Chocolate, Caramel, Cocoa. Base level is light sweet.",
            image: "//cdn.philz.us/products/5f7e299d4557b.png",
          },
          {
            name: "Hot Chocolate",
            description: "Milk Chocolate. Base level is light sweet.",
            image: "//cdn.philz.us/products/HotCoffee_Cream.png",
          },
        ],
      },
      {
        subCategory: "Decaf",
        items: [
          {
            name: "Luca's Unplugged Decaf",
            description: "Chocolate, Nuts, Raisin",
            image: "//cdn.philz.us/products/626814251213f.png",
          },
        ],
      },
    ],
  },
  {
    category: "Tea",
    items: [
      {
        subCategory: "Iced",
        items: [
          {
            name: "Philz Iced Tea",
            description: "Fresh Mint, Crisp, Floral",
            image: "//cdn.philz.us/products/IcedTea_Black.png",
          },
        ],
      },
      {
        subCategory: "All Tea",
        items: [
          {
            name: "Philz Fresh Chai",
            description: "Cinnamon, Cardamom, Clove",
            image: "//cdn.philz.us/products/HotTea_Chai_Black_Mint.png",
          },
          {
            name: "Chamomile",
            description: "Floral, Melon, Honey",
            image: "//cdn.philz.us/products/HotTea_Chamomile_Black_Mint.png",
          },
          {
            name: "Black Tea",
            description: "Floral, Smoke, Dried Fruit",
            image: "//cdn.philz.us/products/HotTea_Chai_Black_Mint.png",
          },
          {
            name: "Green Tea",
            description: "Fresh Grass, Butter, Herbs",
            image: "//cdn.philz.us/products/HotTea_Green_Black_Mint.png",
          },
        ],
      },
    ],
  },
  {
    category: "Food",
    items: [
      {
        subCategory: "Savory Breakfast",
        calRange: "340-522 Cals",
        items: [
          {
            name: "Green Chile Burrito",
            description: "A hearty green chile burrito with eggs, potatoes and cheese. Contains: Milk, Egg, Soy & Wheat",
            image: "//cdn.staging.philz.us/products/LTF-BUR-ANC.png",
          },
          {
            name: "Bacon & Egg Burrito",
            description: "Flour tortilla, eggs, potatoes, cheddar cheese, and crispy bacon. Contains: Milk, Egg, Soy, Wheat",
            image: "//cdn.staging.philz.us/products/LTF-BUR-BAC.png",
          },
          {
            name: "Pork Sausage & Egg Burrito",
            description: "Flour tortilla, eggs, potatoes, cheddar cheese and pork sausage. Contains: Milk, Egg, Soy, Wheat",
            image: "//cdn.staging.philz.us/products/LTF-BUR-PKS.png",
          },
          {
            name: "Turkey Sausage Sandwich",
            description: "A toasted English muffin, scrambled egg patty, turkey sausage, and jalapeño pepper jack cheese. Contains: Milk, Egg, Soy, Wheat",
            image: "//cdn.staging.philz.us/products/LTF-SAN-TKS.png",
          },
          {
            name: "Philz Plant-Powered Sandwich",
            description: "A 100% plant-based meal! Made with Beyond Meat®, JUST Egg and Daiya Cheese. Contains: Wheat, Soy.",
            image: "//cdn.philz.us/products/605cd59839170.png",
          },
        ],
      },
      {
        subCategory: "Hot Lunch",
        calRange: "460-560 Cals",
        items: [
          {
            name: "Roasted Chicken & Golden Rice Burrito",
            description: "Chicken, feta cheese, red pepper, and rice spiced with turmeric and cardamom in a flour tortilla. Contains: Milk, Wheat, Soy",
            image: "//cdn.philz.us/products/65a0b77312f9d.png",
          },
          {
            name: "Pesto Chicken Sandwich",
            description: "Chicken breast, mozzarella cheese, pesto, and sundried tomato spread on a Telera Roll. Contains: Milk, Wheat",
            image: "//cdn.philz.us/products/66cd678a56d7c.png",
          },
        ],
      },
      {
        subCategory: "Croissants",
        calRange: "270-480 Cals",
        items: [
          {
            name: "Butter Croissant",
            description: "An all butter recipe, layered and folded for a light, flaky croissant. Contains: Milk, Egg, Wheat",
            image: "//cdn.staging.philz.us/products/LTF-CRO-BUT.png",
          },
          {
            name: "Chocolate Croissant",
            description: "A light airy pastry layered around dark chocolate. Contains: Milk, Wheat, Egg",
            image: "//cdn.staging.philz.us/products/LTF-CRO-CHC.png",
          },
          {
            name: "Twice Baked Almond Croissant",
            description: "Tasty buttery croissant with almond filling and covered in toasted almonds. Contains: Milk, Egg, Wheat, Almond",
            image: "//cdn.staging.philz.us/products/LTF-CRO-2AL.png",
          },
          {
            name: "Bacon & Onion Pretzel Croissant",
            description: "A layered pretzel dough with bacon, caramelized onions, porcini mushrooms topped with poppy seeds and Swiss cheese. Contains: Milk, Wheat",
            image: "//cdn.philz.us/products/6091e65a65853.png",
          },
        ],
      },
      {
        subCategory: "Muffins",
        calRange: "310-490 Cals",
        items: [
          {
            name: "Bran Muffin",
            description: "A hearty muffin made with wheat bran, barley flour, honey, and molasses. Contains: Wheat, Soy, Milk, Eggs",
            image: "//cdn.staging.philz.us/products/LTF-MUF-BRN.png",
          },
          {
            name: "Blueberry Muffin",
            description: "Buttery, moist blueberry muffin made with buttermilk. Contains: Milk, Egg, Wheat",
            image: "//cdn.staging.philz.us/products/LTF-MUF-BLB.png",
          },
        ],
      },
      {
        subCategory: "Bagels",
        calRange: "210-240 Cals",
        items: [
          {
            name: "Jalapeño Cheddar Bagel",
            description: "Bagel comes toasted with cream cheese on the side. Hints of Jalapeño nacho sliced peppers and cheddar cheese. Contains: Wheat, Milk",
            image: "//cdn.philz.us/products/6572464bcec85.png",
          },
          {
            name: "Everything Bagel",
            description: "Bagel comes toasted with cream cheese on the side. Rolled in sesame seeds, poppy seeds, dried onions and garlic. Contains: Wheat, Sesame",
            image: "//cdn.philz.us/products/65730f78b7078.png",
          },
          {
            name: "Plain Bagel",
            description: "Bagel comes toasted with cream cheese on the side. Contains: Wheat",
            image: "//cdn.philz.us/products/65724e9c9d312.png",
          },
        ],
      },
      {
        subCategory: "Pastries",
        calRange: "290-720 Cals",
        items: [
            {
                name: "Seasonal Fruit Danish",
                description: "Danish pastry with seasonal fruit. Contains: Wheat, Milk, Eggs",
                image: "//cdn.philz.us/products/66822a3f856a5.png",
            },
            { name: "Onion &amp; Herb Focaccia (V)",
                description: "Focaccia bread made with a touch of sea salt, sweet onions and rosemary. Contains: Wheat",
                image: "//cdn.philz.us/products/66bcffa7c9a37.png",
            },
            {name: "Poached Pear Almond Kouign Amann",
                description: "A decadent buttery pastry with an almond and pear filling. Contains: Wheat, Milk, Egg and Nuts.",
                image: "//cdn.philz.us/products/66bd01ed05b4f.png",
            },
            { name: "Ginger Loaf",
                description: "A cake like treat with candied ginger, fresh ginger and a touch of honey. Contains: Wheat, Eggs, Milk",
                image: "//cdn.philz.us/products/66bd0292920dc.png",
            },
            {name: "Cinnamon Roll",                
                description: "Laminated croissant dough rolled with cinnamon and sugar and studded with raisins, topped with a light vanilla/cinnamon glaze. Contains: Wheat, Milk, Soy, Eggs",
                image: "//cdn.staging.philz.us/products/LTF-RLL-CNN.png",
            },
            {
     name: "Mini Banana Bread",
     description: "Fresh bananas combine with wheat and rye flour for a delicious treat. Contains: Milk, Egg, Wheat",
     image: "//cdn.staging.philz.us/products/LTF-BRD-BAN-MIN.png",
    },
{
    name: "Traditional Kouign Amann",
   
    description: "A decadent buttery French pastry that is similar to a croissant. Contains: Milk, Wheat",
    image: "//cdn.staging.philz.us/products/LTF-KGA-TRD.png",
},
 {
     name: "Pumpkin Slice",
    description: "Pumpkin with nutmeg, cinnamon and molasses mixed with whole wheat and rye flour. Contains: Wheat",
     image: "//cdn.philz.us/products/5ed827add40ce.png",
    },
 {
     name: "Salted Chocolate Chip Cookie",
     description: "Semi-sweet chocolate chip cookie with a pinch of sea salt.  Contains: Milk, Egg, Wheat, Soy",
     image: "//cdn.philz.us/products/624cc474c823e.png",
    },
        ]
      }
    ],
},
    {
        category: "Beans",
        items: [{
      subCategory: "Darker Blends",
      items: [
        {
            name: "Aromatic Arabic Bag",
            description: "Toffee, Cedar, Smoke",
            image: "//cdn.philz.us/products/626c105f6f03e.png",
        },
        {
            name: "Ecstatic Bag",
            description: "Butterscotch, Dark Chocolate, Citrus",
            image: "//cdn.philz.us/products/626c10e281a83.png",
        },
        {
            name: "Ether Bag",
            description: "Molasses, Dried Cherry, Dark Chocolate",
            image: "//cdn.philz.us/products/626c10fdb8975.png"
        },
        {
            name: "Jacob's Wonderbar Bag",
            description: "Dark Chocolate, Berry, Smoke",
            image: "//cdn.philz.us/products/626c115b86a46.png",
            
        },
    ],
    }
],
    },
    {
        subCategory: "Medium Blends",
        items: [
{
    name: "Julie's Ultimate Bag",
    description: "Berry, Fudge, Molasses",
    image: "//cdn.philz.us/products/626c116a441f9.png"
},
            {

                name: "Philtered Soul Bag",
                description: "Hazelnut Flavoring, Maple, Caramel",
                image: "//cdn.philz.us/products/626c11a6d14bb.png"
            },
            
            {

                name: "Silken Splendor Bag",
                description: "Toffee, Chocolate, Citrus",
                image: "//cdn.philz.us/products/626c11be1ed9f.png"
            },
            
            {

                name: "Tesora Bag",
                description: "Caramel, Chocolate, Nuts",
                image: "//cdn.philz.us/products/626c11e1994c5.png"
            },
            
        ]

    },
    {
        subCategory: "Lighter Blends",
        items: [
            {
                name: "Ambrosia Bag",
                description: "Milk Chocolate, Dried Berry, Almond",
                image: "//cdn.philz.us/products/626c0ff2b2cb0.png",
            },
            {
                name: "Dancing Water Bag",
                description: "Brown Sugar, Biscuit, Citrus",
                image: "//cdn.philz.us/products/626c109233819.png",

            },
            {
                name: "New Manhattan Bag",
                description: "Honey, Citrus, Graham Cracker",
                image: "//cdn.philz.us/products/626c117d9b3e1.png",
            },
        ]
    },
    {
        subCategory: "Decaf",
        items: [
            {

                name: "Luca's Unplugged Decaf Bag",
                description: "Chocolate, Nuts, Raisin",
                image: "//cdn.philz.us/products/64b06267942e7.png"
            },
        ],
    },
    {
        subCategory: "Flavored",
        items: [
            {
                name: "Hazelnut Bag",
                description: "Hazelnut, Almond, Milk Chocolate",
                image: "//cdn.philz.us/products/626c112c5a4b2.png"

            }
        ]
    },    
    {
    category: "Merch",
    items: [
        {
            subCategory: "New Merch",
            items: [
                {
                    name: "Philz Sweatshirt",
                    description: "Generous fit, 70/30 cotton-poly blend.",
                    image: "//cdn.philz.us/products/654222528fbe6.png"
                },
                {
                    name: "Philz Long Sleeve Shirt",
                    description: "Philz long-sleeve crew neck tee made of cotton and jersey fabric. Unisex fit.",
                    image: "//cdn.philz.us/products/65422449a0ae0.png"
                },
                {
                    name: "Philz Way All Day T-Shirt",
                    description: "Crew neck tee made with jersey fabric. Unisex fit.",
                    image: "//cdn.philz.us/products/664cfc90aebcc.png"
                },
                {
                    name: "Philz Dad Hat",
                    description: "Embroidered six-panel cotton hat. One size fits all.",
                    image: "//cdn.philz.us/products/664cfc1f6ecbc.png",
                    },
                    {
                        name: "Created Co Tumbler",
                        description: "Double-walled stainless steel tumbler keeps drinks chilled for up to 12 hours.",
                        image: "//cdn.philz.us/products/664cfcb09c139.png"
                        
                    }
                ]
            },
            {
                subCategory: "Apparel",
                items: [
                    {

                        
                        name: "Philz Sweatshirt",
                        description: "Generous fit, 70/30 cotton-poly blend.",
                        image: "//cdn.philz.us/products/654222528fbe6.png",
                    },
                    {

                        
                        name: "Philz Long Sleeve Shirt",
                        description: "Philz long-sleeve crew neck tee made of cotton and jersey fabric. Unisex fit.",
                        image: "//cdn.philz.us/products/65422449a0ae0.png",
                    },
                    {

                        
                        name: "Philz Way All Day T-Shirt",
                        description: "Crew neck tee made with jersey fabric. Unisex fit.",
                        image: "//cdn.philz.us/products/664cfc90aebcc.png",
                    },
                    {
                        name: "Philz Dad Hat",
                        description: "Embroidered six-panel cotton hat. One size fits all.",
                        image: "//cdn.philz.us/products/664cfc1f6ecbc.png"
                    },
                    
                ]
                
            },
            {
                subCategory: "Mugs &amp; Travelers",
                items: [
                    {
                        name: "Created Co Tumbler",
                        description: "Double-walled stainless steel tumbler keeps drinks chilled for up to 12 hours.",
                        image: "//cdn.philz.us/products/664cfcb09c139.png",
                    }
                ]
            },
        ],
    },
]

export default products;