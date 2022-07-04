const checkLicensePlateInHanoi = (licensePlate) => {
    const array = ['29', '30', '31', '32', '33', '40']
    for (const value of array) {
        if (licensePlate.startsWith(value)) {
            return true;
        }

    }

    return false;
}
const licensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let licensePlateHanois = [];
for (const value of licensePlates) {
    if (checkLicensePlateInHanoi(value)) {
        licensePlateHanois.push(value);
    }

}
console.log(`Cac bien so xe Ha Noi la: ${licensePlateHanois}`)

