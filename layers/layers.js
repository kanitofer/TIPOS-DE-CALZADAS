var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RELEVAMIENTOTENDIDOELECTRICOEREO_1 = new ol.format.GeoJSON();
var features_RELEVAMIENTOTENDIDOELECTRICOEREO_1 = format_RELEVAMIENTOTENDIDOELECTRICOEREO_1.readFeatures(json_RELEVAMIENTOTENDIDOELECTRICOEREO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RELEVAMIENTOTENDIDOELECTRICOEREO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVAMIENTOTENDIDOELECTRICOEREO_1.addFeatures(features_RELEVAMIENTOTENDIDOELECTRICOEREO_1);
var lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVAMIENTOTENDIDOELECTRICOEREO_1, 
                style: style_RELEVAMIENTOTENDIDOELECTRICOEREO_1,
                interactive: true,
                title: '<img src="styles/legend/RELEVAMIENTOTENDIDOELECTRICOEREO_1.png" /> RELEVAMIENTO TENDIDO ELECTRICO ÁEREO'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1];
lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1.set('fieldAliases', {'PADRON': 'PADRON', 'FECHA_': 'FECHA_', 'CALLE': 'CALLE', 'NUMERO': 'NUMERO', 'DISTRITO': 'DISTRITO', 'PROPIE_INM': 'PROPIE_INM', 'OB TENDIDO': 'OB TENDIDO', 'N_FANTASIA': 'N_FANTASIA', 'NOTIFICADO': 'NOTIFICADO', 'SEGUIMIENT': 'SEGUIMIENT', 'OBSERVACIO': 'OBSERVACIO', 'imagen': 'imagen', });
lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1.set('fieldImages', {'PADRON': 'TextEdit', 'FECHA_': 'TextEdit', 'CALLE': 'TextEdit', 'NUMERO': 'TextEdit', 'DISTRITO': 'TextEdit', 'PROPIE_INM': 'TextEdit', 'OB TENDIDO': 'TextEdit', 'N_FANTASIA': 'TextEdit', 'NOTIFICADO': 'TextEdit', 'SEGUIMIENT': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1.set('fieldLabels', {'PADRON': 'no label', 'FECHA_': 'no label', 'CALLE': 'no label', 'NUMERO': 'no label', 'DISTRITO': 'no label', 'PROPIE_INM': 'no label', 'OB TENDIDO': 'no label', 'N_FANTASIA': 'no label', 'NOTIFICADO': 'no label', 'SEGUIMIENT': 'no label', 'OBSERVACIO': 'no label', 'imagen': 'no label', });
lyr_RELEVAMIENTOTENDIDOELECTRICOEREO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});