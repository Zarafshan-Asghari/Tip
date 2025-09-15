import Card from '../card/Card';
import Button from '../button/Button';

export default function OutputCard() {
  return (
    <Card className={'bg-secondary p-4 flex flex-col gap-2 justify-between md:w-1/2 w-full'}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-primary text-xs ">
            <span className="capitalize text-light-gray text-sm inline-block">tip </span>/person
          </p>
          <input
            type="number"
            placeholder="0.00"
            className="text-end outline-none text-primary text-2xl"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary text-xs ">
            <p className="capitalize text-light-gray text-sm ">total</p> /person
          </span>
          <input
            type="number"
            placeholder="0.00"
            className="text-end outline-none text-primary text-2xl"
          />
        </div>
      </div>
      <Button
        className={'bg-primary hover:bg-light-slate focus:bg-dark-slate text-secondary'}
        value={'reset'}
      />
    </Card>
  );
}

// Tip = (Bill × Tip Percentage) / 100
// Total = Bill + Tip
// Tip per person = Tip ÷ Number of People
// Total per person = Total ÷ Number of People
