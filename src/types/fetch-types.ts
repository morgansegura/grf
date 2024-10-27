import dotenv from 'dotenv';
import fs from 'fs';
import http from 'http'; // Or use `http` if not using SSL

dotenv.config();

const TYPES_URL = `${process.env.VITE_BACKEND_SITE_URL}/api/types`;
const LOCAL_PATH = './src/types/payload-types.ts';

http
	.get(TYPES_URL, (res) => {
		let data = '';

		res.on('data', (chunk) => {
			data += chunk;
		});

		res.on('end', () => {
			fs.writeFileSync(LOCAL_PATH, data);
			console.log('Types file saved successfully!');
		});
	})
	.on('error', (err) => {
		console.error('Error fetching types:', err.message);
	});
