import React from 'react';

const Searchbar=({searchfield, SearchChange})=>{
	return(

			<input 
				 type='search'
				 placeholder='robo' 
				 className='pa3 ba b--green bg-lightest-blue' 
				 onChange= {SearchChange}
			 />

		);
}

export default Searchbar;