<p>One of my clients buys and sells glass/prints/paintings/wire wrap type art pieces.
In order to expand his business he wanted a custom built website that had tools and features
that differentiated him from his competition. The website/app is built in React. This project is still in progress.
Th largest challenge so far has been keeping performance high. This application utilizes a lot of images; making
sure content loads lazily and only when needed is a must.</p>
<br />
<p>Webpack has been a game changer with this project. I managed to reduce the bundle size by
over 30% - from 1.4mb to 900kb. To get the bundle size down, I refactored the application and utilized code splitting
to separate the code into smaller bundles that load on demand. </p>
<br />
<div className="project-item-logo-container">
    <div>
        <a href="https://webpack.js.org/" target="_blank"><img src={webpackLogo} className="project-item-logo" /></a>
    </div>
    <div>
        <a href="https://reactjs.org/" target="_blank"><img src={reactLogo} className="project-item-logo" /></a>
    </div>
    <div>
        <a href="https://redux.js.org/" target="_blank"><img src={reduxLogo} className="project-item-logo" /></a>
    </div>
    <div>
        <a href="https://firebase.google.com/" target="_blank"><img src={firebaseLogo} className="project-item-logo" /></a>
    </div>
</div>
