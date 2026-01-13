const ICON_SETS = {
    'Snack': [
        'assets/snacks/snack_1.png',
        'assets/snacks/snack_2.png',
        'assets/snacks/snack_3.png',
        'assets/snacks/snack_4.png'
    ],
    'Candy': [
        'assets/snacks/candy_1.png',
        'assets/snacks/candy_2.png',
        'assets/snacks/candy_3.png'
    ],
    'Drink': [
        'assets/snacks/drink_1.png',
        'assets/snacks/drink_2.png'
    ],
    'Fruit': [
        'assets/snacks/fruit_1.png',
        'assets/snacks/fruit_2.png'
    ],
    'Misc': [
        'assets/snacks/misc_1.png',
        'assets/snacks/misc_2.png'
    ]
};

function getIconUrl(category, index) {
    // Default to Snack if category not found
    const cat = ICON_SETS[category] ? category : 'Snack';
    const set = ICON_SETS[cat];
    if (!set || set.length === 0) return 'assets/snacks/placeholder.png';
    return set[index % set.length];
}