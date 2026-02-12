const XLSX = require('xlsx');
const path = require('path');

// Sample product data - identity artifacts focus
const products = [
    {
        ID: 1,
        Name: 'House Sigil Desk Monument',
        Description: 'Four ancient houses. One choice that defines you. Laser-cut wooden monument featuring your chosen sigil. For those who know that where you belong matters more than where you started. Precision-crafted in Jaipur.',
        Price: 899,
        Material: 'Birch Wood',
        UseCase: 'Declare your allegiance. Symbol of wisdom, courage, ambition, or loyalty - your desk, your manifesto.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/house-sigil.jpg',
        Dimensions: '15cm x 12cm x 3cm',
        Weight: '120g'
    },
    {
        ID: 2,
        Name: 'Arc Emblem Phone Stand',
        Description: '3D-printed phone stand inspired by genius engineering. Power symbol in circular precision. Holds your device at the perfect angle. For those who know innovation is identity.',
        Price: 749,
        Material: 'PLA Plastic',
        UseCase: 'Your workspace, powered by the same energy that drives visionaries. Precision-cut in Jaipur.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/arc-emblem.jpg',
        Dimensions: '12cm x 10cm x 8cm',
        Weight: '95g'
    },
    {
        ID: 3,
        Name: 'Dueling Relic Pen Holder',
        Description: 'Laser-cut acrylic pen holder shaped like an elegant weapon hilt. Choose your allegiance: guardian blue or defiant red. Ancient conflicts, modern desk. The Force is not fiction - it is philosophy.',
        Price: 649,
        Material: 'Colored Acrylic',
        UseCase: 'Store your tools in a symbol of cosmic balance. Light or dark - your choice, your identity.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/dueling-relic.jpg',
        Dimensions: '20cm x 5cm x 5cm',
        Weight: '80g'
    },
    {
        ID: 4,
        Name: 'Cosmic Script Name Plate',
        Description: 'Laser-cut wooden name plate with your name in an otherworldly font, complete with star accents. Custom engraving. Professional, yet subtly extraordinary. Crafted in Jaipur.',
        Price: 599,
        Material: 'Walnut Wood',
        UseCase: 'Your name, your desk, your universe. For those who bring magic to the mundane without explanation.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/cosmic-nameplate.jpg',
        Dimensions: '22cm x 6cm x 1.5cm',
        Weight: '90g'
    },
    {
        ID: 5,
        Name: 'Hero Emblems Coaster Set',
        Description: 'Set of 4 laser-cut wooden coasters featuring iconic superhero symbols. Shield, arc, lightning, strength. Protect your desk surface while quietly declaring allegiance to extraordinary ideals.',
        Price: 499,
        Material: 'Bamboo Wood',
        UseCase: 'Not all heroes wear capes. Some just have impeccable desk aesthetics. Indian-crafted precision.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/hero-emblems.jpg',
        Dimensions: '10cm diameter x 0.8cm (each)',
        Weight: '40g (each)'
    },
    {
        ID: 6,
        Name: 'Small Guardian Desk Companion',
        Description: '3D-printed desk companion with large, knowing eyes. Adorable design with precise detailing. Watches over your workspace with ancient wisdom in tiny form. This is the way.',
        Price: 999,
        Material: 'PLA Plastic',
        UseCase: 'Desk guardian for those who understand that the most powerful often come in unexpected packages.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/guardian.jpg',
        Dimensions: '10cm x 6cm x 6cm',
        Weight: '75g'
    },
    {
        ID: 7,
        Name: 'Wisdom Keeper Pen Stand',
        Description: '3D-printed replica of an ancient sorting artifact that holds your pens. Detailed texture and weathered finish. Let destiny decide where your tools belong.',
        Price: 849,
        Material: 'PLA Plastic',
        UseCase: 'Organize your stationery with the same wisdom that sorts souls. Crafted in Jaipur workshops.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/wisdom-keeper.jpg',
        Dimensions: '12cm x 12cm x 10cm',
        Weight: '110g'
    },
    {
        ID: 8,
        Name: 'Arachnid Web Cable Organizer',
        Description: '3D-printed cable holder inspired by bio-mechanical precision. Keeps your desk cables tangle-free with spider-like efficiency. With great organization comes great productivity.',
        Price: 449,
        Material: 'PLA Plastic',
        UseCase: 'Web-slinging cable management for those who swing between chaos and control. Set of 2.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/web-organizer.jpg',
        Dimensions: '6cm x 4cm x 3cm (each)',
        Weight: '30g (each)'
    },
    {
        ID: 9,
        Name: 'Hallowed Symbols Bookmark',
        Description: 'Laser-cut wooden bookmark featuring the trinity of ancient relics. Elegant and meaningful. Three objects, one master of death. Mark your place in stories that matter.',
        Price: 249,
        Material: 'Walnut Wood',
        UseCase: 'For readers who know that some symbols hold more power than words. Indian-crafted precision.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/hallowed-symbols.jpg',
        Dimensions: '15cm x 4cm x 0.3cm',
        Weight: '10g'
    },
    {
        ID: 10,
        Name: 'Articulated Mythic Serpent',
        Description: '3D-printed articulated creature with movable wings and body. Fully poseable with smooth joints. Fantasy made tangible. Fire and flight in flexible form.',
        Price: 999,
        Material: 'TPU Flexible Plastic',
        UseCase: 'Collectible desk guardian for those who understand that dragons were never just stories.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/mythic-serpent.jpg',
        Dimensions: '18cm x 8cm x 6cm',
        Weight: '110g'
    },
    {
        ID: 11,
        Name: 'Night Guardian Desk Organizer',
        Description: 'Laser-cut black acrylic desk organizer shaped like a winged emblem. Multiple compartments for pens and cards. Darkness as design. Justice as aesthetic.',
        Price: 799,
        Material: 'Black Acrylic',
        UseCase: 'Bring Gotham-level organization to your workspace. For vigilantes of productivity.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/night-guardian.jpg',
        Dimensions: '20cm x 10cm x 8cm',
        Weight: '150g'
    },
    {
        ID: 12,
        Name: 'Character Totem Keychain Set',
        Description: 'Set of 3 custom 3D-printed keychains. Eastern animation character silhouettes with vibrant colors. Carry your universe wherever you go.',
        Price: 399,
        Material: 'PETG Plastic',
        UseCase: 'Identity on your keys. For those whose worlds are not limited by geography or medium.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/character-totem.jpg',
        Dimensions: '5cm x 3cm x 0.5cm (each)',
        Weight: '15g (each)'
    },
    {
        ID: 13,
        Name: 'Thunder Relic Paperweight',
        Description: '3D-printed replica of a legendary hammer. Heavy enough to hold down your papers, symbolic enough to declare worthiness. Are you worthy? Your desk will answer.',
        Price: 699,
        Material: 'PLA Plastic with Metal Fill',
        UseCase: 'Papers stay down. Thunder stays up. For those who wield responsibility with power.',
        Category: 'Desk Accessories',
        ImageURL: 'https://placeholder-image-url.com/thunder-relic.jpg',
        Dimensions: '12cm x 8cm x 6cm',
        Weight: '200g'
    },
    {
        ID: 14,
        Name: 'Winged Quest Desk Sculpture',
        Description: '3D-printed golden sphere with delicate wings. Can be placed or hung. The hardest to catch, the most precious to hold. Seeker pride in tangible form.',
        Price: 599,
        Material: 'Gold PLA Plastic',
        UseCase: 'For those who chase impossible things until they become real. Crafted in Jaipur.',
        Category: 'Collectibles',
        ImageURL: 'https://placeholder-image-url.com/winged-quest.jpg',
        Dimensions: '8cm wingspan x 4cm',
        Weight: '25g'
    },
    {
        ID: 15,
        Name: 'Universe Echo Quote Plaque',
        Description: 'Laser-cut wooden plaque with your chosen quote from any universe. Wizarding world, superhero sagas, galactic epics, or your own words. Your philosophy, made permanent.',
        Price: 749,
        Material: 'Oak Wood',
        UseCase: 'Words that define you, carved in wood. Personalized identity artifact. Crafted in Jaipur.',
        Category: 'Gifts',
        ImageURL: 'https://placeholder-image-url.com/universe-echo.jpg',
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
console.log('- Identity artifacts (desk accessories, collectibles, gifts)');
console.log('- Fantasy-inspired designs (wizarding, superhero, galactic themes)');
console.log('- All crafted in Jaipur, India');
