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
    
    // Filter Metadata for selected ID from dropdown
    const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
       // {
       //    console.log("------------------------")
       //    console.log(item);
       //    console.log(item.id);
          
       // });
    // Check the metadata loaded for the selected ID
    console.log(idMetadata);
    
    const panelDisplay = d3.select("#sample-metadata");
    panelDisplay.html("");
    Object.entries(idMetadata[0]).forEach(item=> 
       {
          // console.log(item);
          panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
       });
    });
}  

