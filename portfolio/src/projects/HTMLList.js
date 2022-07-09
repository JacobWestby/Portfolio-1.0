const cactus = require('./genesis/images/cactus-img4.png');
// const colorBalls = require('./genesis/images/color-balls-img8.png');
// const contactMap = require('./genesis/images/contact-map.png');
// const faceWhite = require('./genesis/images/flower-face-img6.png');
// const flowerField = require('./genesis/images/flower-field-img10.png');
// const fotterLogoBall = require('./genesis/images/fotter-logo-ball.png');
// const fotterLogoInsta = require('./genesis/images/fotter-logo-insta.png');
// const fotterLogoTwitter = require('./genesis/images/fotter-logo-twitter.png');
// const greenImg = require('./genesis/images/green-ikmg12.png');
// const liberty = require('./genesis/images/liberty-img5.png');
// const moon = require('./genesis/images/moon-img7.png');
// const piano = require('./genesis/images/piano-img9.png');
// const projectDark = require('./genesis/images/project-dark.png');


const rawHTML = [
  {
    // Empty object for array index 0
  },
  {
    // html: genesisHTML,
    name: "muscisian"
  },
  {
    html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="genesis/styles/reset.css" />
            <link rel="stylesheet" href="./genesis/styles/index.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" rel="stylesheet" />
            <title>Genesis</title>
          </head>
        
          <body>
            <!-- HEADER -->
            <header>
              <!-- NAV -->
              <nav>
                <h1 class="logo"><a href="index.html">Genesis</a></h1>
                <ul class="nav__list">
                  <li class="nav__list-item"><a href="./pages/projects.html">Projects</a></li>
                  <li class="nav__list-item"><a href="./pages/contact.html">Contact</a></li>
                </ul>
              </nav>
        
              <!-- HEADER CONTENT -->
              <div class="header__content">
                <h2>Shooting stars</h2>
                <div class="header__content-flex">
                  <p class="header__content-flex-text">Hello, I’m Bakhtiyar Sattarov, <span class="header__content-flex-purple">product designer</span> with experience in studios and startups</p>
                  <p class="header__content-flex-quote">Design is about process</p>
                </div>
              </div>
            </header>
        
            <!-- MAIN -->
            <!-- GRID -->
            <main>
              <div class="grid__container">
                <img src=${cactus} alt="Statue" class="grid__container-item1 grid-item" />
                <img src=${cactus} alt="Person thinking" class="grid__container-item2 grid-item" />
                <img src=${cactus} alt="Face cracked with flowers" class="grid__container-item3 grid-item" />
                <img src=${cactus} alt="Person on a cactus" class="grid__container-item4 grid-item" />
                <img src=${cactus} alt="Statue of Liberty illustration" class="grid__container-item5 grid-item" />
                <img src=${cactus} alt="Face with white paint" class="grid__container-item6 grid-item" />
                <img src=${cactus} alt="Moon illustration" class="grid__container-item7 grid-item" />
                <img src=${cactus} alt="Colored lines and balls" class="grid__container-item8 grid-item" />
                <img src=${cactus} alt="Piano illustration" class="grid__container-item9 grid-item" />
                <img src=${cactus} alt="Person in a field of flowers" class="grid__container-item10 grid-item" />
                <img src=${cactus} alt="Person walking towards a sunset" class="grid__container-item11 grid-item" />
                <img src=${cactus} alt="Green flowers" class="grid__container-item12 grid-item" />
              </div>
        
              <!-- TEXT CONTENT -->
              <div class="text__content">
                <h3>We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details</h3>
        
                <div class="text__content-items-cont">
                  <div class="flex__left">
                    <p class="text__content-items-cont-items">Multimedia</p>
                    <p class="text__content-items-cont-items">Interactive Design</p>
                    <p class="text__content-items-cont-items">Branding</p>
                  </div>
                  <div class="flex__right">
                    <p class="text__content-items-cont-items">Creative Design</p>
                    <p class="text__content-items-cont-items">Packaging</p>
                    <p class="text__content-items-cont-items">Coding</p>
                  </div>
                </div>
              </div>
        
              <!-- AWARDS -->
              <div class="awards__grid">
                <h2 class="awards-item1">Awards</h2>
                
                <h3 class="awards-item2">Site of the day</h3>
        
                <div class="awards-item3">
                  <h4>Genisis UI kit</h4>
                  <p>Application that helps to find nearest sport centres in your area</p>
                </div>
        
                <p class="awards-item4">2018</p>
        
                <h3 class="awards-item5">Best navigation</h3>
        
                <div class="awards-item6">
                  <h4>Genesis Template</h4>
                  <p>Application that helps to find nearest sport centres in your area</p>
                </div>
        
                <p class="awards-item7">2018</p>
              </div>
        
              <div class="design__grid">
                <h2 class="awards-item1">CSSDesign Awards</h2>
        
                <h3 class="awards-item2">Site of the day</h3>
        
                <div class="awards-item3">
                  <h4>Genisis UI kit</h4>
                  <p>Application that helps to find nearest sport centres in your area</p>
                </div>
        
                <p class="awards-item4">2017</p>
        
                <h3 class="awards-item5">Best navigation</h3>
        
                <div class="awards-item6">
                  <h4>Genesis Template</h4>
                  <p>Application that helps to find nearest sport centres in your area</p>
                </div>
        
                <p class="awards-item7">2017</p>
              </div>
            </main>
        
            <!-- FOOTER -->
            <footer>
              <h2 class="footer__logo">Genesis</h2>
              <div class="footer__links">
                <div class="footer__links-pages">
                  <a href="./pages/projects.html">Projects</a>
                  <a href="./pages/contact.html">Contact</a>
                </div>
                <div class="footer__links-socials">
                  <img src="images/fotter-logo-ball.png" alt="Link to not sure what social that is" />
                  <img src="images/fotter-logo-insta.png" alt="Link to instagram" />
                  <img src="images/fotter-logo-twitter.png" alt="Link to twitter" />
                </div>
              </div>
            </footer>
          </body>
        </html>
        
        `,
    name: "genesis"
  },
  {
    html: ``,
    name: "reactGame",
  },
  {
    html: ``,
    name: "productly",
  },
  {
    html: ``,
    name: "feedback",
  },
  {
    html: ``,
    name: "bhramon"
  },
  {
    html: ``,
    name: "bankAccount"
  },
]
  ;

export default rawHTML

