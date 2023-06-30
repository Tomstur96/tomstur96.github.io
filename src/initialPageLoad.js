import './rootStyle.css';

export function headingCreation() {

    const websiteTabs = ['Home', 'Menu', 'Contact Us']
    
    const container = document.createElement('div');
    const logoLink = document.createElement('a');
    const h1 = document.createElement('h1');
    const logoImg = document.createElement('img');

    const navbar = document.createElement('nav');
    const navUl = document.createElement('ul');
    
    container.classList.add('container', 'flex--col')

    logoLink.classList.add('logo');
    h1.classList.add('logo--title');
    h1.innerHTML = 'Burrito Man';

    navbar.classList.add('nav');
    navUl.classList.add('nav--list', 'primary--list', 'flex--row');

    for(let i = 0; i < websiteTabs.length; i++) {
        const navLi = document.createElement('li');
        const navLiLink = document.createElement('button');

        navLiLink.innerHTML = websiteTabs[i];
        navLi.classList.add('nav--item');
        if (websiteTabs[i].includes(' ')) {
            const modifiedID = websiteTabs[i].replace(/\s+/g, '');
            navLiLink.setAttribute('id', `${modifiedID}--link`);
            // navLiLink.classList.add(websiteTabs[i]);
          } else {
            navLiLink.setAttribute('id', `${websiteTabs[i]}--link`);
            // navLiLink.classList.add(websiteTabs[i]);
          }
          

        navLi.appendChild(navLiLink);

        navUl.appendChild(navLi);
    }



    logoLink.appendChild(h1);
    logoLink.appendChild(logoImg);

    navbar.appendChild(navUl);

    container.appendChild(logoLink);
    container.appendChild(navbar);

    return container;
}

