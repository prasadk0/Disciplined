import './MotivationCard.css';
import { useState, useEffect } from 'react';
const quotes =[
    {
      "q": "The greatest work that kindness does to others is that it makes them kind themselves.",
      "a": "Amelia Earhart",
      "c": "85",
      "h": "\u003Cblockquote\u003E&ldquo;The greatest work that kindness does to others is that it makes them kind themselves.&rdquo; &mdash; \u003Cfooter\u003EAmelia Earhart\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Receive without pride, let go without attachment.",
      "a": "Marcus Aurelius",
      "c": "49",
      "h": "\u003Cblockquote\u003E&ldquo;Receive without pride, let go without attachment.&rdquo; &mdash; \u003Cfooter\u003EMarcus Aurelius\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Always forgive your enemies - nothing annoys them so much. ",
      "a": "Oscar Wilde",
      "c": "59",
      "h": "\u003Cblockquote\u003E&ldquo;Always forgive your enemies - nothing annoys them so much. &rdquo; &mdash; \u003Cfooter\u003EOscar Wilde\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You don't need a weatherman to know which way the wind blows.",
      "a": "Bob Dylan",
      "c": "61",
      "h": "\u003Cblockquote\u003E&ldquo;You don't need a weatherman to know which way the wind blows.&rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Only those who will risk going too far can possibly find out how far one can go.",
      "a": "T.S. Eliot",
      "c": "80",
      "h": "\u003Cblockquote\u003E&ldquo;Only those who will risk going too far can possibly find out how far one can go.&rdquo; &mdash; \u003Cfooter\u003ET.S. Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Thinking will not overcome fear but action will. ",
      "a": "W. Clement Stone",
      "c": "49",
      "h": "\u003Cblockquote\u003E&ldquo;Thinking will not overcome fear but action will. &rdquo; &mdash; \u003Cfooter\u003EW. Clement Stone\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It is better to change an opinion than to persist in a wrong one.",
      "a": "Socrates",
      "c": "65",
      "h": "\u003Cblockquote\u003E&ldquo;It is better to change an opinion than to persist in a wrong one.&rdquo; &mdash; \u003Cfooter\u003ESocrates\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "I am thankful to all those who said no. It's because of them, I did it myself.  ",
      "a": "Wayne Dyer",
      "c": "80",
      "h": "\u003Cblockquote\u003E&ldquo;I am thankful to all those who said no. It's because of them, I did it myself.  &rdquo; &mdash; \u003Cfooter\u003EWayne Dyer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The significance of life is living.",
      "a": "Jiddu Krishnamurti",
      "c": "35",
      "h": "\u003Cblockquote\u003E&ldquo;The significance of life is living.&rdquo; &mdash; \u003Cfooter\u003EJiddu Krishnamurti\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Everything is possible. The impossible just takes longer.",
      "a": "Dan Brown",
      "c": "57",
      "h": "\u003Cblockquote\u003E&ldquo;Everything is possible. The impossible just takes longer.&rdquo; &mdash; \u003Cfooter\u003EDan Brown\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
      "a": "Confucius",
      "c": "96",
      "h": "\u003Cblockquote\u003E&ldquo;The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.&rdquo; &mdash; \u003Cfooter\u003EConfucius\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "A leader is one who knows the way, goes the way, and shows the way.",
      "a": "Unknown",
      "c": "67",
      "h": "\u003Cblockquote\u003E&ldquo;A leader is one who knows the way, goes the way, and shows the way.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Animals don't hate, and we're supposed to be better than them.",
      "a": "Elvis Presley",
      "c": "62",
      "h": "\u003Cblockquote\u003E&ldquo;Animals don't hate, and we're supposed to be better than them.&rdquo; &mdash; \u003Cfooter\u003EElvis Presley\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When one door closes another door opens. ",
      "a": "Alexander Graham Bell",
      "c": "41",
      "h": "\u003Cblockquote\u003E&ldquo;When one door closes another door opens. &rdquo; &mdash; \u003Cfooter\u003EAlexander Graham Bell\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "We cannot change anything unless we accept it.",
      "a": "Carl Jung",
      "c": "46",
      "h": "\u003Cblockquote\u003E&ldquo;We cannot change anything unless we accept it.&rdquo; &mdash; \u003Cfooter\u003ECarl Jung\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Nothing that results in human progress is achieved with unanimous consent.",
      "a": "Christopher Columbus",
      "c": "74",
      "h": "\u003Cblockquote\u003E&ldquo;Nothing that results in human progress is achieved with unanimous consent.&rdquo; &mdash; \u003Cfooter\u003EChristopher Columbus\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Stop being tormented by everyone else's reaction to you.",
      "a": "Joyce Meyer",
      "c": "56",
      "h": "\u003Cblockquote\u003E&ldquo;Stop being tormented by everyone else's reaction to you.&rdquo; &mdash; \u003Cfooter\u003EJoyce Meyer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Tomorrow is only found in the calendar of fools.",
      "a": "Og Mandino",
      "c": "48",
      "h": "\u003Cblockquote\u003E&ldquo;Tomorrow is only found in the calendar of fools.&rdquo; &mdash; \u003Cfooter\u003EOg Mandino\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "You can't have anything worthwhile without difficulties.",
      "a": "Harry S. Truman",
      "c": "56",
      "h": "\u003Cblockquote\u003E&ldquo;You can't have anything worthwhile without difficulties.&rdquo; &mdash; \u003Cfooter\u003EHarry S. Truman\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "One must be poor to know the luxury of giving.",
      "a": "George Eliot",
      "c": "46",
      "h": "\u003Cblockquote\u003E&ldquo;One must be poor to know the luxury of giving.&rdquo; &mdash; \u003Cfooter\u003EGeorge Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Look to the beauty of this day, miracles are all around you.",
      "a": "Mary Engelbreit",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;Look to the beauty of this day, miracles are all around you.&rdquo; &mdash; \u003Cfooter\u003EMary Engelbreit\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Too many of us are not living our dreams because we are living our fears.",
      "a": "Les Brown",
      "c": "73",
      "h": "\u003Cblockquote\u003E&ldquo;Too many of us are not living our dreams because we are living our fears.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Sometimes letting things go is an act of far greater power than defending or hanging on.",
      "a": "Eckhart Tolle",
      "c": "88",
      "h": "\u003Cblockquote\u003E&ldquo;Sometimes letting things go is an act of far greater power than defending or hanging on.&rdquo; &mdash; \u003Cfooter\u003EEckhart Tolle\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Fear can hold you prisoner. Hope can set you free.",
      "a": "Stephen King",
      "c": "50",
      "h": "\u003Cblockquote\u003E&ldquo;Fear can hold you prisoner. Hope can set you free.&rdquo; &mdash; \u003Cfooter\u003EStephen King\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.",
      "a": "Winston Churchill",
      "c": "101",
      "h": "\u003Cblockquote\u003E&ldquo;Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.&rdquo; &mdash; \u003Cfooter\u003EWinston Churchill\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Friends ask you questions; enemies question you.",
      "a": "Criss Jami",
      "c": "48",
      "h": "\u003Cblockquote\u003E&ldquo;Friends ask you questions; enemies question you.&rdquo; &mdash; \u003Cfooter\u003ECriss Jami\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.",
      "a": "Steve Maraboli",
      "c": "166",
      "h": "\u003Cblockquote\u003E&ldquo;Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The less you talk about your shame, the more of it you have.",
      "a": "Mark Manson",
      "c": "60",
      "h": "\u003Cblockquote\u003E&ldquo;The less you talk about your shame, the more of it you have.&rdquo; &mdash; \u003Cfooter\u003EMark Manson\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Men trust their ears less than their eyes.",
      "a": "Herodotus",
      "c": "42",
      "h": "\u003Cblockquote\u003E&ldquo;Men trust their ears less than their eyes.&rdquo; &mdash; \u003Cfooter\u003EHerodotus\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The smallest act of kindness is worth more than the greatest intention.  ",
      "a": "Kahlil Gibran",
      "c": "73",
      "h": "\u003Cblockquote\u003E&ldquo;The smallest act of kindness is worth more than the greatest intention.  &rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Understanding that rests in what it does not understand is the finest.",
      "a": "Zhuangzi",
      "c": "70",
      "h": "\u003Cblockquote\u003E&ldquo;Understanding that rests in what it does not understand is the finest.&rdquo; &mdash; \u003Cfooter\u003EZhuangzi\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The wise speak only of what they know.",
      "a": "J.R.R. Tolkien",
      "c": "38",
      "h": "\u003Cblockquote\u003E&ldquo;The wise speak only of what they know.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it.",
      "a": "Carl Jung",
      "c": "113",
      "h": "\u003Cblockquote\u003E&ldquo;The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it.&rdquo; &mdash; \u003Cfooter\u003ECarl Jung\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "We are all born ignorant, but one must work hard to remain stupid.",
      "a": "Benjamin Franklin",
      "c": "66",
      "h": "\u003Cblockquote\u003E&ldquo;We are all born ignorant, but one must work hard to remain stupid.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Truth will always be truth, regardless of lack of understanding, disbelief or ignorance. ",
      "a": "W. Clement Stone",
      "c": "89",
      "h": "\u003Cblockquote\u003E&ldquo;Truth will always be truth, regardless of lack of understanding, disbelief or ignorance. &rdquo; &mdash; \u003Cfooter\u003EW. Clement Stone\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "To be fully alive is to feel that everything is possible.",
      "a": "Eric Hoffer",
      "c": "57",
      "h": "\u003Cblockquote\u003E&ldquo;To be fully alive is to feel that everything is possible.&rdquo; &mdash; \u003Cfooter\u003EEric Hoffer\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "When we think about our strengths, we are strong. When we think about our weaknesses, we are weak.",
      "a": "Peter A. Cohen",
      "c": "98",
      "h": "\u003Cblockquote\u003E&ldquo;When we think about our strengths, we are strong. When we think about our weaknesses, we are weak.&rdquo; &mdash; \u003Cfooter\u003EPeter A. Cohen\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Everything will be ok in the end. If it's not ok, it's not the end.",
      "a": "John Lennon",
      "c": "67",
      "h": "\u003Cblockquote\u003E&ldquo;Everything will be ok in the end. If it's not ok, it's not the end.&rdquo; &mdash; \u003Cfooter\u003EJohn Lennon\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.",
      "a": "Sigmund Freud",
      "c": "130",
      "h": "\u003Cblockquote\u003E&ldquo;Most people do not really want freedom, because freedom involves responsibility, and most people are frightened of responsibility.&rdquo; &mdash; \u003Cfooter\u003ESigmund Freud\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Comedy = tragedy + time.",
      "a": "Carol Burnett",
      "c": "24",
      "h": "\u003Cblockquote\u003E&ldquo;Comedy = tragedy + time.&rdquo; &mdash; \u003Cfooter\u003ECarol Burnett\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
      "a": "Epictetus",
      "c": "106",
      "h": "\u003Cblockquote\u003E&ldquo;He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.&rdquo; &mdash; \u003Cfooter\u003EEpictetus\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "It's always to soon to quit!",
      "a": "Norman Vincent Peale",
      "c": "28",
      "h": "\u003Cblockquote\u003E&ldquo;It's always to soon to quit!&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.",
      "a": "Thich Nhat Hanh",
      "c": "154",
      "h": "\u003Cblockquote\u003E&ldquo;Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "What a book a devil's chaplain might write on the clumsy, wasteful, blundering, low, and horribly cruel work of nature!",
      "a": "Charles Darwin",
      "c": "119",
      "h": "\u003Cblockquote\u003E&ldquo;What a book a devil's chaplain might write on the clumsy, wasteful, blundering, low, and horribly cruel work of nature!&rdquo; &mdash; \u003Cfooter\u003ECharles Darwin\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Whatever you are, be a good one.",
      "a": "Abraham Lincoln",
      "c": "32",
      "h": "\u003Cblockquote\u003E&ldquo;Whatever you are, be a good one.&rdquo; &mdash; \u003Cfooter\u003EAbraham Lincoln\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "What a liberation to realize that 'the voice in my head' is not who I am. Who am I then? The one who sees that.",
      "a": "Eckhart Tolle",
      "c": "111",
      "h": "\u003Cblockquote\u003E&ldquo;What a liberation to realize that 'the voice in my head' is not who I am. Who am I then? The one who sees that.&rdquo; &mdash; \u003Cfooter\u003EEckhart Tolle\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Nothing makes a man broad-minded like adversity.",
      "a": "Will Rogers",
      "c": "48",
      "h": "\u003Cblockquote\u003E&ldquo;Nothing makes a man broad-minded like adversity.&rdquo; &mdash; \u003Cfooter\u003EWill Rogers\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "No man will make a great leader who wants to do it all himself or to get all the credit for doing it.",
      "a": "Andrew Carnegie",
      "c": "101",
      "h": "\u003Cblockquote\u003E&ldquo;No man will make a great leader who wants to do it all himself or to get all the credit for doing it.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "Inspire yourself to be great. Being good isn't good enough.",
      "a": "Gurbaksh Chahal",
      "c": "59",
      "h": "\u003Cblockquote\u003E&ldquo;Inspire yourself to be great. Being good isn't good enough.&rdquo; &mdash; \u003Cfooter\u003EGurbaksh Chahal\u003C/footer\u003E\u003C/blockquote\u003E"
    },
    {
      "q": "There are dark shadows on the earth, but its lights are stronger in the contrast.",
      "a": "Charles Dickens",
      "c": "81",
      "h": "\u003Cblockquote\u003E&ldquo;There are dark shadows on the earth, but its lights are stronger in the contrast.&rdquo; &mdash; \u003Cfooter\u003ECharles Dickens\u003C/footer\u003E\u003C/blockquote\u003E"
    }
  ]
export default function MotivationQuotes() {
  return (
   <>
   <h1 className='text-2xl  text-right py-5'>Motivation Quotes</h1>
    <div className='flex flex-row gap-4 flex-wrap items-center justify-between'>
      {quotes.map((ele, index) => (
    <blockquote key={index} className="q-card q-card-color-2 sm:w-52 w-full">
    <div className="content">{ele.q}</div>
    <div className="author">{ele.a}</div>
  </blockquote>
      ))}
    </div>
   </>
  );
}
