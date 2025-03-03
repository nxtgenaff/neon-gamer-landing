import { useState, useEffect } from 'react';
import { Trophy, Gamepad, Diamond, ArrowRight, Star, Shield } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import RewardCard from '../components/RewardCard';
import TestimonialCard from '../components/TestimonialCard';
import GamingForm from '../components/GamingForm';
import MistplayGameCard from '../components/MistplayGameCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

const Index = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [recentWinner, setRecentWinner] = useState({
    name: '',
    prize: ''
  });
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    const bannerTimer = setTimeout(() => {
      setShowBanner(true);
    }, 3000);
    const winners = [{
      name: 'Alex89',
      prize: '5000 Units'
    }, {
      name: 'GamerQueen',
      prize: '$15 Amazon Gift Card'
    }, {
      name: 'FrostySniper',
      prize: '$25 PayPal Credit'
    }, {
      name: 'EliteGamer22',
      prize: '10000 Units'
    }];
    const winnerInterval = setInterval(() => {
      if (Date.now() - pageLoadTime > 5000) {
        const randomWinner = winners[Math.floor(Math.random() * winners.length)];
        setRecentWinner(randomWinner);
        setShowWinner(true);
        setTimeout(() => {
          setShowWinner(false);
        }, 4000);
      }
    }, 15000);
    const pageLoadTime = Date.now();
    return () => {
      clearTimeout(bannerTimer);
      clearInterval(winnerInterval);
    };
  }, []);

  const rewards = [{
    title: "Gift Cards",
    description: "Convert your Mistplay Units to gift cards from Amazon, Google Play, and more.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80",
    glowColor: "blue" as const
  }, {
    title: "PayPal Cash",
    description: "Turn your gaming sessions into real money sent directly to your PayPal account.",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=800&q=80",
    glowColor: "purple" as const
  }, {
    title: "Premium Units",
    description: "Earn bonus Units with special offers and promotions for faster rewards.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    glowColor: "pink" as const
  }];

  const testimonials = [{
    name: "Michael R.",
    game: "Coin Master Player",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "I've earned over $50 in Amazon gift cards just playing games I actually enjoy!",
    stars: 5
  }, {
    name: "Sarah K.",
    game: "Bingo Blitz Player",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Mistplay is legit! Got my first PayPal cash out within two weeks of playing.",
    stars: 5
  }, {
    name: "Jason T.",
    game: "Rise of Kingdoms Player",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    quote: "I play games anyway, so getting rewarded for it is an awesome bonus!",
    stars: 4
  }];

  const mistplayGames = [{
    title: "Coin Master",
    genre: "Casual",
    points: 4500,
    image: "/lovable-uploads/7db38f96-9357-40e1-8f04-2432bfa1ddc6.png",
    popularity: "Hot" as const,
    link: "https://areyourealhuman.com/cl/i/6d4ow7"
  }, {
    title: "Rise of Kingdoms",
    genre: "Strategy",
    points: 5200,
    image: "/lovable-uploads/e4dffdcd-eb70-400b-bcd4-90d266036b06.png",
    popularity: "Trending" as const,
    link: "https://areyourealhuman.com/cl/i/6d4ow7"
  }, {
    title: "Bingo Blitz",
    genre: "Casino",
    points: 3800,
    image: "/lovable-uploads/8e0765fb-cde1-40da-b755-5ed145f143cf.png",
    popularity: "Popular" as const,
    link: "https://areyourealhuman.com/cl/i/6d4ow7"
  }, {
    title: "Evony",
    genre: "Strategy",
    points: 6000,
    image: "/lovable-uploads/b07ac3a2-04de-4724-888d-561f3f91143a.png",
    popularity: "Hot" as const,
    link: "https://areyourealhuman.com/cl/i/6d4ow7"
  }];

  return <div className="min-h-screen bg-gaming-dark overflow-hidden">
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 md:py-20 bg-hero-pattern">
        <div className="absolute inset-0 bg-gaming-dark/30 backdrop-blur-[2px]"></div>
        
        <div className="container max-w-6xl mx-auto z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left" data-aos="fade-right">
              <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gaming-blue/10 border border-gaming-blue/20">
                <p className="text-gaming-blue text-sm font-medium flex items-center">
                  <Trophy size={14} className="mr-1" /> Mistplay: Play & Earn
                </p>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white tracking-tight">
                Get <span className="neon-text">Paid to Play</span> Your Favorite Mobile Games!
              </h1>
              
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl">
                Turn your gaming time into real rewards! Earn Units as you play and redeem them for gift cards, PayPal cash, and more.
              </p>
              
              <div className="mb-6">
                <CountdownTimer hours={23} minutes={59} seconds={59} />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://areyourealhuman.com/cl/i/6d4ow7" className="cta-btn touch-target">
                  START EARNING NOW <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="#games" className="gaming-btn-outline touch-target">
                  VIEW GAMES
                </a>
              </div>
            </div>
            
            <div className="relative mt-8 md:mt-0 hidden md:block" data-aos="fade-left">
              <div className="glass-panel p-4 sm:p-6 md:p-8 relative border border-white/5 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-neon-border animate-gradient-flow"></div>
                <div className="flex items-center mb-6">
                  <Gamepad size={28} className="text-gaming-blue mr-3" />
                  <h3 className="font-display text-xl font-bold">Mistplay Rewards</h3>
                </div>
                
                <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/9d8e7357-5583-43f6-9e69-102cf9265fef.png" alt="Mistplay Rewards" className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:scale-105" />
                </div>
                
                <div className="flex items-center justify-between bg-gaming-darker p-3 rounded-lg">
                  <div className="flex items-center">
                    <Diamond size={18} className="text-gaming-accent mr-2" />
                    <span className="text-sm font-medium">Average Monthly Earnings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-bold text-gaming-accent">$15-25</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-white/50 mb-2">New users joining today</p>
                  <div className="w-full bg-gaming-darker rounded-full h-2">
                    <div className="bg-gaming-blue h-2 rounded-full w-[78%]"></div>
                  </div>
                  <p className="text-xs text-white/70 mt-2">Registration bonus available! <span className="text-gaming-pink">+500 Units</span></p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gaming-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gaming-purple/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          
          
        </div>
      </section>
      
      <section id="games" className="py-20 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gaming-blue/10 border border-gaming-blue/20">
              <p className="text-gaming-blue text-sm font-medium flex items-center justify-center">
                <Gamepad size={14} className="mr-1" /> Featured Mistplay Games
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Play These <span className="neon-text">Top Games</span> to Earn More
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The more you play, the more you earn. Check out these high-earning games on Mistplay
            </p>
          </div>
          
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {mistplayGames.map((game, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <MistplayGameCard 
                    title={game.title} 
                    genre={game.genre} 
                    points={game.points} 
                    image={game.image} 
                    popularity={game.popularity} 
                    link={game.link} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-gaming-darker border-gaming-blue/30 hover:bg-gaming-darker/80" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-gaming-darker border-gaming-blue/30 hover:bg-gaming-darker/80" />
            </div>
          </Carousel>
          
          <div className="mt-16 text-center">
            <p className="text-white/70 mb-6">
              Download Mistplay to see hundreds more games and start earning today!
            </p>
            <a href="https://areyourealhuman.com/cl/i/6d4ow7" className="cta-btn">
              GET STARTED NOW <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gaming-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gaming-purple/5 rounded-full blur-3xl"></div>
      </section>
      
      <section id="rewards" className="py-20 relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gaming-blue/10 border border-gaming-blue/20">
              <p className="text-gaming-blue text-sm font-medium flex items-center justify-center">
                <Star size={14} className="mr-1" /> Mistplay Rewards
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Redeem Your <span className="neon-text">Units</span> for Real Rewards
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Convert the Units you earn through gameplay into valuable rewards you'll actually use
            </p>
          </div>
          
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {rewards.map((reward, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <RewardCard 
                    title={reward.title} 
                    description={reward.description} 
                    image={reward.image} 
                    glowColor={reward.glowColor} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-gaming-darker border-gaming-blue/30 hover:bg-gaming-darker/80" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-gaming-darker border-gaming-blue/30 hover:bg-gaming-darker/80" />
            </div>
          </Carousel>
          
          <div className="mt-16 text-center">
            <p className="text-white/70 mb-6">
              The more you play, the more you earn. Join millions of gamers earning rewards!
            </p>
            <a href="https://areyourealhuman.com/cl/i/6d4ow7" className="cta-btn">
              START EARNING NOW <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gaming-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-gaming-purple/5 rounded-full blur-3xl"></div>
      </section>
      
      <section className="py-20 bg-gaming-darker relative clip-path-slant">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="neon-text">Gamers</span> Worldwide
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join millions of satisfied Mistplay users already earning rewards
            </p>
          </div>
          
          <Carousel 
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard 
                    name={testimonial.name} 
                    game={testimonial.game} 
                    avatar={testimonial.avatar} 
                    quote={testimonial.quote} 
                    stars={testimonial.stars} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-gaming-darker border-gaming-blue/30 hover:bg-gaming-darker/80" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-gaming-darker border-gaming-blue/30 hover:bg-gaming-darker/80" />
            </div>
          </Carousel>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <div className="glass-panel px-5 py-3 flex items-center">
              <div className="mr-3 text-2xl font-display font-bold text-gaming-blue">15M+</div>
              <div className="text-sm text-white/70">Active Users</div>
            </div>
            <div className="glass-panel px-5 py-3 flex items-center">
              <div className="mr-3 text-2xl font-display font-bold text-gaming-purple">4.4</div>
              <div className="text-sm text-white/70">App Store Rating</div>
            </div>
            <div className="glass-panel px-5 py-3 flex items-center">
              <div className="mr-3 text-2xl font-display font-bold text-gaming-pink">$15M+</div>
              <div className="text-sm text-white/70">Rewards Given</div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="claim-form" className="py-16 md:py-20 relative clip-path-slant-reverse">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Start <span className="neon-text">Earning Rewards</span> Today
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
              Sign up now and get 500 bonus Units when you download the Mistplay app and play your first game
            </p>
            
            <div className="mt-4 md:mt-6 mb-6 md:mb-10">
              <CountdownTimer hours={23} minutes={59} seconds={59} />
            </div>
          </div>
          
          <GamingForm />
          
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="glass-panel p-3 md:p-4 flex items-center justify-center border border-white/5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/2560px-Former_Visa_%28company%29_logo.svg.png" alt="Visa" className="h-5 md:h-6 opacity-70" loading="lazy" />
            </div>
            <div className="glass-panel p-3 md:p-4 flex items-center justify-center border border-white/5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 md:h-6 opacity-70" loading="lazy" />
            </div>
            <div className="glass-panel p-3 md:p-4 flex items-center justify-center border border-white/5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="h-5 md:h-6 opacity-70" loading="lazy" />
            </div>
            <div className="glass-panel p-3 md:p-4 flex items-center justify-center border border-white/5">
              <div className="text-xs text-white/50 flex items-center">
                <Shield size={14} className="mr-1" />
                Secure & Encrypted
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 -right-40 w-80 h-80 bg-gaming-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-gaming-blue/5 rounded-full blur-3xl"></div>
      </section>
      
      <footer className="py-8 md:py-10 border-t border-white/5">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-display text-xl font-bold text-white">
                Mist<span className="text-gaming-blue">play</span>
              </h3>
              <p className="text-sm text-white/50 mt-1">
                Play games. Earn rewards.
              </p>
            </div>
            
            <div className="text-sm text-white/50">
              © {new Date().getFullYear()} Mistplay. All rights reserved.
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 text-xs text-white/40 text-center">
            <p>Actual rewards may vary. Earning rates depend on gameplay and availability in your region.</p>
          </div>
        </div>
      </footer>
      
      {showWinner && <div className="fixed bottom-5 left-5 glass-panel p-4 animate-fade-in z-50 max-w-xs border border-gaming-blue/20 shadow-neon-blue">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gaming-blue/20 rounded-full flex items-center justify-center mr-3">
              <Trophy size={20} className="text-gaming-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{recentWinner.name} just redeemed:</p>
              <p className="text-xs text-gaming-blue">{recentWinner.prize}</p>
            </div>
          </div>
        </div>}
      
      {showBanner && <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-gaming-blue to-gaming-purple py-2 px-4 z-50 flex items-center justify-center">
          <p className="text-sm text-black font-medium">
            🔥 New User Bonus! Register today for 500 extra Units!
          </p>
          <button onClick={() => setShowBanner(false)} className="ml-4 text-black/70 hover:text-black">
            ✕
          </button>
        </div>}
      
      <div className="sticky-cta">
        <a href="https://areyourealhuman.com/cl/i/6d4ow7" className="cta-btn w-full text-sm">
          START EARNING NOW <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>;
};
export default Index;
