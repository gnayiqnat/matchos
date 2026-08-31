'use client';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./Map'), {
	ssr: false,
	loading: () => <p>Loading Map...</p>, // Optional placeholder
});

export default MapComponent;
