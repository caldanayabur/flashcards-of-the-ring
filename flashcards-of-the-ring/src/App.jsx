import './App.css';

const App = () => {
  const cardPairs = [
    {
      question: 'What creature is Gollum?',
      answer: 'He is a Stoor Hobbit who was corrupted by the One Ring.',
    },
    {
      question: 'Who carries the One Ring to Mordor?',
      answer: 'Frodo Baggins.',
    },
    {
      question: 'What is the name of Aragorn’s sword?',
      answer: 'Andúril, Flame of the West.',
    },
    {
      question: 'What are the Elves’ three Rings called?',
      answer: 'Narya, Nenya, and Vilya.',
    },
    {
      question: 'What is Gandalf the Grey’s horse called in Rohan?',
      answer: 'Shadowfax.',
    },
    {
      question: 'Who is the Lord of the Nazgûl?',
      answer: 'The Witch-king of Angmar.',
    },
    {
      question: 'What does “Mellon” mean in Elvish?',
      answer: 'Friend.',
    },
    {
      question: 'Where is the One Ring destroyed?',
      answer: 'In the fires of Mount Doom.',
    },
    {
      question: 'What is the home of the Hobbits called?',
      answer: 'The Shire.',
    },
    {
      question: 'Who forges the Rings of Power with Celebrimbor?',
      answer: 'Sauron, disguised as Annatar.',
    },
  ];

  return (
    <main className="app-shell">
      <header className="header">
        <p className="eyebrow">Lord of the Rings study deck</p>
        <h1>Flashcards of the Ring</h1>
        <p className="intro">
          How much do you know about the Tolkien universe? Test yourself with this
          Lord of the Rings themed deck.
        </p>
        <p className="card-count">Number of Cards: {cardPairs.length}</p>
      </header>

      <section className="card-grid" aria-label="Card pairs">
        {cardPairs.map((card, index) => (
          <article className="flip-card" key={card.question}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="card-number">Card {index + 1}</span>
                <h2>{card.question}</h2>
              </div>
              <div className="flip-card-back">
                <span className="card-number">Answer</span>
                <p>{card.answer}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App