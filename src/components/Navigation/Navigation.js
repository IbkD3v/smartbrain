import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    
        if(isSignedIn) {
            return(
        <nav style = {{display:  'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
            );
      } else{
          return(
        <nav style = {{display:  'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
    </nav>
);
}
}

export default Navigation;
/*import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}, your current Entry Count is...`}
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;*/