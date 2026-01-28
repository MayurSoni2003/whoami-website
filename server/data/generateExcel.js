const XLSX = require('xlsx');
const path = require('path');

// Sample product data with fandom focus
const products = [
    {
        ID: 1,
        Name: 'Hogwarts House Crest Desk Stand',
        Description: 'Laser-cut wooden desk stand featuring your Hogwarts house crest. Choose from Gryffindor, Slytherin, Ravenclaw, or Hufflepuff. Perfect for Potterheads.',
        Price: 899,
        Material: 'Birch Wood',
        UseCase: 'Display your Hogwarts house pride on your desk. Great gift for Harry Potter fans.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/hogwarts-crest.jpg',
        Dimensions: '15cm x 12cm x 3cm',
        Weight: '120g'
    },
    {
        ID: 2,
        Name: 'Iron Man Arc Reactor Phone Stand',
        Description: '3D-printed phone stand inspired by Iron Man\'s arc reactor design. Holds your phone at the perfect viewing angle.',
        Price: 749,
        Material: 'PLA Plastic',
        UseCase: 'For Marvel fans who want to power up their desk with Stark tech aesthetics.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/arc-reactor.jpg',
        Dimensions: '12cm x 10cm x 8cm',
        Weight: '95g'
    },
    {
        ID: 3,
        Name: 'Lightsaber Pen Holder',
        Description: 'Laser-cut acrylic pen holder shaped like an iconic lightsaber hilt. Choose your side: Jedi blue or Sith red.',
        Price: 649,
        Material: 'Colored Acrylic',
        UseCase: 'Store your pens, pencils, and markers in this Star Wars inspired holder. May the Force be with your stationery.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/lightsaber.jpg',
        Dimensions: '20cm x 5cm x 5cm',
        Weight: '80g'
    },
    {
        ID: 4,
        Name: 'Personalized Wizard Name Plate',
        Description: 'Laser-cut wooden name plate with your name in a magical font, complete with star accents. Custom engraving included.',
        Price: 599,
        Material: 'Walnut Wood',
        UseCase: 'Professional yet magical desk nameplate. Perfect for Potterheads in the workplace.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/wizard-nameplate.jpg',
        Dimensions: '22cm x 6cm x 1.5cm',
        Weight: '90g'
    },
    {
        ID: 5,
        Name: 'Marvel Avengers Coaster Set',
        Description: 'Set of 4 laser-cut wooden coasters featuring iconic Avengers symbols: Iron Man, Captain America, Thor, and Hulk.',
        Price: 499,
        Material: 'Bamboo Wood',
        UseCase: 'Protect your desk surface while showing your Marvel allegiance. Great gift for Avengers fans.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/avengers-coasters.jpg',
        Dimensions: '10cm diameter x 0.8cm (each)',
        Weight: '40g (each)'
    },
    {
        ID: 6,
        Name: 'Baby Yoda (Grogu) Desk Buddy',
        Description: '3D-printed Grogu figurine for your desk. Adorable design with precise detailing. The Child will watch over your work.',
        Price: 999,
        Material: 'PLA Plastic',
        UseCase: 'Desk companion for Mandalorian fans. This is the way to decorate your workspace.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/grogu.jpg',
        Dimensions: '10cm x 6cm x 6cm',
        Weight: '75g'
    },
    {
        ID: 7,
        Name: 'Sorting Hat Pen Stand',
        Description: '3D-printed replica of the Hogwarts Sorting Hat that holds your pens. Detailed texture and weathered finish.',
        Price: 849,
        Material: 'PLA Plastic',
        UseCase: 'Let the Sorting Hat sort your stationery. Perfect for any Potterhead\'s desk.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/sorting-hat.jpg',
        Dimensions: '12cm x 12cm x 10cm',
        Weight: '110g'
    },
    {
        ID: 8,
        Name: 'Spider-Man Web Shooter Cable Organizer',
        Description: '3D-printed cable holder inspired by Spider-Man\'s web shooters. Keeps your desk cables tangle-free in heroic style.',
        Price: 449,
        Material: 'PLA Plastic',
        UseCase: 'Swing into organization with this Spider-Man inspired desk accessory. Set of 2.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/web-shooter.jpg',
        Dimensions: '6cm x 4cm x 3cm (each)',
        Weight: '30g (each)'
    },
    {
        ID: 9,
        Name: 'Deathly Hallows Bookmark',
        Description: 'Laser-cut wooden bookmark featuring the iconic Deathly Hallows symbol. Elegant and meaningful.',
        Price: 249,
        Material: 'Walnut Wood',
        UseCase: 'Mark your place in your favorite books with this Harry Potter inspired bookmark. Perfect gift for readers.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/deathly-hallows.jpg',
        Dimensions: '15cm x 4cm x 0.3cm',
        Weight: '10g'
    },
    {
        ID: 10,
        Name: 'Flexi Dragon (Game of Thrones Inspired)',
        Description: '3D-printed articulated dragon figure with movable wings and body. Fully poseable with smooth joints.',
        Price: 999,
        Material: 'TPU Flexible Plastic',
        UseCase: 'Collectible desk dragon for fantasy fans. Inspired by iconic TV series dragons.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/dragon.jpg',
        Dimensions: '18cm x 8cm x 6cm',
        Weight: '110g'
    },
    {
        ID: 11,
        Name: 'Batman Logo Desk Organizer',
        Description: 'Laser-cut black acrylic desk organizer shaped like the Batman symbol. Multiple compartments for pens and cards.',
        Price: 799,
        Material: 'Black Acrylic',
        UseCase: 'Bring Gotham to your desk. Perfect for DC Comics fans who want subtle, stylish merchandise.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/batman.jpg',
        Dimensions: '20cm x 10cm x 8cm',
        Weight: '150g'
    },
    {
        ID: 12,
        Name: 'Anime Character Keychain Set',
        Description: 'Set of 3 custom 3D-printed keychains. Popular anime character silhouettes with vibrant colors.',
        Price: 399,
        Material: 'PETG Plastic',
        UseCase: 'Show your anime love on your keys or bag. Makes a great gift for anime fans.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/anime-keychain.jpg',
        Dimensions: '5cm x 3cm x 0.5cm (each)',
        Weight: '15g (each)'
    },
    {
        ID: 13,
        Name: 'Mjolnir (Thor\'s Hammer) Paperweight',
        Description: '3D-printed replica of Thor\'s hammer. Heavy enough to serve as a functional paperweight.',
        Price: 699,
        Material: 'PLA Plastic with Metal Fill',
        UseCase: 'Are you worthy? This Mjolnir paperweight keeps your papers in place, Marvel style.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/mjolnir.jpg',
        Dimensions: '12cm x 8cm x 6cm',
        Weight: '200g'
    },
    {
        ID: 14,
        Name: 'Golden Snitch Desk Sculpture',
        Description: '3D-printed Golden Snitch with delicate wings. Can be placed on your desk or hung as decoration.',
        Price: 599,
        Material: 'Gold PLA Plastic',
        UseCase: 'Catch this Snitch for your desk. Perfect for Quidditch fans and Potterheads.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/snitch.jpg',
        Dimensions: '8cm wingspan x 4cm',
        Weight: '25g'
    },
    {
        ID: 15,
        Name: 'Customized Fandom Quote Plaque',
        Description: 'Laser-cut wooden plaque with your favorite fandom quote. Choose from HP, Marvel, Star Wars, or custom text.',
        Price: 749,
        Material: 'Oak Wood',
        UseCase: 'Display your favorite quote from any fandom. Perfect personalized gift for fans.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/quote-plaque.jpg',
        Dimensions: '25cm x 15cm x 1cm',
        Weight: '180g'
    }
];

// Create workbook and worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(products);

// Add worksheet to workbook
XLSX.utils.book_append_sheet(wb, ws, 'Products');

// Write to file
const filePath = path.join(__dirname, 'products.xlsx');
XLSX.writeFile(wb, filePath);

console.log(`Excel file created successfully at: ${filePath}`);
console.log(`Total products: ${products.length}`);
console.log('Product categories included:');
console.log('- Fandom desk accessories (Harry Potter, Marvel, Star Wars, DC, Anime)');
console.log('- Collectibles for display');
console.log('- Personalized gifts for fans');
