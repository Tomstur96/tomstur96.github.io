import './rootStyle.css';

import menuitem1 from './assets/images/menu--item_1.jpg';
import menuitem2 from './assets/images/menu--item_2.jpg';
import menuitem3 from './assets/images/menu--item_3.jpg';
import menuitem4 from './assets/images/menu--item_4.jpg';
import menuitem5 from './assets/images/menu--item_5.jpg';
import menuitem6 from './assets/images/menu--item_6.jpg';


export function menuTabCreation() {

    const menuContent = document.createElement('div');
    const menuItemWrapper = document.createElement('div');
 
    const menuData = [
        {   heading: 'Spaghetti Bolognese', 
            description: 'A classic Italian dish consisting of spaghetti pasta topped with a rich, meaty tomato sauce.',
            image: menuitem1,
            price: '25.00'
        },
        {   heading: 'Supreme Pizza', 
            description: 'A flavorful and loaded combination of various toppings including pepperoni, sausage, vegetables, and cheese on a delicious pizza crust.',
            image: menuitem2,
            price: '20.00'
        },
        {   heading: 'Calzone Hawaiian Pizza', 
            description: 'A savory and folded pizza filled with ham, pineapple, cheese, and tomato sauce, providing a delicious twist on the classic Hawaiian pizza flavors.',
            image: menuitem3,
            price: '22.50'
        }, 
        {   heading: 'Italian Meat & Cheese Platter', 
            description: 'A delectable assortment of cured Italian meats such as salami, prosciutto, and capocollo, paired with a selection of flavorful cheeses like mozzarella, provolone, and aged Parmesan.',
            image: menuitem4,
            price: '35.00'
        },
        {   heading: 'Vanilla Bean Gelato', 
            description: 'A creamy and smooth frozen dessert bursting with the exquisite flavors of real vanilla beans, offering a delightful and indulgent treat for the taste buds.',
            image: menuitem5,
            price: '6.50'
        },
        {   heading: 'Home-made Tiramisu', 
            description: 'An exquisite Italian dessert consisting of layers of delicate ladyfinger biscuits soaked in espresso and liqueur, generously layered with creamy mascarpone cheese filling, and dusted with rich cocoa powder.',
            image: menuitem6,
            price: '8.50'
        }
    ];

    menuContent.classList.add('menu--content', 'grid-col');
    menuContent.setAttribute('id', 'menuTabContent');

    menuItemWrapper.classList.add('grid--wrapper');
    menuItemWrapper.setAttribute('id', 'grid--wrapper');

    menuData.forEach((item, index) => {
        const menuItemContainer = document.createElement('div');
        
        menuItemContainer.setAttribute('data-index', index);

        if (index <= 1) {
            menuItemContainer.classList.add('menu--itemContent', 'flex--col','bottomBorder')
        } else {
            menuItemContainer.classList.add('menu--itemContent', 'flex--col');
        }

        const menuImg = document.createElement('img');
        const menuInfoContainer = document.createElement('div');
        const menuH3 = document.createElement('h3');
        const menuDesc = document.createElement('span');
        const menuPrice = document.createElement('div');

        const menuPriceValue = document.createElement('p');
        const menuPriceSpan = document.createElement('span');
        const menuPriceBtn = document.createElement('button');

        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('imgWrapper', 'flex--col');
        menuImg.src = item.image;

        if (index === 3){
            // menuImg.classList.add('menu--itemImg','rotated');
            menuImg.classList.add('menu--itemImg');
            menuImg.src = item.image;
        } else {
            menuImg.classList.add('menu--itemImg');
            menuImg.src = item.image;
        }

        menuInfoContainer.classList.add('menuInfoContainer', 'flex--col');

        menuH3.classList.add('menu--itemTitle');
        menuH3.innerHTML = item.heading;

        menuDesc.classList.add('menu--itemDesc');
        menuDesc.innerHTML = item.description;

        menuPrice.classList.add('menu--itemPrice', 'flex--row');

        menuPriceValue.classList.add('menu--itemPricing');
        

        menuPriceSpan.classList.add('menu-itemCost');
        menuPriceSpan.innerHTML = "$";

        menuPriceValue.innerHTML = "Price:" + menuPriceSpan.innerHTML + parseFloat(item.price).toFixed(2);

        menuPriceBtn.classList.add('menu--itemCart');
        menuPriceBtn.setAttribute('data-item', "menu--item_"+ index);

        menuPriceBtn.innerHTML = '&#128722';

        imgWrapper.appendChild(menuImg);

        menuItemContainer.appendChild(imgWrapper);

        menuInfoContainer.appendChild(menuH3);
        menuInfoContainer.appendChild(menuDesc)
        
        menuItemContainer.appendChild(menuInfoContainer);

        menuPrice.appendChild(menuPriceValue);
        menuPrice.appendChild(menuPriceBtn);

        menuItemContainer.appendChild(menuPrice);

        menuItemWrapper.appendChild(menuItemContainer);
        
    })
    menuContent.appendChild(menuItemWrapper);
    return menuContent;
}