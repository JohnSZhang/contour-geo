$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .USMap(mapUnit)
        .smallStatesCallouts()
        .render();
    });
});