interface GreetingProps {
  name: string
}
export const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>
}
