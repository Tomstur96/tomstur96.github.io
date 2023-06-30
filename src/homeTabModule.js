import './rootStyle.css';

export function homeTab() {

    const pageData = [
        { heading: 'Welcome to BurritoMan!',
            text: 'Experience the tantalizing flavors of authentic Mexican cuisine at BurritoMan, where we take pride in crafting mouthwatering burritos that will leave you craving for more. With a fusion of traditional recipes and innovative culinary techniques, our chefs create a symphony of flavors that will transport your taste buds to the streets of Mexico.'},
        { heading: 'Order online now!',
            text: "Can't wait to dig into our scrumptious offerings? Order online and have your favorite burritos and Mexican delicacies delivered right to your doorstep. We make it convenient for you to satisfy your cravings whenever and wherever you are. Join the BurritoMan community and embark on a culinary journey that will awaken your taste buds. Come and experience the magic of Mexico at BurritoMan today!" }
    ];

    const container = document.createElement('div');


    container.classList.add('home--content', 'flex--col');
    container.setAttribute('id', 'homeTabContent');

    pageData.forEach((item, index) => {
        const heading = document.createElement('h2');
        heading.innerHTML = item.heading;
        
        if (index === 0) {
            heading.classList.add('home--title');
        } else if (index === 1) {
            heading.classList.add('home--sub-title');
        } else {
            heading.classList.add('home--title');
        }

        const para = document.createElement('p');
        para.innerHTML = item.text;
        para.classList.add('home--para');

        container.appendChild(heading);
        container.appendChild(para);
    });

    return container;
}