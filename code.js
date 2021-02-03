$(document).ready(
    function () {
        $("#BMIButton").click(calculateBMI);

        function calculateBMI()
        {
            // define height
            let height = $("#height").val();
            height = parseFloat(height)
            // define weight
            let weight = $("#weight").val();
            weight = parseFloat(weight);
            // define finalBMI as BMI calculation
            let finalBmi = (weight/(height*height)) * 703;
            // define parameters of weight
            if(weight < 88 || weight > 353){
                alert("Weight outside parameters");
                return;
            }
            // define parameters of height
            if(height < 59 || height > 79){
                alert("Height outside parameters");
                return;
            }
            // set value for underweight
            if(finalBmi < 18.5){
                var desc = "underweight.";
            }
            // set value for healthy
            else if(finalBmi >= 18.5 && finalBmi < 25){
                var desc = "healthy.";
            }
            // set value for overweight
            else if(finalBmi >= 25 && finalBmi < 30){
                var desc = "overweight.";
            }
            // set value for obese
            else if(finalBmi >= 30){
                var desc = "obese."
            }
            // set alert for if boxes are null
            else {
                alert("Please fill in boxes correctly");
                return;
            }

            // output message toFixed(1)
            let outputMessage = `Your BMI is ${finalBmi.toFixed(1)} which means you are ${desc}`;
            $("p#result").text(outputMessage);
        }
    }
);