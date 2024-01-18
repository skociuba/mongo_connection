import {items} from './dataslider';
import Slider from './Slider';

const MiddleComponent: React.FC = () => (
  <section
    id="middleComponent"
    className={`relative mb-5 h-[100vh] flex-col bg-black bg-opacity-80 pt-[10vh]`}>
    <Slider items={items} />
  </section>
);

export default MiddleComponent;
