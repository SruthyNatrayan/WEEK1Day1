const browserVersion = "Chrome"; // Declared a global constant variable called browserVersion and assigned the value as "Chrome".
function getBrowserVersion() {   // Create a function named getBrowserVersion
    if (browserVersion === "Chrome") { // To Check whether the browserVersion value is "Chrome"
        //var browserVersion = "Chrome Version 10"; // Declare a local variable with the same name browserVersion  // using var and assign value
        let browserVersion = "Chrome version 10"; //using let
    }
    console.log(browserVersion);  // Since var is function-scoped, it can be accessed outside the if block
}
getBrowserVersion(); // Call the getBrowserVersion function