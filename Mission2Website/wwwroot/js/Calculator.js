// Function to process when the grade calculator form is submitted
$("#calculateButton").click(function () {
    // Calculating final grade using the following grade scale:
    let assignWeight = .55;
    let groupWeight = .05;
    let quizWeight = .1;
    let examWeight = .2;
    let intexWeight = .1;

    let finalPercent = (assignWeight * parseInt($("#assignmentScore").val())) +
        (groupWeight * parseInt($("#groupProjectScore").val())) +
        (quizWeight * parseInt($("#quizScore").val())) +
        (examWeight * parseInt($("#examScore").val())) +
        (intexWeight * parseInt($("#intexScore").val()));
    // alert(finalPercent.toString())


    // Determining Letter grade based on final percentage
    let letterGrade = '';

    if (finalPercent >= 94) {
        letterGrade = 'A';
    } else if (finalPercent >= 90) {
        letterGrade = 'A-'
    } else if (finalPercent >= 87) {
        letterGrade = 'B+'
    } else if (finalPercent >= 84) {
        letterGrade = 'B'
    } else if (finalPercent >= 80) {
        letterGrade = 'B-'
    } else if (finalPercent >= 77) {
        letterGrade = 'C+'
    } else if (finalPercent >= 74) {
        letterGrade = 'C'
    } else if (finalPercent >= 70) {
        letterGrade = 'C-'
    } else if (finalPercent >= 67) {
        letterGrade = 'D+'
    } else if (finalPercent >= 64) {
        letterGrade = 'D'
    } else if (finalPercent >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }


    // Building strings to display final grade on index page
    finalPercent = finalPercent.toFixed(2).toString();
    let header = "<h3>Final Grade</h3>";
    let gradeMessage = "<p id='gradeMessage'>" + finalPercent + "% = " + letterGrade + "</p>";


    // Output to page, with styling
    $("#calculatedGrade").html(header + gradeMessage);
    $("#gradeMessage").css("font-weight", "bold");
    $("#gradeMessage").css("font-size", "18px");
})