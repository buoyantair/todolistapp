import React, {Component} from 'react';
import '../App.css';
class QuotesApp extends Component{

  render(){
    let quotes = [
"You are a lot better than you probably think you are. —William Walter",
"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind. - Dr. Seuss",
"This too, shall pass. —Anonymous",
"Keep your eyes on the stars and your feet on the ground. -Theodore Roosevelt",
"The only person you should try to be better than is the person you were yesterday. -Anonymous",
"Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself. -Harvey Fierstein",
"Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods. –C.S. Lewis",
"A man who flies from his fear may find that he has only taken a shortcut to meet it. -Sador, Children of Húrin",
"Life's too mysterious to take too serious. —Mary Engelbreit",
"No one can make you feel inferior without your consent. —Eleanor Roosevelt",
"The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before. —Albert Einstein",
"You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage. -Terry Pratchett, Witches Abroad",
"There isn't a way things should be. There's just what happens, and what we do.—Terry Pratchett, A Hat Full of Sky",
"It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward. —Rocky Balboa, Rocky",
"More fuck yeah, less fuck that. —Anonymous",
"If you want to go fast, go alone. If you want to go far, go together. —African proverb",
"It's OK to not be OK, as long as you don't stay that way. —Anonymous",
"I can be changed by what happens to me but I refuse to be reduced by it. —Maya Angelou ",
"Believe you can and you're halfway there. —T. Roosevelt",
"May I never be complete. May I never be content. May I never be perfect. —Chuck Palahniuk",
"Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less. -Marie Curie",
"Those who don't believe in magic will never find it. —Roald Dahl",
"There is no elevator to success — you have to take the stairs. -Anonymous",
"Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers. —Jose Luis Borges",
"It does not do to dwell on dreams and forget to live. —Albus Dumbledore, Harry Potter and the Sorcerer's Stone",
"Don't sweat the petty things and don't pet the sweaty things. —George Carlin",
"Do what you feel in your heart to be right, for you'll be criticized anyway. —Eleanor Roosevelt.",
"Do not set yourself on fire in order to keep others warm. –Anonymous",
"The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant. —Doctor Who",
"It's supposed to be hard. If it were easy, everyone would do it.—Jimmy Dugan, A League of Their Own",
"Ask yourself if what you're doing today will get you closer to where you want to be tomorrow. —Anonymous",
"Life may not be the party we hoped for, but while we're here, we should dance. -Anonymous",
"Never cowardly or cruel. Never give up, never give in. –Doctor Who",
"Do not go where the path may lead, go instead where there is no path and leave a trail. —Ralph Waldo Emerson",
"In 20 years, you probably won't even remember this. –Anonymous"
]
  return(
      <div className="quotes-app">
        {quotes[Math.floor(Math.random() * quotes.length)]}
      </div>
    );
  }
}


export default QuotesApp;
