// I use function for the word used on button
const calculatelove= function () {

        const name1 = document.getElementById('name1').value.trim(); //getElementById : this word is used for the java script to receive names based on id provided in html label || value.trim = value retrieves the current value entered by the user.
        const name2 = document.getElementById('name2').value.trim();
      
        if (name1=== "" || name2=== "" ) {
            alert("Please enter both names.");
        }else {
            const lovepercentage = Math.floor(Math.random() * 101);
            const Result = document.getElementById("Result");
            Result.innerHTML = `${name1} and ${name2}'s love percentage:' ${lovepercentage}`; 

            if (lovepercentage <30){
                Result.innerHTML += '<br> Not a Greate Match . keeping looping!'
            } else if (lovepercentage >= 30 && lovepercentage < 70) {
                Result.innerHTML += '<br> Greate Match! Love is the Air!'
            }else {
                Result.innerHTML += '<br> Greate Match! Love is in the Air'
            }
        }

    }