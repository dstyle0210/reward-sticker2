import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from "path";

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve:{
		alias:{
			"~bootstrap":path.resolve(__dirname,"node_modules/bootstrap")
		}
	}
};

export default config;
