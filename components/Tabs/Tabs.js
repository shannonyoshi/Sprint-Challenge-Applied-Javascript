class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;//2. set 'this' tab
    this.tabData = this.tabElement.dataset.tab; //3.figures out which tab this is (all, javascript, tech, node.js, jquery, or bootstrap)
    if (this.tabData === 'all') { //4. checks if all cards are showing
      this.cards = document.querySelectorAll('.card'); //5. if yes, gets all cards
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`)//6. if not, gets cards with dataa tags matching this tab
    }
    this.cards = Array.from(this.cards).map(card => new TabCard(card));//7. creates new cards got category chosen
    this.tabElement.addEventListener('click', () => this.selectTab());//8. once clicked, go to selectedTab
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab'); //9. gets all tab types
    tabs.forEach((tab)=>{
      tab.classList.remove('active-tab') //10. removes active-tab class from all tabs
    })
    const cards = document.querySelectorAll('.card');//11. gets all cards
    cards.forEach((card) => {
      card.style.display = 'none' //12. removes all cards from display
    })
    this.tabElement.classList.add('active-tab')//13. adds 'active-tab' class to the tab that was clicked on
    this.cards.forEach(card => card.selectCard()); //14.each card goes to selected Card
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement //7. creates cards for that tab
  }
  selectCard() {
    this.cardElement.style.display = 'flex'; //15 adds selected cards to display
  }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  new TabLink(tab)//1. creates new tab instance for all tabs (all, javascript, tech, node.js, jquery, bootstrap)
})

      // assign this.tabElement to the tabElement DOM reference
       // Get the `data-tab` value from this.tabElement and store it here
       // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // Check to see if this.tabData is equal to 'all'
          // If `all` is true, select all cards regardless of their data attribute values
                // else if `all` is false, only select the cards with matching this.tabData values
                // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
// Add a click event that invokes this.selectTab
 // Select all elements with the .tab class on them
    // Iterate through the NodeList removing the .active-tab class from each element
    // Select all of the elements with the .card class on them
    // Iterate through the NodeList setting the display style each one to 'none'
    // Add a class of ".active-tab" to this.tabElement
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
        // Assign this.cardElement to the cardElement DOM reference
        // Update the style of this.cardElement to display = "flex"
        /* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/