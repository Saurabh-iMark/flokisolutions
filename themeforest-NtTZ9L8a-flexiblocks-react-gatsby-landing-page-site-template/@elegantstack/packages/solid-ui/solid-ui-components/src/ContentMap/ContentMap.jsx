import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const MapMarker = ({ lat, lng }) => (
  <FaMapMarkerAlt
    size='42'
    color='#222'
    lat={lat}
    lng={lng}
    style={{ transform: `(translate -50%,-100%)` }}
  />
)

const GoogleMap = (content, { lat, lng, zoom }) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: 'AIzaSyDtxO5huKLVQYoD-dXd1ztAjOvlaTLkqBs'
    }}
    defaultCenter={{
      lat: content.lat || lat,
      lng: content.lng || lng
    }}
    defaultZoom={content.zoom || zoom}
  >
    <MapMarker lat={content.lat || lat} lng={content.lng || lng} />
  </GoogleMapReact>
)

GoogleMap.defaultProps = {
  lat: 25.1199143,
  lng: 55.3778137,
  zoom: 15
}

export default GoogleMap
