type GreetingProps = {
	name: string;
};

const Greeting = ({name}: GreetingProps) => <p>Hello~~ {name}</p>;

export default Greeting;
