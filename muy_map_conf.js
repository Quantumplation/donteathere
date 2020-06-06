const wendysIcon = "images/w_icon.png";
const tacoBellIcon = "images/tb_icon.png";
const pizzaHutIcon = "images/ph_icon.png";
const phoneIcon = "https://muycompanies.com/wp-content/plugins/wp-google-map-gold/assets/images/icons/telephone.png"; //This is never used, why did they have it?

function init(config) {
  var mapOptions = {
    center: {
      lat: parseFloat(config.map_options.center_lat, 10),
      lng: parseFloat(config.map_options.center_lng, 10),
    },
    zoom: config.map_options.zoom,
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var mapMarkers = [];
  var openInfoWindow;

  for (var i = 0; i < config.places.length; ++i) {
    (function(place) {
      var image = {
        url: place.location.icon,
      };
  
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.title,
        position: {
          lat: parseFloat(place.location.lat, 10),
          lng: parseFloat(place.location.lng, 10)
        }
      });
      mapMarkers.push(marker);
  
      var infoWindow = new google.maps.InfoWindow({
        content: '<h2>' + place.title + '</h2>' + place.content
      });
      marker.addListener('click', function() {
        if (openInfoWindow) {
          openInfoWindow.close();
        }
        infoWindow.open(map, marker);
        openInfoWindow = infoWindow;
      });
    })(config.places[i]);
  }

  //Add marker clustering
  var clusteringOptions = {
    imagePath: config.marker_cluster.image_path,
    maxZoom: config.marker_cluster.max_zoom
  };
  var markerCluster = new MarkerClusterer(map, mapMarkers, clusteringOptions);
}

function initMap() {
  init(config);
}

var config = {
  "map_options": {
    "center_lat": "32.884478",
    "center_lng": "-96.963031",
    "zoom": 4,
    "map_type_id": "ROADMAP",
    "center_by_nearest": false,
    "fit_bounds": false,
    "center_circle_fillcolor": "#8CAEF2",
    "center_circle_fillopacity": ".5",
    "center_circle_strokecolor": "#8CAEF2",
    "center_circle_strokeopacity": ".5",
    "center_circle_radius": "5",
    "show_center_circle": false,
    "show_center_marker": false,
    "center_circle_strokeweight": "1",
    "draggable": true,
    "scroll_wheel": "false",
    "gesture": "auto",
    "infowindow_setting": "<div class=\"fc-main\">\n<div class=\"fc-item-title\">{marker_title} <span class=\"fc-badge info\">{marker_category}</span></div>\n<div class=\"fc-item-featured_image\">{marker_image} </div>\n<p>{marker_message}</p>\n<address><b>Address : </b>{marker_address}</address>\n</div>\n",
    "infowindow_geotags_setting": "<div class=\"post_body\">\n<div class=\"geotags_link\"><a target=\"_blank\" href=\"{post_link}\">{post_title}</a></div>\n<p><a target=\"_blank\" href=\"{post_link}\">{post_featured_image}</a><br />\n{post_excerpt}</p>\n<div class=\"wpgmp_meta_data\">{post_categories}</div>\n<div class=\"wpgmp_meta_data\">{post_tags}</div>\n</div>\n",
    "infowindow_skin": {
      "name": "default",
      "type": "infowindow",
      "sourcecode": "<div class=\"fc-main\"><div class=\"fc-item-title\">{marker_title} <span class=\"fc-badge info\">{marker_category}</span></div> <div class=\"fc-item-featured_image\">{marker_image} </div>{marker_message}<address><b>Address : </b>{marker_address}</address></div>"
    },
    "infowindow_post_skin": {
      "name": "default",
      "type": "post",
      "sourcecode": "<div class=\"post_body\">\r\n<div class=\"geotags_link\"><a target=\"_blank\" href=\"{post_link}\">{post_title}</a></div>\r\n<a target=\"_blank\" href=\"{post_link}\">{post_featured_image}</a>\r\n{post_excerpt}\r\n<div class=\"wpgmp_meta_data\">{post_categories}</div>\r\n<div class=\"wpgmp_meta_data\">{post_tags}</div>\r\n</div>"
    },
    "infowindow_drop_animation": false,
    "close_infowindow_on_map_click": false,
    "default_infowindow_open": false,
    "infowindow_open_event": "click",
    "infowindow_filter_only": false,
    "infowindow_click_change_zoom": 0,
    "infowindow_click_change_center": false,
    "full_screen_control": true,
    "search_control": true,
    "zoom_control": true,
    "map_type_control": true,
    "street_view_control": true,
    "locateme_control": false,
    "mobile_specific": false,
    "zoom_mobile": 5,
    "draggable_mobile": true,
    "scroll_wheel_mobile": true,
    "full_screen_control_position": "TOP_RIGHT",
    "search_control_position": "TOP_LEFT",
    "locateme_control_position": "TOP_LEFT",
    "zoom_control_position": "TOP_LEFT",
    "map_type_control_position": "TOP_RIGHT",
    "map_type_control_style": "HORIZONTAL_BAR",
    "street_view_control_position": "TOP_LEFT",
    "map_control": false,
    "screens": {
      "smartphones": {
        "map_zoom_level_mobile": "5"
      },
      "ipads": {
        "map_zoom_level_mobile": "5"
      },
      "large-screens": {
        "map_zoom_level_mobile": "5"
      }
    },
    "map_infowindow_customisations": false,
    "infowindow_width": "100%",
    "infowindow_border_color": "rgba(0, 0, 0, 0.0980392)",
    "infowindow_bg_color": "#fff",
    "show_infowindow_header": false,
    "min_zoom": "0",
    "max_zoom": "19",
    "zoom_level_after_search": "10",
    "url_filters": false,
    "doubleclickzoom": false,
    "bound_map_after_filter": false,
    "display_reset_button": false,
    "map_reset_button_text": "Reset",
    "height": "600"
  },
  "places": [{
    "id": "2117",
    "title": "Wendy's",
    "address": "1000 W. Walnut Hill Ln., Irving, TX 75038",
    "source": "manual",
    "content": "1000 W. Walnut Hill Ln., Irving, TX 75038<br>(972) 751-0268",
    "location": {
      "icon": wendysIcon,
      "lat": "32.884478",
      "lng": "-96.963031",
      "city": "",
      "state": "",
      "country": "",
      "onclick_action": "marker",
      "redirect_custom_link": "",
      "marker_image": "",
      "open_new_tab": "",
      "postal_code": "",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": null,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }],
    "custom_filters": []
  }, {
    "id": "2118",
    "title": "Wendy's",
    "address": "10046 Marsh Lane, Dallas, TX 75229",
    "source": "manual",
    "content": "10046 Marsh Lane, Dallas, TX 75229<br>(214) 902-9580",
    "location": {
      "icon": wendysIcon,
      "lat": "32.882087",
      "lng": "-96.855695",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2119",
    "title": "Wendy's",
    "address": "1005 W. Trinity Mills Carrollton, TX 75006",
    "source": "manual",
    "content": "1005 W. Trinity Mills Carrollton, TX 75006<br>(972) 245-1501",
    "location": {
      "icon": wendysIcon,
      "lat": "32.982055",
      "lng": "-96.91052",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2120",
    "title": "Wendy's",
    "address": "112 N. Denton Tap, Coppell, TX 75019",
    "source": "manual",
    "content": "112 N. Denton Tap, Coppell, TX 75019<br>(972) 304-8393",
    "location": {
      "icon": wendysIcon,
      "lat": "32.971382",
      "lng": "-96.993188",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2121",
    "title": "Wendy's",
    "address": "11711 E. NW Highway, Dallas, TX 75218",
    "source": "manual",
    "content": "11711 E. NW Highway, Dallas, TX 75218<br>(214) 341-0465",
    "location": {
      "icon": wendysIcon,
      "lat": "32.864217",
      "lng": "-96.678643",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2122",
    "title": "Wendy's",
    "address": "11722 N. Central Expwy., Dallas, TX 75243",
    "source": "manual",
    "content": "11722 N. Central Expwy., Dallas, TX 75243<br>(214) 342-1936",
    "location": {
      "icon": wendysIcon,
      "lat": "32.908331",
      "lng": "-96.768",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2123",
    "title": "Wendy's",
    "address": "1204 North U.S. 377, Roanoke, TX 76262",
    "source": "manual",
    "content": "1204 North U.S. 377, Roanoke, TX 76262<br>(682) 831-1533",
    "location": {
      "icon": wendysIcon,
      "lat": "33.013494",
      "lng": "-97.220204",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2124",
    "title": "Wendy's",
    "address": "12150 FM 423,  Frisco, TX 75034",
    "source": "manual",
    "content": "12150 FM 423,  Frisco, TX 75034<br>(972) 731-5073",
    "location": {
      "icon": wendysIcon,
      "lat": "33.179345",
      "lng": "-96.886576",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2125",
    "title": "Wendy's",
    "address": "12415 Lake June Rd., Balch Springs, TX 75180",
    "source": "manual",
    "content": "12415 Lake June Rd., Balch Springs, TX 75180<br>(972) 285-0913",
    "location": {
      "icon": wendysIcon,
      "lat": "32.734339",
      "lng": "-96.614155",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2126",
    "title": "Wendy's",
    "address": "1317 N. Saginaw Blvd., Saginaw, TX 76179",
    "source": "manual",
    "content": "1317 N. Saginaw Blvd., Saginaw, TX 76179<br>(817) 232-4399",
    "location": {
      "icon": wendysIcon,
      "lat": "32.881904",
      "lng": "-97.383318",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2127",
    "title": "Wendy's",
    "address": "1325 Gross Rd., Mesquite, TX 75149",
    "source": "manual",
    "content": "1325 Gross Rd., Mesquite, TX 75149<br>(972) 329-5477",
    "location": {
      "icon": wendysIcon,
      "lat": "32.782505",
      "lng": "-96.626805",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2128",
    "title": "Wendy's",
    "address": "1345  E. Beltline, Richardson, TX 75081",
    "source": "manual",
    "content": "1345  E. Beltline, Richardson, TX 75081<br>(972) 234-6298<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.94579",
      "lng": "-96.70047",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2129",
    "title": "Wendy's",
    "address": "1401 W. Kirby St., Wylie, TX 75098",
    "source": "manual",
    "content": "1401 W. Kirby St., Wylie, TX 75098<br>(972) 442-4566<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "33.007415",
      "lng": "-96.551597",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2130",
    "title": "Wendy's",
    "address": "14160 Trinity Blvd., Ft. Worth, TX 76155",
    "source": "manual",
    "content": "14160 Trinity Blvd., Ft. Worth, TX 76155<br>(817) 283-1588<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.821887",
      "lng": "-97.058514",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2131",
    "title": "Wendy's",
    "address": "1500 Eastchase Pkwy., Ft. Worth, TX 76120",
    "source": "manual",
    "content": "1500 Eastchase Pkwy., Ft. Worth, TX 76120<br>(817) 274-1220",
    "location": {
      "icon": wendysIcon,
      "lat": "32.756917",
      "lng": "-97.168312",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2132",
    "title": "Wendy's",
    "address": "1507 E. Kiest Blvd., Dallas, TX 75216",
    "source": "manual",
    "content": "1507 E. Kiest Blvd., Dallas, TX 75216<br>(214) 374-5346",
    "location": {
      "icon": wendysIcon,
      "lat": "32.709084",
      "lng": "-96.802039",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2134",
    "title": "Wendy's",
    "address": "17981  Preston Rd., Dallas, TX 75287",
    "source": "manual",
    "content": "17981  Preston Rd., Dallas, TX 75287<br>(972) 931-9688",
    "location": {
      "icon": wendysIcon,
      "lat": "32.997394",
      "lng": "-96.798737",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2135",
    "title": "Wendy's",
    "address": "17989 Marsh Lane, Dallas, TX 75287",
    "source": "manual",
    "content": "17989 Marsh Lane, Dallas, TX 75287<br>(972) 306-7339",
    "location": {
      "icon": wendysIcon,
      "lat": "32.994735",
      "lng": "-96.85582",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2136",
    "title": "Wendy's",
    "address": "1800 N. Beltline, Mesquite, TX 75149",
    "source": "manual",
    "content": "1800 N. Beltline, Mesquite, TX 75149<br>(972) 289-5288",
    "location": {
      "icon": wendysIcon,
      "lat": "32.788704",
      "lng": "-96.595366",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2137",
    "title": "Wendy's",
    "address": "1910 S. Buckner,  Dallas, TX 75217",
    "source": "manual",
    "content": "1910 S. Buckner,  Dallas, TX 75217<br>(214) 398-5323",
    "location": {
      "icon": wendysIcon,
      "lat": "32.744584",
      "lng": "-96.682377",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2138",
    "title": "Wendy's",
    "address": "1951 W. El Dorado Pkwy., McKinney, TX 75070",
    "source": "manual",
    "content": "1951 W. El Dorado Pkwy., McKinney, TX 75070<br>(972) 562-3600",
    "location": {
      "icon": wendysIcon,
      "lat": "33.171635",
      "lng": "-96.638558",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2139",
    "title": "Wendy's",
    "address": "200 W. Spring Valley, Richardson, TX 75080",
    "source": "manual",
    "content": "200 W. Spring Valley, Richardson, TX 75080<br>(972) 231-4577",
    "location": {
      "icon": wendysIcon,
      "lat": "32.9405",
      "lng": "-96.740393",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2140",
    "title": "Wendy's",
    "address": "2025 W. McDermott Dr. , Allen, TX 75013",
    "source": "manual",
    "content": "2025 W. McDermott Dr. , Allen, TX 75013<br>(972) 359-7570",
    "location": {
      "icon": wendysIcon,
      "lat": "33.100312",
      "lng": "-96.731626",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2141",
    "title": "Wendy's",
    "address": "2041 Justin Rd., Flower Mound, TX 75028",
    "source": "manual",
    "content": "2041 Justin Rd., Flower Mound, TX 75028<br>(972) 874-7355",
    "location": {
      "icon": wendysIcon,
      "lat": "33.071355",
      "lng": "-97.059471",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2142",
    "title": "Wendy's",
    "address": "2111 Hall-Johnson, Grapevine, TX 76051",
    "source": "manual",
    "content": "2111 Hall-Johnson, Grapevine, TX 76051<br>(817) 571-4810",
    "location": {
      "icon": wendysIcon,
      "lat": "32.892904",
      "lng": "-97.100921",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2143",
    "title": "Wendy's",
    "address": "2120 Long Prairie Rd.,Flower Mound, TX 75028",
    "source": "manual",
    "content": "2120 Long Prairie Rd.,Flower Mound, TX 75028<br>(972) 539-4474",
    "location": {
      "icon": wendysIcon,
      "lat": "33.015687",
      "lng": "-97.069905",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2144",
    "title": "Wendy's",
    "address": "2130 E. Southlake Blvd., Southlake, TX 76092",
    "source": "manual",
    "content": "2130 E. Southlake Blvd., Southlake, TX 76092<br>(817) 416-8484",
    "location": {
      "icon": wendysIcon,
      "lat": "32.941458",
      "lng": "-97.121418",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2145",
    "title": "Wendy's",
    "address": "2241 W. Northwest Hwy, Dallas, TX 75220",
    "source": "manual",
    "content": "2241 W. Northwest Hwy, Dallas, TX 75220<br>(214) 350-7436",
    "location": {
      "icon": wendysIcon,
      "lat": "32.863879",
      "lng": "-96.896495",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2146",
    "title": "Wendy's",
    "address": "2509 Lakeview Pkwy., Rowlett, TX 75089",
    "source": "manual",
    "content": "2509 Lakeview Pkwy., Rowlett, TX 75089<br>(214) 607-9117",
    "location": {
      "icon": wendysIcon,
      "lat": "32.908184",
      "lng": "-96.577247",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2147",
    "title": "Wendy's",
    "address": "2545 Ridge Rd., Rockwall, TX 75087",
    "source": "manual",
    "content": "2545 Ridge Rd., Rockwall, TX 75087<br>(972) 772-3422",
    "location": {
      "icon": wendysIcon,
      "lat": "32.899344",
      "lng": "-96.468066",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2148",
    "title": "Wendy's",
    "address": "2550 E. Pioneer Pkwy., Arlington, TX 76010",
    "source": "manual",
    "content": "2550 E. Pioneer Pkwy., Arlington, TX 76010<br>(817) 460-5382",
    "location": {
      "icon": wendysIcon,
      "lat": "32.711859",
      "lng": "-97.065542",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2149",
    "title": "Wendy's",
    "address": "2554 W. IH-20, Grand Prairie, TX 75050",
    "source": "manual",
    "content": "2554 W. IH-20, Grand Prairie, TX 75050<br>(972) 647-0141",
    "location": {
      "icon": wendysIcon,
      "lat": "32.781145",
      "lng": "-97.017588",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2150",
    "title": "Wendy's",
    "address": "3200  Custer,  Plano, TX 75075",
    "source": "manual",
    "content": "3200  Custer,  Plano, TX 75075<br>(972) 519-0484",
    "location": {
      "icon": wendysIcon,
      "lat": "33.040303",
      "lng": "-96.732959",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2151",
    "title": "Wendy's",
    "address": "3208 Preston Rd., Frisco, TX 75034",
    "source": "manual",
    "content": "3208 Preston Rd., Frisco, TX 75034<br>(469) 633-0641",
    "location": {
      "icon": wendysIcon,
      "lat": "33.10522",
      "lng": "-96.804953",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2152",
    "title": "Wendy's",
    "address": "3232 Lavon Dr., Garland, TX 75040",
    "source": "manual",
    "content": "3232 Lavon Dr., Garland, TX 75040<br>(972) 414-7084",
    "location": {
      "icon": wendysIcon,
      "lat": "32.946618",
      "lng": "-96.620002",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2153",
    "title": "Wendy's",
    "address": "3521 Custer Rd., Richardson, TX 75080",
    "source": "manual",
    "content": "3521 Custer Rd., Richardson, TX 75080<br>(972) 889-3356",
    "location": {
      "icon": wendysIcon,
      "lat": "32.975489",
      "lng": "-96.734293",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2154",
    "title": "Wendy's",
    "address": "3924 S.H. 121, Bedford, TX 76021",
    "source": "manual",
    "content": "3924 S.H. 121, Bedford, TX 76021<br>(817) 283-3726",
    "location": {
      "icon": wendysIcon,
      "lat": "32.865442",
      "lng": "-97.100602",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2155",
    "title": "Wendy's",
    "address": "3990 N. Beltline Rd., Irving, TX 75038",
    "source": "manual",
    "content": "3990 N. Beltline Rd., Irving, TX 75038<br>(972) 252-3904",
    "location": {
      "icon": wendysIcon,
      "lat": "32.860442",
      "lng": "-96.991396",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2156",
    "title": "Wendy's",
    "address": "4169 LBJ Freeway, Farmers Branch, TX 75224",
    "source": "manual",
    "content": "4169 LBJ Freeway, Farmers Branch, TX 75224<br>(972) 788-1115",
    "location": {
      "icon": wendysIcon,
      "lat": "32.925693",
      "lng": "-96.84001",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2157",
    "title": "Wendy's",
    "address": "4380 DFW Turnpike, Dallas, TX 75211",
    "source": "manual",
    "content": "4380 DFW Turnpike, Dallas, TX 75211<br>(214) 623-8465",
    "location": {
      "icon": wendysIcon,
      "lat": "32.765323",
      "lng": "-96.898105",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2158",
    "title": "Wendy's",
    "address": "501 W. I-30, Garland, TX 75043",
    "source": "manual",
    "content": "501 W. I-30, Garland, TX 75043<br>(972) 303-0600",
    "location": {
      "icon": wendysIcon,
      "lat": "32.840799",
      "lng": "-96.596303",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2159",
    "title": "Wendy's",
    "address": "5215 Spring Valley, Dallas, TX 75240",
    "source": "manual",
    "content": "5215 Spring Valley, Dallas, TX 75240<br>(972) 490-7981",
    "location": {
      "icon": wendysIcon,
      "lat": "32.939968",
      "lng": "-96.754037",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2160",
    "title": "Wendy's",
    "address": "5235 N. Garland Rd., Garland, TX 75044",
    "source": "manual",
    "content": "5235 N. Garland Rd., Garland, TX 75044<br>(972) 414-8793",
    "location": {
      "icon": wendysIcon,
      "lat": "32.963776",
      "lng": "-96.645272",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2161",
    "title": "Wendy's",
    "address": "5309 S.H. 121, The Colony, TX 75056",
    "source": "manual",
    "content": "5309 S.H. 121, The Colony, TX 75056<br>(469) 384-0783",
    "location": {
      "icon": wendysIcon,
      "lat": "33.073079",
      "lng": "-96.8752",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2162",
    "title": "Wendy's",
    "address": "5502 Harry Hines, Dallas, TX 75235",
    "source": "manual",
    "content": "5502 Harry Hines, Dallas, TX 75235<br>(214) 631-1803",
    "location": {
      "icon": wendysIcon,
      "lat": "32.814796",
      "lng": "-96.840065",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2163",
    "title": "Wendy's",
    "address": "5555  N. Jim Miller,  Dallas, TX 75228",
    "source": "manual",
    "content": "5555  N. Jim Miller,  Dallas, TX 75228<br>(214) 381-5157",
    "location": {
      "icon": wendysIcon,
      "lat": "32.79226",
      "lng": "-96.700527",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2164",
    "title": "Wendy's",
    "address": "5555 El Dorado Pkwy., Frisco, TX 75033",
    "source": "manual",
    "content": "5555 El Dorado Pkwy., Frisco, TX 75033<br>(214) 705-8392",
    "location": {
      "icon": wendysIcon,
      "lat": "33.174459",
      "lng": "-96.83796",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2165",
    "title": "Wendy's",
    "address": "601 W. McDermott Dr., Allen, TX 75013",
    "source": "manual",
    "content": "601 W. McDermott Dr., Allen, TX 75013<br>(972) 396-0363",
    "location": {
      "icon": wendysIcon,
      "lat": "33.101429",
      "lng": "-96.676013",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2166",
    "title": "Wendy's",
    "address": "6011  Greenville Ave.,  Dallas, TX 75206",
    "source": "manual",
    "content": "6011  Greenville Ave.,  Dallas, TX 75206<br>(214) 369-4588",
    "location": {
      "icon": wendysIcon,
      "lat": "32.858723",
      "lng": "-96.768635",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2168",
    "title": "Wendy's",
    "address": "605 E Malloy Bridge Rd., Seagoville, TX 75159",
    "source": "manual",
    "content": "605 E Malloy Bridge Rd., Seagoville, TX 75159<br>(972) 287-2040",
    "location": {
      "icon": wendysIcon,
      "lat": "32.648465",
      "lng": "-96.533167",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2169",
    "title": "Wendy's",
    "address": "6108 W. Park Blvd., Plano, TX 75093",
    "source": "manual",
    "content": "6108 W. Park Blvd., Plano, TX 75093<br>(972) 248-6617",
    "location": {
      "icon": wendysIcon,
      "lat": "33.027091",
      "lng": "-96.831742",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2170",
    "title": "Wendy's",
    "address": "6348 Lake Worth Blvd., Lake Worth, TX 76135",
    "source": "manual",
    "content": "6348 Lake Worth Blvd., Lake Worth, TX 76135<br>(817) 237-2460",
    "location": {
      "icon": wendysIcon,
      "lat": "32.809911",
      "lng": "-97.421911",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2171",
    "title": "Wendy's",
    "address": "6716 Bridge St., Fort Worth, TX 76112",
    "source": "manual",
    "content": "6716 Bridge St., Fort Worth, TX 76112<br>(817) 451-6372",
    "location": {
      "icon": wendysIcon,
      "lat": "32.76513",
      "lng": "-97.21656",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2172",
    "title": "Wendy's",
    "address": "6912 Coit Rd., Plano, TX 75023",
    "source": "manual",
    "content": "6912 Coit Rd., Plano, TX 75023<br>(972) 491-3131",
    "location": {
      "icon": wendysIcon,
      "lat": "33.070539",
      "lng": "-96.771277",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2173",
    "title": "Wendy's",
    "address": "709 W. Spring Creek Pkwy., Plano, TX 75023",
    "source": "manual",
    "content": "709 W. Spring Creek Pkwy., Plano, TX 75023<br>(972) 527-5518",
    "location": {
      "icon": wendysIcon,
      "lat": "33.05747",
      "lng": "-96.707746",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2174",
    "title": "Wendy's",
    "address": "7201 Preston Rd., Frisco, TX 75035",
    "source": "manual",
    "content": "7201 Preston Rd., Frisco, TX 75035<br>(972) 377-3177",
    "location": {
      "icon": wendysIcon,
      "lat": "33.138108",
      "lng": "-96.805015",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2175",
    "title": "Wendy's",
    "address": "7700 N. MacArthur, Irving, TX 75063",
    "source": "manual",
    "content": "7700 N. MacArthur, Irving, TX 75063<br>(972) 401-3937",
    "location": {
      "icon": wendysIcon,
      "lat": "32.911191",
      "lng": "-96.958132",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2176",
    "title": "Wendy's",
    "address": "821 S. MacArthur, Coppell, TX 75019",
    "source": "manual",
    "content": "821 S. MacArthur, Coppell, TX 75019<br>(972) 393-3850",
    "location": {
      "icon": wendysIcon,
      "lat": "32.951105",
      "lng": "-96.958627",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2177",
    "title": "Wendy's",
    "address": "8424 Denton Hwy., Watauga, TX 76148",
    "source": "manual",
    "content": "8424 Denton Hwy., Watauga, TX 76148<br>(817) 281-8854",
    "location": {
      "icon": wendysIcon,
      "lat": "32.892926",
      "lng": "-97.258391",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2178",
    "title": "Wendy's",
    "address": "850 E. Hwy. 80, Forney, TX 75126",
    "source": "manual",
    "content": "850 E. Hwy. 80, Forney, TX 75126<br>(972) 552-9946",
    "location": {
      "icon": wendysIcon,
      "lat": "32.742966",
      "lng": "-96.446587",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2179",
    "title": "Wendy's",
    "address": "8901 Lakeview Pkwy., Rowlett, TX 75089",
    "source": "manual",
    "content": "8901 Lakeview Pkwy., Rowlett, TX 75089<br>(972) 463-9270",
    "location": {
      "icon": wendysIcon,
      "lat": "32.918979",
      "lng": "-96.515602",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2180",
    "title": "Wendy's",
    "address": "8904 S.H. 121, McKinney, TX 75070",
    "source": "manual",
    "content": "8904 S.H. 121, McKinney, TX 75070<br>(214) 383-5369",
    "location": {
      "icon": wendysIcon,
      "lat": "33.12717",
      "lng": "-96.73043",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2181",
    "title": "Wendy's",
    "address": "935 E. Campbell,  Richardson, TX 75082",
    "source": "manual",
    "content": "935 E. Campbell,  Richardson, TX 75082<br>(972) 680-8106",
    "location": {
      "icon": wendysIcon,
      "lat": "32.975907",
      "lng": "-96.709489",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2183",
    "title": "Wendy's",
    "address": "9680 Audelia, Dallas, TX 75238",
    "source": "manual",
    "content": "9680 Audelia, Dallas, TX 75238<br>(214) 221-2036",
    "location": {
      "icon": wendysIcon,
      "lat": "32.878588",
      "lng": "-96.717389",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2184",
    "title": "Wendy's",
    "address": "1004 N. Loop 340, Waco, TX 76705",
    "source": "manual",
    "content": "1004 N. Loop 340, Waco, TX 76705<br>(254) 412-1288",
    "location": {
      "icon": wendysIcon,
      "lat": "31.604409",
      "lng": "-97.104174",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2185",
    "title": "Wendy's",
    "address": "1015 N. Valley Mills Rd, Waco TX, 76710",
    "source": "manual",
    "content": "1015 N. Valley Mills Rd, Waco TX, 76710<br>(254) 776-3200",
    "location": {
      "icon": wendysIcon,
      "lat": "31.530819",
      "lng": "-97.185564",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2186",
    "title": "Wendy's",
    "address": "1019 South Main Street, Centerville, OH 45458",
    "source": "manual",
    "content": "1019 South Main Street, Centerville, OH 45458<br>(937) 439-9141",
    "location": {
      "icon": wendysIcon,
      "lat": "39.609253",
      "lng": "-84.160698",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2187",
    "title": "Wendy's",
    "address": "1201 S Fort Hood St, Killeen, TX 76542",
    "source": "manual",
    "content": "1201 S Fort Hood St, Killeen, TX 76542<br>(254) 634-7339",
    "location": {
      "icon": wendysIcon,
      "lat": "31.10729",
      "lng": "-97.748731",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2188",
    "title": "Wendy's",
    "address": "12310 NW H K Dodgen Loop, ste B, Temple, TX 76501",
    "source": "manual",
    "content": "12310 NW H K Dodgen Loop, ste B, Temple, TX 76501<br>(254) 773-5053",
    "location": {
      "icon": wendysIcon,
      "lat": "31.138812",
      "lng": "-97.331914",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2189",
    "title": "Wendy's",
    "address": "1235 East Dayton, Fairborn, OH 45324",
    "source": "manual",
    "content": "1235 East Dayton, Fairborn, OH 45324<br>(937) 879-2495",
    "location": {
      "icon": wendysIcon,
      "lat": "39.828356",
      "lng": "-84.007588",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2190",
    "title": "Wendy's",
    "address": "1300 Archer Drive, Troy, OH 45373",
    "source": "manual",
    "content": "1300 Archer Drive, Troy, OH 45373<br>(937) 332-8474",
    "location": {
      "icon": wendysIcon,
      "lat": "40.025634",
      "lng": "-84.226769",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2191",
    "title": "Wendy's",
    "address": "1348 SW H K Dodgen Loop, Temple, TX 76504",
    "source": "manual",
    "content": "1348 SW H K Dodgen Loop, Temple, TX 76504<br>(254) 773-7220",
    "location": {
      "icon": wendysIcon,
      "lat": "31.074897",
      "lng": "-97.368857",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2192",
    "title": "Wendy's",
    "address": "1417 Hewitt Dr, Waco, TX 76712",
    "source": "manual",
    "content": "1417 Hewitt Dr, Waco, TX 76712<br>(254) 420-1411",
    "location": {
      "icon": wendysIcon,
      "lat": "31.485006",
      "lng": "-97.21069",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2193",
    "title": "Wendy's",
    "address": "1507 Wayne Ave., Dayton, OH 45410",
    "source": "manual",
    "content": "1507 Wayne Ave., Dayton, OH 45410<br>(937) 252-8085",
    "location": {
      "icon": wendysIcon,
      "lat": "39.747233",
      "lng": "-84.172214",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2194",
    "title": "Wendy's",
    "address": "1521 North Barron Street, Eaton, OH 45320",
    "source": "manual",
    "content": "1521 North Barron Street, Eaton, OH 45320<br>(937) 456-7113",
    "location": {
      "icon": wendysIcon,
      "lat": "39.763747",
      "lng": "-84.636834",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2195",
    "title": "Wendy's",
    "address": "1604 W. Henderson St., Cleburne, TX 76033",
    "source": "manual",
    "content": "1604 W. Henderson St., Cleburne, TX 76033<br>(817) 774-9777",
    "location": {
      "icon": wendysIcon,
      "lat": "32.339414",
      "lng": "-97.41205",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2196",
    "title": "Wendy's",
    "address": "1780 Woodman Drive, Dayton, OH 45420",
    "source": "manual",
    "content": "1780 Woodman Drive, Dayton, OH 45420<br>(937) 252-4354",
    "location": {
      "icon": wendysIcon,
      "lat": "39.728711",
      "lng": "-84.121661",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2197",
    "title": "Wendy's",
    "address": "1880 East Dorothy Lane, Dayton, OH 45429",
    "source": "manual",
    "content": "1880 East Dorothy Lane, Dayton, OH 45429<br>(937) 296-0275",
    "location": {
      "icon": wendysIcon,
      "lat": "39.702737",
      "lng": "-84.129778",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2198",
    "title": "Wendy's",
    "address": "2008 E Central Texas Express, Killeen, TX 76541",
    "source": "manual",
    "content": "2008 E Central Texas Express, Killeen, TX 76541<br>(254) 526-3507",
    "location": {
      "icon": wendysIcon,
      "lat": "31.090287",
      "lng": "-97.720993",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2199",
    "title": "Wendy's",
    "address": "205 West FM 544, Murphy, TX 75094",
    "source": "manual",
    "content": "205 West FM 544, Murphy, TX 75094<br>(972) 422-6367",
    "location": {
      "icon": wendysIcon,
      "lat": "33.013409",
      "lng": "-96.608384",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2200",
    "title": "Wendy's",
    "address": "2120 Edwin C Moses Drive, Dayton, OH 45408",
    "source": "manual",
    "content": "2120 Edwin C Moses Drive, Dayton, OH 45408<br>(937) 222-1255",
    "location": {
      "icon": wendysIcon,
      "lat": "39.73266",
      "lng": "-84.206515",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2201",
    "title": "Wendy's",
    "address": "220 South Heincke Road, Miamisburg, OH 45343",
    "source": "manual",
    "content": "220 South Heincke Road, Miamisburg, OH 45343<br>(937) 866-3529",
    "location": {
      "icon": wendysIcon,
      "lat": "39.638517",
      "lng": "-84.264505",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2202",
    "title": "Wendy's",
    "address": "2311 Needmore Rd, Dayton, OH 45414",
    "source": "manual",
    "content": "2311 Needmore Rd, Dayton, OH 45414<br>(937) 277-3930",
    "location": {
      "icon": wendysIcon,
      "lat": "39.820337",
      "lng": "-84.191151",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2204",
    "title": "Wendy's",
    "address": "2670 Lucas Rd, Lucas, TX 75002",
    "source": "manual",
    "content": "2670 Lucas Rd, Lucas, TX 75002<br>(469) 656-7365",
    "location": {
      "icon": wendysIcon,
      "lat": "33.086121",
      "lng": "-96.618552",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2205",
    "title": "Wendy's",
    "address": "270 NW John Jones Road, Burleson, TX 76028",
    "source": "manual",
    "content": "270 NW John Jones Road, Burleson, TX 76028<br>(817) 295-3003",
    "location": {
      "icon": wendysIcon,
      "lat": "32.52423",
      "lng": "-97.351231",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2206",
    "title": "Wendy's",
    "address": "2740 E Hwy 190, Copperas Cove, TX 76522",
    "source": "manual",
    "content": "2740 E Hwy 190, Copperas Cove, TX 76522<br>(254) 547-9558",
    "location": {
      "icon": wendysIcon,
      "lat": "31.120025",
      "lng": "-97.881792",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2207",
    "title": "Wendy's",
    "address": "2944 Harshman Road, Dayton, OH 45424",
    "source": "manual",
    "content": "2944 Harshman Road, Dayton, OH 45424<br>(937) 236-8553",
    "location": {
      "icon": wendysIcon,
      "lat": "39.81471",
      "lng": "-84.129468",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2208",
    "title": "Wendy's",
    "address": "2948 Centerville-Miamisburg, Dayton, OH 45459",
    "source": "manual",
    "content": "2948 Centerville-Miamisburg, Dayton, OH 45459<br>(937) 433-7561",
    "location": {
      "icon": wendysIcon,
      "lat": "39.637144",
      "lng": "-84.223967",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2209",
    "title": "Wendy's",
    "address": "2964 West Camp Wisdom Road, Grand Prairie, TX 75052",
    "source": "manual",
    "content": "2964 West Camp Wisdom Road, Grand Prairie, TX 75052<br>(469) 615-3845",
    "location": {
      "icon": wendysIcon,
      "lat": "32.64745",
      "lng": "-97.05287",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2210",
    "title": "Wendy's",
    "address": "3 Weller Dr, Tipp City, OH 45371",
    "source": "manual",
    "content": "3 Weller Dr, Tipp City, OH 45371<br>(937) 667-0096",
    "location": {
      "icon": wendysIcon,
      "lat": "39.961638",
      "lng": "-84.191788",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2211",
    "title": "Wendy's",
    "address": "3001 South Dixie Drive, Moraine, OH 45439",
    "source": "manual",
    "content": "3001 South Dixie Drive, Moraine, OH 45439<br>(937) 299-5620",
    "location": {
      "icon": wendysIcon,
      "lat": "39.707329",
      "lng": "-84.201511",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2212",
    "title": "Wendy's",
    "address": "302 I-35 NE, Hillsboro, TX 76645",
    "source": "manual",
    "content": "302 I-35 NE, Hillsboro, TX 76645<br>(254) 582-7121",
    "location": {
      "icon": wendysIcon,
      "lat": "32.017878",
      "lng": "-97.094434",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2213",
    "title": "Wendy's",
    "address": "3084 Colonel Glenn Hwy, Fairborn, OH 45324",
    "source": "manual",
    "content": "3084 Colonel Glenn Hwy, Fairborn, OH 45324<br>(937) 426-0889",
    "location": {
      "icon": wendysIcon,
      "lat": "39.77665",
      "lng": "-84.065388",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2214",
    "title": "Wendy's",
    "address": "3220 Dayton Xenia Rd, Beavercreek, OH 45434",
    "source": "manual",
    "content": "3220 Dayton Xenia Rd, Beavercreek, OH 45434<br>(937) 458-0240",
    "location": {
      "icon": wendysIcon,
      "lat": "39.727822",
      "lng": "-84.055176",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2215",
    "title": "Wendy's",
    "address": "3420 Salem Ave, Dayton, OH 45406",
    "source": "manual",
    "content": "3420 Salem Ave, Dayton, OH 45406<br>(937) 277-2386",
    "location": {
      "icon": wendysIcon,
      "lat": "39.791217",
      "lng": "-84.242988",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2216",
    "title": "Wendy's",
    "address": "3815 Southwest Loop 820, Fort Worth, TX 73132",
    "source": "manual",
    "content": "3815 Southwest Loop 820, Fort Worth, TX 73132<br>(817) 361-0660",
    "location": {
      "icon": wendysIcon,
      "lat": "32.71641",
      "lng": "-97.441319",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2217",
    "title": "Wendy's",
    "address": "383 East National Road, Vandalia, OH 45377",
    "source": "manual",
    "content": "383 East National Road, Vandalia, OH 45377<br>(937) 898-8887",
    "location": {
      "icon": wendysIcon,
      "lat": "39.891695",
      "lng": "-84.192692",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2218",
    "title": "Wendy's",
    "address": "393 North Broad Street, Fairborn, OH 45324",
    "source": "manual",
    "content": "393 North Broad Street, Fairborn, OH 45324<br>(937) 879-2371",
    "location": {
      "icon": wendysIcon,
      "lat": "39.828957",
      "lng": "-84.025263",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2219",
    "title": "Wendy's",
    "address": "4003 Wilmington Pike, Kettering, OH 45429",
    "source": "manual",
    "content": "4003 Wilmington Pike, Kettering, OH 45429<br>(937) 643-0277",
    "location": {
      "icon": wendysIcon,
      "lat": "39.688129",
      "lng": "-84.131975",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2220",
    "title": "Wendy's",
    "address": "4465 Indian Ripple Rd, Dayton, OH 45440",
    "source": "manual",
    "content": "4465 Indian Ripple Rd, Dayton, OH 45440<br>(937) 458-0082",
    "location": {
      "icon": wendysIcon,
      "lat": "39.696233",
      "lng": "-84.104952",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2221",
    "title": "Wendy's",
    "address": "4873 Airway Rd, Dayton, OH 45431",
    "source": "manual",
    "content": "4873 Airway Rd, Dayton, OH 45431<br>(937) 253-2063",
    "location": {
      "icon": wendysIcon,
      "lat": "39.769453",
      "lng": "-84.123946",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2222",
    "title": "Wendy's",
    "address": "4997 North Main Street, Dayton, OH 45414",
    "source": "manual",
    "content": "4997 North Main Street, Dayton, OH 45414<br>(937) 279-9484",
    "location": {
      "icon": wendysIcon,
      "lat": "39.813698",
      "lng": "-84.228583",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2223",
    "title": "Wendy's",
    "address": "510 Upper Lewisburg, Brookville, OH 45309",
    "source": "manual",
    "content": "510 Upper Lewisburg, Brookville, OH 45309<br>(937) 833-5151",
    "location": {
      "icon": wendysIcon,
      "lat": "39.846029",
      "lng": "-84.424445",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2224",
    "title": "Wendy's",
    "address": "606 South Main Street, Englewood, OH 45322",
    "source": "manual",
    "content": "606 South Main Street, Englewood, OH 45322<br>(937) 836-3035",
    "location": {
      "icon": wendysIcon,
      "lat": "39.86915",
      "lng": "-84.293246",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2225",
    "title": "Wendy's",
    "address": "6199 Wilmington Pike, Centerville, OH 45459",
    "source": "manual",
    "content": "6199 Wilmington Pike, Centerville, OH 45459<br>(937) 291-1925",
    "location": {
      "icon": wendysIcon,
      "lat": "39.650465",
      "lng": "-84.110767",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2226",
    "title": "Wendy's",
    "address": "6250 Oakmont, Fort Worth, TX 76132",
    "source": "manual",
    "content": "6250 Oakmont, Fort Worth, TX 76132<br>(817) 370-2644",
    "location": {
      "icon": wendysIcon,
      "lat": "32.66329",
      "lng": "-97.403494",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2227",
    "title": "Wendy's",
    "address": "7200 Hoke Road, Clayton, OH 45315",
    "source": "manual",
    "content": "7200 Hoke Road, Clayton, OH 45315<br>(937) 836-9390",
    "location": {
      "icon": wendysIcon,
      "lat": "39.850201",
      "lng": "-84.32988",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2228",
    "title": "Wendy's",
    "address": "731 East Central Ave, West Carollton, OH 45449",
    "source": "manual",
    "content": "731 East Central Ave, West Carollton, OH 45449<br>(937) 859-0976",
    "location": {
      "icon": wendysIcon,
      "lat": "39.676866",
      "lng": "-84.242092",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2229",
    "title": "Wendy's",
    "address": "7435 Brandt Pike, Dayton, OH 45424",
    "source": "manual",
    "content": "7435 Brandt Pike, Dayton, OH 45424<br>(937) 233-7254",
    "location": {
      "icon": wendysIcon,
      "lat": "39.859934",
      "lng": "-84.105674",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2230",
    "title": "Wendy's",
    "address": "8055 Interstate 35 South, Robinson, TX 76706",
    "source": "manual",
    "content": "8055 Interstate 35 South, Robinson, TX 76706<br>(254) 662-3034",
    "location": {
      "icon": wendysIcon,
      "lat": "31.45614",
      "lng": "-97.170452",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2231",
    "title": "Wendy's",
    "address": "811 S. 5th Street, Waco, TX 76706",
    "source": "manual",
    "content": "811 S. 5th Street, Waco, TX 76706<br>(254) 752-8850",
    "location": {
      "icon": wendysIcon,
      "lat": "31.550929",
      "lng": "-97.124976",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2232",
    "title": "Wendy's",
    "address": "8201 State Route 235, Huber Heights, OH 45424",
    "source": "manual",
    "content": "8201 State Route 235, Huber Heights, OH 45424<br>(937) 787-7314",
    "location": {
      "icon": wendysIcon,
      "lat": "39.87293",
      "lng": "-84.055569",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2233",
    "title": "Wendy's",
    "address": "825 West Main St, Troy, OH 45373",
    "source": "manual",
    "content": "825 West Main St, Troy, OH 45373<br>(937) 335-6936",
    "location": {
      "icon": wendysIcon,
      "lat": "40.04378",
      "lng": "-84.21202",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2234",
    "title": "Wendy's",
    "address": "881 NE Alsbury Blvd., Burleson, TX 76028",
    "source": "manual",
    "content": "881 NE Alsbury Blvd., Burleson, TX 76028<br>(817) 295-4345",
    "location": {
      "icon": wendysIcon,
      "lat": "32.565384",
      "lng": "-97.319785",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2235",
    "title": "Wendy's",
    "address": "2801 N. Tarrant Pkwy, Ft. Worth, TX 76177",
    "source": "manual",
    "content": "2801 N. Tarrant Pkwy, Ft. Worth, TX 76177<br>(817) 847-7425 ",
    "location": {
      "icon": wendysIcon,
      "lat": "32.898237",
      "lng": "-97.3138987",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2236",
    "title": "Wendy's",
    "address": "1905 S Garland Ave, Garland, TX 75040",
    "source": "manual",
    "content": "1905 S Garland Ave, Garland, TX 75040<br>(972) 278-9790W",
    "location": {
      "icon": wendysIcon,
      "lat": "32.8954482",
      "lng": "-96.6488484",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2237",
    "title": "Wendy's",
    "address": "4018 Lemmon Ave., Dallas, TX 75219",
    "source": "manual",
    "content": "4018 Lemmon Ave., Dallas, TX 75219<br>(214) 528-8700",
    "location": {
      "icon": wendysIcon,
      "lat": "32.8145073",
      "lng": "-96.8080564",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2238",
    "title": "Wendy's",
    "address": "2328 W. Illinois Ave., Dallas, TX 75224",
    "source": "manual",
    "content": "2328 W. Illinois Ave., Dallas, TX 75224<br>(214) 339-4388",
    "location": {
      "icon": wendysIcon,
      "lat": "32.719989",
      "lng": "-96.856677",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2239",
    "title": "Wendy's",
    "address": "622 E. Camp Wisdom Rd., Duncanville, TX 75116",
    "source": "manual",
    "content": "622 E. Camp Wisdom Rd., Duncanville, TX 75116<br>(972) 296-4585",
    "location": {
      "icon": wendysIcon,
      "lat": "32.662231",
      "lng": "-96.8153431",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2240",
    "title": "Wendy's",
    "address": "1304 E. Pleasant Run Rd., Desoto, TX 75115",
    "source": "manual",
    "content": "1304 E. Pleasant Run Rd., Desoto, TX 75115<br>(972) 230-3172",
    "location": {
      "icon": wendysIcon,
      "lat": "32.6039021",
      "lng": "-96.8240981",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2241",
    "title": "Wendy's",
    "address": "1981 Fort Worth Ave., Dallas, TX 75208",
    "source": "manual",
    "content": "1981 Fort Worth Ave., Dallas, TX 75208<br>(214) 948-7905",
    "location": {
      "icon": wendysIcon,
      "lat": "32.763776",
      "lng": "-96.8539192",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2242",
    "title": "Wendy's",
    "address": "2828 W. Wheatland Rd., Dallas, TX 75237",
    "source": "manual",
    "content": "2828 W. Wheatland Rd., Dallas, TX 75237 <br>(972) 298-6337<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.6471445",
      "lng": "-96.8668106",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2243",
    "title": "Wendy's",
    "address": "1060 US 287 BYP, Waxahachie, TX 75165",
    "source": "manual",
    "content": "1060 US 287 BYP, Waxahachie, TX 75165<br>(972) 938-3887<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.421214",
      "lng": "-96.841447",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2244",
    "title": "Wendy's",
    "address": "510 South Beckley, Dallas, TX 75203",
    "source": "manual",
    "content": "1060 US 287 BYP, Waxahachie, TX 75165<br> (214) 941-4393 <br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.7416034",
      "lng": "-96.8224163",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2245",
    "title": "Wendy's",
    "address": "404 E. FM 1382, Cedar Hill, TX 75104",
    "source": "manual",
    "content": "404 E. FM 1382, Cedar Hill, TX 75104<br>(469) 272-0125<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.5919563",
      "lng": "-96.937455",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2246",
    "title": "Wendy's",
    "address": "1002 E. Ennis Ave., Ennis, TX 75119",
    "source": "manual",
    "content": "1002 E. Ennis Ave., Ennis, TX 75119<br>(972) 878-5205<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "32.3328652",
      "lng": "-96.6179886",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2247",
    "title": "Wendy's",
    "address": "2800 E Berry St., Fort Worth, TX 76105",
    "source": "manual",
    "content": "2800 E Berry St., Fort Worth, TX 76105<br>(817) 413-0744",
    "location": {
      "icon": wendysIcon,
      "lat": "32.7063079",
      "lng": "-97.3228722",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2248",
    "title": "Wendy's",
    "address": "912 W Galbraith Rd, Cincinnati, OH 45231, USA",
    "source": "manual",
    "content": "912 W Galbraith Rd, Cincinnati, OH 45231<br>(513) 931-3471",
    "location": {
      "icon": wendysIcon,
      "lat": "39.216211",
      "lng": "-84.519148",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2249",
    "title": "Wendy's",
    "address": "7289 Kenwood Rd, Cincinnati, OH 45236",
    "source": "manual",
    "content": "7289 Kenwood Rd, Cincinnati, OH 45236<br>(513) 984-2251",
    "location": {
      "icon": wendysIcon,
      "lat": "39.196319",
      "lng": "-84.381035",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2250",
    "title": "Wendy's",
    "address": "3640 Harrison Ave, Cheviot, OH 45211",
    "source": "manual",
    "content": "3640 Harrison Ave, Cheviot, OH 45211<br>(513) 661-1344",
    "location": {
      "icon": wendysIcon,
      "lat": "39.156554",
      "lng": "-84.610753",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2251",
    "title": "Wendy's",
    "address": "5330 Ridge Rd, Cincinnati, OH 45213",
    "source": "manual",
    "content": "5330 Ridge Rd, Cincinnati, OH 45213<br>(513) 531-3389",
    "location": {
      "icon": wendysIcon,
      "lat": "39.169783",
      "lng": "-84.424469",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2252",
    "title": "Wendy's",
    "address": "4474 Montgomery Rd, Norwood, OH 45212",
    "source": "manual",
    "content": "4474 Montgomery Rd, Norwood, OH 45212<br>(513) 631-2215",
    "location": {
      "icon": wendysIcon,
      "lat": "39.159126",
      "lng": "-84.456669",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2253",
    "title": "Wendy's",
    "address": "400 Northland Blvd, Cincinnati, OH 45240",
    "source": "manual",
    "content": "400 Northland Blvd, Cincinnati, OH 45240<br>(513) 851-2232",
    "location": {
      "icon": wendysIcon,
      "lat": "39.282785",
      "lng": "-84.485935",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2254",
    "title": "Wendy's",
    "address": "4559 Eastgate Blvd, Cincinnati, OH 45245",
    "source": "manual",
    "content": "4559 Eastgate Blvd, Cincinnati, OH 45245<br>(513) 752-9225",
    "location": {
      "icon": wendysIcon,
      "lat": "39.101323",
      "lng": "-84.275033",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2255",
    "title": "Wendy's",
    "address": "8240 Vine St, Cincinnati, OH 45216",
    "source": "manual",
    "content": "8240 Vine St, Cincinnati, OH 45216<br>(513) 821-3038",
    "location": {
      "icon": wendysIcon,
      "lat": "39.210944",
      "lng": "-84.474033",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2256",
    "title": "Wendy's",
    "address": "4910 Vine St, Cincinnati, OH 45217",
    "source": "manual",
    "content": "4910 Vine St, Cincinnati, OH 45217<br>(513) 242-6074",
    "location": {
      "icon": wendysIcon,
      "lat": "39.169082",
      "lng": "-84.496913",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2257",
    "title": "Wendy's",
    "address": "6243 Glenway Ave, Cincinnati, OH 45211",
    "source": "manual",
    "content": "6243 Glenway Ave, Cincinnati, OH 45211<br>(513) 481-7366",
    "location": {
      "icon": wendysIcon,
      "lat": "39.145035",
      "lng": "-84.624377",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2258",
    "title": "Wendy's",
    "address": "7311 Dixie Hwy, Fairfield, OH 45014",
    "source": "manual",
    "content": "7311 Dixie Hwy, Fairfield, OH 45014<br>(513) 874-5000",
    "location": {
      "icon": wendysIcon,
      "lat": "39.306878",
      "lng": "-84.487241",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2259",
    "title": "Wendy's",
    "address": "8234 Colerain Ave, Cincinnati, OH 45239",
    "source": "manual",
    "content": "8234 Colerain Ave, Cincinnati, OH 45239<br>(513) 741-0117",
    "location": {
      "icon": wendysIcon,
      "lat": "39.220696",
      "lng": "-84.585897",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2260",
    "title": "Wendy's",
    "address": "11007 Reed Hartman Hwy, Cincinnati, OH 45242",
    "source": "manual",
    "content": "11007 Reed Hartman Hwy, Cincinnati, OH 45242<br>(513) 984-4586",
    "location": {
      "icon": wendysIcon,
      "lat": "39.266278",
      "lng": "-84.379892",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2261",
    "title": "Wendy's",
    "address": "9812 Escort Dr, Mason, OH 45040",
    "source": "manual",
    "content": "9812 Escort Dr, Mason, OH 45040<br>(513) 398-6080",
    "location": {
      "icon": wendysIcon,
      "lat": "39.294992",
      "lng": "-84.31646",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2262",
    "title": "Wendy's",
    "address": "2238 Beechmont Ave, Cincinnati, OH 45230",
    "source": "manual",
    "content": "2238 Beechmont Ave, Cincinnati, OH 45230<br>(513) 231-4834",
    "location": {
      "icon": wendysIcon,
      "lat": "39.095347",
      "lng": "-84.386789",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2263",
    "title": "Wendy's",
    "address": "1015 Gest St, Cincinnati, OH 45203",
    "source": "manual",
    "content": "1015 Gest St, Cincinnati, OH 45203<br>(513) 241-2458",
    "location": {
      "icon": wendysIcon,
      "lat": "39.106301",
      "lng": "-84.53355",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2264",
    "title": "Wendy's",
    "address": "11898 Chase Plz, Cincinnati, OH 45240",
    "source": "manual",
    "content": "11898 Chase Plz, Cincinnati, OH 45240<br>(513) 851-1502",
    "location": {
      "icon": wendysIcon,
      "lat": "39.295048",
      "lng": "-84.524738",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2265",
    "title": "Wendy's",
    "address": "3988 US-22, Loveland, OH 45140",
    "source": "manual",
    "content": "3988 US-22, Loveland, OH 45140<br>(513) 677-1890",
    "location": {
      "icon": wendysIcon,
      "lat": "39.292784",
      "lng": "-84.297115",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2266",
    "title": "Wendy's",
    "address": "3802 Hamilton Cleves Rd, Hamilton, OH 45013, USA",
    "source": "manual",
    "content": "3802 Hamilton Cleves Rd, Hamilton, OH 45013, USA<br>(513) 738-1441",
    "location": {
      "icon": wendysIcon,
      "lat": "39.322535",
      "lng": "-84.637596",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2267",
    "title": "Wendy's",
    "address": "9537 Mangham Dr, Cincinnati, OH 45215",
    "source": "manual",
    "content": "9537 Mangham Dr, Cincinnati, OH 45215<br>(513) 733-5149",
    "location": {
      "icon": wendysIcon,
      "lat": "39.237304",
      "lng": "-84.452619",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2268",
    "title": "Wendy's",
    "address": "8342 Princeton Glendale Rd, West Chester, OH 45069",
    "source": "manual",
    "content": "8342 Princeton Glendale Rd, West Chester, OH 45069<br>(513) 860-3936",
    "location": {
      "icon": wendysIcon,
      "lat": "39.349234",
      "lng": "-84.460949",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2269",
    "title": "Wendy's",
    "address": "3478 River Hills Dr, Cincinnati, OH 45244",
    "source": "manual",
    "content": "3478 River Hills Dr, Cincinnati, OH 45244<br>(513) 271-6692",
    "location": {
      "icon": wendysIcon,
      "lat": "39.124351",
      "lng": "-84.354823",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2270",
    "title": "Wendy's",
    "address": "5909 Muhlhauser Rd, West Chester, OH 45069",
    "source": "manual",
    "content": "5909 Muhlhauser Rd, West Chester, OH 45069<br>(513) 874-3134",
    "location": {
      "icon": wendysIcon,
      "lat": "39.321055",
      "lng": "-84.430018",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2271",
    "title": "Wendy's",
    "address": "2108 Front Wheel Dr, Batavia, OH 45103",
    "source": "manual",
    "content": "2108 Front Wheel Dr, Batavia, OH 45103<br>(513) 724-5637",
    "location": {
      "icon": wendysIcon,
      "lat": "39.077007",
      "lng": "-84.176879",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2272",
    "title": "Wendy's",
    "address": "201 Sterling Run Blvd, Mt Orab, OH 45154",
    "source": "manual",
    "content": "201 Sterling Run Blvd, Mt Orab, OH 45154<br>(937) 444-9119",
    "location": {
      "icon": wendysIcon,
      "lat": "39.038361",
      "lng": "-83.920922",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2273",
    "title": "Wendy's",
    "address": "10775 Reading Rd, Cincinnati, OH 45241",
    "source": "manual",
    "content": "10775 Reading Rd, Cincinnati, OH 45241<br>(513) 769-6789",
    "location": {
      "icon": wendysIcon,
      "lat": "39.26312",
      "lng": "-84.416911",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2274",
    "title": "Wendy's",
    "address": "855 William Howard Taft Rd, Cincinnati, OH 45206",
    "source": "manual",
    "content": "855 William Howard Taft Rd, Cincinnati, OH 45206<br>(513) 751-1334",
    "location": {
      "icon": wendysIcon,
      "lat": "39.127219",
      "lng": "-84.490071",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2275",
    "title": "Wendy's",
    "address": "1246 Hopple St, Cincinnati, OH 45225",
    "source": "manual",
    "content": "1246 Hopple St, Cincinnati, OH 45225<br>(513) 681-0500",
    "location": {
      "icon": wendysIcon,
      "lat": "39.137576",
      "lng": "-84.536913",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2276",
    "title": "Wendy's",
    "address": "54 E. Grandin Rd, Maineville, OH 45039",
    "source": "manual",
    "content": "54 Grandin Rd, Maineville, OH 45039<br>(513) 583-5971",
    "location": {
      "icon": wendysIcon,
      "lat": "39.34637",
      "lng": "-84.218448",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2277",
    "title": "Wendy's",
    "address": "621 W Plane St, Bethel, OH 45106",
    "source": "manual",
    "content": "621 W Plane St, Bethel, OH 45106<br>(513) 734- 0794",
    "location": {
      "icon": wendysIcon,
      "lat": "38.96433",
      "lng": "-84.090668",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2279",
    "title": "Wendy's",
    "address": "5316 Kings Island Dr, Mason, OH 45040",
    "source": "manual",
    "content": "5316 Kings Island Dr, Mason, OH 45040<br>(513) 336-6159 ",
    "location": {
      "icon": wendysIcon,
      "lat": "39.357866",
      "lng": "-84.257622",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2280",
    "title": "Wendy's",
    "address": "1146 Marian Dr, Batavia, OH 45103",
    "source": "manual",
    "content": "1146 Marian Dr, Batavia, OH 45103<br>(513) 947-1111",
    "location": {
      "icon": wendysIcon,
      "lat": "39.089751",
      "lng": "-84.248749",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2281",
    "title": "Wendy's",
    "address": "3994 Red Bank Rd, Cincinnati, OH 45227",
    "source": "manual",
    "content": "3994 Red Bank Rd, Cincinnati, OH 45227<br>(513) 271-1467",
    "location": {
      "icon": wendysIcon,
      "lat": "39.147941",
      "lng": "-84.403969",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2282",
    "title": "Wendy's",
    "address": "200 W Main St, Amelia, OH 45102",
    "source": "manual",
    "content": "200 W Main St, Amelia, OH 45102<br>(513) 752-1292",
    "location": {
      "icon": wendysIcon,
      "lat": "39.036316",
      "lng": "-84.229812",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2283",
    "title": "Wendy's",
    "address": "10152 Colerain Ave, Cincinnati, OH 45251",
    "source": "manual",
    "content": "10152 Colerain Ave, Cincinnati, OH 45251<br>(513) 385-5371",
    "location": {
      "icon": wendysIcon,
      "lat": "39.259228",
      "lng": "-84.601566",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2284",
    "title": "Wendy's",
    "address": "9140 N. Tarrant Parkway, N. Richland Hills, TX 76182",
    "source": "manual",
    "content": "9140 N. Tarrant Parkway, N. Richland Hills, TX 76182<br>(817) 788-4902",
    "location": {
      "icon": wendysIcon,
      "lat": "32.903734",
      "lng": "-97.187524",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2285",
    "title": "Wendy's",
    "address": "5066 Delhi Pike, Cincinnati, OH, 45238",
    "source": "manual",
    "content": "5066 Delhi Pike, Cincinnati, OH, 45238<br>(513) 922-3593",
    "location": {
      "icon": wendysIcon,
      "lat": "39.095399",
      "lng": "-84.611759",
      "city": "Cincinnati",
      "country": "United States",
      "onclick_action": "marker",
      "postal_code": "45238",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2286",
    "title": "Wendy's",
    "address": "5460 North Bend Road, Cincinnati, OH 45247",
    "source": "manual",
    "content": "5460 North Bend Road, Cincinnati, OH 45247<br>(513) 481-6018",
    "location": {
      "icon": wendysIcon,
      "lat": "39.189697",
      "lng": "-84.599735",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2287",
    "title": "Wendy's",
    "address": "900 North High St., Hillsboro, OH 45133",
    "source": "manual",
    "content": "900 North High St., Hillsboro, OH 45133<br>(937) 393-5256",
    "location": {
      "icon": wendysIcon,
      "lat": "39.213428",
      "lng": "-83.608206",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2288",
    "title": "Wendy's",
    "address": "3800 Clear Creek Rd., Killeen, TX 76459",
    "source": "manual",
    "content": "3800 Clear Creek Rd., Killeen, TX 76459<br>(254) 539-1024",
    "location": {
      "icon": wendysIcon,
      "lat": "31.104501",
      "lng": "-97.802918",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2289",
    "title": "Wendy's",
    "address": "10 Booth Street, Canandaigua, NY 14424",
    "source": "manual",
    "content": "10 Booth Street, Canandaigua, NY 14424<br>(585) 394-8660",
    "location": {
      "icon": wendysIcon,
      "lat": "42.877377",
      "lng": "-77.269591",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2290",
    "title": "Wendy's",
    "address": "1011 Park Ave., Meadville, PA 16335",
    "source": "manual",
    "content": "1011 Park Ave., Meadville, PA 16335<br>(814) 333-9655",
    "location": {
      "icon": wendysIcon,
      "lat": "41.636003",
      "lng": "-80.153086",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2291",
    "title": "Wendy's",
    "address": "102 Washington Towne Blvd., Edinboro, PA 16412",
    "source": "manual",
    "content": "102 Washington Towne Blvd., Edinboro, PA 16412<br>(814) 734-2921",
    "location": {
      "icon": wendysIcon,
      "lat": "41.878844",
      "lng": "-80.173402",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2292",
    "title": "Wendy's",
    "address": "10350 Bennett Rd., Fredonia, NY 14063",
    "source": "manual",
    "content": "10350 Bennett Rd., Fredonia, NY 14063<br>(716) 672-5226",
    "location": {
      "icon": wendysIcon,
      "lat": "42.450664",
      "lng": "-79.307956",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2293",
    "title": "Wendy's",
    "address": "105 East 12th St., Erie, PA 16501",
    "source": "manual",
    "content": "105 East 12th St., Erie, PA 16501<br>(814) 455-0640",
    "location": {
      "icon": wendysIcon,
      "lat": "42.123723",
      "lng": "-80.079307",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2294",
    "title": "Wendy's",
    "address": "1051 MAIN STREET, BUFFALO, NY 14209",
    "source": "manual",
    "content": "1051 MAIN STREET, BUFFALO, NY 14209<br>(716) 883-7242",
    "location": {
      "icon": wendysIcon,
      "lat": "42.903046",
      "lng": "-78.868242",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2295",
    "title": "Wendy's",
    "address": "1175 E. Ridge Rd., Irondequoit, NY 14617",
    "source": "manual",
    "content": "1175 E. Ridge Rd., Irondequoit, NY 14617<br>(585) 266-7523",
    "location": {
      "icon": wendysIcon,
      "lat": "43.197085",
      "lng": "-77.585572",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2296",
    "title": "Wendy's",
    "address": "13246 Cedar Rd., Cleveland Hts., Ohio 44118",
    "source": "manual",
    "content": "13246 Cedar Rd., Cleveland Hts., Ohio 44118<br>(216) 371-3402",
    "location": {
      "icon": wendysIcon,
      "lat": "41.501021",
      "lng": "-81.563498",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2297",
    "title": "Wendy's",
    "address": "1331 West 117th St., Cleveland, Ohio 44107",
    "source": "manual",
    "content": "1331 West 117th St., Cleveland, Ohio 44107<br>(216) 521-6211",
    "location": {
      "icon": wendysIcon,
      "lat": "41.485577",
      "lng": "-81.768438",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2298",
    "title": "Wendy's",
    "address": "1355 E. Second St., Jamestown, NY 14701",
    "source": "manual",
    "content": "1355 E. Second St., Jamestown, NY 14701<br>(716) 665-6798",
    "location": {
      "icon": wendysIcon,
      "lat": "42.113571",
      "lng": "-79.211605",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2299",
    "title": "Wendy's",
    "address": "1374 Som Center Rd., Mayfield Hts., Ohio 44124",
    "source": "manual",
    "content": "1374 Som Center Rd., Mayfield Hts., Ohio 44124<br>(440) 461-7718",
    "location": {
      "icon": wendysIcon,
      "lat": "41.52319",
      "lng": "-81.439266",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2300",
    "title": "Wendy's",
    "address": "14015 Lorain Ave., Cleveland, Ohio 44111",
    "source": "manual",
    "content": "14015 Lorain Ave., Cleveland, Ohio 44111<br>(216) 252-1990",
    "location": {
      "icon": wendysIcon,
      "lat": "41.465223",
      "lng": "-82.156347",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2301",
    "title": "Wendy's",
    "address": "1410 Colorado Ave., Lorain, Ohio 44052",
    "source": "manual",
    "content": "1410 Colorado Ave., Lorain, Ohio 44052<br>(440) 288-0910",
    "location": {
      "icon": wendysIcon,
      "lat": "41.465223",
      "lng": "-82.156347",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2302",
    "title": "Wendy's",
    "address": "14944 Pearl Rd., Strongsville, Ohio 44136",
    "source": "manual",
    "content": "14944 Pearl Rd., Strongsville, Ohio 44136<br>(440) 238-6690",
    "location": {
      "icon": wendysIcon,
      "lat": "41.306901",
      "lng": "-81.835848",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2303",
    "title": "Wendy's",
    "address": "15170 E. Bagley Rd., Middleburg Hts., Ohio 44130",
    "source": "manual",
    "content": "15170 E. Bagley Rd., Middleburg Hts., Ohio 44130<br>(440) 885-4980",
    "location": {
      "icon": wendysIcon,
      "lat": "41.369271",
      "lng": "-81.804592",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2304",
    "title": "Wendy's",
    "address": "1550 Mt Hope Ave, Rochester, NY 14620",
    "source": "manual",
    "content": "1550 Mt Hope Ave, Rochester, NY 14620<br>(585) 271-3030",
    "location": {
      "icon": wendysIcon,
      "lat": "43.119945",
      "lng": "-77.619397",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2305",
    "title": "Wendy's",
    "address": "1685 GRAND ISLAND BLVD, GRAND ISLAND, NY 14072",
    "source": "manual",
    "content": "1685 GRAND ISLAND BLVD, GRAND ISLAND, NY 14072<br>(716) 773-6330",
    "location": {
      "icon": wendysIcon,
      "lat": "43.007842",
      "lng": "-78.948664",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2306",
    "title": "Wendy's",
    "address": "1844 East Avenue, Rochester, NY 14610",
    "source": "manual",
    "content": "1844 East Avenue, Rochester, NY 14610<br>(585) 244-5080",
    "location": {
      "icon": wendysIcon,
      "lat": "43.145566",
      "lng": "-77.554591",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2307",
    "title": "Wendy's",
    "address": "1951 Buffalo Rd., Rochester, NY 14624",
    "source": "manual",
    "content": "1951 Buffalo Rd., Rochester, NY 14624<br>(585) 247-1792",
    "location": {
      "icon": wendysIcon,
      "lat": "43.148198",
      "lng": "-77.705483",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2308",
    "title": "Wendy's",
    "address": "2021 RIDGE ROAD, W.SENECA, NY 14224",
    "source": "manual",
    "content": "2021 RIDGE ROAD, W.SENECA, NY 14224<br>(716) 675-5882",
    "location": {
      "icon": wendysIcon,
      "lat": "42.829119",
      "lng": "-78.777042",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2309",
    "title": "Wendy's",
    "address": "21250 Center Ridge Rd., Rocky River, Ohio 44116",
    "source": "manual",
    "content": "21250 Center Ridge Rd., Rocky River, Ohio 44116<br>(440) 333-4377",
    "location": {
      "icon": wendysIcon,
      "lat": "41.461061",
      "lng": "-81.855651",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2310",
    "title": "Wendy's",
    "address": "2207 West 12th St., Erie, PA 16505",
    "source": "manual",
    "content": "2207 West 12th St., Erie, PA 16505<br>(814) 459-3062",
    "location": {
      "icon": wendysIcon,
      "lat": "42.104101",
      "lng": "-80.131892",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2311",
    "title": "Wendy's",
    "address": "2230 ELMWOOD AVENUE, BUFFALO, NY 14214",
    "source": "manual",
    "content": "2230 ELMWOOD AVENUE, BUFFALO, NY 14214<br>(716) 875-4166",
    "location": {
      "icon": wendysIcon,
      "lat": "42.958088",
      "lng": "-78.879666",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2312",
    "title": "Wendy's",
    "address": "23050 Broadway Ave., Oakwood, Ohio 44146",
    "source": "manual",
    "content": "23050 Broadway Ave., Oakwood, Ohio 44146<br>(440) 232-9009",
    "location": {
      "icon": wendysIcon,
      "lat": "41.369303",
      "lng": "-81.513952",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2313",
    "title": "Wendy's",
    "address": "250 East 222nd St., Euclid, Ohio 44123",
    "source": "manual",
    "content": "250 East 222nd St., Euclid, Ohio 44123<br>(216) 731-8821",
    "location": {
      "icon": wendysIcon,
      "lat": "41.608349",
      "lng": "-81.527312",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2314",
    "title": "Wendy's",
    "address": "26650 Lorain Ave., N. Olmsted, Ohio 44070",
    "source": "manual",
    "content": "26650 Lorain Ave., N. Olmsted, Ohio 44070<br>(440) 777-7171",
    "location": {
      "icon": wendysIcon,
      "lat": "41.418645",
      "lng": "-81.917702",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2315",
    "title": "Wendy's",
    "address": "27400 Chagrin Blvd., Orange Village, Ohio 44122",
    "source": "manual",
    "content": "27400 Chagrin Blvd., Orange Village, Ohio 44122<br>(216) 292-3852",
    "location": {
      "icon": wendysIcon,
      "lat": "41.462041",
      "lng": "-81.485952",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2316",
    "title": "Wendy's",
    "address": "2937 Lorain Ave., Cleveland, Ohio 44113",
    "source": "manual",
    "content": "2937 Lorain Ave., Cleveland, Ohio 44113<br>(216) 651-4666",
    "location": {
      "icon": wendysIcon,
      "lat": "41.482538",
      "lng": "-81.706684",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2317",
    "title": "Wendy's",
    "address": "29778 Detroit Rd., Westlake, Ohio 44145",
    "source": "manual",
    "content": "29778 Detroit Rd., Westlake, Ohio 44145<br>(440) 892-8946",
    "location": {
      "icon": wendysIcon,
      "lat": "41.464351",
      "lng": "-81.950559",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2318",
    "title": "Wendy's",
    "address": "2988 W Ridge, Greece, NY 14626",
    "source": "manual",
    "content": "2988 W Ridge, Greece, NY 14626<br>(585) 225-6010",
    "location": {
      "icon": wendysIcon,
      "lat": "43.21114",
      "lng": "-77.708038",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2319",
    "title": "Wendy's",
    "address": "305 West Commercial, E. Rochester, NY 14445",
    "source": "manual",
    "content": "305 West Commercial, E. Rochester, NY 14445<br>(585) 385-4890",
    "location": {
      "icon": wendysIcon,
      "lat": "43.114819",
      "lng": "-77.490668",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2320",
    "title": "Wendy's",
    "address": "3050 Winton Road, Rochester, NY 14623",
    "source": "manual",
    "content": "3050 Winton Road, Rochester, NY 14623<br>(585) 292-0690",
    "location": {
      "icon": wendysIcon,
      "lat": "43.094105",
      "lng": "-77.581103",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2321",
    "title": "Wendy's",
    "address": "3180 Monroe Avenue, Rochester, NY 14618",
    "source": "manual",
    "content": "3180 Monroe Avenue, Rochester, NY 14618<br>(585) 383-1660",
    "location": {
      "icon": wendysIcon,
      "lat": "43.106153",
      "lng": "-77.541189",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2322",
    "title": "Wendy's",
    "address": "3180 NIAGARA FALLS BLVD, AMHERST, NY 14228",
    "source": "manual",
    "content": "3180 NIAGARA FALLS BLVD, AMHERST, NY 14228<br>(716) 743-0592",
    "location": {
      "icon": wendysIcon,
      "lat": "43.040816",
      "lng": "-78.824926",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2323",
    "title": "Wendy's",
    "address": "3200 Chili Ave., Rochester, NY 14624",
    "source": "manual",
    "content": "3200 Chili Ave., Rochester, NY 14624<br>(585) 889-5046",
    "location": {
      "icon": wendysIcon,
      "lat": "43.106466",
      "lng": "-77.748532",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2324",
    "title": "Wendy's",
    "address": "327 E. Fairmont Ave., Lakewood, NY 14750",
    "source": "manual",
    "content": "327 E. Fairmont Ave., Lakewood, NY 14750<br>(716) 763-0998",
    "location": {
      "icon": wendysIcon,
      "lat": "42.099614",
      "lng": "-79.302959",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2325",
    "title": "Wendy's",
    "address": "3275 ORCHARD PARK RD, ORCHARD PARK, NY 14127",
    "source": "manual",
    "content": "3275 ORCHARD PARK RD, ORCHARD PARK, NY 14127<br>(716) 677-6837",
    "location": {
      "icon": wendysIcon,
      "lat": "42.795675",
      "lng": "-78.75093",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2326",
    "title": "Wendy's",
    "address": "3362 MAIN STREET, BUFFALO, NY 14214",
    "source": "manual",
    "content": "3362 MAIN STREET, BUFFALO, NY 14214<br>(716) 862-3511",
    "location": {
      "icon": wendysIcon,
      "lat": "42.95504",
      "lng": "-78.822098",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2327",
    "title": "Wendy's",
    "address": "34323 Center Ridge Rd., N. Ridgeville, Ohio 44039",
    "source": "manual",
    "content": "34323 Center Ridge Rd., N. Ridgeville, Ohio 44039<br>(440) 327-2113",
    "location": {
      "icon": wendysIcon,
      "lat": "41.397477",
      "lng": "-81.997694",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2328",
    "title": "Wendy's",
    "address": "3513 MCKINLEY PKWY, BUFFALO, NY 14219",
    "source": "manual",
    "content": "3513 MCKINLEY PKWY, BUFFALO, NY 14219<br>(716) 826-2826",
    "location": {
      "icon": wendysIcon,
      "lat": "42.789134",
      "lng": "-78.81023",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2329",
    "title": "Wendy's",
    "address": "3516 Warrensville Center Rd., Shaker Hts., Ohio 44122",
    "source": "manual",
    "content": "3516 Warrensville Center Rd., Shaker Hts., Ohio 44122<br>(216) 752-6960",
    "location": {
      "icon": wendysIcon,
      "lat": "41.464133",
      "lng": "-81.536553",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2330",
    "title": "Wendy's",
    "address": "360 DINGENS, BUFFALO, NY 14206",
    "source": "manual",
    "content": "360 DINGENS, BUFFALO, NY 14206<br>(716) 824-3011",
    "location": {
      "icon": wendysIcon,
      "lat": "42.878399",
      "lng": "-78.802031",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2331",
    "title": "Wendy's",
    "address": "3825 Dewey Ave, Greece, NY 14616",
    "source": "manual",
    "content": "3825 Dewey Ave, Greece, NY 14616<br>(585) 621-4394",
    "location": {
      "icon": wendysIcon,
      "lat": "43.240232",
      "lng": "-77.647406",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2332",
    "title": "Wendy's",
    "address": "4050 MAPLE RD., AMHERST, NY 14226",
    "source": "manual",
    "content": "4050 MAPLE RD., AMHERST, NY 14226<br>(716) 832-0855",
    "location": {
      "icon": wendysIcon,
      "lat": "42.991269",
      "lng": "-78.813049",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2333",
    "title": "Wendy's",
    "address": "4158 Lakeville Road, Geneseo, NY 14454",
    "source": "manual",
    "content": "4158 Lakeville Road, Geneseo, NY 14454<br>(585) 243-2210",
    "location": {
      "icon": wendysIcon,
      "lat": "42.794952",
      "lng": "-77.795391",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2334",
    "title": "Wendy's",
    "address": "4186 Buffalo Rd., Erie, PA 16510",
    "source": "manual",
    "content": "4186 Buffalo Rd., Erie, PA 16510<br>(814) 899-4611",
    "location": {
      "icon": wendysIcon,
      "lat": "42.145178",
      "lng": "-80.006384",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2335",
    "title": "Wendy's",
    "address": "44 Main St, Batavia, NY 14020",
    "source": "manual",
    "content": "44 Main St, Batavia, NY 14020<br>(585) 343-5858",
    "location": {
      "icon": wendysIcon,
      "lat": "42.998287",
      "lng": "-78.185764",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2336",
    "title": "Wendy's",
    "address": "4602 Northfield Rd., North Randall, Ohio 44128",
    "source": "manual",
    "content": "4602 Northfield Rd., North Randall, Ohio 44128<br>(216) 332-0485",
    "location": {
      "icon": wendysIcon,
      "lat": "41.434619",
      "lng": "-81.52698",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2337",
    "title": "Wendy's",
    "address": "4640 Lake Road, Brockport, NY 14420",
    "source": "manual",
    "content": "4640 Lake Road, Brockport, NY 14420<br>(585) 637-5220",
    "location": {
      "icon": wendysIcon,
      "lat": "43.202884",
      "lng": "-77.941709",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2338",
    "title": "Wendy's",
    "address": "4747 West Henrietta Road, Rochester, NY 14467",
    "source": "manual",
    "content": "4747 West Henrietta Road, Rochester, NY 14467<br>(585) 334-3450",
    "location": {
      "icon": wendysIcon,
      "lat": "43.05828",
      "lng": "-77.652978",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2339",
    "title": "Wendy's",
    "address": "481 Hamilton Street, Geneva, NY 14456",
    "source": "manual",
    "content": "481 Hamilton Street, Geneva, NY 14456<br>(315) 789-2463",
    "location": {
      "icon": wendysIcon,
      "lat": "42.856405",
      "lng": "-77.004453",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2340",
    "title": "Wendy's",
    "address": "4961 TRANSIT ROAD, DEPEW, NY 14043",
    "source": "manual",
    "content": "4961 TRANSIT ROAD, DEPEW, NY 14043<br>(716) 206-0003",
    "location": {
      "icon": wendysIcon,
      "lat": "42.881425",
      "lng": "-78.696219",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2341",
    "title": "Wendy's",
    "address": "510 W.Union St., Newark, NY 14513",
    "source": "manual",
    "content": "510 W.Union St., Newark, NY 14513<br>(315) 331-5922",
    "location": {
      "icon": wendysIcon,
      "lat": "43.046231",
      "lng": "-77.109798",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2342",
    "title": "Wendy's",
    "address": "5200 North Abbe Rd., Sheffield Village, Ohio 44035",
    "source": "manual",
    "content": "5200 North Abbe Rd., Sheffield Village, Ohio 44035<br>(440) 934-7666",
    "location": {
      "icon": wendysIcon,
      "lat": "41.422318",
      "lng": "-82.077608",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2343",
    "title": "Wendy's",
    "address": "5244 MAIN ST., WILLIAMSVILLE, NY 14221",
    "source": "manual",
    "content": "5244 MAIN ST., WILLIAMSVILLE, NY 14221<br>(716) 626-3397",
    "location": {
      "icon": wendysIcon,
      "lat": "42.961184",
      "lng": "-78.757735",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2344",
    "title": "Wendy's",
    "address": "525 Cleveland St., Elyria, Ohio 44035",
    "source": "manual",
    "content": "525 Cleveland St., Elyria, Ohio 44035<br>(440) 365-8805",
    "location": {
      "icon": wendysIcon,
      "lat": "41.375645",
      "lng": "-82.082223",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2345",
    "title": "Wendy's",
    "address": "5251 Turney Rd., Garfield Hts., Ohio 44125",
    "source": "manual",
    "content": "5251 Turney Rd., Garfield Hts., Ohio 44125<br>(216) 662-1685",
    "location": {
      "icon": wendysIcon,
      "lat": "41.418918",
      "lng": "-81.606906",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2346",
    "title": "Wendy's",
    "address": "5281 CAMP ROAD, HAMBURG, NY 14075",
    "source": "manual",
    "content": "5281 CAMP ROAD, HAMBURG, NY 14075<br>(716) 649-5754",
    "location": {
      "icon": wendysIcon,
      "lat": "42.743616",
      "lng": "-78.84939",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2347",
    "title": "Wendy's",
    "address": "5360 Warrensville Center Rd., Maple Hts, Ohio 44137",
    "source": "manual",
    "content": "5360 Warrensville Center Rd., Maple Hts, Ohio 44137<br>(216) 332-0156",
    "location": {
      "icon": wendysIcon,
      "lat": "41.414779",
      "lng": "-81.537974",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2348",
    "title": "Wendy's",
    "address": "557 Moseley Road, Perinton, NY 14450",
    "source": "manual",
    "content": "557 Moseley Road, Perinton, NY 14450<br>(585) 425-7657",
    "location": {
      "icon": wendysIcon,
      "lat": "43.071836",
      "lng": "-77.443037",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2349",
    "title": "Wendy's",
    "address": "558 Griswold Rd., Elyria, Ohio 44035 (Midway Mall)",
    "source": "manual",
    "content": "558 Griswold Rd., Elyria, Ohio 44035 (Midway Mall)<br>(440) 324-6640",
    "location": {
      "icon": wendysIcon,
      "lat": "41.400166",
      "lng": "-82.115791",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2350",
    "title": "Wendy's",
    "address": "566 Jefferson Rd, Rochester, NY 14623",
    "source": "manual",
    "content": "566 Jefferson Rd, Rochester, NY 14623<br>(585) 292-1390",
    "location": {
      "icon": wendysIcon,
      "lat": "43.087598",
      "lng": "-77.62908",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2351",
    "title": "Wendy's",
    "address": "5737 S. TRANSIT ROAD, LOCKPORT, NY 14094",
    "source": "manual",
    "content": "5737 S. TRANSIT ROAD, LOCKPORT, NY 14094<br>(716) 434-6439",
    "location": {
      "icon": wendysIcon,
      "lat": "43.147736",
      "lng": "-78.696173",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2352",
    "title": "Wendy's",
    "address": "5815 St. Clair Ave., Cleveland, Ohio 44103",
    "source": "manual",
    "content": "5815 St. Clair Ave., Cleveland, Ohio 44103<br>(216) 881-1990",
    "location": {
      "icon": wendysIcon,
      "lat": "41.522984",
      "lng": "-81.651043",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2353",
    "title": "Wendy's",
    "address": "5901 Peach St., Erie, PA 16509",
    "source": "manual",
    "content": "5901 Peach St., Erie, PA 16509<br>(814) 868-2839",
    "location": {
      "icon": wendysIcon,
      "lat": "42.066011",
      "lng": "-80.092582",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2354",
    "title": "Wendy's",
    "address": "5902 Wattsburg Rd., exit 8 & I-90, Erie, PA 16509",
    "source": "manual",
    "content": "5902 Wattsburg Rd., exit 8 & I-90, Erie, PA 16509<br>(814) 825-5897",
    "location": {
      "icon": wendysIcon,
      "lat": "42.049417",
      "lng": "-80.042315",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2355",
    "title": "Wendy's",
    "address": "60 Pennsylvania Ave., Warren, PA 16365",
    "source": "manual",
    "content": "60 Pennsylvania Ave., Warren, PA 16365<br>(814) 723-2740",
    "location": {
      "icon": wendysIcon,
      "lat": "41.844133",
      "lng": "-79.142816",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2356",
    "title": "Wendy's",
    "address": "6020 PORTER ROAD, NIAGARA FALLS, NY 14305",
    "source": "manual",
    "content": "6020 PORTER ROAD, NIAGARA FALLS, NY 14305<br>(716) 297-6088",
    "location": {
      "icon": wendysIcon,
      "lat": "43.108087",
      "lng": "-78.99453",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2357",
    "title": "Wendy's",
    "address": "604 North Leavitt Rd., Amherst, Ohio 44001",
    "source": "manual",
    "content": "604 North Leavitt Rd., Amherst, Ohio 44001<br>(440) 985-1680",
    "location": {
      "icon": wendysIcon,
      "lat": "41.41235",
      "lng": "-82.210102",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2358",
    "title": "Wendy's",
    "address": "6540 Pearl Rd., Parma Hts., Ohio 44130",
    "source": "manual",
    "content": "6540 Pearl Rd., Parma Hts., Ohio 44130<br>(440) 842-6070",
    "location": {
      "icon": wendysIcon,
      "lat": "41.384429",
      "lng": "-81.774538",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2359",
    "title": "Wendy's",
    "address": "683 Lake Av., Rochester, NY 14613",
    "source": "manual",
    "content": "683 Lake Av., Rochester, NY 14613<br>(585) 254-2860",
    "location": {
      "icon": wendysIcon,
      "lat": "43.177133",
      "lng": "-77.63137",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2360",
    "title": "Wendy's",
    "address": "6899 Rockside Rd., Independence, Ohio 44131",
    "source": "manual",
    "content": "6899 Rockside Rd., Independence, Ohio 44131<br>(216) 520-0566",
    "location": {
      "icon": wendysIcon,
      "lat": "41.394926",
      "lng": "-81.642401",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2361",
    "title": "Wendy's",
    "address": "6940 TRANSIT RD., WILLIAMSVILLE, NY 14221",
    "source": "manual",
    "content": "6940 TRANSIT RD., WILLIAMSVILLE, NY 14221<br>(716) 634-4075",
    "location": {
      "icon": wendysIcon,
      "lat": "42.95692",
      "lng": "-78.697559",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2362",
    "title": "Wendy's",
    "address": "6970 Ridge Rd., Parma, Ohio 44129",
    "source": "manual",
    "content": "6970 Ridge Rd., Parma, Ohio 44129<br>(440) 843-7717",
    "location": {
      "icon": wendysIcon,
      "lat": "41.375839",
      "lng": "-81.735185",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2363",
    "title": "Wendy's",
    "address": "744 East Main St, Rochester, NY 14605",
    "source": "manual",
    "content": "744 East Main St, Rochester, NY 14605<br>(585) 232-5586",
    "location": {
      "icon": wendysIcon,
      "lat": "43.160545",
      "lng": "-77.592469",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2364",
    "title": "Wendy's",
    "address": "7473 Victor-Pittsford Road, Victor, NY 14564",
    "source": "manual",
    "content": "7473 Victor-Pittsford Road, Victor, NY 14564<br>(585) 924-8430",
    "location": {
      "icon": wendysIcon,
      "lat": "43.007804",
      "lng": "-77.444776",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2365",
    "title": "Wendy's",
    "address": "7515 NIAGARA FALLS BOULEVARD, NIAGARA FALLS, NY 14304",
    "source": "manual",
    "content": "7515 NIAGARA FALLS BOULEVARD, NIAGARA FALLS, NY 14304<br>(716) 236-0300",
    "location": {
      "icon": wendysIcon,
      "lat": "43.087619",
      "lng": "-78.97808",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2366",
    "title": "Wendy's",
    "address": "811 YOUNG ST, TONAWANDA, NY 14150",
    "source": "manual",
    "content": "811 YOUNG ST, TONAWANDA, NY 14150<br>(716) 693-2578",
    "location": {
      "icon": wendysIcon,
      "lat": "43.002707",
      "lng": "-78.855937",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2367",
    "title": "Wendy's",
    "address": "820 Richmond Rd., Richmond Hts., Ohio 44143",
    "source": "manual",
    "content": "820 Richmond Rd., Richmond Hts., Ohio 44143<br>(216) 291-2525",
    "location": {
      "icon": wendysIcon,
      "lat": "41.53805",
      "lng": "-81.497651",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2368",
    "title": "Wendy's",
    "address": "9175 West Ridge Rd., Girard , PA 16417",
    "source": "manual",
    "content": "9175 West Ridge Rd., Girard , PA 16417<br>(814) 774-9770",
    "location": {
      "icon": wendysIcon,
      "lat": "42.00888",
      "lng": "-80.303886",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2369",
    "title": "Wendy's",
    "address": "987 Ridge Road, Webster, NY 14580",
    "source": "manual",
    "content": "987 Ridge Road, Webster, NY 14580<br>(585) 872-5635",
    "location": {
      "icon": wendysIcon,
      "lat": "43.208401",
      "lng": "-77.459229",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2370",
    "title": "Wendy's",
    "address": "447 N. Union St., Olean, NY 14760",
    "source": "manual",
    "content": "447 N. Union St., Olean, NY 14760<br>(716) 372-5400",
    "location": {
      "icon": wendysIcon,
      "lat": "42.083958",
      "lng": "-78.430343",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2371",
    "title": "Wendy's",
    "address": "9221 Benbrook Blvd, Benbrook, TX 76126",
    "source": "manual",
    "content": "9221 Benbrook Blvd, Benbrook, TX 76126<br>(817) 249-7659",
    "location": {
      "icon": wendysIcon,
      "lat": "32.672181",
      "lng": "-97.469552",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2372",
    "title": "Wendy's",
    "address": "8660 Beechmont Ave, Cincinnati, Ohio 45255",
    "source": "manual",
    "content": "8660 Beechmont Ave, Cincinnati, Ohio 45255<br>(513) 388-0033",
    "location": {
      "icon": wendysIcon,
      "lat": "39.072381",
      "lng": "-84.314084",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2373",
    "title": "Wendy's",
    "address": "1040 W. Prospect, Ashtabula, OH 44004",
    "source": "manual",
    "content": "1040 W. Prospect, Ashtabula, OH 44004<br>(440) 998-1223",
    "location": {
      "icon": wendysIcon,
      "lat": "41.863566",
      "lng": "-80.795793",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2374",
    "title": "Wendy's",
    "address": "1782 South Broadway, Geneva, OH 44041",
    "source": "manual",
    "content": "1782 South Broadway, Geneva, OH 44041<br>(440) 466-0977",
    "location": {
      "icon": wendysIcon,
      "lat": "41.786013",
      "lng": "-80.94674",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2375",
    "title": "Wendy's",
    "address": "135 Short Blvd, Dallas, TX 75232",
    "source": "manual",
    "content": "135 Short Blvd, Dallas, TX 75232<br>(214) 372-8446",
    "location": {
      "icon": wendysIcon,
      "lat": "32.685792",
      "lng": "-96.825117",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2376",
    "title": "Wendy's",
    "address": "6827 W. Military Dr., San Antonio, TX 78227",
    "source": "manual",
    "content": "6827 W. Military Dr., San Antonio, TX 78227<br>(210) 674-8889",
    "location": {
      "icon": wendysIcon,
      "lat": "29.404972",
      "lng": "-98.629997",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2377",
    "title": "Wendy's",
    "address": "9700 San Pedro Ave, San Antonio, TX 78216",
    "source": "manual",
    "content": "9700 San Pedro Ave, San Antonio, TX 78216<br>(210) 344-7577",
    "location": {
      "icon": wendysIcon,
      "lat": "29.528642",
      "lng": "-98.497281",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2378",
    "title": "Wendy's",
    "address": "2343 SW Military Dr, San Antonio, TX 78224",
    "source": "manual",
    "content": "2343 SW Military Dr, San Antonio, TX 78224<br>(210) 924-1660",
    "location": {
      "icon": wendysIcon,
      "lat": "29.357004",
      "lng": "-98.531819",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2379",
    "title": "Wendy's",
    "address": "111 N WW White, San Antonio, TX 78219",
    "source": "manual",
    "content": "111 N WW White, San Antonio, TX 78219<br>(210) 333-2531",
    "location": {
      "icon": wendysIcon,
      "lat": "29.433177",
      "lng": "-98.405977",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2380",
    "title": "Wendy's",
    "address": "430 San Pedro Ave, San Antonio, TX 78212",
    "source": "manual",
    "content": "430 San Pedro Ave, San Antonio, TX 78212<br>(210) 222-0009",
    "location": {
      "icon": wendysIcon,
      "lat": "29.437702",
      "lng": "-98.497056",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2381",
    "title": "Wendy's",
    "address": "514 W Cevallos, San Antonio, TX 78204",
    "source": "manual",
    "content": "514 W Cevallos, San Antonio, TX 78204<br>(210) 222-0015",
    "location": {
      "icon": wendysIcon,
      "lat": "29.410895",
      "lng": "-98.506754",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2382",
    "title": "Wendy's",
    "address": "607 SW Military Dr, San Antonio, TX 78221",
    "source": "manual",
    "content": "607 SW Military Dr, San Antonio, TX 78221<br>(210) 922-6771",
    "location": {
      "icon": wendysIcon,
      "lat": "29.357115",
      "lng": "-98.500667",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2383",
    "title": "Wendy's",
    "address": "9340 Wurzbach Rd, San Antonio, TX 78229",
    "source": "manual",
    "content": "9340 Wurzbach Rd, San Antonio, TX 78229<br>(210) 593-0244",
    "location": {
      "icon": wendysIcon,
      "lat": "29.529244",
      "lng": "-98.563629",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2384",
    "title": "Wendy's",
    "address": "114 Hwy 46 S, New Braunfels, TX 78130",
    "source": "manual",
    "content": "114 Hwy 46 S, New Braunfels, TX 78130<br>(830) 606-1700",
    "location": {
      "icon": wendysIcon,
      "lat": "29.702286",
      "lng": "-98.09621",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2385",
    "title": "Wendy's",
    "address": "11919 Perrin-Beitel, San Antonio, TX 78217",
    "source": "manual",
    "content": "11919 Perrin-Beitel, San Antonio, TX 78217<br>(210) 650-9250",
    "location": {
      "icon": wendysIcon,
      "lat": "29.548895",
      "lng": "-98.408964",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2386",
    "title": "Wendy's",
    "address": "7039 Culebra, San Antonio, TX 78238",
    "source": "manual",
    "content": "7039 Culebra, San Antonio, TX 78238<br>(210) 681-4767",
    "location": {
      "icon": wendysIcon,
      "lat": "29.452503",
      "lng": "-98.62861",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2387",
    "title": "Wendy's",
    "address": "4519 Fredericksburg, San Antonio, TX 78201",
    "source": "manual",
    "content": "4519 Fredericksburg, San Antonio, TX 78201<br>(210) 736-1211",
    "location": {
      "icon": wendysIcon,
      "lat": "29.489999",
      "lng": "-98.551839",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2388",
    "title": "Wendy's",
    "address": "1242 S Main, Boerne, TX 78006",
    "source": "manual",
    "content": "1242 S Main, Boerne, TX 78006<br>(830) 816-3037",
    "location": {
      "icon": wendysIcon,
      "lat": "29.780698",
      "lng": "-98.729424",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2389",
    "title": "Wendy's",
    "address": "701 E Hopkins, San Marcos, TX 78666",
    "source": "manual",
    "content": "701 E Hopkins, San Marcos, TX 78666<br>(512) 754-7040",
    "location": {
      "icon": wendysIcon,
      "lat": "29.884492",
      "lng": "-97.9236",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2390",
    "title": "Wendy's",
    "address": "5121 NW Loop 410, San Antonio, TX 78229",
    "source": "manual",
    "content": "5121 NW Loop 410, San Antonio, TX 78229<br>(210) 523-7337",
    "location": {
      "icon": wendysIcon,
      "lat": "29.487223",
      "lng": "-98.588956",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2391",
    "title": "Wendy's",
    "address": "7662 Guilbeau, San Antonio, TX 78250",
    "source": "manual",
    "content": "7662 Guilbeau, San Antonio, TX 78250<br>(210) 523-8400",
    "location": {
      "icon": wendysIcon,
      "lat": "29.518819",
      "lng": "-98.638819",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2392",
    "title": "Wendy's",
    "address": "2422 E Southcross, San Antonio, TX 78223",
    "source": "manual",
    "content": "2422 E Southcross, San Antonio, TX 78223<br>(210) 533-2898",
    "location": {
      "icon": wendysIcon,
      "lat": "29.375073",
      "lng": "-98.455715",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2393",
    "title": "Wendy's",
    "address": "4445 W Commerce St, San Antonio, TX 78237",
    "source": "manual",
    "content": "4445 W Commerce St, San Antonio, TX 78237<br>(210) 433-7202",
    "location": {
      "icon": wendysIcon,
      "lat": "29.430727",
      "lng": "-98.54955",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2394",
    "title": "Wendy's",
    "address": "7727 Wurzbach Rd, San Antonio, TX 78229",
    "source": "manual",
    "content": "7727 Wurzbach Rd, San Antonio, TX 78229<br>(210) 614-0540",
    "location": {
      "icon": wendysIcon,
      "lat": "29.51007",
      "lng": "-98.58083",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2395",
    "title": "Wendy's",
    "address": "16611 Nacogdoches, San Antonio, TX 78247",
    "source": "manual",
    "content": "16611 Nacogdoches, San Antonio, TX 78247<br>(210) 655-0567",
    "location": {
      "icon": wendysIcon,
      "lat": "29.591599",
      "lng": "-98.353259",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2396",
    "title": "Wendy's",
    "address": "5550 FM 3009, Scherz, TX 78154",
    "source": "manual",
    "content": "5550 FM 3009, Scherz, TX 78154<br>(210) 651-5551",
    "location": {
      "icon": wendysIcon,
      "lat": "29.601589",
      "lng": "-98.277673",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2397",
    "title": "Wendy's",
    "address": "5195 De Zavala Road, San Antonio, TX 78249",
    "source": "manual",
    "content": "5195 De Zavala Road, San Antonio, TX 78249<br>(210) 690-9182",
    "location": {
      "icon": wendysIcon,
      "lat": "29.565402",
      "lng": "-98.585961",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2398",
    "title": "Wendy's",
    "address": "19170 Stone Oak Pkwy, San Antonio, TX 78258",
    "source": "manual",
    "content": "19170 Stone Oak Pkwy, San Antonio, TX 78258<br>(210) 403-3793",
    "location": {
      "icon": wendysIcon,
      "lat": "29.624981",
      "lng": "-98.49441",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2399",
    "title": "Wendy's",
    "address": "9800 Fredericksburg Road, San Antonio, TX 78288",
    "source": "manual",
    "content": "9800 Fredericksburg Road, San Antonio, TX 78288<br>(210) 498-2238",
    "location": {
      "icon": wendysIcon,
      "lat": "29.53442",
      "lng": "-98.574649",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2400",
    "title": "Wendy's",
    "address": "1410 Austin Highway, San Antonio, TX 78209",
    "source": "manual",
    "content": "1410 Austin Highway, San Antonio, TX 78209<br>(210) 826-0275",
    "location": {
      "icon": wendysIcon,
      "lat": "29.491078",
      "lng": "-98.438492",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2401",
    "title": "Wendy's",
    "address": "8171 Agora Parkway, Live Oak, TX 78154",
    "source": "manual",
    "content": "8171 Agora Parkway, Live Oak, TX 78154<br>(210) 658-0386",
    "location": {
      "icon": wendysIcon,
      "lat": "29.56716",
      "lng": "-98.330348",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2402",
    "title": "Wendy's",
    "address": "18303 Blanco Road, San Antonio, TX 78258",
    "source": "manual",
    "content": "18303 Blanco Road, San Antonio, TX 78258<br>(210) 408-2861",
    "location": {
      "icon": wendysIcon,
      "lat": "29.613604",
      "lng": "-98.50979",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2403",
    "title": "Wendy's",
    "address": "9535 Culebra Rd., San Antonio, TX 78250",
    "source": "manual",
    "content": "9535 Culebra Rd., San Antonio, TX 78250<br>(210) 256-1595",
    "location": {
      "icon": wendysIcon,
      "lat": "29.48726",
      "lng": "-98.670316",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2404",
    "title": "Wendy's",
    "address": "8646 FM 78, Converse, TX 78255",
    "source": "manual",
    "content": "8646 FM 78, Converse, TX 78255<br>(210) 661-3558",
    "location": {
      "icon": wendysIcon,
      "lat": "29.499578",
      "lng": "-98.317951",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2406",
    "title": "Wendy's",
    "address": "7400 San Pedro #3, San Antonio, TX 78216",
    "source": "manual",
    "content": "7400 San Pedro #3, San Antonio, TX 78216<br>(210) 348-9829",
    "location": {
      "icon": wendysIcon,
      "lat": "29.518829",
      "lng": "-98.495198",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2407",
    "title": "Wendy's",
    "address": "10738 Potranco, San Antonio, TX 78251",
    "source": "manual",
    "content": "10738 Potranco, San Antonio, TX 78251<br>(210) 647-8116",
    "location": {
      "icon": wendysIcon,
      "lat": "29.435313",
      "lng": "-98.705561",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2408",
    "title": "Wendy's",
    "address": "17702 Bulverde Road, San Antonio, TX 78259, United States",
    "source": "manual",
    "content": "17702 Bulverde Road, San Antonio, TX 78259<br>(210) 402-0042",
    "location": {
      "icon": wendysIcon,
      "lat": "29.6025644",
      "lng": "-98.4186675",
      "city": "San Antonio",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "postal_code": "78259",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2409",
    "title": "Wendy's",
    "address": "8774 Potranco Rd, San Antonio, TX 78251, United States",
    "source": "manual",
    "content": "8774 Potranco Rd, San Antonio, TX 78251<br>(210) 647-7818",
    "location": {
      "icon": wendysIcon,
      "lat": "29.4433627",
      "lng": "-98.6630113",
      "city": "San Antonio",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "postal_code": "78251",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2410",
    "title": "Wendy's",
    "address": "11652 Bandera Rd Suite 106, San Antonio, TX 78250",
    "source": "manual",
    "content": "11652 Bandera Rd Suite 106, San Antonio, TX 78250<br>(210) 521-2573",
    "location": {
      "icon": wendysIcon,
      "lat": "29.553177",
      "lng": "-98.666639",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2411",
    "title": "Taco Bell",
    "address": "2507 Vestal Pkwy East, Vestal, NY 13850",
    "source": "manual",
    "content": "2507 Vestal Pkwy East, Vestal, NY 13850<br>(607) 729-7039",
    "location": {
      "icon": tacoBellIcon,
      "lat": "42.095304",
      "lng": "-76.008752",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2412",
    "title": "Taco Bell",
    "address": "84 Newtown Rd, Danbury, CT 06810",
    "source": "manual",
    "content": "84 Newtown Rd, Danbury, CT 06810<br>(203) 790-7996",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.409511",
      "lng": "-73.415643",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2413",
    "title": "Taco Bell",
    "address": "565 Susquehanna Blvd, Hazle Township, PA 18202",
    "source": "manual",
    "content": "565 Susquehanna Blvd, Hazle Township, PA 18202<br>(570) 455-4711",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.981167",
      "lng": "-76.017244",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2414",
    "title": "Taco Bell",
    "address": "131 Route 9 West, West Haverstraw, NY 10993",
    "source": "manual",
    "content": "131 Route 9 West, West Haverstraw, NY 10993<br>(845) 429-0393",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.192529",
      "lng": "-73.961625",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2415",
    "title": "Taco Bell",
    "address": "280A Route 202 31, Flemington, NJ 08822",
    "source": "manual",
    "content": "280A Route 202 31, Flemington, NJ 08822<br>(908) 788-0718",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.498842",
      "lng": "-74.855551",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2416",
    "title": "Taco Bell",
    "address": "622 Market Street, Elmwood Park, NJ 07407",
    "source": "manual",
    "content": "622 Market Street, Elmwood Park, NJ 07407<br>(201) 791-2155",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.897457",
      "lng": "-74.103426",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2417",
    "title": "Taco Bell",
    "address": "392 Main St, Danbury, CT 06810",
    "source": "manual",
    "content": "392 Main St, Danbury, CT 06810<br>(203) 730-0332",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.402061",
      "lng": "-73.459481",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2418",
    "title": "Taco Bell",
    "address": "6250 Central Ave, Capitol Heights, MD 20743",
    "source": "manual",
    "content": "6250 Central Ave, Capitol Heights, MD 20743<br>(301) 336-8548",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.887054",
      "lng": "-76.899633",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2419",
    "title": "Taco Bell",
    "address": "1101 N Susquehanna Trl, Selinsgrove, PA 17870",
    "source": "manual",
    "content": "1101 N Susquehanna Trl, Selinsgrove, PA 17870<br>(570) 374-5924",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.826518",
      "lng": "-76.845007",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2420",
    "title": "Taco Bell",
    "address": "306 Highway 36, West Long Branch, NJ 07764",
    "source": "manual",
    "content": "306 Highway 36, West Long Branch, NJ 07764<br>(732) 935-1122",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.291682",
      "lng": "-74.037561",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2421",
    "title": "Taco Bell",
    "address": "1037 Wilkes-Barre Township Blvd, Wilkes Barre, PA 18702",
    "source": "manual",
    "content": "1037 Wilkes-Barre Township Blvd, Wilkes Barre, PA 18702<br>(570) 826-8911",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.223001",
      "lng": "-75.881195",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2422",
    "title": "Taco Bell",
    "address": "865 Country Rout 64, Elmira, NY 14903",
    "source": "manual",
    "content": "865 Country Rout 64, Elmira, NY 14903<br>(607) 739-0660",
    "location": {
      "icon": tacoBellIcon,
      "lat": "42.15504",
      "lng": "-76.879832",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2423",
    "title": "Taco Bell",
    "address": "1200 US Highway 22, Phillipsburg, NJ 08865",
    "source": "manual",
    "content": "1200 US Highway 22, Phillipsburg, NJ 08865<br>(908) 454-4451",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.684913",
      "lng": "-75.153993",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2424",
    "title": "Taco Bell",
    "address": "1135 Easton Ave, Somerset, NJ 08873",
    "source": "manual",
    "content": "1135 Easton Ave, Somerset, NJ 08873<br>(732) 545-9706",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.518069",
      "lng": "-74.489267",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2425",
    "title": "Taco Bell",
    "address": "426 Kidder Street, Wilkes Barre, PA 18702",
    "source": "manual",
    "content": "426 Kidder Street, Wilkes Barre, PA 18702<br>(570) 829-3390",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.250745",
      "lng": "-75.85465",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2426",
    "title": "Taco Bell",
    "address": "100 Sumner Ave, Clarks Summit, PA 18411",
    "source": "manual",
    "content": "100 Sumner Ave, Clarks Summit, PA 18411<br>(570) 586-5788",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.486078",
      "lng": "-75.693861",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2427",
    "title": "Taco Bell",
    "address": "110 South Wyoming Avenue, Kingston, PA 18704",
    "source": "manual",
    "content": "110 South Wyoming Avenue, Kingston, PA 18704<br>(570) 288-4011",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.259896",
      "lng": "-75.899951",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2428",
    "title": "Taco Bell",
    "address": "1006 Largo Center Dr, Largo, MD 20774",
    "source": "manual",
    "content": "1006 Largo Center Dr, Largo, MD 20774<br>(301) 350-1327",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.902888",
      "lng": "-76.834828",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2429",
    "title": "Taco Bell",
    "address": "3810 Rt 9 S, Howell, NJ 07731",
    "source": "manual",
    "content": "3810 Rt 9 S, Howell, NJ 07731<br>(732) 364-0015",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.155614",
      "lng": "-74.230541",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2431",
    "title": "Taco Bell",
    "address": "4045 Branch Ave,Temple Hills,MD 20748",
    "source": "manual",
    "content": "4045 Branch Ave,Temple Hills,MD 20748<br>(301) 894-7288",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.833872",
      "lng": "-76.943013",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2432",
    "title": "Taco Bell",
    "address": "17380 Dumfries Ave, Dumfries,VA 22026",
    "source": "manual",
    "content": "17380 Dumfries Ave, Dumfries,VA 22026<br>(703) 441-1784",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.575262",
      "lng": "-77.315697",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2433",
    "title": "Taco Bell",
    "address": "1560 Route 46, Parsippany, NJ 07054",
    "source": "manual",
    "content": "1560 Route 46, Parsippany, NJ 07054<br>(973) 263-2123",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.864765",
      "lng": "-74.402238",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2434",
    "title": "Taco Bell",
    "address": "4807 Stelton Rd, South Plainfield, NJ 07080",
    "source": "manual",
    "content": "4807 Stelton Rd, South Plainfield, NJ 07080<br>(908) 753-8777",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.551657",
      "lng": "-74.431828",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2435",
    "title": "Taco Bell",
    "address": "7501 Annapolis Road, Landover Hills, MD 20784",
    "source": "manual",
    "content": "7501 Annapolis Road, Landover Hills, MD 20784<br>(301) 459-0807",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.949928",
      "lng": "-76.8861",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2436",
    "title": "Taco Bell",
    "address": "6315 Oxon Hill Road, Oxon Hill, MD 20745",
    "source": "manual",
    "content": "6315 Oxon Hill Road, Oxon Hill, MD 20745<br>(301) 839-1269",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.803531",
      "lng": "-76.990899",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2437",
    "title": "Taco Bell",
    "address": "1371 E Putnam Ave, Old Greenwich, CT 06870",
    "source": "manual",
    "content": "1371 E Putnam Ave, Old Greenwich, CT 06870<br>(203) 698-2290",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.044315",
      "lng": "-73.573211",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2438",
    "title": "Taco Bell",
    "address": "3330 Donnell Dr, Forestville, MD 20747",
    "source": "manual",
    "content": "3330 Donnell Dr, Forestville, MD 20747<br>(301) 735-0922",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.846222",
      "lng": "-76.884362",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2439",
    "title": "Taco Bell",
    "address": "981 US Highway 9, South Amboy, NJ 08879",
    "source": "manual",
    "content": "981 US Highway 9, South Amboy, NJ 08879<br>(732) 727-3878",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.457084",
      "lng": "-74.295359",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2440",
    "title": "Taco Bell",
    "address": "365 Convery Blvd, Perth Amboy, NJ 08861",
    "source": "manual",
    "content": "365 Convery Blvd, Perth Amboy, NJ 08861<br>(732) 826-1774",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.516695",
      "lng": "-74.287089",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2441",
    "title": "Taco Bell",
    "address": "133 Saint Gorges Ave, Roselle, NJ 07203",
    "source": "manual",
    "content": "133 Saint Gorges Ave, Roselle, NJ 07203<br>(908) 245-4490",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.639505",
      "lng": "-74.262798",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2442",
    "title": "Taco Bell",
    "address": "2704 US Highway 22 E, Union, NJ 07083",
    "source": "manual",
    "content": "2704 US Highway 22 E, Union, NJ 07083<br>(908) 964-1577",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.395992",
      "lng": "-79.43176",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2443",
    "title": "Taco Bell",
    "address": "1921 Daniel Stuart Sq, Woodbridge, VA 22191",
    "source": "manual",
    "content": "1921 Daniel Stuart Sq, Woodbridge, VA 22191<br>(703) 491-9900",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.630804",
      "lng": "-77.274483",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2444",
    "title": "Taco Bell",
    "address": "1402 Highway 37 E,Toms River, NJ 08753",
    "source": "manual",
    "content": "1402 Highway 37 E,Toms River, NJ 08753<br>(732) 270-8900",
    "location": {
      "icon": tacoBellIcon,
      "lat": "39.953963",
      "lng": "-74.159375",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2445",
    "title": "Taco Bell",
    "address": "170 State Route 10, East Hanover, NJ 07936",
    "source": "manual",
    "content": "170 State Route 10, East Hanover, NJ 07936<br>(973) 515-9559",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.809607",
      "lng": "-74.379231",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2446",
    "title": "Taco Bell",
    "address": "220 Reynolds Road, Johnson City, NY 13790",
    "source": "manual",
    "content": "220 Reynolds Road, Johnson City, NY 13790<br>(607) 729-3551",
    "location": {
      "icon": tacoBellIcon,
      "lat": "42.126325",
      "lng": "-75.97049",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2447",
    "title": "Taco Bell",
    "address": "13880 Shoppers Best Way, Woodbridge, VA 22192",
    "source": "manual",
    "content": "13880 Shoppers Best Way, Woodbridge, VA 22192<br>(703) 583-0447",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.651234",
      "lng": "-77.299485",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2449",
    "title": "Taco Bell",
    "address": "409 US Highway 206, Hillsborough, NJ 08844",
    "source": "manual",
    "content": "409 US Highway 206, Hillsborough, NJ 08844<br>(908) 904-4460",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.506303",
      "lng": "-74.641181",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2450",
    "title": "Taco Bell",
    "address": "5661 Burke Centre Parkway, Burke, VA 22015",
    "source": "manual",
    "content": "5661 Burke Centre Parkway, Burke, VA 22015<br>(703) 239-0047",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.800287",
      "lng": "-77.323325",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2451",
    "title": "Taco Bell",
    "address": "1073 Route 34 South, Aberdeen, NJ 07747",
    "source": "manual",
    "content": "1073 Route 34 South, Aberdeen, NJ 07747<br>(732) 566-7571",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.399101",
      "lng": "-74.227829",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2452",
    "title": "Taco Bell",
    "address": "1173 Route 46, Little Falls, NJ 07424",
    "source": "manual",
    "content": "1173 Route 46, Little Falls, NJ 07424<br>(973) 256-4008",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.881197",
      "lng": "-74.208986",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2453",
    "title": "Taco Bell",
    "address": "674 Route 72 West, Manahawkin, NJ 08050",
    "source": "manual",
    "content": "674 Route 72 West, Manahawkin, NJ 08050<br>(609) 978-1082",
    "location": {
      "icon": tacoBellIcon,
      "lat": "39.681843",
      "lng": "-74.239521",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2454",
    "title": "Taco Bell",
    "address": "429 Court St, Binghamton, NY 13901",
    "source": "manual",
    "content": "429 Court St, Binghamton, NY 13901<br>(607) 724-2380",
    "location": {
      "icon": tacoBellIcon,
      "lat": "42.104735",
      "lng": "-75.88106",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2455",
    "title": "Taco Bell",
    "address": "1305 Ulster Ave, Kingston, NY 12401",
    "source": "manual",
    "content": "1305 Ulster Ave, Kingston, NY 12401<br>(845) 336-5341",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.970175",
      "lng": "-73.989567",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2456",
    "title": "Taco Bell",
    "address": "1412 Route 300, Newburgh, NY 12550",
    "source": "manual",
    "content": "1412 Route 300, Newburgh, NY 12550<br>(845) 566-3650",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.521222",
      "lng": "-74.070064",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2457",
    "title": "Taco Bell",
    "address": "1102 Rt 35, Ocean Township, NJ 07712",
    "source": "manual",
    "content": "1102 Rt 35, Ocean Township, NJ 07712<br>(732) 481-1317",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.238388",
      "lng": "-74.037856",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2458",
    "title": "Taco Bell",
    "address": "560 Brick Blvd, Brick, NJ 08723",
    "source": "manual",
    "content": "560 Brick Blvd, Brick, NJ 08723<br>(732) 262-0804",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.053649",
      "lng": "-74.140934",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2459",
    "title": "Taco Bell",
    "address": "Hudson Plaza Mall Rt 440, Jersey City, NJ 07306",
    "source": "manual",
    "content": "Hudson Plaza Mall Rt 440, Jersey City, NJ 07306<br>(201) 332-9393",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.721250",
      "lng": "-74.095260",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2460",
    "title": "Taco Bell",
    "address": "500 S River St, Hackensack, NJ 07601",
    "source": "manual",
    "content": "500 S River St, Hackensack, NJ 07601<br>(201) 727-4343",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.863604",
      "lng": "-74.035325",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2462",
    "title": "Taco Bell",
    "address": "1837 East Third Street, Williamsport, PA 17701",
    "source": "manual",
    "content": "1837 East Third Street, Williamsport, PA 17701<br>(570) 322-2273",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.249597",
      "lng": "-76.966304",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2463",
    "title": "Taco Bell",
    "address": "1131 Inman Avenue, Edison, NJ 08820",
    "source": "manual",
    "content": "1131 Inman Avenue, Edison, NJ 08820<br>(908) 226-0333",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.596594",
      "lng": "-74.363624",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2464",
    "title": "Taco Bell",
    "address": "2445 Columbia Blvd, Bloomsburg, PA 17815",
    "source": "manual",
    "content": "2445 Columbia Blvd, Bloomsburg, PA 17815<br>(570) 784-5381",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.011223",
      "lng": "-76.413634",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2465",
    "title": "Taco Bell",
    "address": "3 Elm Street, Fishkill, NY 12524",
    "source": "manual",
    "content": "3 Elm Street, Fishkill, NY 12524<br>(845) 896-7565",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.534346",
      "lng": "-73.897074",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2466",
    "title": "Taco Bell",
    "address": "751 East Main Street, Stamford, CT 06902",
    "source": "manual",
    "content": "751 East Main Street, Stamford, CT 06902<br>(203) 969-7782",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.055075",
      "lng": "-73.529913",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2467",
    "title": "Taco Bell",
    "address": "8428 Baltimore Ave., College Park, MD 20740",
    "source": "manual",
    "content": "8428 Baltimore Ave., College Park, MD 20740<br>(301) 982-7198",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.994346",
      "lng": "-76.932953",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2468",
    "title": "Taco Bell",
    "address": "171 State Rt South, Hasbrouck Heights, NJ 07604",
    "source": "manual",
    "content": "171 State Rt South, Hasbrouck Heights, NJ 07604<br>(201) 462-0575",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.894677",
      "lng": "-74.086478",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2469",
    "title": "Taco Bell",
    "address": "425 Route 22, Hillside, NJ 07205",
    "source": "manual",
    "content": "425 Route 22, Hillside, NJ 07205<br>(908) 810-1270",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.69946",
      "lng": "-74.238441",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2470",
    "title": "Taco Bell",
    "address": "8 Highway 35 N, Neptune, NJ 07753",
    "source": "manual",
    "content": "8 Highway 35 N, Neptune, NJ 07753<br>(732) 775-3830",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.209935",
      "lng": "-74.026967",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2471",
    "title": "Taco Bell",
    "address": "1400 Route 23 North,Wayne, NJ 07470",
    "source": "manual",
    "content": "1400 Route 23 North,Wayne, NJ 07470<br>(973) 694-8821",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.931378",
      "lng": "-74.26821",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2472",
    "title": "Taco Bell",
    "address": "508 Washington Avenue, Belleville, NJ 07109",
    "source": "manual",
    "content": "508 Washington Avenue, Belleville, NJ 07109<br>(973) 759-2171",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.79813",
      "lng": "-74.147601",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2473",
    "title": "Taco Bell",
    "address": "1185 Highway 36 ,Hazlet, NJ 07730",
    "source": "manual",
    "content": "1185 Highway 36 ,Hazlet, NJ 07730<br>(732) 739-9596",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.433089",
      "lng": "-74.182432",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2474",
    "title": "Taco Bell",
    "address": "225-227 US Highway 22, Green Brook, NJ 08812",
    "source": "manual",
    "content": "225-227 US Highway 22, Green Brook, NJ 08812<br>(732) 968-2461",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.598158",
      "lng": "-74.485276",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2475",
    "title": "Taco Bell",
    "address": "160 South Avenue, Garwood, NJ 07027",
    "source": "manual",
    "content": "160 South Avenue, Garwood, NJ 07027<br>(908) 518-0330",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.65262",
      "lng": "-74.319134",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2476",
    "title": "Taco Bell",
    "address": "2020 Tonnelle Avenue, North Bergen, NJ 07047",
    "source": "manual",
    "content": "2020 Tonnelle Avenue, North Bergen, NJ 07047<br>(201) 422-9666",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.769519",
      "lng": "-74.043741",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2477",
    "title": "Taco Bell",
    "address": "1120 Somerset Street, New Brunswick, NJ 08901",
    "source": "manual",
    "content": "1120 Somerset Street, New Brunswick, NJ 08901<br>(732) 435-1300",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.478374",
      "lng": "-74.485474",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2478",
    "title": "Taco Bell",
    "address": "908 Highway 37 W,Toms River, NJ 08753",
    "source": "manual",
    "content": "908 Highway 37 W,Toms River, NJ 08753<br>(732) 349-7700",
    "location": {
      "icon": tacoBellIcon,
      "lat": "39.973728",
      "lng": "-74.24007",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2479",
    "title": "Taco Bell",
    "address": "755 Main Street, Poughkeepsie, NY 12601",
    "source": "manual",
    "content": "755 Main Street, Poughkeepsie, NY 12601<br>(845) 452-3381",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.696934",
      "lng": "-73.903872",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2480",
    "title": "Taco Bell",
    "address": "3509 JFK Blvd., Union City, NJ 07087",
    "source": "manual",
    "content": "3509 JFK Blvd., Union City, NJ 07087<br>201-351-2595",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.7754606",
      "lng": "-74.0305412",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2481",
    "title": "Taco Bell",
    "address": "220 Harrison Ave., Kearny, NJ 07032",
    "source": "manual",
    "content": "220 Harrison Ave., Kearny, NJ 07032<br>201-299-4766",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.7586723",
      "lng": "-74.1520424",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2482",
    "title": "Taco Bell",
    "address": "823 Commerce Boulevard, Dickson City, PA 18519",
    "source": "manual",
    "content": "823 Commerce Boulevard, Dickson City, PA 18519<br>(570) 291-5359",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.469729",
      "lng": "-75.6376649",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2483",
    "title": "Taco Bell",
    "address": "406 Highway 315, Pittston, PA 18640",
    "source": "manual",
    "content": "406 Highway 315, Pittston, PA 18640<br>570-654-1674",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.313926",
      "lng": "-75.7565123",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2484",
    "title": "Taco Bell",
    "address": "492 Route 211 East, Middletown, NY 10940",
    "source": "manual",
    "content": "492 Route 211 East, Middletown, NY 10940<br>(845) 343-4300",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.456562",
      "lng": "-74.379546",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2485",
    "title": "Taco Bell",
    "address": "52 Jones St., Newark, NJ 07103",
    "source": "manual",
    "content": "52 Jones St., Newark, NJ 07103<br>(973) 242-8226",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.735513",
      "lng": "-74.188203",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2486",
    "title": "Taco Bell",
    "address": "901 St George Ave, Woodbridge, NJ 07095",
    "source": "manual",
    "content": "901 St George Ave, Woodbridge, NJ 07095<br>(732) 750-1234",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.569587",
      "lng": "-74.29162",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2487",
    "title": "Pizza Hut",
    "address": "100 Sterling, Suite D, Dayton TX 77535",
    "source": "manual",
    "content": "100 Sterling, Suite D, Dayton TX 77535<br>(936) 336-8708",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.044597",
      "lng": "-94.89037",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2488",
    "title": "Pizza Hut",
    "address": "1001 Colubmia Ave., Morris, MN 56267-0000",
    "source": "manual",
    "content": "1001 Colubmia Ave., Morris, MN 56267-0000<br>(320) 589-4084",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.593525",
      "lng": "-95.912117",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2489",
    "title": "Pizza Hut",
    "address": "1004 18th Ave NW, Suite A, Austin, MN 55912",
    "source": "manual",
    "content": "1004 18th Ave NW, Suite A, Austin, MN 55912<br>507-434-0333",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "43.6849351",
      "lng": "-92.9862845",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2490",
    "title": "Pizza Hut",
    "address": "1008 SW Military Dr, San Antonio, TX 78221",
    "source": "manual",
    "content": "1008 SW Military Dr, San Antonio, TX 78221<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.356349",
      "lng": "-98.508004",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2491",
    "title": "Pizza Hut",
    "address": "1010 North Esplanade, Cuero, TX  77954",
    "source": "manual",
    "content": "1010 North Esplanade, Cuero, TX  77954<br>(361) 275-3434",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.09913",
      "lng": "-97.287652",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2492",
    "title": "Pizza Hut",
    "address": "1017 John Sims Parkway E, Niceville, FL, 32578",
    "source": "manual",
    "content": "1017 John Sims Parkway E, Niceville, FL, 32578<br>(850) 678-7776",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.51698",
      "lng": "-86.470824",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2493",
    "title": "Pizza Hut",
    "address": "1020 Eldridge Road, Sugar Land, TX 77478",
    "source": "manual",
    "content": "1020 Eldridge Road, Sugar Land, TX 77478<br>(281) 240-2323",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.635015",
      "lng": "-95.618254",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2494",
    "title": "Pizza Hut",
    "address": "1022 Mebane Oaks Rd., Mebane, NC, 27302",
    "source": "manual",
    "content": "1022 Mebane Oaks Rd., Mebane, NC, 27302<br>(919) 304-0566",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.071861",
      "lng": "-79.272223",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2495",
    "title": "Pizza Hut",
    "address": "1027 Hwy 98 East, Destin, FL, 32541",
    "source": "manual",
    "content": "1027 Hwy 98 East, Destin, FL, 32541<br>(850) 269-2555",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.385219",
      "lng": "-86.461594",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2496",
    "title": "Pizza Hut",
    "address": "1041 N. Hwy 181, Portland, TX 78374",
    "source": "manual",
    "content": "1041 N. Hwy 181, Portland, TX 78374<br>(361) 643-7544",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.880658",
      "lng": "-97.320554",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2497",
    "title": "Pizza Hut",
    "address": "105 Kenning Rd. #3, Crosby, TX 77532",
    "source": "manual",
    "content": "105 Kenning Rd. #3, Crosby, TX 77532<br>(281) 328-4178",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.889382",
      "lng": "-95.061908",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2498",
    "title": "Pizza Hut",
    "address": "10504 Broadway Street, Pearland, TX 77581",
    "source": "manual",
    "content": "10504 Broadway Street, Pearland, TX 77581<br>(713) 436-1014",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.555397",
      "lng": "-95.383271",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2499",
    "title": "Pizza Hut",
    "address": "10525 South Padre Island Drive, Corpus Christi TX 78418-3422",
    "source": "manual",
    "content": "10525 South Padre Island Drive, Corpus Christi TX 78418-3422<br>(361) 937-6336",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.666914",
      "lng": "-97.280504",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2500",
    "title": "Pizza Hut",
    "address": "10555A Westheirmer Road, Houston, TX 77042",
    "source": "manual",
    "content": "10555A Westheirmer Road, Houston, TX 77042<br>(713) 784-0298",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.736199",
      "lng": "-95.562785",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2501",
    "title": "Pizza Hut",
    "address": "106 N. Sunset Strip, Kenedy, TX  78119",
    "source": "manual",
    "content": "106 N. Sunset Strip, Kenedy, TX  78119<br>(830) 583-9864",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.815878",
      "lng": "-97.857975",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2502",
    "title": "Pizza Hut",
    "address": "10610 N. Loop Drive, Suite #N-1, Socorro TX 79927",
    "source": "manual",
    "content": "10610 N. Loop Drive, Suite #N-1, Socorro TX 79927<br>(915) 235-0123",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.65614",
      "lng": "-106.271229",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2503",
    "title": "Pizza Hut",
    "address": "10702 Leopard St., Corpus Christi, TX 78410",
    "source": "manual",
    "content": "10702 Leopard St., Corpus Christi, TX 78410<br>(361) 241-5628",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.841495",
      "lng": "-97.57784",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2504",
    "title": "Pizza Hut",
    "address": "1073 Tiger Blvd, Clemson, SC, 29631-1416",
    "source": "manual",
    "content": "1073 Tiger Blvd, Clemson, SC, 29631-1416<br>(864) 654-8646",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.691467",
      "lng": "-82.83519",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2505",
    "title": "Pizza Hut",
    "address": "10765 Kenworthy, El Paso, TX 79924",
    "source": "manual",
    "content": "10765 Kenworthy, El Paso, TX 79924<br>(915) 757-3094",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.920614",
      "lng": "-106.437775",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2506",
    "title": "Pizza Hut",
    "address": "108 W Parkwood, Friendswood, TX 77546",
    "source": "manual",
    "content": "108 W Parkwood, Friendswood, TX 77546<br>(281) 482-0444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.509044",
      "lng": "-95.188646",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2507",
    "title": "Pizza Hut",
    "address": "10886 Beechnut Street, Houston, TX 77072",
    "source": "manual",
    "content": "10886 Beechnut Street, Houston, TX 77072<br>(281) 530-3355",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.689158",
      "lng": "-95.568246",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2508",
    "title": "Pizza Hut",
    "address": "10904 Scarsdale Blvd Ste 130, Houston, TX 77089",
    "source": "manual",
    "content": "10904 Scarsdale Blvd Ste 130, Houston, TX 77089<br>(281) 484-0111",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.585626",
      "lng": "-95.210867",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2509",
    "title": "Pizza Hut",
    "address": "110 South W.W. White, San Antonio, TX 78219",
    "source": "manual",
    "content": "110 South W.W. White, San Antonio, TX 78219<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.430342",
      "lng": "-98.405046",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2511",
    "title": "Pizza Hut",
    "address": "11017A Chimney Rock road, Houston, TX 77096",
    "source": "manual",
    "content": "11017A Chimney Rock road, Houston, TX 77096<br>(713) 721-2777",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.660332",
      "lng": "-95.475993",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2514",
    "title": "Pizza Hut",
    "address": "11181 Tara Blvd, S-130, Hampton, GA, 30228",
    "source": "manual",
    "content": "11181 Tara Blvd, S-130, Hampton, GA, 30228<br>(770) 477-7799",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.449354",
      "lng": "-84.325391",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2516",
    "title": "Pizza Hut",
    "address": "11203 Potranco Rd., San Antonio, TX 78253",
    "source": "manual",
    "content": "11203 Potranco Rd., San Antonio, TX 78253<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.435501",
      "lng": "-98.714073",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2517",
    "title": "Pizza Hut",
    "address": "11456 Jefferson Ct., Champlin, MN 55316",
    "source": "manual",
    "content": "11456 Jefferson Ct., Champlin, MN 55316<br>(763) 421-1112",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.160637",
      "lng": "-93.393823",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2518",
    "title": "Pizza Hut",
    "address": "11601 Shadow Creek Pkwy Suite 119, Pearland, TX 77584",
    "source": "manual",
    "content": "11601 Shadow Creek Pkwy Suite 119, Pearland, TX 77584<br>(713) 436-2217",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.580278",
      "lng": "-95.395839",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2519",
    "title": "Pizza Hut",
    "address": "11611 W Airport Blvd, Meadows Place, TX 77477",
    "source": "manual",
    "content": "11611 W Airport Blvd, Meadows Place, TX 77477<br>(281) 240-5800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.646913",
      "lng": "-95.580785",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2520",
    "title": "Pizza Hut",
    "address": "1169 Gulf Breeze Parkway, Gulf Breeze, FL, 32561",
    "source": "manual",
    "content": "1169 Gulf Breeze Parkway, Gulf Breeze, FL, 32561<br>(850) 934-1200",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.358569",
      "lng": "-87.15642",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2521",
    "title": "Pizza Hut",
    "address": "120 Circle Way Street, Lake Jackson, TX 77566",
    "source": "manual",
    "content": "120 Circle Way Street, Lake Jackson, TX 77566<br>(979) 297-5281",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.04205",
      "lng": "-95.452884",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2522",
    "title": "Pizza Hut",
    "address": "12000 Bellaire Blvd Suite 200 Houston TX 77072",
    "source": "manual",
    "content": "12000 Bellaire Blvd Suite 200 Houston TX 77072<br>(281) 495-4090",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.704469",
      "lng": "-95.590112",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2523",
    "title": "Pizza Hut",
    "address": "1201 S. Canal, Carlsbad, NM 88220",
    "source": "manual",
    "content": "1201 S. Canal, Carlsbad, NM 88220<br>(575) 887-1922",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "32.407329",
      "lng": "-104.227882",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2524",
    "title": "Pizza Hut",
    "address": "1201 W. Grand, Yoakum TX 77995",
    "source": "manual",
    "content": "1201 W. Grand, Yoakum TX 77995<br>(361) 293-6316",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.294144",
      "lng": "-97.160569",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2525",
    "title": "Pizza Hut",
    "address": "1203 N Velasco Street, Angleton, TX 77515",
    "source": "manual",
    "content": "1203 N Velasco Street, Angleton, TX 77515<br>(979) 849-4372",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.177473",
      "lng": "-95.433451",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2526",
    "title": "Pizza Hut",
    "address": "1211 W Main Street, Tomball, TX 77375",
    "source": "manual",
    "content": "1211 W Main Street, Tomball, TX 77375<br>(281) 351-8300",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.090937",
      "lng": "-95.628251",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2527",
    "title": "Pizza Hut",
    "address": "12120 Westheirmer Road, Houston, TX 77077",
    "source": "manual",
    "content": "12120 Westheirmer Road, Houston, TX 77077<br>(281) 497-5959",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.736875",
      "lng": "-95.593752",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2528",
    "title": "Pizza Hut",
    "address": "12207 State Hwy 6 Ste F, Fresno, TX 77545",
    "source": "manual",
    "content": "12207 State Hwy 6 Ste F, Fresno, TX 77545<br>(281) 431-9602",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.54491",
      "lng": "-95.448248",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2529",
    "title": "Pizza Hut",
    "address": "1225 Westheirmer Road, Houston, TX 77006",
    "source": "manual",
    "content": "1225 Westheirmer Road, Houston, TX 77006<br>(713) 521-3366",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.743737",
      "lng": "-95.394547",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2530",
    "title": "Pizza Hut",
    "address": "1227 W 43rd Road Street, Houston, TX 77018",
    "source": "manual",
    "content": "1227 W 43rd Road Street, Houston, TX 77018<br>(713) 681-4600",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.82823",
      "lng": "-95.425376",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2531",
    "title": "Pizza Hut",
    "address": "124 Jefferson Street, Newnan, GA, 30263",
    "source": "manual",
    "content": "124 Jefferson Street, Newnan, GA, 30263<br>(770) 251-6511",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.382442",
      "lng": "-84.795486",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2532",
    "title": "Pizza Hut",
    "address": "12408 Texas 6, Santa Fe, TX 77510",
    "source": "manual",
    "content": "12408 Texas 6, Santa Fe, TX 77510<br>(409) 440-7030",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.384386",
      "lng": "-95.092121",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2534",
    "title": "Pizza Hut",
    "address": "1259 Piney Forest Road, Danville,VA, 24540",
    "source": "manual",
    "content": "1259 Piney Forest Road, Danville,VA, 24540<br>(434) 836-5757",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.628087",
      "lng": "-79.400121",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2535",
    "title": "Pizza Hut",
    "address": "12616 Jones Road, Houston, TX 77489",
    "source": "manual",
    "content": "12616 Jones Road, Houston, TX 77489<br>(281) 894-5353",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.956265",
      "lng": "-95.584623",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2536",
    "title": "Pizza Hut",
    "address": "12775 Bissonet Street, Houston, TX 77099",
    "source": "manual",
    "content": "12775 Bissonet Street, Houston, TX 77099<br>(281) 495-4393",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.678264",
      "lng": "-95.604477",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2537",
    "title": "Pizza Hut",
    "address": "1307 W Fairmont Pkwy, La Porte, TX 77571",
    "source": "manual",
    "content": "1307 W Fairmont Pkwy, La Porte, TX 77571<br>(281) 470-1974",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.651787",
      "lng": "-95.032197",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2538",
    "title": "Pizza Hut",
    "address": "1310 Hwy 15 S, Suite 102, Hutchinson, MN 55350",
    "source": "manual",
    "content": "1310 Hwy 15 S, Suite 102, Hutchinson, MN 55350<br>320-587-6839",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.8704024",
      "lng": "-94.3765863",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2539",
    "title": "Pizza Hut",
    "address": "13176 W Lake Houston Pkwy, #2, Houston, TX 77044",
    "source": "manual",
    "content": "13176 W Lake Houston Pkwy, #2, Houston, TX 77044<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.923974",
      "lng": "-95.188263",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2540",
    "title": "Pizza Hut",
    "address": "1322 Mendota Road East, Inver Grove Heights, MN 55077",
    "source": "manual",
    "content": "1322 Mendota Road East, Inver Grove Heights, MN 55077<br>(651) 457-1855",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.882336",
      "lng": "-93.078793",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2541",
    "title": "Pizza Hut",
    "address": "1330 S 14th Street, Kingsville TX 78363",
    "source": "manual",
    "content": "1330 S 14th Street, Kingsville TX 78363<br>(361) 595-5652",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.504266",
      "lng": "-97.855625",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2542",
    "title": "Pizza Hut",
    "address": "1330 S Frontage Rd, Hastings, MN 55033-2426",
    "source": "manual",
    "content": "1330 S Frontage Rd, Hastings, MN 55033-2426<br>(651) 437-5577",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.737714",
      "lng": "-92.87856",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2543",
    "title": "Pizza Hut",
    "address": "1343 Hwy 97 W., Pleasanton, TX  78064",
    "source": "manual",
    "content": "1343 Hwy 97 W., Pleasanton, TX  78064<br>(830) 569-8783",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.947613",
      "lng": "-98.501005",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2544",
    "title": "Pizza Hut",
    "address": "13471 Sergeant Major Blvd, El Paso, TX 79916",
    "source": "manual",
    "content": "13471 Sergeant Major Blvd. El Paso, TX 79916<br>(915) 566-5130",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.8265264",
      "lng": "-106.4058331",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2545",
    "title": "Pizza Hut",
    "address": "13526 E Tidwell Suite 100, Houston, TX 77044",
    "source": "manual",
    "content": "13526 E Tidwell Suite 100, Houston, TX 77044<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.851565",
      "lng": "-95.206284",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2546",
    "title": "Pizza Hut",
    "address": "13750 N Eldridge Pkwy #100, Cypress, TX 77429",
    "source": "manual",
    "content": "13750 N Eldridge Pkwy #100, Cypress, TX 77429<br>(281) 257-6172",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.983081",
      "lng": "-95.610792",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2548",
    "title": "Pizza Hut",
    "address": "140 North Kenazo, Space F, Horizon City TX 79928",
    "source": "manual",
    "content": "140 North Kenazo, Space F, Horizon City TX 79928<br>(915) 235-0123",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.684607",
      "lng": "-106.187312",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2549",
    "title": "Pizza Hut",
    "address": "1402 5th St SE, Minneapolis, MN 55414-1502",
    "source": "manual",
    "content": "1402 5th St SE, Minneapolis, MN 55414-1502<br>(612) 623-0775",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.980861",
      "lng": "-93.234873",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2550",
    "title": "Pizza Hut",
    "address": "141 Miracle Strip Pkwy SW, Fort Walton Beach, FL, 32548",
    "source": "manual",
    "content": "141 Miracle Strip Pkwy SW, Fort Walton Beach, FL, 32548<br>(850) 243-8727",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.405731",
      "lng": "-86.62461",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2551",
    "title": "Pizza Hut",
    "address": "14249 Jones St, Lavonia, GA, 30553",
    "source": "manual",
    "content": "14249 Jones St, Lavonia, GA, 30553<br>(706) 356-2345",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.448075",
      "lng": "-83.12735",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2552",
    "title": "Pizza Hut",
    "address": "1433 S Main Street, Ste#110, Boerne, TX  78006",
    "source": "manual",
    "content": "1433 S Main Street, Ste#110, Boerne, TX  78006<br>(830) 816-1616",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.77636",
      "lng": "-98.724017",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2553",
    "title": "Pizza Hut",
    "address": "14414 US Highway 87 W #009l, La Vernia, TX 78121",
    "source": "manual",
    "content": "14414 US Highway 87 W #009l, La Vernia, TX 78121<br>(830) 542-6669",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.35894",
      "lng": "-98.138231",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2554",
    "title": "Pizza Hut",
    "address": "14844 Granada Drive, Apple Valley, MN 55124-5513",
    "source": "manual",
    "content": "14844 Granada Drive, Apple Valley, MN 55124-5513<br>(952) 431-3340",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.736605",
      "lng": "-93.22098",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2555",
    "title": "Pizza Hut",
    "address": "150 1st St. W, Humble, TX 77388",
    "source": "manual",
    "content": "150 1st St. W, Humble, TX 77388<br>(281) 446-1711",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.001255",
      "lng": "-95.268303",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2556",
    "title": "Pizza Hut",
    "address": "1500 Clinton Lane, Suite 100, Northfield, MN 55057",
    "source": "manual",
    "content": "1500 Clinton Lane, Suite 100, Northfield, MN 55057<br>(507) 663-6033",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.444046",
      "lng": "-93.175779",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2557",
    "title": "Pizza Hut",
    "address": "15002 Ella Boulevard, Houston TX 77090",
    "source": "manual",
    "content": "15002 Ella Boulevard, Houston TX 77090<br>(281) 872-0077",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.984589",
      "lng": "-95.433507",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2558",
    "title": "Pizza Hut",
    "address": "1502 S Main St, Darlington, SC, 29532-5660",
    "source": "manual",
    "content": "1502 S Main St, Darlington, SC, 29532-5660<br>(843) 393-5201",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.281638",
      "lng": "-79.857331",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2559",
    "title": "Pizza Hut",
    "address": "1504 13th Street South, Virginia, MN 55792",
    "source": "manual",
    "content": "1504 13th Street South, Virginia, MN 55792<br>(218) 749-4111",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "47.512623",
      "lng": "-92.558802",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2561",
    "title": "Pizza Hut",
    "address": "15090 Claret Avenue, Rosemount, MN 55068",
    "source": "manual",
    "content": "15090 Claret Avenue, Rosemount, MN 55068<br>(651) 423-5161",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.729401",
      "lng": "-93.142315",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2563",
    "title": "Pizza Hut",
    "address": "1544 Larpenteur Ave. W., Saint Paul, MN 55108",
    "source": "manual",
    "content": "1544 Larpenteur Ave. W., Saint Paul, MN 55108<br>(651) 251-6550",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.991458",
      "lng": "-93.166137",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2565",
    "title": "Pizza Hut",
    "address": "1571 Zaragosa, El Paso, TX 79936",
    "source": "manual",
    "content": "1571 Zaragosa, El Paso, TX 79936<br>(915) 855-2335",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.743562",
      "lng": "-106.287391",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2566",
    "title": "Pizza Hut",
    "address": "1575 W. McIntosh Road, Griffin, GA, 30223",
    "source": "manual",
    "content": "1575 W. McIntosh Road, Griffin, GA, 30223<br>(770) 228-4400",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.274907",
      "lng": "-84.294729",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2567",
    "title": "Pizza Hut",
    "address": "1591 E Hwy 6 Suite 114, Alvin, TX 77511",
    "source": "manual",
    "content": "1591 E Hwy 6 Suite 114, Alvin, TX 77511<br>(281) 331-6009",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.424552",
      "lng": "-95.229259",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2568",
    "title": "Pizza Hut",
    "address": "16380 Wagner Way, Eden Prairie, MN 55344-5753",
    "source": "manual",
    "content": "16380 Wagner Way, Eden Prairie, MN 55344-5753<br>(952) 934-4900",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.86428",
      "lng": "-93.484361",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2569",
    "title": "Pizza Hut",
    "address": "1660 Hwy 81 East, McDonough, GA, 30252",
    "source": "manual",
    "content": "1660 Hwy 81 East, McDonough, GA, 30252<br>(678) 583-5545",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.42835",
      "lng": "-84.09908",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2570",
    "title": "Pizza Hut",
    "address": "16635 W Airport Blvd, Sugar Land, TX 77498",
    "source": "manual",
    "content": "16635 W Airport Blvd, Sugar Land, TX 77498<br>(281) 313-0170",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.648296",
      "lng": "-95.677725",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2571",
    "title": "Pizza Hut",
    "address": "1685 White Bear Ave N, Maplewood, MN 55109-3700",
    "source": "manual",
    "content": "1685 White Bear Ave N, Maplewood, MN 55109-3700<br>(651) 770-1117",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.992398",
      "lng": "-93.025612",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2573",
    "title": "Pizza Hut",
    "address": "17254 Tomball Parkway, Houston, TX 77064, United States",
    "source": "manual",
    "content": "17254 Tomball Parkway, Houston, TX 77064<br>(281) 955-0373",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.9559152",
      "lng": "-95.5408251",
      "city": "Houston",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "77064",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2574",
    "title": "Pizza Hut",
    "address": "1749 S.W. Loop 410, San Antonio, TX 78227",
    "source": "manual",
    "content": "1749 S.W. Loop 410, San Antonio, TX 78227<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.41548",
      "lng": "-98.650469",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2575",
    "title": "Pizza Hut",
    "address": "1800 George Dieter Dr, El Paso TX 79936",
    "source": "manual",
    "content": "1800 George Dieter Dr, El Paso TX 79936<br>(915) 857-7663",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.765136",
      "lng": "-106.30157",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2576",
    "title": "Pizza Hut",
    "address": "1801 Highway 83 E., Crystal City, TX 78839",
    "source": "manual",
    "content": "1801 Highway 83 E., Crystal City, TX 78839<br>(830) 374-2387",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.693192",
      "lng": "-99.83234",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2578",
    "title": "Pizza Hut",
    "address": "1820 S General McMullen Drive, San Antonio, TX 78226",
    "source": "manual",
    "content": "1820 S General McMullen Drive, San Antonio, TX 78226<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.398302",
      "lng": "-98.557459",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2579",
    "title": "Pizza Hut",
    "address": "1847 W. Highway 46, New Braunfels, TX 78132",
    "source": "manual",
    "content": "1847 W. Highway 46, New Braunfels, TX 78132<br>(830) 626-8888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.719268",
      "lng": "-98.165805",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2580",
    "title": "Pizza Hut",
    "address": "18539 Kuykendahl Road, Spring, TX 77379",
    "source": "manual",
    "content": "18539 Kuykendahl Road, Spring, TX 77379<br>(281) 320-2020",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.038593",
      "lng": "-95.487686",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2581",
    "title": "Pizza Hut",
    "address": "187 Cheshire Lane #200, Plymouth, MN 55441-5490",
    "source": "manual",
    "content": "187 Cheshire Lane #200, Plymouth, MN 55441-5490<br>(763) 253-0338",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.98317",
      "lng": "-93.457606",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2582",
    "title": "Pizza Hut",
    "address": "1926 Goliad Rd, San Antonio, TX 78223",
    "source": "manual",
    "content": "1926 Goliad Rd, San Antonio, TX 78223<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.366659",
      "lng": "-98.441585",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2583",
    "title": "Pizza Hut",
    "address": "19328 Hwy 169, Elk River, MN 55330",
    "source": "manual",
    "content": "19328 Hwy 169, Elk River, MN 55330<br>(763) 233-3147",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.3220783",
      "lng": "-93.5629138",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2584",
    "title": "Pizza Hut",
    "address": "19620 FM 1485 Rd, New Caney, TX 77357",
    "source": "manual",
    "content": "19620 FM 1485 Rd, New Caney, TX 77357<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.240083",
      "lng": "-95.301246",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2585",
    "title": "Pizza Hut",
    "address": "19645 Pilot Knob, Farmington, MN 55024",
    "source": "manual",
    "content": "19645 Pilot Knob, Farmington, MN 55024<br>(651) 460-8880",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.666296",
      "lng": "-93.178105",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2586",
    "title": "Pizza Hut",
    "address": "200 Franklin Springs Cir, Royston, GA, 30662-2903",
    "source": "manual",
    "content": "200 Franklin Springs Cir, Royston, GA, 30662-2903<br>(706) 245-6686",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.285232",
      "lng": "-83.122087",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2587",
    "title": "Pizza Hut",
    "address": "2000-2001 State Hwy 146 Sp#220, Seabrook, TX 77586",
    "source": "manual",
    "content": "2000-2001 State Hwy 146 Sp#220, Seabrook, TX 77586<br>(281) 291-9227",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.583732",
      "lng": "-95.033851",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2588",
    "title": "Pizza Hut",
    "address": "2001 W Highway 52, Rochester, MN 55901-0626",
    "source": "manual",
    "content": "2001 W Highway 52, Rochester, MN 55901-0626<br>(507) 287-6396",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.045284",
      "lng": "-92.489543",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2589",
    "title": "Pizza Hut",
    "address": "20051 Interstate 45, Spring, TX 77388",
    "source": "manual",
    "content": "20051 Interstate 45, Spring, TX 77388<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.055414",
      "lng": "-95.43434",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2590",
    "title": "Pizza Hut",
    "address": "2007 W 2nd Loop Rd., Florence, SC, 29501-6124",
    "source": "manual",
    "content": "2007 W 2nd Loop Rd., Florence, SC, 29501-6124<br>(843) 664-9300",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.172484",
      "lng": "-79.802373",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2591",
    "title": "Pizza Hut",
    "address": "201 E College Dr, Suite D, Marshall, MN 56258",
    "source": "manual",
    "content": "201 E College Dr, Suite D, Marshall, MN 56258<br>(507) 401-5128",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.44815",
      "lng": "-95.7878313",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2592",
    "title": "Pizza Hut",
    "address": "201 Pena, Carrizo Springs, TX 78834",
    "source": "manual",
    "content": "201 Pena, Carrizo Springs, TX 78834<br>(830) 876-3553",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.521606",
      "lng": "-99.858258",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2593",
    "title": "Pizza Hut",
    "address": "2012 County Road 42 W, Burnsville, MN 55337-6925",
    "source": "manual",
    "content": "2012 County Road 42 W, Burnsville, MN 55337-6925<br>(952) 892-7676",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.746563",
      "lng": "-93.304232",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2594",
    "title": "Pizza Hut",
    "address": "2015 Woodlyn Ave., A, Maplewood, MN 55109-1417",
    "source": "manual",
    "content": "2015 Woodlyn Ave., A, Maplewood, MN 55109-1417<br>(651) 770-3070",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.03371",
      "lng": "-93.015886",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2595",
    "title": "Pizza Hut",
    "address": "2018 N Gessner Drive, Houston, TX 77080",
    "source": "manual",
    "content": "2018 N Gessner Drive, Houston, TX 77080<br>(713) 973-9444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.808184",
      "lng": "-95.545104",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2596",
    "title": "Pizza Hut",
    "address": "2022 East Main Street, Alice, TX 78332",
    "source": "manual",
    "content": "2022 East Main Street, Alice, TX 78332<br>(361) 664-2189",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.762031",
      "lng": "-98.047543",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2597",
    "title": "Pizza Hut",
    "address": "20220 Texas 6, Manvel, TX 77578",
    "source": "manual",
    "content": "20220 Texas 6, Manvel, TX 77578<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.472492",
      "lng": "-95.369968",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2598",
    "title": "Pizza Hut",
    "address": "2035 South Hackberry, San Antonio, TX 78210-3516",
    "source": "manual",
    "content": "2035 South Hackberry, San Antonio, TX 78210-3516<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.396433",
      "lng": "-98.473726",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2599",
    "title": "Pizza Hut",
    "address": "205 Applewood Center Place, Seneca, SC, 29672",
    "source": "manual",
    "content": "205 Applewood Center Place, Seneca, SC, 29672<br>(864) 888-8855",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.690486",
      "lng": "-82.988478",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2600",
    "title": "Pizza Hut",
    "address": "20630 Hwy.46 W #135, Bulverde, TX  78163",
    "source": "manual",
    "content": "20630 Hwy.46 W #135, Bulverde, TX  78163<br>(830) 980-5595",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.799132",
      "lng": "-98.429023",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2601",
    "title": "Pizza Hut",
    "address": "210 West Sinton, Sinton, TX  78387",
    "source": "manual",
    "content": "210 West Sinton, Sinton, TX  78387<br>(361) 364-4796",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.036975",
      "lng": "-97.512309",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2602",
    "title": "Pizza Hut",
    "address": "2100 W Holdombe Blvd, Houston, TX 77030",
    "source": "manual",
    "content": "2100 W Holdombe Blvd, Houston, TX 77030<br>(713) 521-2266",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.706545",
      "lng": "-95.405319",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2603",
    "title": "Pizza Hut",
    "address": "2101-104 Pyramid Village Blvd, Greensboro, NC, 27405",
    "source": "manual",
    "content": "2101-104 Pyramid Village Blvd, Greensboro, NC, 27405<br>(336) 375-5778",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.107724",
      "lng": "-79.754859",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2604",
    "title": "Pizza Hut",
    "address": "2112 N Turner St, Hobbs NM 88240",
    "source": "manual",
    "content": "2112 N Turner St, Hobbs NM 88240<br>(575) 397-6467",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "32.723483",
      "lng": "-103.144281",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2605",
    "title": "Pizza Hut",
    "address": "2114 Veterans Blvd, Del Rio, TX  78840",
    "source": "manual",
    "content": "2114 Veterans Blvd, Del Rio, TX  78840<br>(830) 774-5576",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.387163",
      "lng": "-100.905725",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2606",
    "title": "Pizza Hut",
    "address": "2117 4th St SW, Mason City, IA 50401-0000",
    "source": "manual",
    "content": "2117 4th St SW, Mason City, IA 50401-0000<br>(641) 423-1732",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "43.14774",
      "lng": "-93.233676",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2607",
    "title": "Pizza Hut",
    "address": "2120 South Staples Street, Corpus Christi TX 78404-3006",
    "source": "manual",
    "content": "2120 South Staples Street, Corpus Christi TX 78404-3006<br>(361) 883-3669",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.764791",
      "lng": "-97.402803",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2608",
    "title": "Pizza Hut",
    "address": "2125 South Church Street, Burlington, NC, 27215",
    "source": "manual",
    "content": "2125 South Church Street, Burlington, NC, 27215<br>(336) 226-4464",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.082864",
      "lng": "-79.467845",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2609",
    "title": "Pizza Hut",
    "address": "2135 Cliff Road, Eagan, MN 55122",
    "source": "manual",
    "content": "2135 Cliff Road, Eagan, MN 55122<br>(651) 289-3672",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.79027",
      "lng": "-93.216537",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2611",
    "title": "Pizza Hut",
    "address": "229 East Grant Street, Roma, TX 78584",
    "source": "manual",
    "content": "229 East Grant Street, Roma, TX 78584<br>(956) 849-4475",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.409921",
      "lng": "-98.958199",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2612",
    "title": "Pizza Hut",
    "address": "2292 FM 2234 Road, Missouri City, TX 77489",
    "source": "manual",
    "content": "2292 FM 2234 Road, Missouri City, TX 77489<br>(281) 261-6611",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.594605",
      "lng": "-95.52673",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2613",
    "title": "Pizza Hut",
    "address": "230 Shoppers World Ct., Charlottesville, VA, 22901",
    "source": "manual",
    "content": "230 Shoppers World Ct., Charlottesville, VA, 22901<br>(434) 975-0510",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.077682",
      "lng": "-78.479436",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2614",
    "title": "Pizza Hut",
    "address": "2305 Palmer Hwy, Texas City, TX 77590",
    "source": "manual",
    "content": "2305 Palmer Hwy, Texas City, TX 77590<br>(409) 948-4327",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.393467",
      "lng": "-94.927751",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2615",
    "title": "Pizza Hut",
    "address": "2313 Hennepin Ave, Minneapolis, MN 55405-2740",
    "source": "manual",
    "content": "2313 Hennepin Ave, Minneapolis, MN 55405-2740<br>(612) 374-4000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.959678",
      "lng": "-93.293415",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2616",
    "title": "Pizza Hut",
    "address": "2323 Clear Lake Blvd #110, Houston, TX 77062",
    "source": "manual",
    "content": "2323 Clear Lake Blvd #110, Houston, TX 77062<br>(281) 486-1621",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.59282",
      "lng": "-95.140538",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2618",
    "title": "Pizza Hut",
    "address": "2350 N Main Street, Liberty, TX 77575",
    "source": "manual",
    "content": "2350 N Main Street, Liberty, TX 77575<br>(936) 336-8708",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.073865",
      "lng": "-94.782409",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2619",
    "title": "Pizza Hut",
    "address": "2400 N. St. Mary??s St., Beeville, TX 78102",
    "source": "manual",
    "content": "2400 N. St. Mary??s St., Beeville, TX 78102<br>(361) 358-2970",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.3844235",
      "lng": "-97.7383185",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2620",
    "title": "Pizza Hut",
    "address": "2401 Zaragosa Rd, El Paso, TX 79938",
    "source": "manual",
    "content": "2401 Zaragosa Rd, El Paso, TX 79938<br>(915) 235-0123",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.77875",
      "lng": "-106.250607",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2622",
    "title": "Pizza Hut",
    "address": "24040 FM 1314 Rd, Porter, TX 77365",
    "source": "manual",
    "content": "24040 FM 1314 Rd, Porter, TX 77365<br>(281) 354-5100",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.104409",
      "lng": "-95.246433",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2623",
    "title": "Pizza Hut",
    "address": "2418 E. Hwy 76, Marion, SC, 29571-6349",
    "source": "manual",
    "content": "2418 E. Hwy 76, Marion, SC, 29571-6349<br>(843) 423-1272",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.20342",
      "lng": "-79.533814",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2624",
    "title": "Pizza Hut",
    "address": "2425 East Main, Eagle Pass, TX  78852",
    "source": "manual",
    "content": "2425 East Main, Eagle Pass, TX  78852<br>(830) 773-5371",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.709186",
      "lng": "-100.478138",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2625",
    "title": "Pizza Hut",
    "address": "2485 South Main Street, Harrisonburg, VA, 22801",
    "source": "manual",
    "content": "2485 South Main Street, Harrisonburg, VA, 22801<br>(540) 433-1821",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.418999",
      "lng": "-78.89578",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2626",
    "title": "Pizza Hut",
    "address": "249 South Stuart Avenue, Elkton, VA, 22827",
    "source": "manual",
    "content": "249 South Stuart Avenue, Elkton, VA, 22827<br>(540) 298-9439",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.406676",
      "lng": "-78.618491",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2627",
    "title": "Pizza Hut",
    "address": "24914 Kuykendahl Suite A, Spring TX 77389",
    "source": "manual",
    "content": "24914 Kuykendahl Suite A, Spring TX 77389<br>(281) 351-8246",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.163495",
      "lng": "-95.547171",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2628",
    "title": "Pizza Hut",
    "address": "250 Windy Hill Road, S-200, Marietta, GA, 30060",
    "source": "manual",
    "content": "250 Windy Hill Road, S-200, Marietta, GA, 30060<br>(770) 436-7000<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.894609",
      "lng": "-84.545755",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2629",
    "title": "Pizza Hut",
    "address": "251 Hartsville Crossing Blvd, Hartsville, SC, 29550",
    "source": "manual",
    "content": "251 Hartsville Crossing Blvd, Hartsville, SC, 29550<br>(843) 332-4118",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.358779",
      "lng": "-80.064893",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2630",
    "title": "Pizza Hut",
    "address": "2549 S.W. Military Dr., San Antonio, TX  78224",
    "source": "manual",
    "content": "2549 S.W. Military Dr., San Antonio, TX  78224<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.357115",
      "lng": "-98.536065",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2631",
    "title": "Pizza Hut",
    "address": "2550 Greensboro Road, Martinsville, VA, 24112",
    "source": "manual",
    "content": "2550 Greensboro Road, Martinsville, VA, 24112<br>(276) 638-4514",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.65512",
      "lng": "-79.87751",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2632",
    "title": "Pizza Hut",
    "address": "257 Marschall Rd S, Shakopee, MN 55379-0000",
    "source": "manual",
    "content": "257 Marschall Rd S, Shakopee, MN 55379-0000<br>(952) 445-7888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.79894",
      "lng": "-93.508123",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2633",
    "title": "Pizza Hut",
    "address": "25701 IH-45 N Suite 1, The Woodlands, TX 77380",
    "source": "manual",
    "content": "25701 IH-45 N Suite 1, The Woodlands, TX 77380<br>(281) 292-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.135392",
      "lng": "-95.445923",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2634",
    "title": "Pizza Hut",
    "address": "2627 Stuarts Draft Highway, Stuarts Draft VA? , 24477",
    "source": "manual",
    "content": "2627 Stuarts Draft Highway, Stuarts Draft VA, 24477<br>(540) 337-3300",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.033669",
      "lng": "-79.036374",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2635",
    "title": "Pizza Hut",
    "address": "2661 Hwy. 361, Suite A, Ingleside TX 78362",
    "source": "manual",
    "content": "2661 Hwy. 361, Suite A, Ingleside TX 78362<br>(361) 758-2813",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.882042",
      "lng": "-97.210541",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2636",
    "title": "Pizza Hut",
    "address": "2711 N. Hwy 35, Rockport, TX 78382",
    "source": "manual",
    "content": "2711 N. Hwy 35, Rockport, TX 78382<br>(361) 729-7270",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.054831",
      "lng": "-97.04195",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2637",
    "title": "Pizza Hut",
    "address": "272 E Franklin St, Hartwell, GA, 30643-2299",
    "source": "manual",
    "content": "272 E Franklin St, Hartwell, GA, 30643-2299<br>(706) 376-1100",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.352734",
      "lng": "-82.924639",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2638",
    "title": "Pizza Hut",
    "address": "2728 Broadway Street, Pearland, TX 77581",
    "source": "manual",
    "content": "2728 Broadway Street, Pearland, TX 77581<br>(281) 485-5373",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.554761",
      "lng": "-95.26156",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2639",
    "title": "Pizza Hut",
    "address": "2735 West Wheeler Ave., Aransas Pass TX 78336",
    "source": "manual",
    "content": "2735 West Wheeler Ave., Aransas Pass TX 78336<br>(361) 758-2813",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.924943",
      "lng": "-97.178199",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2640",
    "title": "Pizza Hut",
    "address": "2757 Rayford Rd Ste F, Spring, TX 77386",
    "source": "manual",
    "content": "2757 Rayford Rd Ste F, Spring, TX 77386<br>(281) 292-8916",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.121571",
      "lng": "-95.399386",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2641",
    "title": "Pizza Hut",
    "address": "2800 W Main, League City, TX 77573",
    "source": "manual",
    "content": "2800 W Main, League City, TX 77573<br>(281) 338-8707",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.500228",
      "lng": "-95.129216",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2642",
    "title": "Pizza Hut",
    "address": "2803 Main St, Newberry, SC, 29108-4133",
    "source": "manual",
    "content": "2803 Main St, Newberry, SC, 29108-4133<br>(803) 276-7242",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.283005",
      "lng": "-81.59395",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2643",
    "title": "Pizza Hut",
    "address": "2901 Lavender Parkway, Faribault, MN 55021",
    "source": "manual",
    "content": "2901 Lavender Parkway, Faribault, MN 55021<br>(507) 334-8998",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.316377",
      "lng": "-93.295959",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2644",
    "title": "Pizza Hut",
    "address": "2914 Virginia Avenue, Collinsville, VA, 24078",
    "source": "manual",
    "content": "2914 Virginia Avenue, Collinsville, VA, 24078<br>(276) 647-3946",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.720289",
      "lng": "-79.912458",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2645",
    "title": "Pizza Hut",
    "address": "2915 N. Mesa, El Paso, TX 79902",
    "source": "manual",
    "content": "2915 N. Mesa, El Paso, TX 79902<br>(915) 544-9818",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.779094",
      "lng": "-106.505302",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2646",
    "title": "Pizza Hut",
    "address": "2959 Carter Road, Bldg. #2969, Fort Bliss TX 79906",
    "source": "manual",
    "content": "2959 Carter Road, Bldg. #2969, Fort Bliss TX 79906<br>(915) 566-5130",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.805355",
      "lng": "-106.434479",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2647",
    "title": "Pizza Hut",
    "address": "2985 Brookdale Dr, Brooklyn Park, MN 55444",
    "source": "manual",
    "content": "2985 Brookdale Dr, Brooklyn Park, MN 55444<br>(763) 566-5000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.096579",
      "lng": "-93.320317",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2648",
    "title": "Pizza Hut",
    "address": "3010 FM 1764 Road, La Marque, TX 77568",
    "source": "manual",
    "content": "3010 FM 1764 Road, La Marque, TX 77568<br>(409) 986-6465",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.399838",
      "lng": "-95.037461",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2649",
    "title": "Pizza Hut",
    "address": "302 Valley Hi Drive, Suite 102, San Antonio, TX 78227",
    "source": "manual",
    "content": "302 Valley Hi Drive, Suite 102, San Antonio, TX 78227<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.380922",
      "lng": "-98.639107",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2650",
    "title": "Pizza Hut",
    "address": "3033 Shaver Street, Pasadena, TX 77502",
    "source": "manual",
    "content": "3033 Shaver Street, Pasadena, TX 77502<br>(713) 943-6089",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.665239",
      "lng": "-95.207168",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2651",
    "title": "Pizza Hut",
    "address": "305 5th Ave. South, Suite 190, Saint Cloud, MN 56301",
    "source": "manual",
    "content": "305 5th Ave. South, Suite 190, Saint Cloud, MN 56301<br>(320) 255-5500",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.5578755",
      "lng": "-94.1556339",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2652",
    "title": "Pizza Hut",
    "address": "3050 Northpark Drive, Kingwood, TX 77339",
    "source": "manual",
    "content": "3050 Northpark Drive, Kingwood, TX 77339<br>(281) 360-3322",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.067549",
      "lng": "-95.195386",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2653",
    "title": "Pizza Hut",
    "address": "309 -A Jonesboro Rd, McDonough, GA, 30253",
    "source": "manual",
    "content": "309 -A Jonesboro Rd, McDonough, GA, 30253<br>(770) 957-4111",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.453828",
      "lng": "-84.167959",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2654",
    "title": "Pizza Hut",
    "address": "309 W. Avenue J., Robstown, TX 78380",
    "source": "manual",
    "content": "309 W. Avenue J., Robstown, TX 78380<br>(361) 387-1587",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.800953",
      "lng": "-97.674291",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2655",
    "title": "Pizza Hut",
    "address": "3091 College Park Drive, Suite 220, The Woodlands, TX 77384",
    "source": "manual",
    "content": "3091 College Park Drive, Suite 220, The Woodlands, TX 77384<br>(936) 271-9888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.204979",
      "lng": "-95.463303",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2656",
    "title": "Pizza Hut",
    "address": "3103 K-FM 1960 East, Humble, TX 77338",
    "source": "manual",
    "content": "3103 K-FM 1960 East, Humble, TX 77338<br>(281) 443-7851",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.999445",
      "lng": "-95.223345",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2657",
    "title": "Pizza Hut",
    "address": "312 Hwy 90A East, Gonzales, TX  78629",
    "source": "manual",
    "content": "312 Hwy 90A East, Gonzales, TX  78629<br>(830) 672-9616",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.51557",
      "lng": "-97.459727",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2658",
    "title": "Pizza Hut",
    "address": "3125 Riverside Drive, Danville, VA, 24541",
    "source": "manual",
    "content": "3125 Riverside Drive, Danville, VA, 24541<br>(434) 797-5285",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.586229",
      "lng": "-79.422998",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2659",
    "title": "Pizza Hut",
    "address": "3150 E. Hwy. 34  Suite 210, Newnan, GA, 30265",
    "source": "manual",
    "content": "3150 E. Hwy. 34  Suite 210, Newnan, GA, 30265<br>(770) 254-8882",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.409268",
      "lng": "-84.680059",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2660",
    "title": "Pizza Hut",
    "address": "3150 S Pokegama Ave, Suite 101, Grand Rapids, MN 55744",
    "source": "manual",
    "content": "3150 S Pokegama Ave, Suite 101, Grand Rapids, MN 55744<br>(218) 326-1214",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "47.2009923",
      "lng": "-93.52957",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2661",
    "title": "Pizza Hut",
    "address": "325 West Reservoir Road, Woodstock, VA, 22664",
    "source": "manual",
    "content": "325 West Reservoir Road, Woodstock, VA, 22664<br>(540) 459-4502<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.870184",
      "lng": "-78.52448",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2662",
    "title": "Pizza Hut",
    "address": "3217 New Macland Road, Ste 150 Powder Springs, GA 30127, USA",
    "source": "manual",
    "content": "3217 New Macland Road, Ste 150 Powder Springs, GA, 30127<br>(770) 943-3400",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.874820",
      "lng": "-84.675610",
      "city": "Powder Springs",
      "state": "Georgia",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "30127",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2663",
    "title": "Pizza Hut",
    "address": "3320 Hwy 6 South (Mission Bend)#B, Houston, TX 77082",
    "source": "manual",
    "content": "3320 Hwy 6 South (Mission Bend)#B, Houston, TX 77082<br>(281) 558-7041",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.722281",
      "lng": "-95.644848",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2664",
    "title": "Pizza Hut",
    "address": "3323 Roosevelt, San Antonio, TX  78214",
    "source": "manual",
    "content": "3323 Roosevelt, San Antonio, TX  78214<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.360175",
      "lng": "-98.481694",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2665",
    "title": "Pizza Hut",
    "address": "3404 N. Navarro, Victoria, TX  77901",
    "source": "manual",
    "content": "3404 N. Navarro, Victoria, TX  77901<br>(361) 575-3731",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.826586",
      "lng": "-97.000432",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2666",
    "title": "Pizza Hut",
    "address": "3426 Gulf Freeway, Dickinson, TX 77539",
    "source": "manual",
    "content": "3426 Gulf Freeway, Dickinson, TX 77539<br>(281) 337-1212",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.450253",
      "lng": "-95.078438",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2667",
    "title": "Pizza Hut",
    "address": "3545 North Yarbrough Drive, El Paso, TX 79925-1635",
    "source": "manual",
    "content": "3545 North Yarbrough Drive, El Paso, TX 79925-1635<br>(915) 591-2012",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.796856",
      "lng": "-106.332786",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2668",
    "title": "Pizza Hut",
    "address": "3600 Cherokee St,  #101, Kennesaw, GA, 30144",
    "source": "manual",
    "content": "3600 Cherokee St,  #101, Kennesaw, GA, 30144<br>(770) 427-6900",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.041645",
      "lng": "-84.601915",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2671",
    "title": "Pizza Hut",
    "address": "3620 Katy Fwy Suite D, Houston, TX 77007",
    "source": "manual",
    "content": "3620 Katy Fwy Suite D, Houston, TX 77007<br>(713) 861-8877",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.777366",
      "lng": "-95.396944",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2672",
    "title": "Pizza Hut",
    "address": "3638 Hwy 6 Bay P7, Sugar Land, TX 77478",
    "source": "manual",
    "content": "3638 Hwy 6 Bay P7, Sugar Land, TX 77478<br>(281) 265-1000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.614649",
      "lng": "-95.62651",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2673",
    "title": "Pizza Hut",
    "address": "3657 E. Leopard Street, Corpus Christi, TX 78408",
    "source": "manual",
    "content": "3657 E. Leopard Street, Corpus Christi, TX 78408<br>(361) 884-7691",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.796761",
      "lng": "-97.432308",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2675",
    "title": "Pizza Hut",
    "address": "3697 Hwy 5  Suite 4, Douglasville, GA, 30135",
    "source": "manual",
    "content": "3697 Hwy 5  Suite 4, Douglasville, GA, 30135<br>(770) 489-8700",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.706698",
      "lng": "-84.77857",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2676",
    "title": "Pizza Hut",
    "address": "3701 W Old Shakopee Rd Ste 200, Bloomington, MN 55431-3560",
    "source": "manual",
    "content": "3701 W Old Shakopee Rd Ste 200, Bloomington, MN 55431-3560<br>(952) 881-1222",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.810369",
      "lng": "-93.328353",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2677",
    "title": "Pizza Hut",
    "address": "3820 FM 3009 #164, Schertz TX 78154",
    "source": "manual",
    "content": "3820 FM 3009 #164, Schertz TX 78154<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.586837",
      "lng": "-98.267474",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2678",
    "title": "Pizza Hut",
    "address": "3821 South Staples Street, Corpus Christi TX 78411-2347",
    "source": "manual",
    "content": "3821 South Staples Street, Corpus Christi TX 78411-2347<br>(361) 851-5151",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.737969",
      "lng": "-97.387413",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2679",
    "title": "Pizza Hut",
    "address": "3831 Grandview Dr, Simpsonville, SC, 29680-3162",
    "source": "manual",
    "content": "3831 Grandview Dr, Simpsonville, SC, 29680-3162<br>(864) 967-4966",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.718071",
      "lng": "-82.257382",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2680",
    "title": "Pizza Hut",
    "address": "3932 E Palmetto St, Florence, SC, 29506",
    "source": "manual",
    "content": "3932 E Palmetto St, Florence, SC, 29506<br>(843) 679-2489",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.196135",
      "lng": "-79.684636",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2681",
    "title": "Pizza Hut",
    "address": "4001 Richmond Ave, Suite D, Houston, TX 77057",
    "source": "manual",
    "content": "4001 Richmond Ave, Suite D, Houston, TX 77057<br>(713) 621-3344",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.7322512",
      "lng": "-95.4418578",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2682",
    "title": "Pizza Hut",
    "address": "4001 Saratoga Blvd., Suite 103, Corpus Christi, TX 78413",
    "source": "manual",
    "content": "5501 Grand Ave, Duluth, MN 55807<br>(361) 991-3278",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.698714",
      "lng": "-97.411953",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2683",
    "title": "Pizza Hut",
    "address": "4001-I Bellaire Blvd, Southside Place, TX 77025",
    "source": "manual",
    "content": "4001-I Bellaire Blvd, Southside Place, TX 77025<br>(713) 664-2222",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.70539",
      "lng": "-95.440701",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2684",
    "title": "Pizza Hut",
    "address": "4002 Elton Way, Greensboro, NC, 27406",
    "source": "manual",
    "content": "4002 Elton Way, Greensboro, NC, 27406<br>(336) 378-9978",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.005442",
      "lng": "-79.792072",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2685",
    "title": "Pizza Hut",
    "address": "4008-F Battleground Avenue, Greensboro, NC, 27410",
    "source": "manual",
    "content": "4008-F Battleground Avenue, Greensboro, NC, 27410<br>(336) 286-6160",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.148438",
      "lng": "-79.869021",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2686",
    "title": "Pizza Hut",
    "address": "401  Hwy 277 North, Sonora, TX 76950",
    "source": "manual",
    "content": "401  Hwy 277 North, Sonora, TX 76950<br>(325) 387-3540",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.564759",
      "lng": "-100.646466",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2687",
    "title": "Pizza Hut",
    "address": "4014 Fairmont Pwy, Pasadena, TX 77504",
    "source": "manual",
    "content": "4014 Fairmont Pwy, Pasadena, TX 77504<br>(281) 991-6055",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.649935",
      "lng": "-95.183204",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2688",
    "title": "Pizza Hut",
    "address": "403 Central Ave. E, Saint Michael, MN 55376",
    "source": "manual",
    "content": "403 Central Ave. E, Saint Michael, MN 55376<br>(763) 497-1189",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.209315",
      "lng": "-93.656143",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2689",
    "title": "Pizza Hut",
    "address": "405 Babcock Blvd., W Floor: Suite 110, Delano, MN 55328",
    "source": "manual",
    "content": "405 Babcock Blvd., W Floor: Suite 110, Delano, MN 55328<br>(763) 972-2925",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.035571",
      "lng": "-93.781527",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2690",
    "title": "Pizza Hut",
    "address": "405 S. Bibb St, Unit 3002, Eagle Pass, TX 78852",
    "source": "manual",
    "content": "405 S. Bibb St, Unit 3002, Eagle Pass, TX 78852<br>(830) 773-5371",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.7028696",
      "lng": "-100.4832315",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2691",
    "title": "Pizza Hut",
    "address": "4075 Marietta Hwy., S-152, Dallas, GA, 30157",
    "source": "manual",
    "content": "4075 Marietta Hwy., S-152, Dallas, GA, 30157<br>(770) 443-8800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.934301",
      "lng": "-84.725569",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2692",
    "title": "Pizza Hut",
    "address": "4101 Hwy 77 #M-6, Corpus Christi, TX 78410",
    "source": "manual",
    "content": "4101 Hwy 77 #M-6, Corpus Christi, TX 78410<br>(361) 241-1414",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.856862",
      "lng": "-97.631175",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2693",
    "title": "Pizza Hut",
    "address": "418 W Mcintyre St, Mullins, SC, 29574-3406",
    "source": "manual",
    "content": "418 W Mcintyre St, Mullins, SC, 29574-3406<br>(843) 464-6420",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.199384",
      "lng": "-79.260391",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2694",
    "title": "Pizza Hut",
    "address": "4221 Bells Ferry Road Suite 103, Kennesaw, GA, 30144",
    "source": "manual",
    "content": "4221 Bells Ferry Road Suite 103, Kennesaw, GA, 30144<br>(770) 928-9967",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.054119",
      "lng": "-84.557089",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2695",
    "title": "Pizza Hut",
    "address": "425 N. 35 Hwy Bypass, Port Lavaca, TX  77979",
    "source": "manual",
    "content": "425 N. 35 Hwy Bypass, Port Lavaca, TX  77979<br>(361) 552-6868",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.614997",
      "lng": "-96.626089",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2696",
    "title": "Pizza Hut",
    "address": "430-A Racetrack Rd NE, Fort Walton Beach, FL, 32547",
    "source": "manual",
    "content": "430-A Racetrack Rd NE, Fort Walton Beach, FL, 32547<br>(850) 863-4470",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.442472",
      "lng": "-86.599403",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2697",
    "title": "Pizza Hut",
    "address": "4300 Hwy 83 E, Rio Grande City, TX 78582",
    "source": "manual",
    "content": "4300 Hwy 83 E, Rio Grande City, TX 78582<br>(956) 487-2551",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.605814",
      "lng": "-99.072857",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2698",
    "title": "Pizza Hut",
    "address": "4407 W Fuqua Street, Ste.F, Houston TX 77045",
    "source": "manual",
    "content": "4407 W Fuqua Street, Ste.F, Houston TX 77045<br>(713) 434-5566",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.612927",
      "lng": "-95.443187",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2700",
    "title": "Pizza Hut",
    "address": "4451 Towne Lake Parkway, St 310, Woodstock, GA, 30189",
    "source": "manual",
    "content": "4451 Towne Lake Parkway, St 310, Woodstock, GA, 30189<br>(770) 516-7700",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.10572",
      "lng": "-84.544018",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2701",
    "title": "Pizza Hut",
    "address": "4491 N Henry Blvd., Stockbridge, GA, 30281",
    "source": "manual",
    "content": "4491 N Henry Blvd., Stockbridge, GA, 30281<br>(770) 474-9844",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.543334",
      "lng": "-84.226573",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2703",
    "title": "Pizza Hut",
    "address": "4615 North Freeway, Suite 200, Houston, TX 77022",
    "source": "manual",
    "content": "4615 North Freeway, Suite 200, Houston, TX 77022<br>(713) 695-0384<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.833056",
      "lng": "-95.385169",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2704",
    "title": "Pizza Hut",
    "address": "4715 Jonesboro Rd, Union City, GA, 30291",
    "source": "manual",
    "content": "4715 Jonesboro Rd, Union City, GA, 30291<br>(770) 969-0612",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.569626",
      "lng": "-84.540855",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2705",
    "title": "Pizza Hut",
    "address": "4719D Highpoint Road, Greensboro, NC, 27407",
    "source": "manual",
    "content": "4719D Highpoint Road, Greensboro, NC, 27407<br>(336) 299-5504",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.028777",
      "lng": "-79.869371",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2706",
    "title": "Pizza Hut",
    "address": "4800 Chicago Ave, Minneapolis, MN 55417-1009",
    "source": "manual",
    "content": "4800 Chicago Ave, Minneapolis, MN 55417-1009<br>(612) 825-9820",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.915993",
      "lng": "-93.262872",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2707",
    "title": "Pizza Hut",
    "address": "4811 Ridge Road, Suite 101, Douglasville, GA, 30134",
    "source": "manual",
    "content": "4811 Ridge Road, Suite 101, Douglasville, GA, 30134<br>(770) 489-7855",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.818854",
      "lng": "-84.813515",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2708",
    "title": "Pizza Hut",
    "address": "4815 S. Staples St., Corpust Christi, TX 78411",
    "source": "manual",
    "content": "4815 S. Staples St., Corpust Christi, TX 78411<br>(361) 992-8471",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.713231",
      "lng": "-97.370697",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2709",
    "title": "Pizza Hut",
    "address": "4908B Seawall Blvd, Galveston, TX 77551",
    "source": "manual",
    "content": "4908B Seawall Blvd, Galveston, TX 77551<br>(409) 740-3400",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.273637",
      "lng": "-94.815487",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2710",
    "title": "Pizza Hut",
    "address": "50 Holiday N Road, Miramar Beach, FL, 32550",
    "source": "manual",
    "content": "50 Holiday N Road, Miramar Beach, FL, 32550<br>(850) 269-3262",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.384272",
      "lng": "-86.380869",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2711",
    "title": "Pizza Hut",
    "address": "5005 Floyd Road Ste. 910, Mableton, GA, 30126",
    "source": "manual",
    "content": "5005 Floyd Road Ste. 910, Mableton, GA, 30126<br>(770) 739-7739",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.833268",
      "lng": "-84.575496",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2712",
    "title": "Pizza Hut",
    "address": "502 E Main St, Uvalde, TX 78801",
    "source": "manual",
    "content": "502 E Main St, Uvalde, TX 78801<br>(830) 278-1181",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.21239",
      "lng": "-99.77849",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2713",
    "title": "Pizza Hut",
    "address": "5070 Cherokee Street, Acworth, GA, 30101",
    "source": "manual",
    "content": "5070 Cherokee Street, Acworth, GA, 30101<br>(770) 975-7444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.075391",
      "lng": "-84.676461",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2714",
    "title": "Pizza Hut",
    "address": "509 Paul Bunyan Dr NW, Bemidji, MN 56601-2400",
    "source": "manual",
    "content": "509 Paul Bunyan Dr NW, Bemidji, MN 56601-2400<br>(218) 751-1601",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "47.491174",
      "lng": "-94.88707",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2715",
    "title": "Pizza Hut",
    "address": "517 North Hwy 9, Mathis, TX  78368",
    "source": "manual",
    "content": "517 North Hwy 9, Mathis, TX  78368<br>(361) 547-9127",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.073338",
      "lng": "-97.792512",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2716",
    "title": "Pizza Hut",
    "address": "5201 Montana, El Paso, TX 79903",
    "source": "manual",
    "content": "5201 Montana, El Paso, TX 79903<br>(915) 562-1177",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.783994",
      "lng": "-106.426864",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2717",
    "title": "Pizza Hut",
    "address": "5302 Chimney Rock Rd, Houston TX 77081",
    "source": "manual",
    "content": "5302 Chimney Rock Rd, Houston TX 77081<br>(713) 667-6667",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.724378",
      "lng": "-95.476863",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2718",
    "title": "Pizza Hut",
    "address": "5330 Antoine Drive, Houston, TX 77091",
    "source": "manual",
    "content": "5330 Antoine Drive, Houston, TX 77091<br>(713) 688-0888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.841905",
      "lng": "-95.472736",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2719",
    "title": "Pizza Hut",
    "address": "535 Bypass 72 NW, Greenwood, SC, 29649-1301",
    "source": "manual",
    "content": "535 Bypass 72 NW, Greenwood, SC, 29649-1301<br>(864) 229-4812",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.203566",
      "lng": "-82.19574",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2720",
    "title": "Pizza Hut",
    "address": "539 10th St., Floresville, TX  78114",
    "source": "manual",
    "content": "539 10th St., Floresville, TX  78114<br>(830) 393-1956",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.154192",
      "lng": "-98.168768",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2722",
    "title": "Pizza Hut",
    "address": "5501 Grand Ave, Duluth, MN 55807",
    "source": "manual",
    "content": "5501 Grand Ave, Duluth, MN 55807<br>218-624-7000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "46.740962",
      "lng": "-92.166848",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2723",
    "title": "Pizza Hut",
    "address": "5636 Fairburn Road, Douglasville, GA, 30134",
    "source": "manual",
    "content": "5636 Fairburn Road, Douglasville, GA, 30134<br>(770) 920-5050",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.75053",
      "lng": "-84.719474",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2724",
    "title": "Pizza Hut",
    "address": "5806 Xerxes Ave N, Brooklyn Center, MN 55430-2415",
    "source": "manual",
    "content": "5806 Xerxes Ave N, Brooklyn Center, MN 55430-2415<br>(763) 561-6161",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.060207",
      "lng": "-93.319298",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2725",
    "title": "Pizza Hut",
    "address": "585 Heard St, Elberton, GA, 30635-0000",
    "source": "manual",
    "content": "585 Heard St, Elberton, GA, 30635-0000<br>(706) 283-6293",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.106761",
      "lng": "-82.857777",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2726",
    "title": "Pizza Hut",
    "address": "5933 McArdle Road, Corpus Christi TX 78413",
    "source": "manual",
    "content": "5933 McArdle Road, Corpus Christi TX 78413<br>(361) 992-2299",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.706868",
      "lng": "-97.361481",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2727",
    "title": "Pizza Hut",
    "address": "600 College Road, Greensboro, NC, 27410",
    "source": "manual",
    "content": "600 College Road, Greensboro, NC, 27410<br>(336) 294-2800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.086139",
      "lng": "-79.888608",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2728",
    "title": "Pizza Hut",
    "address": "601 N. Zaragosa, El Paso, TX 79907",
    "source": "manual",
    "content": "601 N. Zaragosa, El Paso, TX 79907<br>(915) 860-0040",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.703525",
      "lng": "-106.320771",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2729",
    "title": "Pizza Hut",
    "address": "602 S. Main, Lovington, NM 88260",
    "source": "manual",
    "content": "602 S. Main, Lovington, NM 88260<br>(575) 396-4062",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "32.942695",
      "lng": "-103.348966",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2730",
    "title": "Pizza Hut",
    "address": "607 E. Hondo, Devine TX 78016",
    "source": "manual",
    "content": "607 E. Hondo, Devine TX 78016<br>(830) 455-4138",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.136762",
      "lng": "-98.900448",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2731",
    "title": "Pizza Hut",
    "address": "6110 Dyer St, El Paso, TX 79904",
    "source": "manual",
    "content": "6110 Dyer St, El Paso, TX 79904<br>(915) 757-0323",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.833649",
      "lng": "-106.444886",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2732",
    "title": "Pizza Hut",
    "address": "6200 boradway Suite 124, Pearland, TX 77581",
    "source": "manual",
    "content": "6200 boradway Suite 124, Pearland, TX 77581<br>(281) 485-0660",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.559435",
      "lng": "-95.316997",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2735",
    "title": "Pizza Hut",
    "address": "6415 San Felipe Ste M-1, Houston, TX 77057",
    "source": "manual",
    "content": "6415 San Felipe Ste M-1, Houston, TX 77057<br>(713) 783-8899",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.749527",
      "lng": "-95.498075",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2736",
    "title": "Pizza Hut",
    "address": "649 Las Palmas Blvd., Suite C, Cotulla, TX 78014",
    "source": "manual",
    "content": "649 Las Palmas Blvd., Suite C, Cotulla, TX 78014<br>(830) 879-4080",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.445498",
      "lng": "-99.24299",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2737",
    "title": "Pizza Hut",
    "address": "650 North Glynn Street, Fayetteville, GA, 30214",
    "source": "manual",
    "content": "650 North Glynn Street, Fayetteville, GA, 30214<br>(770) 460-3030",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.460545",
      "lng": "-84.4524",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2738",
    "title": "Pizza Hut",
    "address": "651 Egret Bay Blvd Ste G, League City, TX 77573",
    "source": "manual",
    "content": "651 Egret Bay Blvd Ste G, League City, TX 77573<br>(281) 554-4141",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.517185",
      "lng": "-95.073048",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2739",
    "title": "Pizza Hut",
    "address": "6537 S. Staples Street, Corpus Christi TX 78413-5418",
    "source": "manual",
    "content": "6537 S. Staples Street, Corpus Christi TX 78413-5418<br>(361) 994-9494",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.684085",
      "lng": "-97.385434",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2740",
    "title": "Pizza Hut",
    "address": "6700 Woodlands Pwy Bldg E Suite 110, The Woodlands, TX 77382",
    "source": "manual",
    "content": "6700 Woodlands Pwy Bldg E Suite 110, The Woodlands, TX 77382<br>(281) 292-9595",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.182696",
      "lng": "-95.535803",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2741",
    "title": "Pizza Hut",
    "address": "6704 Montana, El Paso, TX 79925",
    "source": "manual",
    "content": "6704 Montana, El Paso, TX 79925<br>(915) 778-9103",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.789498",
      "lng": "-106.394739",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2742",
    "title": "Pizza Hut",
    "address": "6805 B York Ave So, Edina, MN 55435",
    "source": "manual",
    "content": "6805 B York Ave So, Edina, MN 55435<br>(952) 893-9000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.879178",
      "lng": "-93.320289",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2743",
    "title": "Pizza Hut",
    "address": "6845 Spencer Hwy, Pasadena, TX 77505",
    "source": "manual",
    "content": "6845 Spencer Hwy, Pasadena, TX 77505<br>(281) 998-3737",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.663862",
      "lng": "-95.133808",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2744",
    "title": "Pizza Hut",
    "address": "6880 Boudin St. NE, Prior Lake, MN 55372",
    "source": "manual",
    "content": "6880 Boudin St. NE, Prior Lake, MN 55372<br>(952) 440-8888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.741534",
      "lng": "-93.381926",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2746",
    "title": "Pizza Hut",
    "address": "6951 South Sweetwater Road, Lithia Springs, GA, 30122",
    "source": "manual",
    "content": "6951 South Sweetwater Road, Lithia Springs, GA, 30122<br>(770) 732-1000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.785657",
      "lng": "-84.656656",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2747",
    "title": "Pizza Hut",
    "address": "6990 80th St S, Ste 150, Cottage Grove, MN 55016-2665",
    "source": "manual",
    "content": "6990 80th St S, Ste 150, Cottage Grove, MN 55016-2665<br>(651) 458-3000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.831557",
      "lng": "-92.968709",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2748",
    "title": "Pizza Hut",
    "address": "7 10th Ave S, Hopkins, MN 55343-7505",
    "source": "manual",
    "content": "7 10th Ave S, Hopkins, MN 55343-7505<br>(952) 933-2404",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.924017",
      "lng": "-93.412552",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2749",
    "title": "Pizza Hut",
    "address": "7002 NE Zac Lentz Pkwy., Victoria TX 77904",
    "source": "manual",
    "content": "7002 NE Zac Lentz Pkwy., Victoria TX 77904<br>(361) 573-9137",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.865111",
      "lng": "-96.992357",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2750",
    "title": "Pizza Hut",
    "address": "701 Highway 33 S, Cloquet, MN 55720-2693",
    "source": "manual",
    "content": "701 Highway 33 S, Cloquet, MN 55720-2693<br>(218) 879-1554",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "46.712617",
      "lng": "-92.462636",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2751",
    "title": "Pizza Hut",
    "address": "7049-A Desert Blvd. South, Suite 101, El Paso, TX 79932",
    "source": "manual",
    "content": "7049-A Desert Blvd. South, Suite 101, El Paso, TX 79932<br>(915) 235-0123",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.911155",
      "lng": "-106.583885",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2752",
    "title": "Pizza Hut",
    "address": "7076 Bissonnette Sp A-10, Houston, TX 77074",
    "source": "manual",
    "content": "7076 Bissonnette Sp A-10, Houston, TX 77074<br>(713) 995-0555",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.688577",
      "lng": "-95.506993",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2753",
    "title": "Pizza Hut",
    "address": "7103 Hwy 6 South Ste A, Missouri City, TX 77479",
    "source": "manual",
    "content": "7103 Hwy 6 South Ste A, Missouri City, TX 77479<br>(281) 208-3100",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.590231",
      "lng": "-95.602978",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2754",
    "title": "Pizza Hut",
    "address": "7117 Cedar Lake Road, St Louis Park, MN 55426",
    "source": "manual",
    "content": "7117 Cedar Lake Road, St Louis Park, MN 55426<br>(952) 925-3929",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.960096",
      "lng": "-93.369848",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2756",
    "title": "Pizza Hut",
    "address": "720 A Kingwood Drive, Kingwood, TX 77339",
    "source": "manual",
    "content": "720 A Kingwood Drive, Kingwood, TX 77339<br>(281) 358-0683",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.050993",
      "lng": "-95.244373",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2757",
    "title": "Pizza Hut",
    "address": "720 Victoria Highway, Refugio, TX 78377",
    "source": "manual",
    "content": "720 Victoria Highway, Refugio, TX 78377<br>361-526-8103",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.3052838",
      "lng": "-97.2752704",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2758",
    "title": "Pizza Hut",
    "address": "721 East Main Street, Luray, VA, 22835",
    "source": "manual",
    "content": "721 East Main Street, Luray, VA, 22835<br>(540) 743-5177",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.666079",
      "lng": "-78.447188",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2759",
    "title": "Pizza Hut",
    "address": "729 &quot;C&quot; Richmond Ave, Staunton, VA, 24001",
    "source": "manual",
    "content": "729 \"C\" Richmond Ave, Staunton, VA, 24001<br>(540) 887-9860",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.14285",
      "lng": "-79.053133",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2760",
    "title": "Pizza Hut",
    "address": "730 S. Santa Rosa  San Antonio, TX 78204",
    "source": "manual",
    "content": "730 S. Santa Rosa  San Antonio, TX 78204<br>(210) 798-4800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.418201",
      "lng": "-98.499559",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2761",
    "title": "Pizza Hut",
    "address": "743 Dairy Ashford Street, Houston, TX 77079",
    "source": "manual",
    "content": "743 Dairy Ashford Street, Houston, TX 77079<br>(281) 497-0420",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.772602",
      "lng": "-95.606694",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2762",
    "title": "Pizza Hut",
    "address": "759 North Ferdon Blvd, Crestview, FL, 32536",
    "source": "manual",
    "content": "759 North Ferdon Blvd, Crestview, FL, 32536<br>(850) 682-9960",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.77174",
      "lng": "-86.564638",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2763",
    "title": "Pizza Hut",
    "address": "7820 Long Point Road, Houston, TX 77055",
    "source": "manual",
    "content": "7820 Long Point Road, Houston, TX 77055<br>(713) 688-8100",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.803067",
      "lng": "-95.48401",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2764",
    "title": "Pizza Hut",
    "address": "7844 Portland Ave, Bloomington, MN 55420-1313",
    "source": "manual",
    "content": "7844 Portland Ave, Bloomington, MN 55420-1313<br>(952) 884-2822",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.860714",
      "lng": "-93.268171",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2765",
    "title": "Pizza Hut",
    "address": "7948 Gateway East, El Paso, TX 79915",
    "source": "manual",
    "content": "7948 Gateway East, El Paso, TX 79915<br>(915) 592-9929",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.752596",
      "lng": "-106.346753",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2766",
    "title": "Pizza Hut",
    "address": "7960 N Mesa St, El Paso TX 79932",
    "source": "manual",
    "content": "7960 N Mesa St, El Paso TX 79932<br>(915) 584-5574",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.840896",
      "lng": "-106.575799",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2767",
    "title": "Pizza Hut",
    "address": "801 19th Street, Hondo, TX  78861",
    "source": "manual",
    "content": "801 19th Street, Hondo, TX  78861<br>(830) 426-3391",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.347616",
      "lng": "-99.137365",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2768",
    "title": "Pizza Hut",
    "address": "803 West Main, Edna, TX  77957",
    "source": "manual",
    "content": "803 West Main, Edna, TX  77957<br>(361) 782-7197",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.973706",
      "lng": "-96.655257",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2769",
    "title": "Pizza Hut",
    "address": "8057 B Kirby Dr, Houston, TX 77054",
    "source": "manual",
    "content": "8057 B Kirby Dr, Houston, TX 77054<br>(713) 521-2266",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.6918056",
      "lng": "-95.4121597",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2770",
    "title": "Pizza Hut",
    "address": "812 W Greenwood St, Abbeville, SC, 29620-2515",
    "source": "manual",
    "content": "812 W Greenwood St, Abbeville, SC, 29620-2515<br>(864) 459-2685",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.162489",
      "lng": "-82.383017",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2771",
    "title": "Pizza Hut",
    "address": "814 North Oak, Pearsall, TX 78061",
    "source": "manual",
    "content": "814 North Oak, Pearsall, TX 78061<br>(830) 334-8051",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "28.898551",
      "lng": "-99.092811",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2772",
    "title": "Pizza Hut",
    "address": "8157 Highway 65 No, Spring Lake Park, MN 55432",
    "source": "manual",
    "content": "8157 Highway 65 No, Spring Lake Park, MN 55432<br>(763) 785-0085",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.116152",
      "lng": "-93.241901",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2773",
    "title": "Pizza Hut",
    "address": "823 South Main Street, Graham, NC, 27253",
    "source": "manual",
    "content": "823 South Main Street, Graham, NC, 27253<br>(336) 226-0077",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.05647",
      "lng": "-79.401489",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2774",
    "title": "Pizza Hut",
    "address": "8330 Highway 210 W, Baxter, MN 56425-0000",
    "source": "manual",
    "content": "8330 Highway 210 W, Baxter, MN 56425-0000<br>(218) 828-1424",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "46.355332",
      "lng": "-94.226351",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2775",
    "title": "Pizza Hut",
    "address": "840 S Broadway, Rochester, MN 55904-6443",
    "source": "manual",
    "content": "840 S Broadway, Rochester, MN 55904-6443<br>(507) 285-5000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.013812",
      "lng": "-92.462395",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2776",
    "title": "Pizza Hut",
    "address": "8400 W Belfort Ave, Houston, TX 77071",
    "source": "manual",
    "content": "8400 W Belfort Ave, Houston, TX 77071<br>(713) 771-6161",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.655789",
      "lng": "-95.525206",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2777",
    "title": "Pizza Hut",
    "address": "8582 Seminole Trail, Ruckersville, VA, 22967",
    "source": "manual",
    "content": "8582 Seminole Trail, Ruckersville, VA, 22967<br>(434) 990-2605",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.229877",
      "lng": "-78.371365",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2778",
    "title": "Pizza Hut",
    "address": "8615 Tidwell Rd, Suite B, Houston, TX 77028",
    "source": "manual",
    "content": "8615 Tidwell Rd, Suite B, Houston, TX 77028<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.850392",
      "lng": "-95.264235",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2779",
    "title": "Pizza Hut",
    "address": "8692 Navarre Pkwy, Navarre, FL, 32566",
    "source": "manual",
    "content": "8692 Navarre Pkwy, Navarre, FL, 32566<br>(850) 939-8217",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.402116",
      "lng": "-86.858418",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2780",
    "title": "Pizza Hut",
    "address": "8765 Spring Cypress Road, Spring, TX 77379",
    "source": "manual",
    "content": "8765 Spring Cypress Road, Spring, TX 77379<br>(281) 376-8019",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.032807",
      "lng": "-95.552708",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2781",
    "title": "Pizza Hut",
    "address": "8876 Dallas/Acworth Hwy #106, Dallas, GA, 30132",
    "source": "manual",
    "content": "8876 Dallas/Acworth Hwy #106, Dallas, GA, 30132<br>(770) 917-0111",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.01074",
      "lng": "-84.752136",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2782",
    "title": "Pizza Hut",
    "address": "8880 Bellaire Blvd Ste D, Houston, TX 77036",
    "source": "manual",
    "content": "8880 Bellaire Blvd Ste D, Houston, TX 77036<br>(713) 777-0338",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.705865",
      "lng": "-95.540596",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2783",
    "title": "Pizza Hut",
    "address": "890 S Interstate 35 Frontage Rd, New Braunfels, TX 78130",
    "source": "manual",
    "content": "890 S Interstate 35 Frontage Rd, New Braunfels, TX 78130<br>(830) 626-8888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.71188",
      "lng": "-98.088865",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2784",
    "title": "Pizza Hut",
    "address": "902 Woodland Ave, Duluth, MN 55812",
    "source": "manual",
    "content": "902 Woodland Ave, Duluth, MN 55812<br>(218) 624-7000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "46.815955",
      "lng": "-92.077831",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2785",
    "title": "Pizza Hut",
    "address": "906 Saint Emanuel St., Houston, TX 77003",
    "source": "manual",
    "content": "906 Saint Emanuel St., Houston, TX 77003<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.751899",
      "lng": "-95.355434",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2786",
    "title": "Pizza Hut",
    "address": "915 S. St. Mary's, Falfurrias, TX  78355",
    "source": "manual",
    "content": "915 S. St. Mary's, Falfurrias, TX  78355<br>(361) 325-3621",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.218401",
      "lng": "-98.145112",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2787",
    "title": "Pizza Hut",
    "address": "930 N Riverfront Dr, Mankato, MN 56001-3338",
    "source": "manual",
    "content": "930 N Riverfront Dr, Mankato, MN 56001-3338<br>(507) 388-2973",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.175888",
      "lng": "-93.995173",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2788",
    "title": "Pizza Hut",
    "address": "9369 Richmond Ave, Houston, TX 77063",
    "source": "manual",
    "content": "9369 Richmond Ave, Houston, TX 77063<br>(713) 266-6161",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.727961",
      "lng": "-95.529645",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2789",
    "title": "Pizza Hut",
    "address": "9441 Cullen Blvd Suite A-1, Houston, TX 77051",
    "source": "manual",
    "content": "9441 Cullen Blvd Suite A-1, Houston, TX 77051<br>(281) 288-4444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.654352",
      "lng": "-95.3546",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2790",
    "title": "Pizza Hut",
    "address": "945 Hwy 90 East, Castroville, TX  78009",
    "source": "manual",
    "content": "945 Hwy 90 East, Castroville, TX  78009<br>(830) 931-3901",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.355986",
      "lng": "-98.860506",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2791",
    "title": "Pizza Hut",
    "address": "955 N. Resler, El Paso, TX 79912",
    "source": "manual",
    "content": "955 N. Resler, El Paso, TX 79912<br>(915) 581-8204",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "31.861806",
      "lng": "-106.55863",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2792",
    "title": "Pizza Hut",
    "address": "961 S Irby St, Florence, SC, 29501-5238",
    "source": "manual",
    "content": "961 S Irby St, Florence, SC, 29501-5238<br>(843) 679-2490",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.211172",
      "lng": "-79.767212",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2794",
    "title": "Pizza Hut",
    "address": "999 Junction Hwy, Kerrville, TX 78028",
    "source": "manual",
    "content": "999 Junction Hwy, Kerrville, TX 78028<br>(830) 895-4141",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.057927",
      "lng": "-99.162886",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2796",
    "title": "Pizza Hut",
    "address": "5220 Central Ave NE #220, Columbia Heights, MN 55421",
    "source": "manual",
    "content": "5220 Central Ave NE #220, Columbia Heights, MN 55421<br>(651) 488-8888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.06302",
      "lng": "-93.248328",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2797",
    "title": "Pizza Hut",
    "address": "12379 James Madison Highway, Orange, VA 22960",
    "source": "manual",
    "content": "12379 James Madison Highway, Orange, VA 22960<br>(540) 672-2747",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.232849",
      "lng": "-78.112386",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2798",
    "title": "Pizza Hut",
    "address": "1075 Whitlock Ave SW, Marietta, GA 30064",
    "source": "manual",
    "content": "11075 Whitlock Ave SW, Marietta, GA 30064<br>(470) 282-0222",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.951492",
      "lng": "-84.580423",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2799",
    "title": "Pizza Hut",
    "address": "2020 Bolton Rd, Ste 202, Atlanta, GA 30318",
    "source": "manual",
    "content": "2020 Bolton Rd, Ste 202, Atlanta, GA 30318<br>(404) 458-0555",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.811289",
      "lng": "-84.476113",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2800",
    "title": "Pizza Hut",
    "address": "1742 Zebulon Rd, Suite F, Griffin, GA 30224",
    "source": "manual",
    "content": "1742 Zebulon Rd, Suite F, Griffin, GA 30224<br>(470) 204-0204",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.193614",
      "lng": "-84.284701",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2801",
    "title": "Pizza Hut",
    "address": "90 Cape Fear Drive, Unit H, Whitsett, NC 27377",
    "source": "manual",
    "content": "90 Cape Fear Drive, Unit H, Whitsett, NC 27377<br>(336) 663-0655",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.078387",
      "lng": "-79.556728",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2802",
    "title": "Pizza Hut",
    "address": "6640 South Shore Blvd., Suite 150, League City, TX 77573",
    "source": "manual",
    "content": "6640 South Shore Blvd., Suite 150, League City, TX 77573<br>(832) 905-0111",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.503258",
      "lng": "-95.040784",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2803",
    "title": "Pizza Hut",
    "address": "12160 County Line Rd., Fayetteville, GA 30215",
    "source": "manual",
    "content": "12160 County Line Rd., Fayetteville, GA 30215<br>(678) 783-7777",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.426865",
      "lng": "-84.400635",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2804",
    "title": "Pizza Hut",
    "address": "1550 E. Market Street, Harrisonburg, VA 22801",
    "source": "manual",
    "content": "1550 E. Market Street, Harrisonburg, VA 22801<br>(540) 209-9004",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.435346",
      "lng": "-78.846498",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2805",
    "title": "Pizza Hut",
    "address": "1653 Weir Dr., Woodbury, MN 55125",
    "source": "manual",
    "content": "1653 Weir Dr., Woodbury, MN 55125<br>(651) 735-5585",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.926004",
      "lng": "-92.972317",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2806",
    "title": "Pizza Hut",
    "address": "17305 Kenrick Ave, Lakeville, MN 55044",
    "source": "manual",
    "content": "17305 Kenrick Ave, Lakeville, MN 55044<br>(952) 892-6935",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "44.697907",
      "lng": "-93.286809",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2807",
    "title": "Pizza Hut",
    "address": "1719 Spring Garden Ln, Suite A, Greensboro, NC 27403",
    "source": "manual",
    "content": "1719 Spring Garden Ln, Suite A, Greensboro, NC 27403<br>(336) 663-0644",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.063309",
      "lng": "-79.820688",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2808",
    "title": "Pizza Hut",
    "address": "4514 N Cobb Pkwy, Suite 101, Acworth, GA 30101",
    "source": "manual",
    "content": "4514 N Cobb Pkwy, Suite 101, Acworth, GA 30101<br>(678) 403-0000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "34.059506",
      "lng": "-84.720193",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2809",
    "title": "Pizza Hut",
    "address": "4101 Burlington Rd, Suite A, Greensboro, NC 27405",
    "source": "manual",
    "content": "4101 Burlington Rd, Suite A, Greensboro, NC 27405<br>(336) 663-0660",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "36.087736",
      "lng": "-79.711742",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2810",
    "title": "Pizza Hut",
    "address": "8390 Senoia Rd, Suite C, Fairburn, GA 30213",
    "source": "manual",
    "content": "8390 Senoia Rd, Suite C, Fairburn, GA 30213<br>(404) 400-6623",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.528702",
      "lng": "-84.575562",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2811",
    "title": "Pizza Hut",
    "address": "1001 West Main, Charlottesville, VA 22903",
    "source": "manual",
    "content": "1001 West Main, Charlottesville, VA 22903<br>(434) 422-4680",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.03288",
      "lng": "-78.49494",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2812",
    "title": "Taco Bell",
    "address": "268 Route 10, Succasunna, NJ 07876, United States",
    "source": "manual",
    "content": "268 Route 10, Succasunna, NJ 07876<br>(973) 584-4761",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.8720249",
      "lng": "-74.64451959999997",
      "city": "Roxbury Township",
      "state": "New Jersey",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "07936",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2813",
    "title": "Pizza Hut",
    "address": "6342 Vinewood Lane, Osseo, MN 55311",
    "source": "manual",
    "content": "6342 Vinewood Lane, Osseo, MN 55311<br>(763) 253-2010",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "45.069439",
      "lng": "-93.448838",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2814",
    "title": "Pizza Hut",
    "address": "400 Tiffany Dr, Waynesboro, VA 22980",
    "source": "manual",
    "content": "400 Tiffany Dr, Waynesboro, VA 22980<br>(540) 943-9092",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "38.066685",
      "lng": "-78.931757",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2815",
    "title": "Pizza Hut",
    "address": "101 East Central Entrance, Duluth, MN 55811",
    "source": "manual",
    "content": "101 East Central Entrance, Duluth, MN 55811<br>(218) 722-8426",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "46.800631",
      "lng": "-92.130677",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2816",
    "title": "Wendy's",
    "address": "2575 Nicholasville Road, Lexington, KY, United States",
    "source": "manual",
    "content": "2575 Nicholasville Rd, Lexington, KY 40503<br>(859) 277-4311",
    "location": {
      "icon": wendysIcon,
      "lat": "37.999673",
      "lng": "-84.521562",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2817",
    "title": "Wendy's",
    "address": "1499 Boardwalk, Lexington, KY, United States",
    "source": "manual",
    "content": "1499 Boardwalk, Lexington, KY 40511<br>(859) 253-0403",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0720501",
      "lng": "-84.4832366",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40511",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2818",
    "title": "Wendy's",
    "address": "1792 Alexandria Drive, Lexington, KY, United States",
    "source": "manual",
    "content": "1792 Alexandria Dr, Lexington, KY 40504<br>(859) 276-4214",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0381748",
      "lng": "-84.5517701",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40504",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2819",
    "title": "Wendy's",
    "address": "3010 Richmond Road, Lexington, KY, United States",
    "source": "manual",
    "content": "3010 Richmond Rd, Lexington, KY 40509<br>(859) 269-9140",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0051437",
      "lng": "-84.4508429",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40509",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2820",
    "title": "Wendy's",
    "address": "946 North Main Street, Nicholasville, KY, United States",
    "source": "manual",
    "content": "946 North Main Street, Nicholasville, KY 40356<br>(859) 887-1509",
    "location": {
      "icon": wendysIcon,
      "lat": "37.89548800000001",
      "lng": "-84.5660418",
      "city": "Nicholasville",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40356",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2821",
    "title": "Wendy's",
    "address": "101 Prince Royal Drive, Berea, KY, United States",
    "source": "manual",
    "content": "101 Prince Royal, Berea, KY 40403<br>(859) 986-2231",
    "location": {
      "icon": wendysIcon,
      "lat": "37.56886189999999",
      "lng": "-84.31132120000001",
      "city": "Berea",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40403",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2822",
    "title": "Wendy's",
    "address": "72 Broadway Street, Dry Ridge, KY, United States",
    "source": "manual",
    "content": "72 Broadway Street, Dry Ridge, KY 41035<br>(859) 824-3033",
    "location": {
      "icon": wendysIcon,
      "lat": "38.6827227",
      "lng": "-84.60012110000002",
      "city": "Dry Ridge",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "41035",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2823",
    "title": "Wendy's",
    "address": "2296 Thunderstick Dr, Lexington, KY, United States",
    "source": "manual",
    "content": "2296 Thunderstick Dr, Lexington, KY 40505<br>(859) 299-1432<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0420969",
      "lng": "-84.42624669999998",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40505",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2824",
    "title": "Wendy's",
    "address": "101 Wingtip Way, Mount Sterling, KY, United States",
    "source": "manual",
    "content": "101 Wing Tip Way, Mt Sterling, KY 40353<br>(859) 498-9545",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0754276",
      "lng": "-83.94785739999998",
      "city": "Mount Sterling",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40353",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2825",
    "title": "Wendy's",
    "address": "113 North Keeneland Drive, Richmond, KY, United States",
    "source": "manual",
    "content": "113 North Keeneland Dr, Richmond, KY 40475<br>(859) 623-6958",
    "location": {
      "icon": wendysIcon,
      "lat": "37.77689389999999",
      "lng": "-84.3182658",
      "city": "Richmond",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40475",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2826",
    "title": "Wendy's",
    "address": "1907 Plaudit Place Suite 20, Lexington, KY, United States",
    "source": "manual",
    "content": "1907 Plaudit Place, Suite 20, Lexington, KY 40509<br>(859) 263-2414",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0189781",
      "lng": "-84.416043",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40509",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2827",
    "title": "Wendy's",
    "address": "5365 Athens Boonesboro Road, Lexington, KY, United States",
    "source": "manual",
    "content": "5365 Athens Boonesboro Rd, Lexington, KY 40509<br>(859) 263-0315<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "37.9642876",
      "lng": "-84.3903914",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40509",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2828",
    "title": "Wendy's",
    "address": "1760 Sharkey Way, Lexington, KY, United States",
    "source": "manual",
    "content": "1760 Sharkey Way, Lexington, KY 40511<br>(859) 280-2300",
    "location": {
      "icon": wendysIcon,
      "lat": "38.0689607",
      "lng": "-84.52984329999998",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40511",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2829",
    "title": "Wendy's",
    "address": "411 Leighway Drive, Richmond, KY, United States",
    "source": "manual",
    "content": "411 Leighway Dr, Richmond, KY 40475<br>(859) 623-6985",
    "location": {
      "icon": wendysIcon,
      "lat": "37.7371295",
      "lng": "-84.3133924",
      "city": "Richmond",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40475",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2830",
    "title": "Wendy's",
    "address": "105 Hospital Drive, Winchester, KY, United States",
    "source": "manual",
    "content": "105 Hospital Way, Winchester, KY 40391<br>(859) 744-7711",
    "location": {
      "icon": wendysIcon,
      "lat": "38.00968559999999",
      "lng": "-84.2154405",
      "city": "Winchester",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40391",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2831",
    "title": "Wendy's",
    "address": "10926 Culebra Rd, San Antonio, TX 78253, United States",
    "source": "manual",
    "content": "10926 Culebra Rd, San Antonio, TX 78253<br>(210) 688-9193",
    "location": {
      "icon": wendysIcon,
      "lat": "29.4951897",
      "lng": "-98.70885499999997",
      "city": "San Antonio",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "78253",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2832",
    "title": "Taco Bell",
    "address": "1300 Holton Lane, Takoma Park, MD 20912, United States",
    "source": "manual",
    "content": "1300 Holton Lane, Takoma Park, MD 20912<br>(301) 439-3203",
    "location": {
      "icon": tacoBellIcon,
      "lat": "38.98589959999999",
      "lng": "-76.9879497",
      "city": "Takoma Park",
      "state": "Maryland",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "20912",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2833",
    "title": "Taco Bell",
    "address": "512 N Broad St, Elizabeth, NJ 07201, United States",
    "source": "manual",
    "content": "512 N. Broad St, Elizabeth, NJ 07201<br>(908) 558-7375",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.673871",
      "lng": "-74.213753",
      "city": "Elizabeth",
      "state": "New Jersey",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "07208",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2834",
    "title": "Pizza Hut",
    "address": "2000 S Mccoll Ste E McAllen, TX 78503",
    "source": "manual",
    "content": "2000 S Mccoll Ste E McAllen, TX 78503<br>(956) 630-3077",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.183744",
      "lng": "-98.216513",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2835",
    "title": "Pizza Hut",
    "address": "739 W. Dove McAllen, TX 78504",
    "source": "manual",
    "content": "739 W. Dove McAllen, TX 78504<br>(956) 971-8282",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.252629",
      "lng": "-98.218899",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2836",
    "title": "Pizza Hut",
    "address": "1524 W University Dr Edinburg, TX 78539",
    "source": "manual",
    "content": "1524 W University Dr Edinburg, TX 78539<br>(956) 381-9144",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.303256",
      "lng": "-98.17815",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2837",
    "title": "Pizza Hut",
    "address": "404 S 10th St McAllen, TX 78501",
    "source": "manual",
    "content": "404 S 10th St McAllen, TX 78501<br>(956) 682-4115",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.199394",
      "lng": "-98.231035",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2838",
    "title": "Pizza Hut",
    "address": "1224 S Commerce St Harlingen, TX 78550",
    "source": "manual",
    "content": "1224 S Commerce St Harlingen, TX 78550<br>(956) 423-1900",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.179665",
      "lng": "-97.681149",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2839",
    "title": "Pizza Hut",
    "address": "1519 Guadalupe St Laredo, TX 78040",
    "source": "manual",
    "content": "1519 Guadalupe St Laredo, TX 78040<br>(956) 722-0222",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.506394",
      "lng": "-99.480541",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2840",
    "title": "Pizza Hut",
    "address": "1830 Central Blvd Brownsville, TX 78520",
    "source": "manual",
    "content": "1830 Central Blvd Brownsville, TX 78520<br>(956) 546-8272",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "25.929834",
      "lng": "-97.510613",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2841",
    "title": "Pizza Hut",
    "address": "623 W Us Highway 83 Weslaco, TX 78596",
    "source": "manual",
    "content": "623 W Us Highway 83 Weslaco, TX 78596<br>(956) 969-1444",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.196031",
      "lng": "-98.191301",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2842",
    "title": "Pizza Hut",
    "address": "3609 N 10th St McAllen, TX 78501",
    "source": "manual",
    "content": "3609 N 10th St McAllen, TX 78501<br>(956) 686-1701",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.236323",
      "lng": "-98.225031",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2843",
    "title": "Pizza Hut",
    "address": "821 E 9th St Mission, TX 78572",
    "source": "manual",
    "content": "821 E 9th St Mission, TX 78572<br>(956) 581-7466",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.213960",
      "lng": "-98.316850",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2844",
    "title": "Pizza Hut",
    "address": "4821 San Bernardo Ave Laredo, TX 78041",
    "source": "manual",
    "content": "4821 San Bernardo Ave Laredo, TX 78041<br>(956) 722-3682",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.545271",
      "lng": "-99.503985",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2845",
    "title": "Pizza Hut",
    "address": "245 Security Dr Brownsville, TX 78521",
    "source": "manual",
    "content": "245 Security Dr Brownsville, TX 78521<br>(956) 541-6393",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "25.919579",
      "lng": "-97.469422",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2846",
    "title": "Pizza Hut",
    "address": "1001 W Highway 83 Pharr, TX 78577",
    "source": "manual",
    "content": "1001 W Highway 83 Pharr, TX 78577<br>(956) 787-1593",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.196919",
      "lng": "-98.196209",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2847",
    "title": "Pizza Hut",
    "address": "501 E Hidalgo Ave Raymondville, TX 78580",
    "source": "manual",
    "content": "501 E Hidalgo Ave Raymondville, TX 78580<br>(956) 689-5564",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.482182",
      "lng": "-97.777139",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2848",
    "title": "Pizza Hut",
    "address": "826 W 2nd St Mercedes, TX 78570",
    "source": "manual",
    "content": "826 W 2nd St Mercedes, TX 78570<br>(956) 565-6319",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.149645",
      "lng": "-97.918906",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2849",
    "title": "Pizza Hut",
    "address": "1802 S Closner Blvd Edinburg, TX 78539",
    "source": "manual",
    "content": "1802 S Closner Blvd Edinburg, TX 78539<br>(956) 381-0991",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.284712",
      "lng": "-98.165026",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2850",
    "title": "Pizza Hut",
    "address": "920 Morgan Blvd Harlingen, TX 78550",
    "source": "manual",
    "content": "920 Morgan Blvd Harlingen, TX 78550<br>(956) 428-2191",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.201541",
      "lng": "-97.6769",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2851",
    "title": "Pizza Hut",
    "address": "2619 E Saunders St Laredo, TX 78041",
    "source": "manual",
    "content": "2619 E Saunders St Laredo, TX 78041<br>(956) 727-1354",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.530337",
      "lng": "-99.469466",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2852",
    "title": "Pizza Hut",
    "address": "2121 N 23rd St McAllen, TX 78501",
    "source": "manual",
    "content": "2121 N 23rd St McAllen, TX 78501<br>(956) 687-7859",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.225697",
      "lng": "-98.242393",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2853",
    "title": "Pizza Hut",
    "address": "2333 Boca Chica Blvd Brownsville, TX 78521",
    "source": "manual",
    "content": "2333 Boca Chica Blvd Brownsville, TX 78521<br>(956) 544-7711",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "25.922302",
      "lng": "-97.486659",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2854",
    "title": "Pizza Hut",
    "address": "1179 Fm 802 Brownsville, TX 78526",
    "source": "manual",
    "content": "1179 Fm 802 Brownsville, TX 78526<br>(956) 544-7733",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "25.950508",
      "lng": "-97.500415",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2855",
    "title": "Pizza Hut",
    "address": "1309 E. Us Hwy 83 Donna, TX 78537",
    "source": "manual",
    "content": "1309 E. Us Hwy 83 Donna, TX 78537<br>(956) 464-7855",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.197747",
      "lng": "-98.200006",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2856",
    "title": "Pizza Hut",
    "address": "1802 W Tyler St Harlingen, TX 78550",
    "source": "manual",
    "content": "1802 W Tyler St Harlingen, TX 78550<br>(956) 425-6520",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.189930",
      "lng": "-97.714250",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2857",
    "title": "Pizza Hut",
    "address": "5303 Mcpherson Ave Laredo, TX 78041",
    "source": "manual",
    "content": "5303 Mcpherson Ave Laredo, TX 78041<br>(956) 727-8988",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.516790",
      "lng": "-99.484510",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2858",
    "title": "Pizza Hut",
    "address": "2106 Santa Ursula Ave Laredo, TX 78040",
    "source": "manual",
    "content": "2106 Santa Ursula Ave Laredo, TX 78040<br>(956) 722-1234",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.518519",
      "lng": "-99.503748",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2859",
    "title": "Pizza Hut",
    "address": "522 N Alamo Rd Alamo, TX 78516",
    "source": "manual",
    "content": "522 N Alamo Rd Alamo, TX 78516<br>(956) 783-1515",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.189724",
      "lng": "-98.121868",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2860",
    "title": "Pizza Hut",
    "address": "311 E Us Expressway 83 Mission, TX 78572",
    "source": "manual",
    "content": "311 E Us Expressway 83 Mission, TX 78572<br>(956) 581-9000",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.201360",
      "lng": "-98.323880",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2861",
    "title": "Pizza Hut",
    "address": "709 E Edinburg Ave Elsa, TX 78543",
    "source": "manual",
    "content": "709 E Edinburg Ave Elsa, TX 78543<br>(956) 262-4744",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.293901",
      "lng": "-97.982332",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2862",
    "title": "Pizza Hut",
    "address": "2119 Pine Laredo, TX 78046",
    "source": "manual",
    "content": "2119 Pine Laredo, TX 78046<br>(956) 791-1199",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.480254",
      "lng": "-99.47399",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2863",
    "title": "Pizza Hut",
    "address": "1302 N Texas Weslaco, TX 78596",
    "source": "manual",
    "content": "1302 N Texas Weslaco, TX 78596<br>(956) 969-1133",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.102237",
      "lng": "-99.130483",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2864",
    "title": "Pizza Hut",
    "address": "1130 W Us Highway 77 San Benito, TX 78586",
    "source": "manual",
    "content": "1130 W Us Highway 77 San Benito, TX 78586<br>(956) 399-1612",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.133430",
      "lng": "-97.645200",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2865",
    "title": "Pizza Hut",
    "address": "9001 Fm 1472 Laredo, TX 78041",
    "source": "manual",
    "content": "9001 Fm 1472 Laredo, TX 78041<br>(956) 791-8888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.583652",
      "lng": "-99.509047",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2866",
    "title": "Pizza Hut",
    "address": "1200 International Blvd Brownsville, TX 78520",
    "source": "manual",
    "content": "1200 International Blvd Brownsville, TX 78520<br>(956) 542-3400",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "25.901167",
      "lng": "-97.48859",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2867",
    "title": "Pizza Hut",
    "address": "651 N. Nebraska San Juan, TX 78589",
    "source": "manual",
    "content": "651 N. Nebraska San Juan, TX 78589<br>(956) 702-8800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.19753",
      "lng": "-98.153775",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2868",
    "title": "Pizza Hut",
    "address": "9810 N Mcpherson Ave Laredo, TX 78045",
    "source": "manual",
    "content": "9810 N Mcpherson Ave Laredo, TX 78045<br>(956) 725-9933",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.59922",
      "lng": "-99.480852",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2869",
    "title": "Pizza Hut",
    "address": "1905 Padre Blvd South Padre Island, TX 78597",
    "source": "manual",
    "content": "1905 Padre Blvd South Padre Island, TX 78597<br>(956) 761-1361",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.098564",
      "lng": "-97.166331",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2870",
    "title": "Pizza Hut",
    "address": "209 N Hwy. 83 Zapata, TX 78076",
    "source": "manual",
    "content": "209 N Hwy. 83 Zapata, TX 78076<br>(956) 765-4882",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.897440",
      "lng": "-99.264800",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2871",
    "title": "Pizza Hut",
    "address": "1202 Hwy 100 Port Isabel, TX 78578",
    "source": "manual",
    "content": "1202 Hwy 100 Port Isabel, TX 78578<br>(956) 943-8888",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.071915",
      "lng": "-97.219865",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2872",
    "title": "Pizza Hut",
    "address": "7222 W Expressway 83 Mission, TX 78572",
    "source": "manual",
    "content": "7222 W Expressway 83 Mission, TX 78572<br>(956) 585-7750",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.238653",
      "lng": "-98.407395",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2873",
    "title": "Pizza Hut",
    "address": "2217 E Griffin Pkwy Mission, TX 78572",
    "source": "manual",
    "content": "2217 E Griffin Pkwy Mission, TX 78572<br>(956) 585-0185",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.224773",
      "lng": "-98.285394",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2874",
    "title": "Pizza Hut",
    "address": "247 East Trenton Edinburg, TX 78539",
    "source": "manual",
    "content": "247 East Trenton Edinburg, TX 78539<br>(956) 381-0992",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.262280",
      "lng": "-98.169970",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2875",
    "title": "Pizza Hut",
    "address": "2253 W. University Dr. Edinburg, TX 78539",
    "source": "manual",
    "content": "2253 W. University Dr. Edinburg, TX 78539<br>(956) 381-9145",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.306479",
      "lng": "-98.187741",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2876",
    "title": "Pizza Hut",
    "address": "4416 N. Conway Ave., Suite 114 Palmhurst, TX 78573",
    "source": "manual",
    "content": "4416 N. Conway Ave., Suite 114 Palmhurst, TX 78573<br>(956) 580-9727",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.260637",
      "lng": "-98.31748",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2877",
    "title": "Pizza Hut",
    "address": "1300 S. Cage Blvd. Suite 15 Pharr, TX 78577",
    "source": "manual",
    "content": "1300 S. Cage Blvd. Suite 15 Pharr, TX 78577<br>(956) 702-0800",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.179296",
      "lng": "-98.188338",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2878",
    "title": "Pizza Hut",
    "address": "2329 Jacaman Road #13 Laredo, TX 78041",
    "source": "manual",
    "content": "2329 Jacaman Road #13 Laredo, TX 78041<br>(956) 568-0414",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.562082",
      "lng": "-99.454467",
      "onclick_action": "marker",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2879",
    "title": "Wendy's",
    "address": "5622 FM423, Frisco, TX 75034, United States",
    "source": "manual",
    "content": "5622 FM 423, Frisco, TX 75034<br>(214) 919-4547",
    "location": {
      "icon": wendysIcon,
      "lat": "33.126248",
      "lng": "-96.89126420000002",
      "city": "Frisco",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "75034",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2881",
    "title": "Pizza Hut",
    "address": "1152 Jodeco Rd, Stockbridge, GA 30281, United States",
    "source": "manual",
    "content": "1152 Jodeco Rd, Stockbridge, GA 30281<br>(770) 957-4827",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.4975346",
      "lng": "-84.24312939999999",
      "city": "Stockbridge",
      "state": "Georgia",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "30281",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2882",
    "title": "Wendy's",
    "address": "3911 Matlock Rd, Arlington, TX 76015, United States",
    "source": "manual",
    "content": "3911 Matlock Rd, Arlington, TX 76015<br>(817) 375-9953",
    "location": {
      "icon": wendysIcon,
      "lat": "32.681194",
      "lng": "-97.1142807",
      "city": "Arlington",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "76015",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2883",
    "title": "Wendy's",
    "address": "3400 South Cooper Street, Arlington, TX 76015, United States",
    "source": "manual",
    "content": "3400 S Cooper, Arlington, TX 76015<br>(817) 375-9986",
    "location": {
      "icon": wendysIcon,
      "lat": "32.6907588",
      "lng": "-97.12952180000002",
      "city": "Arlington",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "76015",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2884",
    "title": "Wendy's",
    "address": "1687 State HWY 46 South, New Braunfels, TX 78130",
    "source": "manual",
    "content": "1687 State HWY 46 South, New Braunfels, TX 78130<br>(830) 515-4324\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "29.676936",
      "lng": "-98.060106",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2885",
    "title": "Wendy's",
    "address": "3750 East Broad Street, Mansfield, TX 76063, USA",
    "source": "manual",
    "content": "3750 East Broad Street, Mansfield, TX 76063<br>(682) 330-7228",
    "location": {
      "icon": wendysIcon,
      "lat": "32.578914",
      "lng": "-97.076015",
      "city": "Mansfield",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "76063",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2886",
    "title": "Wendy's",
    "address": "11960 Lebanon Rd, Sharonville, OH 45241, USA",
    "source": "manual",
    "content": "11960 Lebanon Rd Sharonville, OH 45241<br>(513) 769-3742",
    "location": {
      "icon": wendysIcon,
      "lat": "39.2917328",
      "lng": "-84.3935004",
      "city": "Cincinnati",
      "state": "Ohio",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "45241",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2887",
    "title": "Wendy's",
    "address": "1155 Reading Rd, Mason, OH 45040, USA",
    "source": "manual",
    "content": "1155 Reading Rd Mason, OH 45040<br>(513) 336-7183",
    "location": {
      "icon": wendysIcon,
      "lat": "39.33601039999999",
      "lng": "-84.34624199999996",
      "city": "Mason",
      "state": "Ohio",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "45040",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2888",
    "title": "Wendy's",
    "address": "8200 Arbor Square Dr, Mason, OH 45040, USA",
    "source": "manual",
    "content": "8200 Arbor Square Dr Mason, OH 45040<br>(513) 770-4331",
    "location": {
      "icon": wendysIcon,
      "lat": "39.31982189999999",
      "lng": "-84.31356829999999",
      "city": "Deerfield Township",
      "state": "Ohio",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "45040",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2889",
    "title": "Pizza Hut",
    "address": "103 W Bay Area Blvd, Webster, TX 77598",
    "source": "manual",
    "content": "103 W Bay Area Blvd<br>(281) 286-0606",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.548000",
      "lng": "-95.128820",
      "city": "Webster",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "77598",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2890",
    "title": "Pizza Hut",
    "address": "15122 Potranco Road, San Antonio, TX 78245, USA",
    "source": "manual",
    "content": "15122 Potranco Road, San Antonio, TX 78245<br>(210) 966-4455",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.426480",
      "lng": "-98.795060",
      "city": "San Antonio",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "78245",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2891",
    "title": "Pizza Hut",
    "address": "8001 South Jackson Road, Pharr, TX 78577, USA",
    "source": "manual",
    "content": "8001 S Jackson Road, Pharr, TX 78577<br>(956) 403-6655",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.1197366",
      "lng": "-98.21663039999999",
      "city": "Pharr",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "78577",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2892",
    "title": "Taco Bell",
    "address": "350 Broad St, Newark, NJ 07104, USA",
    "source": "manual",
    "content": "350 Broad St, Newark, NJ 07104<br>(862) 227-1075",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.749897",
      "lng": "-74.170097",
      "city": "Newark",
      "state": "New Jersey",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "07104",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2893",
    "title": "Pizza Hut",
    "address": "5300 El Bosque Drive, Edinburg, TX 78542, USA",
    "source": "manual",
    "content": "5300 El Bosque Edinburg, TX 78542<br>(956) 603-1060<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "26.2436941",
      "lng": "-98.11241689999997",
      "city": "Edinburg",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "78542",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2894",
    "title": "Pizza Hut",
    "address": "21460 Kuykendahl Building 14A, Suite 200 Spring, TX 77389",
    "source": "manual",
    "content": "21460 Kuykendahl Building 14A, Suite 200 Spring, TX 77389\r\n<br>(346) 201-7700<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "30.114860",
      "lng": "-95.554610",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2895",
    "title": "Wendy's",
    "address": "742 Seguin St, San Antonio, TX 78208, USA",
    "source": "manual",
    "content": "742 Seguin St. San Antonio, TX 78208<br>(210) 501-1162",
    "location": {
      "icon": wendysIcon,
      "lat": "29.4383923",
      "lng": "-98.4517558",
      "city": "San Antonio",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "78208",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2896",
    "title": "Wendy's",
    "address": "4900 Teasley Lane, Denton, TX 76210, USA",
    "source": "manual",
    "content": "4900 Teasley Lane, Denton, TX 76210<br>(940) 293-2606<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "33.1484429",
      "lng": "-97.1059477",
      "city": "Denton",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "76210",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2897",
    "title": "Pizza Hut",
    "address": "1175 E. Alton Gloor Blvd, Brownsville, TX 78521",
    "source": "manual",
    "content": "1175 E. Alton Gloor Blvd, Brownsville, TX 78521\r\n<br>(956) 338-1510",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "25.979590",
      "lng": "-97.500660",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2898",
    "title": "Pizza Hut",
    "address": "5944 East Lake Parkway, McDonough, GA 30253, USA",
    "source": "manual",
    "content": "5944 E. Lake Parkway, McDonough, GA 30253\r\n<br>(678) 940-0501<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.5063694",
      "lng": "-84.14233079999997",
      "city": "McDonough",
      "state": "Georgia",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "30253",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2899",
    "title": "Wendy's",
    "address": "4097 Lexington Road, Nicholasville, KY 40356, USA",
    "source": "manual",
    "content": "4097 Lexington Road, Nicholasville, KY 40356<br>(859) 469-6841<br>",
    "location": {
      "icon": wendysIcon,
      "lat": "37.9532566",
      "lng": "-84.54054869999999",
      "city": "Nicholasville",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40356",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2900",
    "title": "Taco Bell",
    "address": "2 W Olive St, Scranton, PA 18508, USA",
    "source": "manual",
    "content": "2 W Olive St Scranton, PA 18508<br>(570) 340-0507",
    "location": {
      "icon": tacoBellIcon,
      "lat": "41.4169313",
      "lng": "-75.66533349999997",
      "city": "Scranton",
      "state": "Pennsylvania",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "18508",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2901",
    "title": "Pizza Hut",
    "address": "2820 E Atlanta Rd, Ellenwood, GA 30294, USA",
    "source": "manual",
    "content": "2820 E Atlanta Rd, Ellenwood, GA 30294\r\n<br>(678) 940-0498<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.6174829",
      "lng": "-84.2440904",
      "city": "Ellenwood",
      "state": "Georgia",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "30294",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2902",
    "title": "Pizza Hut",
    "address": "1702 W Loop N Freeway Ste 1720A, Houston, TX 77008",
    "source": "manual",
    "content": "1702 W Loop N Freeway Ste 1720A, Houston, TX 77008\r\n<br>(346) 201-7676",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.800672",
      "lng": "-95.448642",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2903",
    "title": "Pizza Hut",
    "address": "1454 Lockwood Dr Ste C Houston, TX 77020",
    "source": "manual",
    "content": "1454 Lockwood Dr. Ste C, Houston, TX 77020\r\n<br>(346) 800-9096<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "29.775363",
      "lng": "-95.315027",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2904",
    "title": "Taco Bell",
    "address": "415 S Washington Ave, Bergenfield, NJ 07621, USA",
    "source": "manual",
    "content": "415 South Washington Ave Bergenfield, NJ 07621<br>(201) 399-2519",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.9137232",
      "lng": "-73.9965009",
      "city": "Bergenfield",
      "state": "New Jersey",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "07621",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2905",
    "title": "Pizza Hut",
    "address": "4480 S Cobb Dr Ste Q Smyrna, GA 30080",
    "source": "manual",
    "content": "4480 S Cobb Dr Ste Q Smyrna, GA 30080\r\n<br>(770) 434-2345<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.845215",
      "lng": "-84.503007",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2906",
    "title": "Pizza Hut",
    "address": "500 Nathan Dean Blvd Ste 101 Dallas, GA 30157",
    "source": "manual",
    "content": "500 Nathan Dean Blvd, Ste 101, Dallas, GA 30157\r\n<br>(770) 443-2122<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.908090",
      "lng": "-84.825230",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2907",
    "title": "Pizza Hut",
    "address": "2860 East West Connector Ste 105 Austell, GA 30106",
    "source": "manual",
    "content": "2860 East West Connector Ste 105 Austell, GA 30106\r\n<br>(770) 435-4800<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "33.866940",
      "lng": "-84.628110",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }, {
    "id": "2908",
    "title": "Taco Bell",
    "address": "412-416 US Hwy 1, Edison, NJ 08817",
    "source": "manual",
    "content": "412-416 US Hwy 1, Edison, NJ 08817<br>(848) 209-0069",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.503340",
      "lng": "-74.399330",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2909",
    "title": "Taco Bell",
    "address": "65 Hackensack Ave, Hackensack, NJ 07601, USA",
    "source": "manual",
    "content": "65 Hackensack Ave., Hackensack, NJ 07601<br>(551) 775-1472",
    "location": {
      "icon": tacoBellIcon,
      "lat": "40.8973156",
      "lng": "-74.03804880000001",
      "city": "Hackensack",
      "state": "New Jersey",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "07601",
      "draggable": false,
      "infowindow_default_open": false,
      "animation": "BOUNCE",
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "3",
      "name": "Taco Bell",
      "type": "category",
      "extension_fields": null,
      "icon": tacoBellIcon
    }]
  }, {
    "id": "2910",
    "title": "Wendy's",
    "address": "1100 South Broadway, Lexington, KY 40504, USA",
    "source": "manual",
    "content": "1100 S. Broadway, Lexington, KY 40504<br>\r\n859-381-8140<br>\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "38.03657699999999",
      "lng": "-84.518339",
      "city": "Lexington",
      "state": "Kentucky",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "40504",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2911",
    "title": "Wendy's",
    "address": "2520 Walden Ave, Cheektowaga, NY 14225, USA",
    "source": "manual",
    "content": "2520 Walden Ave, Cheektowaga, NY 14225<br>\r\n716-206-7599<br>\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "42.9089136",
      "lng": "-78.7426365",
      "city": "Cheektowaga",
      "state": "New York",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "14225",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2912",
    "title": "Wendy's",
    "address": "3190 Latta Rd, Greece, NY 14612, USA",
    "source": "manual",
    "content": "3190 Latta Rd, Greece, NY 14612<br>\r\n585-203-8591<br>\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "43.25295089999999",
      "lng": "-77.681911",
      "city": "Greece",
      "state": "New York",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "14612",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2913",
    "title": "Wendy's",
    "address": "2724 West Loop 340, Waco, TX 76711, USA",
    "source": "manual",
    "content": "2724 W Loop 340<br>\r\nWaco, TX 76711<br>\r\n(254) 662-9547<br>\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "31.4957582",
      "lng": "-97.15520649999999",
      "city": "Waco",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "76711",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2914",
    "title": "Wendy's",
    "address": "34165 Aurora Rd, Solon, OH 44139, USA",
    "source": "manual",
    "content": "34165 Aurora Rd, Solon, OH 44139<br>\r\n(440) 991-1273<br>\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "41.385407",
      "lng": "-81.4363589",
      "city": "Solon",
      "state": "Ohio",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "44139",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2915",
    "title": "Wendy's",
    "address": "853 W Stacy Rd, Allen, TX, USA",
    "source": "manual",
    "content": "853 W Stacy Rd. Allen, TX 75013<br>\r\n(469) 854-6435<br>\r\n",
    "location": {
      "icon": wendysIcon,
      "lat": "33.1295327",
      "lng": "-96.6654128",
      "city": "Allen",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "75013",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "4",
      "name": "Wendy's",
      "type": "category",
      "extension_fields": null,
      "icon": wendysIcon
    }]
  }, {
    "id": "2916",
    "title": "Pizza Hut",
    "address": "4414 Ayers St, Corpus Christi, TX 78415, USA",
    "source": "manual",
    "content": "4414 Ayers St, Corpus Christi, TX 78415,\r\n<br>(361) 852-5601<br>",
    "location": {
      "icon": pizzaHutIcon,
      "lat": "27.7466212",
      "lng": "-97.4199479",
      "city": "Corpus Christi",
      "state": "Texas",
      "country": "United States",
      "onclick_action": "marker",
      "open_new_tab": "yes",
      "postal_code": "78415",
      "draggable": false,
      "infowindow_default_open": false,
      "infowindow_disable": true,
      "zoom": 5,
      "extra_fields": {
        "listorder": 0
      }
    },
    "categories": [{
      "id": "2",
      "name": "PizzaHut",
      "type": "category",
      "extension_fields": null,
      "icon": pizzaHutIcon
    }]
  }],
  "marker_cluster": {
    "max_zoom": "8",
    "image_path": "images/map/m"
  },
  "listing": {
    "listing_header": "<h2>Map Locations</h2>",
    "display_search_form": true,
    "search_field_autosuggest": false,
    "display_category_filter": true,
    "display_sorting_filter": true,
    "display_radius_filter": false,
    "radius_dimension": "miles",
    "radius_options": "5,10,15,20,25,50,100,200,500",
    "apply_default_radius": false,
    "default_radius": "100",
    "default_radius_dimension": "miles",
    "display_location_per_page_filter": true,
    "display_print_option": false,
    "display_grid_option": true,
    "filters": ["place_category"],
    "sorting_options": {
      "category__asc": "A-Z Category",
      "category__desc": "Z-A Category",
      "title__asc": "A-Z Title",
      "title__desc": "Z-A Title",
      "address__asc": "A-Z Address",
      "address__desc": "Z-A Address"
    },
    "default_sorting": {
      "orderby": "category",
      "inorder": "asc"
    },
    "listing_container": ".location_listing2",
    "tabs_container": ".location_listing2",
    "hide_locations": false,
    "filters_position": "default",
    "hide_map": false,
    "pagination": {
      "listing_per_page": "50"
    },
    "list_grid": "wpgmp_listing_grid",
    "listing_placeholder": "<div class=\"wpgmp_locations\">\r\n<div class=\"wpgmp_locations_head\">\r\n<div class=\"wpgmp_location_title\">\r\n<a href=\"\" class=\"place_title\" data-zoom=\"{marker_zoom}\" data-marker=\"{marker_id}\">{marker_title}</a>\r\n</div>\r\n<div class=\"wpgmp_location_meta\">\r\n<span class=\"wpgmp_location_category\">Category : {marker_category}</span>\r\n</div>\r\n</div>\r\n<div class=\"wpgmp_locations_content\">\r\n{marker_message}\r\n</div>\r\n<div class=\"wpgmp_locations_foot\"></div>\r\n</div>",
    "list_item_skin": {
      "name": "default",
      "type": "item",
      "sourcecode": "<div class=\"wpgmp_locations\">\r\n<div class=\"wpgmp_locations_head\">\r\n<div class=\"wpgmp_location_title\">\r\n<a href=\"\" class=\"place_title\" data-zoom=\"{marker_zoom}\" data-marker=\"{marker_id}\">{marker_title}</a>\r\n</div>\r\n<div class=\"wpgmp_location_meta\">\r\n<span class=\"wpgmp_location_category\">Category : {marker_category}</span>\r\n</div>\r\n</div>\r\n<div class=\"wpgmp_locations_content\">\r\n{marker_message}\r\n</div>\r\n<div class=\"wpgmp_locations_foot\"></div>\r\n</div>"
    }
  },
  "map_property": {
    "map_id": "2",
    "debug_mode": false
  },
  "shapes": {
    "drawing_editable": false
  },
  "filters": {
    "filters_container": "[data-container=\"wpgmp-filters-container\"]"
  },
  "marker_category_icons": {
    "1": phoneIcon,
    "2": pizzaHutIcon,
    "3": tacoBellIcon,
    "4": wendysIcon
  }
}
