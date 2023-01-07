<template>
    <div class="col-8 mt-5">
        <div class="text-center">
            <span v-if="loading">Loading...</span>
            <label for="checkbox">Hiển thị viền</label>
            <input id="checkbox" v-model="show" type="checkbox">
            <label for="checkbox">Hiển thị point</label>
            <input v-model="visible" type="checkbox">
            <input class="m-lg-3" v-model="fillColor" type="color">
            <br>
        </div>
        <l-map :zoom="zoom" :center="center" style="height: 800px; width: 100%">
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-geo-json v-if="show" :geojson="geojson" :options="options" :options-style="styleFunction" />
            <div>
                <l-marker v-for="markers in marker" :key="markers.id" :lat-lng="markers" @click="first">
                    <l-popup :content="markers.name"></l-popup>
                    <l-tooltip :content="markers.name" />

                </l-marker>
                <!-- <l-layer-group :visible="marker.Visible">
                    <l-marker v-for="markers in marker" :key="markers.id" :visible="markers.visible" :lat-lng="markers">
                        
                    </l-marker>
                </l-layer-group> -->

            </div>

            <div v-if="option1" class="mt-5 position-absolute z-1000 bg-light w-20">

                <p class="mt-2 h5 text-center">Test input markers</p>
                <input class="form-control" type="text">
                <button class="m-lg-2 btn btn-success" @click="option1 = !option1">Ẩn</button>
                <button class="m-lg-2 btn btn-success" @click="clickDelContact(marker.id)">Xóa
                    điểm</button>
                <button class="m-lg-2 btn btn-success" @click="option1 = !option1">Update</button>

            </div>

        </l-map>

    </div>
</template>

<script>
import { connects } from "@/services/connects";
import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LGeoJson, LTooltip, LPopup, LLayerGroup } from "vue2-leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
    name: "Geo",
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        LMarker,
        LTooltip, LPopup, LLayerGroup
    },
    data() {
        return {
            visible: true,
            option1: false,
            loading: false,
            show: true,
            enableTooltip: true,
            zoom: 7,
            center: [21.030653, 105.847130],
            geojson: null,
            fillColor: "#e4ce7f",
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: [

            ],
        };
    },
    computed: {
        options() {
            return {
                onEachFeature: this.onEachFeatureFunction
            };
        },
        styleFunction() {
            const fillColor = this.fillColor;
            return () => {
                return {
                    weight: 2,
                    color: "#00FFFF",
                    opacity: 1,
                    fillColor: fillColor,
                    fillOpacity: 0.5
                };
            };
        },

    },
    methods: {
        // removeMarker(index) {
        //     this.marker.splice(index, 1);
        // },
        // addMarker(event) {
        //     this.marker.push(event.latlng);
        // },
        alert(marker) {
            alert('this is ' + JSON.stringify(marker));
        },
        first() {
            this.option1 = !this.option1;
        },
        // async clickDelContact(markerId) {
        //     try {
        //         this.loading = true;
        //         let res = await connects.getOnePoint(markerId);
        //         if (res) {
        //             let res = await connects.getAllLocations(); // reset data
        //             this.marker = res.data;
        //             this.loading = false;
        //         }
        //         alert("Xóa thành công");
        //     }
        //     catch (error) {
        //         this.errorMess = error;
        //         this.loading = false;

        //     }
        // },


    },
    created: async function () {
        try {
            this.loading = true;
            const response = await fetch("https://data.opendevelopmentmekong.net/dataset/55bdad36-c476-4be9-a52d-aa839534200a/resource/b8f60493-7564-4707-aa72-a0172ba795d8/download/vn_iso_province.geojson");
            const data = await response.json();
            this.geojson = data;
            this.loading = false;
        }
        catch (e) {
            console.log(e);
        }
        try {
            this.loading = true;
            let res = await connects.getAllLocations();
            this.marker = res.data;
            this.loading = false;


        } catch (error) {
            this.errorMess = error;
            this.loading = false;

        }


    },

};
</script>

<style scoped>
.z-1000 {
    z-index: 1000;
    top: 32px;
}
</style>