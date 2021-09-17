// Function for change on dropdown menu
function optionChanged(selectedID){

   // Check if value is selected in dropdown
   console.log(selectedID);

   // Read the json file for the data
   d3.json("data/samples.json").then((data) => {

  //  console.log(data);

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
    
   // Check the metadata loaded for the selected ID
   console.log(idMetadata);
   
   const panelDisplay = d3.select("#sample-metadata");
   panelDisplay.html("");
   Object.entries(idMetadata[0]).forEach(item=> 
      {
         // console.log(item);
         panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
      });

   // BAR CHART

   // Filter sample array data for the selected ID
   const idSample = data.samples.filter(item => parseInt(item.id) == selectedID);
   
   // // Check values
   // console.log(typeof parseInt(item.id));
   // console.log(idSample[0].sample_values);  
   // console.log(idSample[0].otu_ids);  
   // console.log(idSample[0].otu_labels);  
   
   // Slice top 10 sample values
   var sampleValue = idSample[0].sample_values.slice(0,10);
   sampleValue= sampleValue.reverse();
   var otuID = idSample[0].otu_ids.slice(0,10);
   otuID = otuID.reverse();
   var otuLabels = idSample[0].otu_labels
   otuLabels = otuLabels.reverse();



   // Y axis of bar chart
   const yAxis = otuID.map(item => 'OTU' + " " + item);
      // console.log(yAxis);
   
   // Define the layout and trace object, edit color and orientation
      const trace = {
      y: yAxis,
      x: sampleValue,
      type: 'bar',
      orientation: "h",
      text:  otuLabels,
      marker: {
         color: 'rgb(154, 140, 152)',
         line: {
            width: 3
        }
       }
      },
      layout = {
      title: 'Top 10 Operational Taxonomic Units (OTU)/Individual',
      xaxis: {title: 'Number of Samples Collected'},
      yaxis: {title: 'OTU ID'}
      };

      // Plot using Plotly
      Plotly.newPlot('bar', [trace], layout,  {responsive: true});    
      

// Initial test starts at ID 940
optionChanged(940);

// Event on change takes the value and calls the function during dropdown selection
d3.select("#selDataset").on('change',() => {
optionChanged(d3.event.target.value);
})
})};