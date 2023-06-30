import { contactHeading } from './contactUsModuleScripts/contactUsHeading.js';
import { contactUsForm } from './contactUsModuleScripts/contactUsForm.js';
import { restaurantInfo } from './contactUsModuleScripts/resturantInfo.js';
import './rootStyle.css';

export function contactUsTab() {

    // Contact Us Container //

    const contactUsContainer = document.createElement('div');

    contactUsContainer.classList.add('contactUs--content', 'flex--col')
    contactUsContainer.setAttribute('id', 'contactUsTab');

    // // Contact Us Heading -- Start //

    const contactUsHeading = contactHeading();    

    // Contact Us Heading -- End//

    // Contact Us Form -- Start //

    const formContent = contactUsForm();

    // Contact Us Form -- End //


    // Resturant Address & info -- start //

    const restaurantInfoContent = restaurantInfo();


    // Resturant Address & info -- End //

    contactUsContainer.appendChild(contactUsHeading);
    contactUsContainer.appendChild(formContent);
    formContent.appendChild(restaurantInfoContent);


    return contactUsContainer;

}



