function showDishes()
{
    var dishes = [
        "Jollof Rice - $12",
        "Suya - $10",
        "Fufu & Soup - $15",
        "Zobo - $4",
        "Chapman - $5"
    ];

    var number = document.getElementById("dishNumber").value;

    var output = "";

    if(number < 1 || number > dishes.length)
    {
        output = "Please enter a number between 1 and 5.";
    }

    else
    {
        for(var i = 0; i < number; i++)
        {
            output += dishes[i] + "<br>";
        }
    }

    document.getElementById("output").innerHTML = output;
}