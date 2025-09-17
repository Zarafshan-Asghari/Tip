import Card from '../card/Card';
import Button from '../button/Button';

export default function OutputCard({ tipPerPerson, totalPerPerson, reset }) {
  return (
    <Card className={'bg-secondary p-4 flex flex-col gap-2 justify-between md:w-1/2 w-full'}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-primary text-xs ">
            <p className="capitalize text-light-gray text-sm ">tip amount </p>
            /person
          </span>
          <p className="text-end text-primary text-2xl">${tipPerPerson.toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary text-xs ">
            <p className="capitalize text-light-gray text-sm ">total</p> /person
          </span>
          <p className="text-end text-primary text-2xl">${totalPerPerson.toFixed(2)}</p>
        </div>
      </div>
      <Button className={''} text={'reset'} onClick={reset} />
    </Card>
  );
}
