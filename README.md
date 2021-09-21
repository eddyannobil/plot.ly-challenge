# plot.ly-challenge
In this challenge, an interactive dashboard is built to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare

The following was done in the process of building the interactive dashboard

1. D3 library was used to read in samples.json.


2. A horizontal bar chart with a dropdown menu was created to display the top 10 OTUs found in that individual.


-Sample_values represented the values for the bar chart.


-Otu_ids represented the labels for the bar chart.


-Otu_labels represented the hovertext for the chart.

3. A bubble chart that displays each sample was created.



-Otu_ids represented the x values.


-Sample_values represented the y values.


-Sample_values represented the marker size.


-Otu_ids represented the marker colors.


-Otu_labels represented the text values.


4. The sample metadata is displayed, i.e., an individual's demographic information.


5. Each key-value pair from the metadata JSON object is displayed on the page.

6. All of the plots update any time that a new sample is selected.
