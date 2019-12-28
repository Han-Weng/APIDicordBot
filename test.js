

//console.log((Post.cars[]));

var a=('21721040')

//data is the JSON string
var url='https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow';

//https://en.wikipedia.org/api/rest_v1/page/summary/Stack_Overflow out.extracts';
//https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow';



  async function asyncCall(url) {
    var fetch = require("node-fetch");

    const response =  await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow');
    const data =  await response.json();
    //return(console.log(myJson.query.pages));
  //  (console.log(data.query.pages));
    let page = data.query.pages;
let pageId = Object.keys(data.query.pages)[0];
console.log(pageId);

let content = page[pageId].extract;
console.log(content);
// let wordRegex = /\b\w{4,}\b/g;
// let words = content.match(wordRegex);

  }
  (asyncCall(url))
