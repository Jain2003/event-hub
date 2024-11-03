

export const events = [
    {
      id: 1,
      name: "Summer Music Festival",
      description: "Join us for an incredible day of live music performances featuring local and international artists.",
      longDescription: `Experience the ultimate summer celebration at our annual Music Festival! This year's lineup features an extraordinary blend of genres and artists that will keep you dancing from day to night.
  
      What to expect:
      • 3 main stages with continuous performances
      • Over 20 artists from around the world
      • Local food vendors and craft beverages
      • Interactive art installations
      • VIP lounges with premium viewing areas
      • Free water stations and cooling zones
  
      Featured Artists:
      • The Midnight Echoes (Headliner)
      • Electric Symphony
      • Rhythm Collective
      • And many more to be announced!
  
      Don't miss out on the biggest music event of the summer!`,
      date: "2024-06-15",
      time: "14:00",
      location: "Central Park",
      category: "Music",
      venue: {
        name: "Central Park Main Ground",
        address: "5th Ave, New York, NY 10022",
        capacity: 5000
      },
      pricing: {
        general: 89.99,
        vip: 199.99
      },
      highlights: [
        "Multiple genre performances",
        "Food and beverage included",
        "Free parking",
        "Exclusive merchandise"
      ],
      imageUrl: "../public/dummy1.png"
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      description: "Explore the latest innovations in technology with industry leaders and experts.",
      longDescription: `Join us for the most anticipated tech conference of 2024, where innovation meets inspiration. This year's conference brings together thought leaders, entrepreneurs, and developers from across the globe to share insights into the future of technology.
  
      Conference Tracks:
      • Artificial Intelligence & Machine Learning
      • Web3 & Blockchain Technology
      • Cybersecurity & Privacy
      • Cloud Computing & DevOps
      • Sustainable Tech & Green Innovation
  
      What's Included:
      • Access to all keynote sessions
      • Interactive workshops
      • Networking opportunities
      • Conference materials
      • Lunch and refreshments
      • Certificate of participation`,
      date: "2024-07-20",
      time: "09:00",
      location: "Convention Center",
      category: "Technology",
      venue: {
        name: "Metropolitan Convention Center",
        address: "123 Tech Boulevard, San Francisco, CA 94111",
        capacity: 3000
      },
      pricing: {
        early: 299.99,
        regular: 399.99,
        premium: 599.99
      },
      highlights: [
        "50+ Industry Speakers",
        "Hands-on Workshops",
        "Networking Events",
        "Digital Resource Access"
      ],
      imageUrl: "../public/dummy1.png"
    },
    {
      id: 3,
      name: "Food & Wine Festival",
      description: "Experience a culinary journey with premium wines and gourmet food from top chefs.",
      longDescription: `Immerse yourself in a gastronomic adventure at our annual Food & Wine Festival. This year's event brings together award-winning chefs, renowned wineries, and artisanal food producers for an unforgettable culinary experience.
  
      Festival Highlights:
      • Cooking demonstrations by Michelin-starred chefs
      • Wine tasting sessions with master sommeliers
      • Artisanal cheese and chocolate pairings
      • Farm-to-table showcase
      • Mixology masterclasses
      • Live entertainment
  
      Featured Experiences:
      • Global cuisine stations
      • Premium wine tastings
      • Chef's Table experiences
      • Cocktail workshops`,
      date: "2024-06-30",
      time: "16:00",
      location: "Downtown Square",
      category: "Food",
      venue: {
        name: "Downtown Culinary Center",
        address: "456 Gourmet Lane, Chicago, IL 60601",
        capacity: 1500
      },
      pricing: {
        general: 129.99,
        vip: 249.99
      },
      highlights: [
        "30+ Food Vendors",
        "20+ Wine Producers",
        "VIP Lounge Access",
        "Take-home Gift Bag"
      ],
      imageUrl: "../public/dummy1.png"
    },
    {
      id: 4,
      name: "Art Exhibition Opening",
      description: "Witness the unveiling of contemporary artworks from emerging local artists.",
      longDescription: `Be part of an extraordinary evening celebrating contemporary art at our Exhibition Opening. This carefully curated show features groundbreaking works from emerging and established artists, pushing the boundaries of modern artistic expression.
  
      Exhibition Features:
      • Multiple art forms including paintings, sculptures, and digital art
      • Artist meet-and-greets
      • Live art performances
      • Interactive installations
      • Guided tours by art critics
      • Opening night cocktail reception
  
      Special Programs:
      • Artist talks and panel discussions
      • Art collection workshops
      • Youth art workshop
      • Photography allowed in designated areas`,
      date: "2024-06-22",
      time: "18:30",
      location: "Modern Art Gallery",
      category: "Art",
      venue: {
        name: "Metropolitan Modern Art Gallery",
        address: "789 Arts District, Miami, FL 33101",
        capacity: 800
      },
      pricing: {
        general: 45.99,
        preview: 89.99
      },
      highlights: [
        "40+ Original Artworks",
        "Meet the Artists",
        "Complimentary Catalog",
        "Opening Reception"
      ],
      imageUrl: "../public/dummy1.png"
    }
  ];
  
  export const getEventCategories = () => {
    return [...new Set(events.map(event => event.category))];
  };
  
  export const getEventById = (id) => {
    return events.find(event => event.id === Number(id));
  };