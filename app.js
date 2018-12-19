var banner = document.querySelector('#page-banner');
console.log('#page-banner node type is:', banner.nodeType) //node type is 1
console.log('#page-banner node name is:', banner.nodeName)  //node name is DIV (the type of element this is --> <div id="page-banner"> )
console.log('#page-banner has child nodes:', banner.hasChildNodes()) //has children? true

var clonedBanner = banner.cloneNode(true);  //by making the cloneNode() method true it tells cloneNode to clone the children as well as the individual line
console.log(clonedBanner);                  //clones everything from the <div> to </div> if you put false then it doesnt include anything that was nested













// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);
