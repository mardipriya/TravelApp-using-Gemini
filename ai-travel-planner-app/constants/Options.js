export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Budget-Friendly',
    desc: 'Stay mindful of your expenses',
    icon: '💴',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Balance cost and comfort',
    icon: '💵',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Enjoy without limits',
    icon: '💰',
  }
];

export const SelectTravelerList = [
  {
    id: 1,
    title: 'Solo Traveler',
    desc: 'An independent explorer',
    icon: '🏄',
    people: '1 person'
  },
  {
    id: 2,
    title: 'Couple',
    desc: 'Two people sharing an adventure',
    icon: '🥂',
    people: '2 people'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A fun-loving family group',
    icon: '🏡',
    people: '3 to 5 people'
  },
  {
    id: 4,
    title: 'Friends Group',
    desc: 'A group of thrill-seekers',
    icon: '✈️',
    people: '5 to 15 people'
  }
];
export const Ai_PROMPT='Generate travel plan for location:{location}, {totalDays} days and {totalNights} night for {traveler} with a {budget} budget with flight details, flight price with booking url, Hotels option list with HotelName, Hotel Address, price, hotel image url,gei cordinates, rating, descriptions and place to visit nearby with place name, place details, place image url, geo cordinates, ticket pricing,Time to travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON'