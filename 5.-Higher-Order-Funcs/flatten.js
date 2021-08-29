let arrays = [[1, 2, 4], [4, 5, 6, 7], [7, 9]];
let new_array = arrays.reduce((flat, current) => flat.concat(current));

console.log(new_array);
