$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({topoJson: mapUnit},
            { feature: 'countries', projection: d3.geo.mercator(), center: [-122, 37]})
        .render();
    })
});