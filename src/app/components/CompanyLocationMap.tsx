'use client'

import MarkerIcon from '@/app/assets/icons/map-pointer.svg'
import { Icon, LatLngExpression } from 'leaflet'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

import { GestureHandling } from 'leaflet-gesture-handling'
import { useEffect } from 'react'

// eslint-disable-next-line unicorn/numeric-separators-style
const position: LatLngExpression = [37.99805, 23.77473] // Hypercliq Office

// Map.addInitHook('addHandler', 'gestureHandling', GestureHandling)

function GestureHandlingComponent() {
  const map = useMap()

  useEffect(() => {
    map.addHandler('gestureHandling', GestureHandling)
    // @ts-expect-error typescript does not see additional handler here
    map.gestureHandling.enable()
  }, [map])

  // eslint-disable-next-line unicorn/no-null
  return null
}

export default function CompanyLocationMap() {
  return (
    <MapContainer
      center={position}
      zoom={5}
      className="h-full w-full"
      scrollWheelZoom={false}
    >
      <GestureHandlingComponent />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="https://www.vecteezy.com/free-vector/gps">Gps Vectors by Vecteezy</a>'
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: MarkerIcon.src,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
          })
        }
      >
        <Popup>
          <div>
            <h2 className="font-semibold">Hypercliq Office</h2>
            <p className="italic">
              Prantouna 57
              <br />
              11525 Athens
              <br />
              Greece
            </p>
            <p>
              <strong>Operating Days:</strong> Monday - Friday
              <br />
              <strong>Operating Hours:</strong> 9am - 5pm
              <br />
              <br />
              <strong>Phone:</strong> +30 211 212 8520
            </p>
            <p>
              Nearest Metro Station: Katechaki (Blue Line - Airport to City)
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
