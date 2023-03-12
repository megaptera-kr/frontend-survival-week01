export default function App({ name = 'world!' }: {
    name?: string;
}) {

    return (
        <p>Hello, {name} </p>
    );
}