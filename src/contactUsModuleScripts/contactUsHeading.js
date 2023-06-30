import '/home/tomstur/Documents/TOH/JS-Path/resturantWebpack-Assignment/src/rootStyle.css';

export function contactHeading() {

        // Contact Us Container //
        // const contactUsContainer = document.createElement('div');

        // Contact Us Heading -- Start //
    
        const contactUsHeading = document.createElement('div');
        const contactUsTitle = document.createElement('h1');
        const contactUsPara = document.createElement('p');
    
        // contactUsContainer.classList.add('contactUs--content', 'flex--col')
        // contactUsContainer.setAttribute('id', 'contactUsTab');
    
        contactUsHeading.classList.add('contactUs--heading');
    
        contactUsTitle.classList.add('contactUs--title');
        contactUsTitle.innerHTML = 'Contact Us';
    
        contactUsPara.classList.add('para--contactUs');
        contactUsPara.innerHTML = 'Fill in the form below and we\'ll get back to you as soon as we can!';
    
        contactUsHeading.appendChild(contactUsTitle);
        contactUsHeading.appendChild(contactUsPara);
        
    
        // Contact Us Heading -- End//

        return contactUsHeading;
}