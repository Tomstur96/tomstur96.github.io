import '/home/tomstur/Documents/TOH/JS-Path/resturantWebpack-Assignment/src/rootStyle.css';
import { locations, typeEnquiry } from './adddressIframe.js';

export function contactUsForm() {
    const formContainer = document.createElement('div');

        const form = document.createElement('form');

        const enquiryContent = document.createElement('div');

        formContainer.classList.add('contactUsForm');
        form.setAttribute('name', 'formInput');
        form.classList.add('form--input', 'flex--col');
        form.setAttribute('id', 'form--input');
        enquiryContent.classList.add('resturantEnquiry--content', 'flex--col');


        const enquiryContentWrapper = document.createElement('div');
        const enquiryLabel = document.createElement('label');
        const enquirySelect = document.createElement('select');
        const defaultOption = document.createElement('option');

        enquiryContentWrapper.classList.add('resturantSelection--wrapper', 'flex--col');
        
        enquiryLabel.setAttribute('for', 'resturant--name');
        enquiryLabel.classList.add('resturantName');
        enquiryLabel.innerHTML = 'Which restaurant does your feedback relate';

        enquirySelect.setAttribute('name', 'resturants--name');
        enquirySelect.setAttribute('id', 'resturants--name');

        defaultOption.setAttribute('value', 'Select-Restaurant');
        defaultOption.setAttribute('selected', '');
        defaultOption.innerHTML = "Select Restaurant";

        enquirySelect.appendChild(defaultOption);

        locations.forEach((item) => {

            const enquiryOption = document.createElement('option');
            
            enquiryOption.setAttribute('value', item.site);
            enquiryOption.innerHTML = item.site;
            
            enquirySelect.appendChild(enquiryOption);

        });
        
        enquiryContentWrapper.appendChild(enquiryLabel);
        enquiryContentWrapper.appendChild(enquirySelect);
        enquiryContent.appendChild(enquiryContentWrapper);
        form.appendChild(enquiryContent);

        // Location -- End // 
    

        // Type of Enquiry -- Start //

        const enquiryType = document.createElement('div');
        
        const typeLabel = document.createElement('label');

        const typeSelect = document.createElement('select');

        enquiryType.classList.add('typeofEnquiry--content', 'flex--col');
        typeLabel.setAttribute('for', 'feedback--category');
        typeLabel.innerHTML = 'Feedback category';
        typeSelect.setAttribute('name', 'feedback--category');
        typeSelect.setAttribute('id', 'feedback--category');

        typeEnquiry.forEach((item, index) => {

            const typeOption = document.createElement('option');

            

            if(index === 0) {
                typeOption.setAttribute('selected', '');
                typeOption.setAttribute('value', item);
                typeOption.innerHTML = item;
            } else {
                typeOption.setAttribute('value', item);
                typeOption.innerHTML = item;
            }

            typeSelect.appendChild(typeOption);

        })

        
        enquiryType.appendChild(typeLabel);
        enquiryType.appendChild(typeSelect);
        enquiryContent.appendChild(enquiryType);

        // Type of Enquiry -- End //

    
    // Client Information -- Start //

    const clientInfoContainer = document.createElement('div');

    clientInfoContainer.classList.add('clientContactInfo--content');
        
        // Name Section -- Start // 

        
        const nameInfoContainer = document.createElement('div');

        nameInfoContainer.classList.add('nameInfo--wrapper', 'flex--row');

        //First Name -- start //
        const firstNameContainer = document.createElement('div');
        const firstNameLabel = document.createElement('label');
        const firstNameInput = document.createElement('input');

        firstNameContainer.classList.add('firstName--container', 'flex--col');
        firstNameLabel.setAttribute('for', 'f-name');
        firstNameLabel.innerHTML = 'First name:'

        firstNameInput.setAttribute('type', 'text');
        firstNameInput.setAttribute('autocomplete', 'off');
        firstNameInput.setAttribute('name', 'f-name');
        firstNameInput.setAttribute('id', 'f-name');

        firstNameContainer.appendChild(firstNameLabel);
        firstNameContainer.appendChild(firstNameInput)

        //First Name -- End //

        //Last Name -- Start //
        
        const lastNameContainer = document.createElement('div');
        const lastNameLabel = document.createElement('label');
        const lastNameInput = document.createElement('input');

        lastNameContainer.classList.add('lastName--container', 'flex--col');
        lastNameLabel.setAttribute('for', 'l-name');
        lastNameLabel.innerHTML = 'Last name:'

        lastNameInput.setAttribute('type', 'text');
        lastNameInput.setAttribute('autocomplete', 'off');
        lastNameInput.setAttribute('name', 'l-name');
        lastNameInput.setAttribute('id', 'l-name');

        lastNameContainer.appendChild(lastNameLabel);
        lastNameContainer.appendChild(lastNameInput);

        //Last Name -- Start //

        nameInfoContainer.appendChild(firstNameContainer);
        nameInfoContainer.appendChild(lastNameContainer);

        // Name Section -- End // 

        // Phone Section -- Start //

        const numberContainer = document.createElement('div');
        const numberLabel = document.createElement('label');
        const numberInput = document.createElement('input');

        numberContainer.classList.add('clientNumber', 'flex--col');
        numberLabel.setAttribute('for', 'phoneNumb');
        numberLabel.innerHTML = 'Contact phone number:';
        numberInput.setAttribute('type', 'tel');
        numberInput.setAttribute('autocomplete', 'off');
        numberInput.setAttribute('name', 'phoneNumb');
        numberInput.setAttribute('id', 'phoneNumb');

        numberContainer.appendChild(numberLabel);
        numberContainer.appendChild(numberInput);

        // Phone Section -- End //

        // Email Section -- Start //

        const emailContainer = document.createElement('div');
        const emailLabel = document.createElement('label');
        const emailInput = document.createElement('input');

        emailContainer.classList.add('clientEmail', 'flex--col');
        emailLabel.setAttribute('for', 'clientEmail');
        emailLabel.innerHTML = ' Your email (required)';
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('autocomplete', 'off');
        emailInput.setAttribute('name', 'clientEmail');
        emailInput.setAttribute('id', 'clientEmail');
        emailInput.setAttribute('required','');

        emailContainer.appendChild(emailLabel);
        emailContainer.appendChild(emailInput);
    
    clientInfoContainer.appendChild(nameInfoContainer);
    clientInfoContainer.appendChild(numberContainer);
    clientInfoContainer.appendChild(emailContainer);

    // Client Information -- End //

    // Client Message -- Start //

    const clientMsgContainer = document.createElement('div');
    const clientMsgLabel = document.createElement('label');
    const clientMsgTextArea = document.createElement('textarea');

    clientMsgContainer.classList.add('clientMessage--content', 'flex--col');
    clientMsgLabel.setAttribute('for', 'clientMessage');
    clientMsgLabel.innerHTML = 'Your Message:';
    clientMsgTextArea.setAttribute('placeholder', 'Please add your feedback here...');
    clientMsgTextArea.setAttribute('name', 'clientMessage');
    clientMsgTextArea.setAttribute('id', 'clientMessage');
    clientMsgTextArea.setAttribute('cols', '30');
    clientMsgTextArea.setAttribute('rows', '10');

    clientMsgContainer.appendChild(clientMsgLabel);
    clientMsgContainer.appendChild(clientMsgTextArea);

    // Client Message -- End //

    // Form Submit -- Start //

    const submitBtnContainer =  document.createElement('div');
    const submitBtn = document.createElement('input');

    submitBtnContainer.classList.add('submitForm');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Submit Feedback');
    submitBtn.classList.add('submitBtn');
    submitBtn.setAttribute('id', 'submitBtn');

    submitBtnContainer.appendChild(submitBtn);

    // Form Submit -- End //

        
    form.appendChild(clientInfoContainer);
    form.appendChild(clientMsgContainer);
    form.appendChild(submitBtnContainer);
    formContainer.appendChild(form);
    return formContainer


}