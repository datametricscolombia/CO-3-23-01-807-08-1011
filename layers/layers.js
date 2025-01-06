var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
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
var format_Rutas_2 = new ol.format.GeoJSON();
var features_Rutas_2 = format_Rutas_2.readFeatures(json_Rutas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_2.addFeatures(features_Rutas_2);
var lyr_Rutas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_2, 
                style: style_Rutas_2,
                popuplayertitle: 'Rutas',
                interactive: false,
                title: '<img src="styles/legend/Rutas_2.png" /> Rutas'
            });
var format_Lotes_3 = new ol.format.GeoJSON();
var features_Lotes_3 = format_Lotes_3.readFeatures(json_Lotes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_3.addFeatures(features_Lotes_3);
var lyr_Lotes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_3, 
                style: style_Lotes_3,
                popuplayertitle: 'Lotes',
                interactive: true,
                title: '<img src="styles/legend/Lotes_3.png" /> Lotes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1011_PuntosLinderos_1.setVisible(true);lyr_Rutas_2.setVisible(true);lyr_Lotes_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1011_PuntosLinderos_1,lyr_Rutas_2,lyr_Lotes_3];
lyr_1011_PuntosLinderos_1.set('fieldAliases', {'n': 'n', 'lon': 'lon', 'lat': 'lat', });
lyr_Rutas_2.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Lotes_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'País': 'País', 'Región': 'Región', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Corregimiento': 'Corregimiento', 'Vereda': 'Vereda', 'Código de Lote': 'Código de Lote', });
lyr_1011_PuntosLinderos_1.set('fieldImages', {'n': '', 'lon': '', 'lat': '', });
lyr_Rutas_2.set('fieldImages', {'begin': '', 'end': '', });
lyr_Lotes_3.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', 'País': '', 'Región': '', 'Departamento': '', 'Provincia': '', 'Municipio': '', 'Corregimiento': '', 'Vereda': '', 'Código de Lote': '', });
lyr_1011_PuntosLinderos_1.set('fieldLabels', {'n': 'inline label - always visible', 'lon': 'inline label - always visible', 'lat': 'inline label - always visible', });
lyr_Rutas_2.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Lotes_3.set('fieldLabels', {'begin': 'hidden field', 'end': 'hidden field', 'País': 'inline label - always visible', 'Región': 'inline label - always visible', 'Departamento': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Corregimiento': 'inline label - always visible', 'Vereda': 'inline label - always visible', 'Código de Lote': 'inline label - always visible', });
lyr_Lotes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});