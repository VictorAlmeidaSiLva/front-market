import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step from './components/Step';
import BottomLead from './components/BottomLead';
import Footer from './components/Footer';

import logo from "./assets/logo.jpeg";
import Rectangle_3 from './assets/Rectangle_3.png';
import Rectangle_4 from './assets/Rectangle_4.png';
import Rectangle_5 from './assets/Rectangle_5.png';


function App() {
  const data = {
    hero:{
      appType: 'Onze & Onze Premium',
      tagLine: 'Desde 1985 ONZE & ONZE PREMIUM é a mais tradicional casa de carnes de Bauru, sendo reconhecida pela excelência de seu produtos, e principalmente pela qualidade, sabor e frescor de suas carnes.',
      description: 'O gado de corte criado por nós, desenvolve-se em pasto aberto a base de capim e sal mineral, garantindo a nossa carne, sabor superior a de animais criados em confinamento. A ONZE & ONZE PREMIUM recentemente vem efetuando a criação de gado da raça ANGUS, uma gado usado para melhorar a genética dos rebanhos. Mas tem se destacado mesmo pelo sabor de sua carne. O gado de corte da raça ANGUS é de origem inglesa, e sua carne é considerada a melhor do país, principalmente pela sua característica de marmoreio, que prorporciona maior suculência, maciez e qualidade ao produto final. A ONZE & ONZE PREMIUM possui equipe treinada e especializada para atende-los de forma diferenciada, e garantir a qualidades dos cortes que você levará para a sua casa. Faça o seu churrasco com a gente, e conheça nosso alto padrão de qualidade e atendimento. Venha nos conhecer, estamos esperando por você! ',
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
      description: "When you're done, check out and get it  delivered with ease.",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: 'Download the app now.',
      description: 'Available on your favourite store. Start your premium experience now.',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)
    
    <div className="box-border">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        
        <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>
        
        <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">How the app works </div>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />
          
          <BottomLead 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />

          <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;
