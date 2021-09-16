// Function for change on dropdown menu
function optionChanged(selectedID){

    // Check if value is selected in dropdown
    console.log(selectedID);
 
    // Read the json file for the data
    d3.json("data/samples.json").then((data) => {
 
    // console.log(data);
    
    // Clears dropdown
    d3.select("#selDataset").html("");   
    
    // Select the metadata array and for each item append the item ID and adds ID to dropdown
    data.metadata.forEach(item =>
        {
         // console.log(item.id);
        d3.select ("#selDataset").append('option').attr('value', item.id).text(item.id);
        });
    // Selected value is passed
    d3.select("#selDataset").node().value = selectedID;

    });
}  

