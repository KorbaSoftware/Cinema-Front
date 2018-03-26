import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Anton|Lato|Raleway');

html{
    background: url(https://s3.eu-central-1.amazonaws.com/assets.theinsiter.org/images/cropped/cinema-1-1455228829.jpg) no-repeat center center fixed; 
    background-size: cover;
    filter: grayscale(20%);
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
`
