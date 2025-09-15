import Card from '../card/Card';
import Button from '../button/Button';
import Input from '../input/Input';
import OutputCard from '../outputCard/OutPutCard';
import dollarSign from '../../assets/images/icon-dollar.svg';
import person from '../../assets/images/icon-person.svg';

export default function TipCalCulator() {
    const values=[5,10,15,25,50]
  return (
<section className="m-0 bg-light-slate flex flex-col items-center justify-center min-h-screen font-mono-space">
        <h4 className='text-secondary tracking-widest uppercase mb-10'>split <br /> tter</h4>
      <Card className={'xl:gap-5 md:flex-row flex  flex-col bg-white xl:p-5 p-4 gap-8 md:w-3xl w-full '}>
        {/* buttons & inputs */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full m-3">
          {/* Bill */}
          <Input className={'w-full'} label="Bill" icon={dollarSign} />
          {/* table of tips  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2  ">

            {values.map((item) => (
        <Button key={item.id} value={item} />
      ))}
            <Input placeholder={'Custom '} className={'text-center'} />
          </div>
          {/* number of people  */}
          <Input className={'w-full'} label="Number of people" icon={person} />
        </div>

            {/* output card */}
            <OutputCard></OutputCard>
            
      </Card>

  
    </section>
  );
}
