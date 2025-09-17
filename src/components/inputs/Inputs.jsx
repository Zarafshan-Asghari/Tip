import Option from '../option/Option';
import Input from '../input/Input';
import dollarSign from '../../assets/images/icon-dollar.svg';
import person from '../../assets/images/icon-person.svg';

export default function Inputs({
  bill,
  setBill,
  setTipPercentage,
  tipPercentageCustom,
  setTipPercentageCustom,
  people,
  setPeople,
  values,
}) {
  return (
    <div className="flex flex-col gap-6 md:w-1/2 w-full m-3">
      {/* Bill */}
      <Input
        label="Bill"
        icon={dollarSign}
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      {/* Tip options */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {values.map(item => (
          <Option key={item} value={`${item}%`} onClick={() => setTipPercentage(item)} />
        ))}
        {/* custom */}
        <Input
          placeholder="Custom"
          className="text-center"
          value={tipPercentageCustom}
          onChange={e => setTipPercentageCustom(Number(e.target.value))}
        />
      </div>

      {/* Number of people */}
      <Input
        className="w-full"
        label="Number of people"
        icon={person}
        value={people}
        onChange={e => setPeople(Number(e.target.value))}
      />
    </div>
  );
}
