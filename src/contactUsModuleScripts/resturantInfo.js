import { locations, typeEnquiry } from './adddressIframe.js';

import '/home/tomstur/Documents/TOH/JS-Path/resturantWebpack-Assignment/src/rootStyle.css';

export function restaurantInfo() {
    // Resturant Address & info -- start //

    const resturantInfoContainer = document.createElement('div');

    resturantInfoContainer.classList.add('resturantInfo--content');

    const restaurantInfoWrapper = document.createElement('div');

    restaurantInfoWrapper.classList.add('resturantInfo--wrapper', 'flex--row');

    
    // Restaurant Address Content -- Start //
        
    const restaurantAddressContainer = document.createElement('div');

    restaurantAddressContainer.classList.add('resturantAddress--content', 'flex--col');

    

        // ResturantInfo -- Address -- Start //

        const restaurantAddressInfo = document.createElement('div');

        restaurantAddressInfo.classList.add('resturantInfo--address');

        const addressImg = document.createElement('img');
        const addressWrapper = document.createElement('div');
        const addressStreet = document.createElement('span');
        const addressSuburb = document.createElement('span');

        addressWrapper.classList.add('address--wrapper', 'flex--col');
        addressStreet.classList.add('street');
        addressStreet.setAttribute('id', 'street');
        addressSuburb.classList.add('suburbStateCode');
        addressSuburb.setAttribute('id', 'suburb');

        addressStreet.innerHTML = locations[0].addressline1;
        addressSuburb.innerHTML = locations[0].addressline2;

        addressWrapper.appendChild(addressStreet);
        addressWrapper.appendChild(addressSuburb);

        restaurantAddressInfo.appendChild(addressImg);
        restaurantAddressInfo.appendChild(addressWrapper);

        // ResturantInfo -- Address -- End //

        // ResturantInfo -- Hours -- Start //

        const restaurantHoursInfo = document.createElement('div');

        restaurantHoursInfo.classList.add('resturantInfo--hours');

        let addressImg2 = addressImg.cloneNode(false);
        const hoursWrapper = document.createElement('div');
        const monFriHoursContent = document.createElement('span');
        const satSunHoursContent = document.createElement('span');

        hoursWrapper.classList.add('hours--wrapper', 'flex--col');
        monFriHoursContent.classList.add('monFriHrs');
        monFriHoursContent.setAttribute('id', 'weekdays');
        satSunHoursContent.classList.add('satSunHrs');
        satSunHoursContent.setAttribute('id', 'weekends');

        monFriHoursContent.innerHTML = locations[0].monFriHrs;
        satSunHoursContent.innerHTML = locations[0].satSunHrs;

        hoursWrapper.appendChild(monFriHoursContent);
        hoursWrapper.appendChild(satSunHoursContent);

        restaurantHoursInfo.appendChild(addressImg2);
        restaurantHoursInfo.appendChild(hoursWrapper);

        // ResturantInfo -- Hours -- End //

        // ResturantInfo -- Number -- Start //

        const restaurantNumberInfo = document.createElement('div');

        restaurantNumberInfo.classList.add('resturantInfo--number', 'flex--row');

        let addressImg3 = addressImg.cloneNode(false);
        const restaurantNumber = document.createElement('span');

        restaurantNumber.classList.add('number');
        restaurantNumber.setAttribute('id', 'restaurantNumber');

        restaurantNumber.innerHTML = locations[0].contactNum;

        restaurantNumberInfo.appendChild(addressImg3);
        restaurantNumberInfo.appendChild(restaurantNumber);

        // ResturantInfo -- Number -- End //

    restaurantAddressContainer.appendChild(restaurantAddressInfo);
    restaurantAddressContainer.appendChild(restaurantHoursInfo);
    restaurantAddressContainer.appendChild(restaurantNumberInfo);

    // Restaurant Address Content -- End //

    // Restaurant iframeC Content -- Start //

    const restaurantIframe = document.createElement('div');

    restaurantIframe.classList.add('resturantIframe');

    const iframeContent = document.createElement('iframe');
    iframeContent.classList.add('addressMap');
    iframeContent.setAttribute('id', 'addressMap');

    Object.assign(iframeContent, {
        src: locations[0].iframe,
        frameborder: '0',
        height: '400',
        scrolling: 'no',
        marginHeight: '0',
        marginWidth: '0',
        loading: 'lazy',
        referrerpolicy: 'no-referrer-when-downgrade'
    });

    restaurantIframe.appendChild(iframeContent);  

    resturantInfoContainer.appendChild(restaurantInfoWrapper);
    restaurantInfoWrapper.appendChild(restaurantAddressContainer);
    restaurantInfoWrapper.appendChild(restaurantIframe);

    return resturantInfoContainer

}