import Card from '../card/Card';
import OutputCard from '../outputCard/OutPutCard';
import Inputs from '../inputs/Inputs';
import { useState } from 'react';

export default function TipCalCulator() {
  const values = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipPercentageCustom, setTipPercentageCustom] = useState('');
  const [people, setPeople] = useState('');

  
  function ResetForm(){
  setBill(''),
  setTipPercentage(''),
  setTipPercentageCustom(''),
  setPeople('')
  }

  // Tip = (Bill × Tip Percentage) / 100
  const tip = (bill * (tipPercentage ? (tipPercentage/100) : (tipPercentageCustom/100))) ;

  // Total = Bill + Tip
  const total = bill + tip;

  // Tip per person = Tip / number of People
  const tipPerPerson = people > 0 ? tip / people : 0;


  // Total per person = Total / number of People
  const totalPerPerson = people > 0 ? total / people : 0;
  return (
    <form className="m-0 bg-light-slate flex flex-col items-center justify-center min-h-screen font-mono-space">
      <h4 className="text-secondary tracking-widest uppercase mb-10">
        split <br /> tter
      </h4>
      <Card
        className={'xl:gap-5 xl:p-5 md:w-3xl md:flex-row flex  flex-col bg-white  p-4 gap-8  w-full '}
      >
        <Inputs
          bill={bill}
          setBill={setBill}
          tipPercentageCustom={tipPercentageCustom}
          setTipPercentage={setTipPercentage}
          setTipPercentageCustom={setTipPercentageCustom}
          people={people}
          setPeople={setPeople}
          values={values}
        />
        <OutputCard tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson} reset={ResetForm}/>
      </Card>
    </form>
  );
}
