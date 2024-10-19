import './App.css';

import Navbar from './components/Navbar';
import Step from './components/Step';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

import logo from "./assets/logo.jpeg";
import Rectangle_3 from './assets/Rectangle_3.png';
import Rectangle_4 from './assets/Rectangle_4.png';
import Rectangle_5 from './assets/Rectangle_5.png';

function App() {
  const data = {
    hero: {
      appType: 'Onze & Onze Premium',
      tagLine: 'Desde 1985 ONZE & ONZE PREMIUM é a mais tradicional casa de carnes de Bauru, sendo reconhecida pela excelência de seu produtos, e principalmente pela qualidade, sabor e frescor de suas carnes.',
      description: 'O gado de corte criado por nós, desenvolve-se em pasto aberto a base de capim e sal mineral, garantindo a nossa carne, sabor superior a de animais criados em confinamento...',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
    step1: {
      title: 'Create an account',
      heading: 'Create/login to an existing account to get started',
      description: 'An account is created with your email and a desired password',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explore while shopping',
      heading: 'Shop for your favorites meal as e dey hot.',
      description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Checkout',
      heading: "When you're done, check out and get it delivered.",
      description: "When you're done, check out and get it delivered with ease.",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Download the app now.',
      description: 'Available on your favourite store. Start your premium experience now.',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  };

  return (
    <div className="box-border">
      <div className="flex flex-col">
        <Navbar logo={logo} />
        
        {/* <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        /> */}

        {/* Container para o carrossel */}
          <Carousel/>
          <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto my-10" /> 
        <div className="w-full mt-10">
          <Step {...data.step1} />
          <Step {...data.step2} />
          <Step {...data.step3} />
        </div>
{/*         
        <BottomLead 
          actionText={data.bottomLead.actionText}
          description={data.bottomLead.description}
          mainActionText={data.bottomLead.mainActionText}
          extraActionText={data.bottomLead.extraActionText}
        /> */}
        <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto my-10" />

        <Footer logo={logo} />
      </div>
    </div>
  );
}

export default App;
