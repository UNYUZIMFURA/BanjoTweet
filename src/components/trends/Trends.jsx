import Trend from './Trend';

const Trends = () => {
  return (
    <div className="flex flex-col bg-secondary rounded-xl pb-2 ">
      <span className="font-bold px-5 pt-5 pb-4 text-xl">Trends for you</span>
      <div className="flex flex-col w-full">
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}

export default Trends