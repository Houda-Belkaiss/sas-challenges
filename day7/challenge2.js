let notes = [12, 5, 19, 3, 27, 8, 14];
let temp;
for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes.length-1-i; j++) {
        if (notes[j] < notes[j+1]) {
            temp = notes[j];
            notes[j] = notes[j+1];
            notes[j+1] = temp;
        }   
    }  
}
console.log(notes);


    
