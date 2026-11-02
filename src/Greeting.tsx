import type { FC } from 'react';

// Props define the values a parent component must provide to Greeting.
interface GreetingProps {
  name: string;
}

// Show a short personalized message.
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <p className="greeting">Hello, {name}!</p>;
};

export default Greeting;
