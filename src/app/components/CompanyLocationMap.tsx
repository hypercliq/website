'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon, LatLngExpression } from 'leaflet'
import Link from 'next/link'

// eslint-disable-next-line unicorn/numeric-separators-style
const position: LatLngExpression = [37.99805, 23.77473] // Hypercliq Office

export default function CompanyLocationMap() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="https://www.vecteezy.com/free-vector/gps">Gps Vectors by Vecteezy</a>'
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: '/map-pointer.svg',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
          })
        }
      >
        <Popup>
          Hypercliq Office
          <br />
          Prantouna 57
          <br />
          11525 Athens
          <br />
          Greece
          <br />
          Operating Hours: 9am - 5pm
          <br />
          Phone: +30 211 212 8520
          <br />
          <Link href="https://www.hypercliq.com">Visit our website</Link>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
