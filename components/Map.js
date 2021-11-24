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
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      version: "weekly",
    });
    loader.load().then(() => {
      this.setState({
        map: new google.maps.Map(document.getElementById("google-map"), {
          center: defaultCenter,
          zoom: this.props.zoomLevel || 5,
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
          // icon: {
          //   url: "http://localhost/aray.new/wp-content/uploads/2021/11/placeholder-2.png",
          //   size: new google.maps.Size(32, 32),
          //   labelOrigin: new google.maps.Point(0,0),
          // },
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
      <div>
        <div className={`${this.props.className} rounded-lg bg-blue-100`} id="google-map" />
      </div>
    );
  }
}

export default Map;