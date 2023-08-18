function calculateTriangleArea(){
    // base 
    // const triangleBaseId = document.getElementById('triangle-base');
    // const triangleIdBaseString = triangleBaseId.value;
    // const triangleIdBaseNumber = parseFloat(triangleIdBaseString);
    const triangleIdBaseNumber = getInputValue('triangle-base')
    // height
    // const triangleHeightId = document.getElementById('triangle-height');
    // const triangleIdHeightString = triangleHeightId.value;
    // const triangleIdHeightNumber = parseFloat(triangleIdHeightString);
    const triangleIdHeightNumber = getInputValue('triangle-height')
    const area = 0.5 * triangleIdBaseNumber * triangleIdHeightNumber;
    // console.log(area)

    // area 
    const triangleAreaId = document.getElementById('triangle-area');
    triangleAreaId.innerText = area;
}

// Calculate Rectangle
function calculateRectangleArea(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleHeight = getInputValue('rectangle-length')
    const rectangle = rectangleWidth * rectangleHeight;
    const rectangleAreaId = document.getElementById('rectangle-area')
    rectangleAreaId.innerText = rectangle;
}


function calculateParallelogramArea(){
    const ParallelogramBase = getInputValue('parallelogram-base');
    const ParallelogramHeight = getInputValue('parallelogram-height')
    const Parallelogram = ParallelogramBase * ParallelogramHeight;
    const ParallelogramAreaId = document.getElementById('parallelogram-area')
    ParallelogramAreaId.innerText = Parallelogram;
}


// add to calculation entry 
function addToCalculationEntry (){
    const calculationEntryId = getInputValue('calculation-entry');
    console.log(calculationEntryId);
}


// useable function for input 
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    return inputValueNumber;
}

// useable function for area innerText
