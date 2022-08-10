import React, { useCallback, useState } from 'react'
import Hero from '../../ui/molecules/Hero'
import Layout from '../../ui/organisms/layout'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import './index.scss'
import env from '@beam-australia/react-env'

const center = {
  lat: -37.8199223,
  lng: 145.1230131,
}

const ContactPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAW31p4EtmKBuGy1xX1h8kCNrOJx5DC5gU',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return (
    <>
      <Layout>
        <Hero
          img={require('../../resources/images/contactUs.png')}
          text={'Our Services'}
        />
       
        <div className="contact-container">
          <div className="contact">
            <h1>Get In Touch</h1>
            <p>043318xxxx</p>
            <p>Sky One, Box Hill VIC 3128</p>
            <p>9am to 5pm (Monday to Friday)</p>
            <p>
              Serving clients throughout VIC (phone and video appointments
              available)
            </p>
          </div>

          <div className="location">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <Marker position={center} />
                <></>
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default React.memo(ContactPage)
