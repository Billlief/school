function getbmi(weight = 75 , height = 1.7){
    const bmi = weight /(height**2);
    return bmi
}
export {getbmi}