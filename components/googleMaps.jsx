'use client';

import {
	AdvancedMarker,
	APIProvider,
	Map,
	Pin,
} from '@vis.gl/react-google-maps';
import GoogleMapReact from 'google-map-react';
import { MapPinIcon, PinIcon } from 'lucide-react';

export default function GoogleMaps() {
	return (
		<>
			<div className='w-100 h-100'>
				<GoogleMapReact
					defaultCenter={{ lat: 1.5628935899213756, lng: 103.65263798161024 }}
					defaultZoom={17}
				>
					<MapPin lat={1.562893} lng={103.652637} />
				</GoogleMapReact>
			</div>
		</>
	);
}

function MapPin({text}) {
  return (
			<div>
				<MapPinIcon fill='#FF0000' size={28} className='text-red-900' />
				{text}
			</div>
		);
}