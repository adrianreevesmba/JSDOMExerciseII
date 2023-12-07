// Perform the following actions:
 
// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
const list = document.getElementsByTagName('ul')[0];
list.getElementsByTagName("li")[0].innerHTML = 'Fair Trade Coffee';
// 2. Remove 'Twinkies' from the list

 
  list.removeChild(list.children[3];

// 3. Add an item 'Cheese Whiz'

list.getElementsByTagName("li")[3].innerHTML = 'Cheese Whiz';

// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']

// 5. Add the class 'important' to the muscle milk item.