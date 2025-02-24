import * as d3 from "d3";
import React, { useEffect } from 'react'; // Import useEffect

export default function DataThree(props) {
    const data = props.data.data.myBudget;

    useEffect(() => {
        d3.select(".pie-chart").selectAll("svg").remove();

        const width = 960,
            height = 450,
            radius = Math.min(width, height) / 2;

        const svg = d3.select(".pie-chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")

        svg.append("g")
            .attr("class", "slices");
        svg.append("g")
            .attr("class", "labels");
        svg.append("g")
            .attr("class", "lines");
        
        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.title))
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        const pie = d3.pie()
            .sort(null)
            .value(function(d) { return d.budget; });

        const arc = d3.arc()
            .outerRadius(radius * 0.8)
            .innerRadius(radius * 0.4);

        const outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);

        svg.attr("transform", "translate(" + width / 2.5 + "," + height / 2  + ")");

        function midAngle(d) {
            return d.startAngle + (d.endAngle - d.startAngle) / 2;
        }

        var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), d => d.data.title);

        slice.enter().append("path")
            .attr("class", "slice")
            .attr("d", arc)
            .style("fill", d => color(d.data.title));

        slice.transition().duration(1000)
            .attrTween("d", function(d) {
                this._current = this._current || d;
                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) { return arc(interpolate(t)); };
            });

        slice.exit().remove();


        var text = svg.select(".labels").selectAll("text")
        .data(pie(data), d => d.data.title);

        text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function(d) {
            return d.data.title;
        })
        .attr("transform", function(d) {
            var pos = outerArc.centroid(d);
            pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
        })
        .style("text-anchor", function(d) {
            return midAngle(d) < Math.PI ? "start" : "end";
        });

        text.exit().remove();

        const polyline = svg.select(".lines").selectAll("polyline")
            .data(pie(data), d => d.data.title);

        polyline.enter().append("polyline")
            .attr("points", function(d) {
                var pos = outerArc.centroid(d);
                pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
                return [arc.centroid(d), outerArc.centroid(d), pos];
            });

        polyline.exit().remove();

    }, [data]);

    return <div className="pie-chart"></div>;
}