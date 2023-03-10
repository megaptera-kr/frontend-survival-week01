import React from 'react';

type Props = {
	name: string;
};

function Greeting({name}: Props) {
	return (
		<div>Greeting {name}!</div>
	);
}

export default Greeting;
