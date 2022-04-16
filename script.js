const Menubtn = document.getElementById('menubar');

const style = document.createElement('style');
style.innerHTML = `
header .upper-bar {
    display:none;
}

a {
    color: black;
    text-decoration: none;
}

header {
    display: none;
    top:0;
    left:0;
    width: 100%;
    height:100vh;
    background-color: white;
}

nav {
    top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5vw 12vw;
    gap: 5vh;
    overflow: hidden;
    position: relative;
}

nav .logo-menu {
    display: flex;
    box-shadow: 2px var(--secondary);
    border:2px solid white;
    align-items: center;
}

nav .logo-menu img {
    height: 7vh;
    display: block;
}

nav .logo-menu h3 {
    font-size: 3vw;
}

nav ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
}

nav ul li {
    margin-bottom: 4vw;
}

nav .campaign {
    color:var(--primary);
    border: 5px solid var(--primary);
    padding: 0.5vw 1vw;
    font-size: 4vw;
}

#menu-bar {
    display:block;
    top: -98vh;
    background-image: url(images/cancel.png);
    background-repeat: no-repeat;
    height: 40px;
    position: relative;
    background-position: right;
    cursor:pointer;
}

`;

const closebtn = document.querySelector('#menu-bar');

function closeMenu() {
  document.querySelector('header').classList.remove('menu-toggle');
  document.body.style.overflow = 'scroll';
  document.getElementById('menu-bar').style.display = 'none';
}

function openMenu() {
  document.head.appendChild(style);

  document.querySelector('header').classList.add('menu-toggle');
  document.body.style.overflow = 'hidden';
  document.getElementById('menu-bar').style.display = 'block';
}
Menubtn.addEventListener('click', openMenu);
closebtn.addEventListener('click', closeMenu);

const link = document.querySelectorAll('.menu-link');
link.forEach((i) => {
  i.addEventListener('click', closeMenu);
});

const speakers = [
  {
    name: 'Wayne Hemingway MBE',
    proffession:
          'Co-founder of Red or Dead and HemingwayDesign',
    description:
          ' Our keynote speaker Wayne Hemingway had a colorful upbringing and got interested in creativity, arts, and design from an early age. Wayne is a well-known name in the fashion and design world, and he talks about housing, urban design, education, and the creative sector.',
    photo: 'images/wayne-hemingway-newsite-300x230.jpg',
    alt: 'Wayne',
  },
  {
    name: 'Lady Michelle Mone OBE',
    proffession:
          'Creator of Ultimo and Entrepreneur',
    description:
          ' Speaker Michelle Mone, Lady of Mayfair OBE is one of Britain’s most influential ladies. As an internationally sought after speaker, Baroness Mone inspires people both as an entrepreneur and an advocate for equality for women in business globally.',
    photo: 'images/michelle-mone-profile-image-iloveimg-resized-1.jpg',
    alt: 'Michelle',
  },
  {
    name: 'Alexandra Wilkis Wilson',
    proffession:
          'Innovation icon and award-winning entrepreneur',
    description:
          ' Speaker Alexandra Wilkis Wilson shares stories that make a huge difference in for businesses of every size around the world. She is a New York City-based entrepreneur and deal-maker in digital commerce, luxury merchandising and business development.',
    photo: 'images/Alexandra-Wilkis-Wilson-250.jpg',
    alt: 'Alexandra',
  },
  {
    name: 'Noëlla Coursaris Musunka',
    proffession:
          'Advocate, Philanthropist & founder of Malaika',
    description:
          'Our keynote speaker Noëlla Coursaris Musunka is known from her years of fashion modelling, however, she has also become a sought-after speaker for her advocacy of young girls’ education. Noëlla is the founder of Malaika',
    photo: 'images/noella-coursaris-musunka_250.jpeg',
    alt: 'Noëlla',
  },
  {
    name: 'Anna Bance',
    proffession:
          'Award-winning Entrepreneur and founder of GirlMeetsDress.com',
    description:
          ' Speaker Anna Bance is the founder of Europe’s leading online rental website, GirlMeetsDress.com. Anna is an award-winning entrepreneur and has a background in fashion and PR. She is the founder of the very first fashion rental company.',
    photo: 'images/anna-bance_250.jpg',
    alt: 'Anna',
  },
  {
    name: 'Barjis Chohan',
    proffession:
          'Social entrepreneur and multicultural fashion designer ',
    description:
          ' Our keynote speaker Barjis Chohan is a woman of many talents; a designer, social entrepreneur, and a passionate advocate for diversity and inclusion in business. She is a great speaker on topics ranging from womens’ rights to making the arts accessible to all.',
    photo: 'images/barjis-chohan-021-scaled-e1609754079100-300x300.jpg',
    alt: 'Barjis',
  },
];

const generateSpeaker = (speaker) => {
  const container = document.createElement('div');
  const image = document.createElement('div');
  const chess = document.createElement('img');
  const photo = document.createElement('img');
  const fullname = document.createElement('h3');
  const proffession = document.createElement('i');
  const horizontal = document.createElement('hr');
  const description = document.createElement('p');
  const information = document.createElement('div');
  container.appendChild(image);
  container.appendChild(information);
  image.appendChild(chess);
  image.appendChild(photo);
  information.appendChild(fullname);
  information.appendChild(proffession);
  information.appendChild(horizontal);
  information.appendChild(description);
  container.className = 'speaker-row';
  image.className = 'speaker-img';
  chess.className = 'checker';
  photo.className = 'pro';
  horizontal.className = 'hor';
  information.className = 'speaker-dec';
  document.querySelector('.speaker-container').appendChild(container);
  fullname.innerText = speaker.name;
  chess.src = 'images/Chess_Board.png';
  photo.src = speaker.photo;
  photo.alt = speaker.alt;
  proffession.innerText = speaker.proffession;
  description.innerText = speaker.description;
};

speakers.map((speaker, index) => {
  if (window.innerWidth <= 768) {
    if (index < 2) {
      generateSpeaker(speaker);
    }
  } else {
    generateSpeaker(speaker);
  }
  return speaker;
});

const openMore = () => {
  speakers.map((speaker, index) => {
    if (index >= 2) generateSpeaker(speaker);
    return speaker;
  });
};

const moreBtn = document.querySelector('.more');
function removeMore() {
  moreBtn.classList.add('remove');
}
moreBtn.addEventListener('click', openMore);
moreBtn.addEventListener('click', removeMore);
