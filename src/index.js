import { headingCreation } from './initialPageLoad.js';
import { homeTab } from './homeTabModule.js';
import { menuTabCreation } from './menuTabModule.js';
import { contactUsTab } from './contactUsModule.js';
import { locations } from './contactUsModuleScripts/adddressIframe.js';

import './rootStyle.css';
import './assets/favicons/favicons.js';

const content = document.createElement('div');
const pageTabContent = document.createElement('div');
const headerContent = headingCreation();


content.setAttribute('id', 'content');
pageTabContent.setAttribute('id', 'pageTabContent');
content.appendChild(headerContent);



document.body.appendChild(content);
document.body.appendChild(pageTabContent);



document.getElementById("Home--link").addEventListener('click', (event) => {
    event.preventDefault();

    const navItems = document.querySelectorAll('.nav--item');
    navItems.forEach(item => {
        item.classList.remove('active');
    })

    const homeLink = navItems[0];

    pageTabContent.innerHTML = '';

    const homeModule = homeTab();
    homeLink.classList.add('active');

    pageTabContent.appendChild(homeModule);
});

document.getElementById("Menu--link").addEventListener('click', (event) => {
    event.preventDefault();

    const navItems = document.querySelectorAll('.nav--item');
    navItems.forEach(item => {
        item.classList.remove('active');
    })
    const menuLink = navItems[1];

    pageTabContent.innerHTML = '';

    const menuModule = menuTabCreation();
    menuLink.classList.add('active');

    pageTabContent.appendChild(menuModule);
});

document.getElementById("ContactUs--link").addEventListener('click', (event) => {
    event.preventDefault();

    const navItems = document.querySelectorAll('.nav--item');
    navItems.forEach(item => {
        item.classList.remove('active');
    })
    const menuLink = navItems[2];

    pageTabContent.innerHTML = '';

    const contactUsModule = contactUsTab();
    menuLink.classList.add('active');
    
    pageTabContent.appendChild(contactUsModule);

    const dropdown = document.getElementById('resturants--name');

    dropdown.addEventListener('change', () => {
        const selectedOption = dropdown.value;
        const addressStreet = document.getElementById('street');
        const addressSuburb = document.getElementById('suburb');
        const monFriHoursContent = document.getElementById('weekdays');
        const satSunHoursContent = document.getElementById('weekends');
        const restaurantNumber = document.getElementById('restaurantNumber');
        const restaurantIframe = document.getElementById('addressMap');

        if (selectedOption === 'Sydney') {
            addressStreet.innerHTML = locations[0].addressline1;
            addressSuburb.innerHTML = locations[0].addressline2;
            monFriHoursContent.innerHTML = locations[0].monFriHrs;
            satSunHoursContent.innerHTML = locations[0].satSunHrs;
            restaurantNumber.innerHTML = locations[0].contactNum;
            restaurantIframe.src = locations[0].iframe;
        } else if (selectedOption === 'Melbourne') {
            addressStreet.innerHTML = locations[1].addressline1;
            addressSuburb.innerHTML = locations[1].addressline2;
            monFriHoursContent.innerHTML = locations[1].monFriHrs;
            satSunHoursContent.innerHTML = locations[1].satSunHrs;
            restaurantNumber.innerHTML = locations[1].contactNum;
            restaurantIframe.src = locations[1].iframe;
        } else if(selectedOption === 'Brisbane') {
            addressStreet.innerHTML = locations[2].addressline1;
            addressSuburb.innerHTML = locations[2].addressline2;
            monFriHoursContent.innerHTML = locations[2].monFriHrs;
            satSunHoursContent.innerHTML = locations[2].satSunHrs;
            restaurantNumber.innerHTML = locations[2].contactNum;
            restaurantIframe.src = locations[2].iframe;
        } else {
            addressStreet.innerHTML = locations[0].addressline1;
            addressSuburb.innerHTML = locations[0].addressline2;
            monFriHoursContent.innerHTML = locations[0].monFriHrs;
            satSunHoursContent.innerHTML = locations[0].satSunHrs;
            restaurantNumber.innerHTML = locations[0].contactNum;
            restaurantIframe.src = locations[0].iframe;
        }
    });


});











