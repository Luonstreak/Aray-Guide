import React from "react";
import { Loader } from "@googlemaps/js-api-loader"

class Map extends React.Component {
  state = {
    map: null,
    defaultCenter: {
      lat: this.props.center ? Number(this.props.center.latitude) :  40.4168,
      lng: this.props.center ? Number(this.props.center.longitude) : -3.7038
    }
  };

  componentDidMount() {
    const { defaultCenter } = this.state;
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
      version: "weekly",
    });
    loader.load().then(() => {
      this.setState({
        map: new google.maps.Map(document.getElementById("google-map"), {
          center: defaultCenter,
          disableDefaultUI: true,
          zoom: this.props.zoomLevel || 6,
        })
      });
    }).then(() => {
      this.props.markers && setTimeout(() => {
        this.handleDrawMarkers();
      }, 2000);
    });
  };

  handleDrawMarkers = () => {
    const { markers } = this.props;
    markers.forEach((marker, index) => {
      if(marker.ACF.latitude){
        new google.maps.Marker({
          label: { text: String(index + 1), color: "#ffffff" },
          position: {
            lat: Number(marker.ACF.latitude),
            lng: Number(marker.ACF.longitude)
          },
          map: this.state.map,
        });
      }
    });
  };


  render() {
    return (
      <div className={`bg-blue-100 ${this.props.square ? 'rounded-0' : 'rounded-lg'}`} id="google-map" ></div>
    );
  }
}

export default Map;