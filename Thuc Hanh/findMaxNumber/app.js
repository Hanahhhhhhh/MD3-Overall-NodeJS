const array = [10,8,6,3,9,7,5,4,2];
let max = array[0];
for (const value of array) {
    if (value > max){
        max = value;
    }

}
console.log(`Gia tri lon nhat cua mang la: ${max}`);
