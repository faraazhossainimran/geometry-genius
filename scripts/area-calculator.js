function calculateTriangleArea(){
    // base 
    // const triangleBaseId = document.getElementById('triangle-base');
    // const triangleIdBaseString = triangleBaseId.value;
    // const triangleIdBaseNumber = parseFloat(triangleIdBaseString);
    // height
    // const triangleHeightId = document.getElementById('triangle-height');
    // const triangleIdHeightString = triangleHeightId.value;
    // const triangleIdHeightNumber = parseFloat(triangleIdHeightString);

    const triangleIdBaseNumber = getInputValue('triangle-base')
    const triangleIdHeightNumber = getInputValue('triangle-height')
    const area = 0.5 * triangleIdBaseNumber * triangleIdHeightNumber;

    // show Triangle areaarea old way
    // const triangleAreaId = document.getElementById('triangle-area');
    // triangleAreaId.innerText = area;

    // show Triangle area using resueable funciton
    setElementInnerText('triangle-area', area)
}

// Calculate Rectangle
function calculateRectangleArea(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleHeight = getInputValue('rectangle-length')
    const rectangle = rectangleWidth * rectangleHeight;
    // show rectangle area old way
    // const rectangleAreaId = document.getElementById('rectangle-area')
    // rectangleAreaId.innerText = rectangle;

    // show rectangle area using resueable funciton
    setElementInnerText('rectangle-area', rectangle)
}

// Calculate Parallelogram
function calculateParallelogramArea(){
    const ParallelogramBase = getInputValue('parallelogram-base');
    const ParallelogramHeight = getInputValue('parallelogram-height')
    const Parallelogram = ParallelogramBase * ParallelogramHeight;

    // show Pralleloram area old way
    // const ParallelogramAreaId = document.getElementById('parallelogram-area')
    // ParallelogramAreaId.innerText = Parallelogram;

    // show Pralleloram area new way
    setElementInnerText('parallelogram-area', Parallelogram)
}

// add to calculation entry 
function addToCalculationEntry (){
    const calculationEntryId = getInputValue('calculation-entry');
    console.log(calculationEntryId);
}

// reuseable function for input 
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    return inputValueNumber;
}

// reuseable set span, p, div, ect text
function setElementInnerText (elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// data validation
