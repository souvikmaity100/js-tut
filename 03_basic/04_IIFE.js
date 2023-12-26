// Immediately Invoked Function Expressions IIFE



// named IIFE
(function abcd(){
    console.log(`DB CONNECTED`);
})();

// NB: if we want two IIFE in one page we need to end the first IIFE with ';'(samiclone)

// unNamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sam');