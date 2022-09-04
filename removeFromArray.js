//we have 2 solutions here , an easier one and a more advanced one.
//the easiest way to get an array of all of the arguments that are passed to a function
//is using the rest operator.if this is unfamiliar to you look it up

const removeFromArray =function(...args) {
    //the very first item in our list of arguments is the array, we pull it out with args[0]
    const array=args[0];
    //creating a new empty array
    const newArray=[];
    //use forEach to go through the array
    array.forEach((item) => {
        //push every element into the new array 
        //unless it is included in the function arguments
        //so we create a new array with every item, except those that should be removed
        if (!args.includes(item)) {
            newArray.push(item);
        }
      });
        //and return that array
        return newArray;
    };

    //A simpler ,but more advanced way to do it is to use the 'filter' function,
    //which basically does what we did with the forEach above.

    //var removeFromArray=function(...args) {
    //   const array =args[0]
    //   return array.filter(val =>!args.inlcudes(val))
    //}
    //
    module.exports=removeFromArray;

