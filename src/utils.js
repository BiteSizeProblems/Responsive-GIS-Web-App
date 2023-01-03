import $ from 'jquery';

export default function ChangeLayer( checkbox, map, layer) {
    var isChecked = $(`${checkbox}`).is(':checked');

    if(isChecked) {
        return (map.add(layer), console.log("layer added..."));
    } else {
        return (map.remove(layer), console.log("layer removed..."));
    }
};