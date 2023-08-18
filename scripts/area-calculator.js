function calculateTriangleArea(){
    // base 
    // const triangleBaseId = document.getElementById('triangle-base');
    // const triangleIdBaseString = triangleBaseId.value;
    // const triangleIdBaseNumber = parseFloat(triangleIdBaseString);
    const triangleIdBaseNumber = getInputValue('triangle-base')
    // height
    const triangleHeightId = document.getElementById('triangle-height');
    const triangleIdHeightString = triangleHeightId.value;
    const triangleIdHeightNumber = parseFloat(triangleIdHeightString);
    const area = 0.5 * triangleIdBaseNumber * triangleIdHeightNumber;
    console.log(area)

    // area 
    const triangleAreaId = document.getElementById('triangle-area');
    console.log(triangleAreaId.innerText)
    triangleAreaId.innerText = area;
}


// useable function for input 
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    return inputValueNumber;
}

// console.log(getInputValue(5))