var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_1011_PuntosLinderos_1 = new ol.format.GeoJSON();
var features_1011_PuntosLinderos_1 = format_1011_PuntosLinderos_1.readFeatures(json_1011_PuntosLinderos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1011_PuntosLinderos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1011_PuntosLinderos_1.addFeatures(features_1011_PuntosLinderos_1);
var lyr_1011_PuntosLinderos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1011_PuntosLinderos_1, 
                style: style_1011_PuntosLinderos_1,
                popuplayertitle: '1011_PuntosLinderos',
                interactive: false,
                title: '<img src="styles/legend/1011_PuntosLinderos_1.png" /> 1011_PuntosLinderos'
            });
var format_Polgonos_2 = new ol.format.GeoJSON();
var features_Polgonos_2 = format_Polgonos_2.readFeatures(json_Polgonos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polgonos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polgonos_2.addFeatures(features_Polgonos_2);
var lyr_Polgonos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polgonos_2, 
                style: style_Polgonos_2,
                popuplayertitle: 'Polígonos',
                interactive: true,
                title: '<img src="styles/legend/Polgonos_2.png" /> Polígonos'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1011_PuntosLinderos_1.setVisible(false);lyr_Polgonos_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1011_PuntosLinderos_1,lyr_Polgonos_2];
lyr_1011_PuntosLinderos_1.set('fieldAliases', {'n': 'n', 'lon': 'lon', 'lat': 'lat', });
lyr_Polgonos_2.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_1011_PuntosLinderos_1.set('fieldImages', {'n': '', 'lon': '', 'lat': '', });
lyr_Polgonos_2.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_1011_PuntosLinderos_1.set('fieldLabels', {'n': 'no label', 'lon': 'no label', 'lat': 'no label', });
lyr_Polgonos_2.set('fieldLabels', {'begin': 'inline label - always visible', 'end': 'inline label - always visible', });
lyr_Polgonos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});