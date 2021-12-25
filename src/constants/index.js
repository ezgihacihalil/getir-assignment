const BASE_URL = 'http://localhost:8080';
const SORTING_OPTIONS = [{
  name: 'Price low to high',
  value: 'price_low_to_high',
  sortFunction: (a, b) => (a.price > b.price ? 1 : -1),
},
{
  name: 'Price high to low',
  value: 'price_high_to_low',
  sortFunction: (a, b) => (a.price < b.price ? 1 : -1),
},
{
  name: 'New to old',
  value: 'new_to_old',
  sortFunction: (a, b) => (a.added > b.added ? 1 : -1),
}, {
  name: 'Old to new',
  value: 'old_to_new',
  sortFunction: (a, b) => (a.added < b.added ? 1 : -1),
}];

export {
  SORTING_OPTIONS,
  BASE_URL,
};
