
require('@/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';

import Search from '@/components/search.jsx'; 
import Header from '@/components/header.jsx'; 
import Otherapp from '@/components/otherapp.jsx'; 
import Spike from '@/components/spike.jsx'; 
import More from '@/components/more.jsx'; 
import Like from '@/components/like.jsx'; 

ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<Otherapp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
		<More source="http://localhost:3000/data/more" />
		<Like source="http://localhost:3000/data/like" />
	</div>, 
	document.querySelector("#myApp")
);
