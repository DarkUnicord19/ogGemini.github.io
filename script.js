const story = document.getElementById("story");
const choices = document.querySelectorAll("button");

let dateState = {
  mood: 0, // Squidward's mood (0 = neutral, 1 = happy, -1 = annoyed)
};

function updateStory(text) {
  story.textContent = text;
}

function updateChoices(choice1Text, choice2Text, choice3Text) {
  choices[0].textContent = choice1Text;
  choices[1].textContent = choice2Text;
  choices[2].textContent = choice3Text;
}

function handleChoice(choice) {
  switch (choice) {
    case 1:
      updateStory(text[currentStep].choices[0].text);
      dateState.mood += text[currentStep].choices[0].moodChange;
      break;
    case 2:
      updateStory(text[currentStep].choices[1].text);
      dateState.mood += text[currentStep].choices[1].moodChange;
      break;
    case 3:
      updateStory(text[currentStep].choices[2].text);
      dateState.mood += text[currentStep].choices[2].moodChange;
      break;
  }

  currentStep++;
  checkEnd();
}

choices.forEach((choice) => choice.addEventListener("click", () => handleChoice(choice.id.slice(-1))));

let currentStep = 0;
const text = [
  // Step 1: Introduction
  {
    text: "You've finally gathered the courage to ask Squidward on a date! Surprisingly, he said yes. Now you find yourselves awkwardly standing outside his clarinet lesson.",
    choices: [
      { text: "Compliment his clarinet skills!", moodChange: 1 },
      { text: "Ask him about his clarinet practice.", moodChange: 0 },
      { text: "Fidget nervously.", moodChange: -1 },
    ],
  },
  // Step 2: The Lesson
  {
    text: "Squidward seems pleased with the compliment. He invites you inside to watch his lesson. The tiny students are... enthusiastic, to say the least.",
    choices: [
      { text: "Laugh along with the children.", moodChange: -1 },
      { text: "Focus intently on Squidward's masterful playing.", moodChange: 1 },
      { text: "Excuse yourself to 'use the restroom'.", moodChange: -1 },
    ],
  },
  // Step 3: The Cafe
  {
    text: "After the lesson, you suggest grabbing a coffee. Squidward reluctantly agrees. The cafe is bustling, filled with Spongebob
