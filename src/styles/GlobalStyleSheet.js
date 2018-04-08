import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Anton|Lato|Raleway');

* {
    box-sizing: border-box;
}

html{
    background: url(http://www.kinyu-z.net/data/wallpapers/228/1503818.jpg) no-repeat center center fixed; 
    background-size: cover;
}
body {
    font-family: 'Lato', sans-serif;
    color: #222;
    margin: 0;
}
h1 {
    font-family: 'Anton', sans-serif;
    color: #ddd;
    margin: 0;
}
h2 {
    font-family: 'Raleway', sans-serif;
    color: #444;
}

.dropdown-content {
    position: absolute;
    display: none;
    min-width: 160px;
    z-index: 1;
}

.dropdown-content a {
    color: #ddd;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown:hover .dropdown-content {
    display: block;
}


`
