// Perform the following actions:
 
// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
const list = document.getElementsByTagName('ul')[0];
list.getElementsByTagName("li")[0].innerHTML = 'Fair Trade Coffee';
// 2. Remove 'Twinkies' from the list

 
  list.removeChild(list.children[3]);

// 3. Add an item 'Cheese Whiz'
//Create a New element (li)
//Set the Text of Element to Cheese Wiz
//append element to the list
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li); 
li.innerText = "Cheese Whiz"


// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
list.innerHTML = "";
let newItems = ['protein powder', 'muscle milk', 'power bars'];
newItems.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
})
//Below was my first attempt and returned only the words side-by-side
//  let addArray = newItems.map(li => {
//     ul.append(li)
// }
//  );
// console.log(addArray);


//newItems.map((a)=>{
//Follow same steps in #3 above (lines 12-14)
// }) 
 
// list.getElementById("li").children[0, 1, 2, 3];
// const element = document.getElementById("myList").children[0];
// element.replaceChild(newItems, element.childNodes[0, 1, 2, 3]);


// 5. Add the class 'important' to the muscle milk item.
const muscle = document.querySelector('ul').children[1];
muscle.classList.add('important');

