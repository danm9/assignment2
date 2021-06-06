function calculateBmi(heightFt, heightIn, weight) {
    let height = (parseInt(heightFt) * 12) + parseInt(heightIn); 
    
    // BMI calculation
    let bmi = ((weight * 703)/height**2).toFixed(2);

    // bmi result
    const bmiResult = `<p class="fw-bold text-center">Your BMI: <br>${bmi}</p>`;

    // progress bar
    const progressBar = 
        `<div class="progress">
            <div class="progress-bar" role="progressbar" style="width:25%">
                <strong>Underweight <18.5</strong>
            </div>
            <div class="progress-bar bg-success" role="progressbar" style="width:30%">
                <strong>Normal Weight 18.5-24.9</strong>
            </div>
            <div class="progress-bar bg-warning" role="progressbar" style="width:25%">
                <strong>Overweight 25-29.9</strong>
            </div>
            <div class="progress-bar bg-danger" role="progressbar" style="width:20%">
                <strong>Obesity > 30</strong>
            </div>
        </div>`;

    // bmi info
    const underWeightInfo = 
        `<br>
        <div><strong>BMI is equal to or less than 18.5 (Underweight)</strong><br>
        A lean BMI can indicate that your weight maybe too low. You should consult your 
        physician to determine if you should gain weight, as low body mass can decrease 
        your body's immune system, which could lead to ilness such as disappearance of 
        periods (women), bone loss, malnutrition and other conditions. The lower your 
        BMI the greater these risks become.
        </div>`;

    const normalWeightInfo = 
        `<br>
        <div><strong>BMI is between 18.5 and 24.9 (Normal Weight)</strong><br>
        People whose BMI is within 18.5 to 24.9 possess the ideal amount of body weight, 
        associated with living longest, the lowest incidence of serious ilness, as well 
        as being perceived as more physically attractive than people with BMI in higher 
        or lower ranges. However, it may be a good idea to check your Waist Circumference 
        and keep it within the recommended limits.
        </div>`;

    const overWeightInfo = 
        `<br>
        <div><strong>BMI is between 25 and 29.9 (Overweight)</strong><br>
        People falling in this BMI range are considered overweight and would benefit from 
        finding healthy ways to lower their weight, such as diet and exercise. Individuals 
        who fall in this range are at increased risk for a variety of ilnesses. If your 
        BMI is 27-29.99 your risk of health problems becomes higher. In a recent study an 
        increased rate of blood pressure, diabetes and heart disease was recorded at 27.3 
        for women and 27.8 for men. It may be a good idea to check your Waist Circumference 
        and compare it with the recommended limits.
        </div>`;
        
    const obeseInfo = 
        `<br>
        <div><strong>BMI is greater than 30 (Obese)</strong><br>
        Individuals with a BMI greater than 30 are in a physically unhealthy condition, 
        which puts them at risk for serious ilnesses such as heart disease, diabetes, high 
        blood pressure, gall bladder disease, and some cancers. This holds especially true 
        if you have a larger than recommended Waist Size. These people would benefit greatly 
        by modifying their lifestyle. Ideally, see your doctor and consider reducing your 
        weight by 5-10 percent. Such a weight reduction will result in considerable health 
        improvements.
        </div>`;

    // if statement for determining where the user falls on the scale
    if (bmi < 18.5) {
        const bmiOutPut = document.getElementById("bmiTable").innerHTML = 
        `<br>
        <div class="container result">
            <div class="row">
                <div class="col text-primary">${bmiResult}</div>
                <div class="col-4"></div>
                <div class="col"></div>
                <div class="col"> </div>
            </div>
        </div>
        ${progressBar}
        ${underWeightInfo}`;
    } else if (bmi > 18.4 && bmi < 25) {
        const bmiOutPut = document.getElementById("bmiTable").innerHTML = 
        `<br>
        <div class="container result">
            <div class="row">
                <div class="col"></div>
                <div class="col-4 text-success">${bmiResult}</div>
                <div class="col"></div>
                <div class="col"> </div>
            </div>
        </div>
        ${progressBar}
        ${normalWeightInfo}`;
    } else if (bmi > 24.9 && bmi < 30) {
        const bmiOutPut = document.getElementById("bmiTable").innerHTML = 
        `<br>
        <div class="container result">
            <div class="row">
                <div class="col"></div>
                <div class="col-4"></div>
                <div class="col text-warning">${bmiResult}</div>
                <div class="col"> </div>
            </div>
        </div>
        ${progressBar}
        ${overWeightInfo}`;
    } else if (bmi >=30) {
        const bmiOutPut = document.getElementById("bmiTable").innerHTML = 
        `<br>
        <div class="container result">
            <div class="row">
                <div class="col"></div>
                <div class="col-4"></div>
                <div class="col"></div>
                <div class="col text-danger">${bmiResult}</div>
            </div>
        </div>
        ${progressBar}
        ${obeseInfo}`;
    } else {
        const bmiOutPut = document.getElementById("bmiTable").innerHTML = 
        `<p class="fw-bold text-center">Your Input Is Invalid</p>`;
    }
}; 

// clear button
function Clear(){
    document.getElementById('bmiTable').innerHTML='';
  }