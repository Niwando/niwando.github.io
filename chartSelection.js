document.addEventListener('DOMContentLoaded', function(e) {

    // ================================= Zum wechseln zwischen "Stock Analysis" und "Market Analysis" ======================
    d3.select("#buttonCandlechart").on("click", function() {
        d3.select("#candlechart")
            .style("display", "flex")
        d3.select("#linechart")
            .style("display", "none")
        d3.select("#buttonLinechart")
            .style("background-color", "#a9b0b8")
            .style("color", "#33383e")
        d3.select("#buttonCandlechart")
            .style("background-color", "#33383e")
            .style("color", "#a9b0b8")
    })
    d3.select("#buttonLinechart").on("click", function() {
        d3.select("#candlechart")
            .style("display", "none")
        d3.select("#linechart")
            .style("display", "flex")
        d3.select("#buttonCandlechart")
            .style("background-color", "#a9b0b8")
            .style("color", "#33383e")
        d3.select("#buttonLinechart")
            .style("background-color", "#33383e")
            .style("color", "#a9b0b8")
    })
    // ==================================================================================================




    // ========== Für das Wechseln zwischen Treemap und Linechart auf der Market Analysis Seite ==========
    d3.select("#button_map").on("click", function() {
        d3.select("#linechart_area")
            .style("display", "none")
        d3.select("#treemap")
            .style("display", "block")
        d3.select("#button_linechart")
            .style("background-color", "#a9b0b8")
            .style("color", "#33383e")
        d3.select("#button_map")
            .style("background-color", "#e7880d")
            .style("color", "#33383e")
        d3.select("#linechart_legend")
            .style("display", "none")
        d3.select("#treemap_explanation")
            .style("display", "block")
    })
    d3.select("#button_linechart").on("click", function() {
        d3.select("#treemap")
            .style("display", "none")
        d3.select("#linechart_area")
            .style("display", "block")
        d3.select("#button_map")
            .style("background-color", "#a9b0b8")
            .style("color", "#33383e")
        d3.select("#button_linechart")
            .style("background-color", "#e7880d")
            .style("color", "#33383e")
        d3.select("#treemap_explanation")
            .style("display", "none")
        d3.select("#linechart_legend")
            .style("display", "block")
    })
})