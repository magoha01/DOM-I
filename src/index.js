const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// MY CHANGES BEGIN

//nav bar 

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => link.classList.add('italic'));

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

//logo img

const logoPic = document.querySelector('#logo-img');

logoPic.setAttribute("src", 'http://localhost:9000/img/logo.png');

//cta

const ctaHead = document.querySelector('h1');
const ctaButton = document.querySelector('.cta button')
const ctaPic = document.querySelector('#cta-img')

ctaHead.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];

ctaPic.setAttribute("src", 'http://localhost:9000/img/cta.png');

//main-content

//features
const features = document.querySelector('.text-content:nth-of-type(1)')
const featureHead = features.querySelector('h4');
const featureText = features.querySelector('p');

featureHead.textContent = siteContent['main-content']['features-h4'];
featureText.textContent = siteContent['main-content']['features-content'];


//about
const about = document.querySelector('.text-content:nth-of-type(2)')
const aboutHead = about.querySelector('h4');
const aboutText = about.querySelector('p');

aboutHead.textContent = siteContent['main-content']['about-h4'];
aboutText.textContent = siteContent['main-content']['about-content'];

//middle-img

const middlePic = document.querySelector('#middle-img');

middlePic.setAttribute("src", 'http://localhost:9000/img/accent.png');

//services

const services = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
const servicesHead = services.querySelector('h4');
const servicesText = services.querySelector('p');

servicesHead.textContent = siteContent['main-content']['services-h4'];
servicesText.textContent = siteContent['main-content']['services-content'];

//product

const product = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
const productHead = product.querySelector('h4');
const productText = product.querySelector('p');

productHead.textContent = siteContent['main-content']['product-h4'];
productText.textContent = siteContent['main-content']['product-content'];

//vision

const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3)')
const visionHead = vision.querySelector('h4');
const visionText = vision.querySelector('p');

visionHead.textContent = siteContent['main-content']['vision-h4'];
visionText.textContent = siteContent['main-content']['vision-content'];