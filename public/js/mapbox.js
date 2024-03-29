/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
//export const displayMap = (locations) => {
     mapboxgl.accessToken = 'pk.eyJ1IjoiZWRpdGFtcGVybmEiLCJhIjoiY2twOW1uYXFtMGxuODJubnhhZGlreHBocyJ9.wHqRd3gc5cEV0XEdGAOT-A';
     

var map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/editamperna/ckp9muyno1zu118o4dzuexnn0',     
     scrollZoom: false
     //center: [-118.113491, 34.111745],
     //zoom: 10,
     //interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
     // Create marker
     const el = document.createElement('div');
     el.className = 'marker';

     //  Add marker
     new mapboxgl.Marker({
          element: el,
          anchor: 'bottom'
     }).setLngLat(loc.coordinates).addTo(map);

     // Add popup
     new mapboxgl.Popup({
          offset: 30
     })
     .setLngLat(loc.coordinates)
     .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
     .addTo(map)
     ;
     // Extends map bounds to include the current locations
     bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
          padding: {
               top: 200,
               bottom: 150,
               left: 100,
               right: 100
          }          
     }); 
//};

;