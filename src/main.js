// Data arrays with 50+ options each
    const adjectives = [
      'Golden', 'Sensory', 'Whiskery', 'Maizey', 'Spectrum', 'Playful', 
      'Slinky', 'Kerneled', 'Neurodiverse', 'Husky', 'Curious', 'Bouncy',
      'Energetic', 'Silky', 'Corny', 'Patterned', 'Sensitive', 'Fuzzy',
      'Spirited', 'Amber', 'Textured', 'Wiggly', 'Buttery', 'Unique',
      'Fluffy', 'Polka-dotted', 'Stimmy', 'Creamy', 'Mischievous', 'Striped',
      'Cheerful', 'Popcorny', 'Observant', 'Velvety', 'Zesty', 'Focused',
      'Cuddly', 'Harvesty', 'Detail-oriented', 'Sleek', 'Sunny', 'Methodical',
      'Bushy-tailed', 'Starchy', 'Pattern-seeking', 'Nimble', 'Earthy',
      'Systematic', 'Dappled', 'Sweetcorny'
    ];

    const nouns = [
      'Ferret', 'Weasel', 'Whiskers', 'Slink', 'Dooker', 'War-dance',
      'Noodle', 'Fuzzbutt', 'Bandit', 'Scout', 'Pouncer', 'Tunnel',
      'Sniffer', 'Chaser', 'Explorer', 'Cuddle-puddle', 'Burrow',
      'Snake-cat', 'Carpet-shark', 'Business', 'Cat-snake', 'Sock-thief',
      'Tube-dweller', 'Blanket-ninja', 'Shadow', 'Pocket-puppy', 'Sneak',
      'Wiggleworm', 'Fur-snake', 'Snugglebug', 'Hidey-hole', 'Pouch-pal',
      'Stash-master', 'Trouble', 'Mischief', 'Adventure', 'Cavoodle',
      'Snoot', 'Paws', 'Tail-swish', 'Bounce', 'Zoom', 'Dook', 'Waddle',
      'Snuffle', 'Pounce', 'Wiggle', 'Scurry', 'Nest', 'Cuddle', 'Snooze'
    ];

    const descriptors = [
      'of the Cornfield', 'of Sensory Joy', 'with Extra Whiskers',
      'of Neurodiversity', 'the Kernel Collector', 'of Spectrum Magic',
      'the Playful Pouncer', 'of Slinky Moves', 'the Maize Marvel',
      'of Sensory Delight', 'with Golden Fur', 'the Spectrum Explorer',
      'of Whiskery Wonders', 'the Neurodivergent Noodle', 'of Corn Silk',
      'with Patterned Paws', 'the Sensory Seeker', 'of Fuzzy Feelings',
      'the Spirited Slinker', 'with Amber Eyes', 'of Textured Tunnels',
      'the Wiggly Wonder', 'with Buttery Fur', 'the Unique Explorer',
      'of Fluffy Corners', 'with Polka-dotted Paws', 'the Stimmy Slider',
      'of Creamy Cuddles', 'the Mischievous Maize', 'with Striped Tail',
      'the Cheerful Chaser', 'of Popcorn Pounces', 'the Observant One',
      'with Velvety Whiskers', 'the Zesty Zoomer', 'of Focused Fun',
      'the Cuddly Kernel', 'of Harvest Happiness', 'the Detail-oriented Dooker',
      'with Sleek Moves', 'the Sunny Slinker', 'of Methodical Mischief',
      'with Bushy-tailed Joy', 'the Starchy Scout', 'of Pattern-seeking Pounces',
      'the Nimble Nibbler', 'with Earthy Energy', 'the Systematic Sniffer',
      'of Dappled Delight', 'the Sweetcorn Snuggler'
    ];

    // Weighted random selection
    function getRandomElement(arr, weights) {
      const totalWeight = weights.reduce((a, b) => a + b, 0);
      const randomNum = Math.random() * totalWeight;
      let weightSum = 0;

      for (let i = 0; i < arr.length; i++) {
        weightSum += weights[i];
        if (randomNum <= weightSum) {
          return arr[i];
        }
      }
    }

    function generateName() {
      const adjective = getRandomElement(adjectives, Array(adjectives.length).fill(1));
      const noun = getRandomElement(nouns, Array(nouns.length).fill(1));
      const descriptor = getRandomElement(descriptors, Array(descriptors.length).fill(1));
      return `${adjective} ${noun} ${descriptor}`;
    }

    // DOM elements
    const nameDisplay = document.getElementById('generated-name');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    // Generate initial name
    let currentName = generateName();
    nameDisplay.textContent = currentName;

    // Event listeners
    generateBtn.addEventListener('click', () => {
      currentName = generateName();
      nameDisplay.textContent = currentName;
    });

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(currentName)
        .then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.textContent = 'Copy Name';
          }, 2000);
        })
        .catch(() => {
          copyBtn.textContent = 'Failed to copy';
          setTimeout(() => {
            copyBtn.textContent = 'Copy Name';
          }, 2000);
        });
    });

    // Load preferences from localStorage
    const preferences = JSON.parse(localStorage.getItem('ferretNamerPrefs')) || {};
    // (Future implementation for preferences)
