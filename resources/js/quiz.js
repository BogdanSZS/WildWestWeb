(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "În ce an a avut loc achiziția Louisianei de către Thomas Jefferson?",
      answers: {
        a: "1803",
        b: "1929",
        c: "1916",
        d: "1815"
      },
      correctAnswer: "a"
    },
    {
      question: "Cine i-a ghidat pe Lewis și pe Clark în expediția lor?",
      answers: {
        a: "Pocahontas",
        b: "Buffalo Bill",
        c: "Manifest Destiny",
        d: "Sacagawea"  
      },
      correctAnswer: "d"
    },
    {
      question: "Cum se numea gruparea infracțională condusă de către Butch Cassidy?",
      answers: {
        a: "Inglorious Basterds",
        b: "Wild Bunch",
        c: "Apache Helicopter",
        d: "Fort Sumner's Outlaws"
      },
      correctAnswer: "b"
    },
    {
      question: "La ce mină de aur a fost Buffalo Bill prospector?",
      answers: {
        a: "Buffalo Head",
        b: "Winchester County Mine",
        c: "Pikes Peak",
        d: "Rocky Peaks"  
      },
      correctAnswer: "c"
    },
    {
      question: "Cum se numeau persoanele ce puneau capcane prin păduri, cu scopul de a prinde jderi, castori și bursuci?",
      answers: {
        a: "Prospector",
        b: "Trapper",
        c: "Cioclu",
        d: "Proscris"  
      },
      correctAnswer: "b"
    },
    {
      question: "Cine a fost considerat unul dintre cei mai proeminenți luptători de gherilă?",
      answers: {
        a: "Billy The Kid",
        b: "Chuck Norris",
        c: "Bonnie ELizabeth Parker",
        d: "Goyaałé"  
      },
      correctAnswer: "d"
    },
    {
      question: "Câți dolari a costat un acru din Louisiana Territory în 1803?",
      answers: {
        a: "$0,04",
        b: "$4",
        c: "$247",
        d: "$0,15"  
      },
      correctAnswer: "a"
    }, 
    {
      question: "Cum se numește genul de film inspirat de sălbăticia frontierei americane?",
      answers: {
        a: "Thriller",
        b: "Western",
        c: "Drama",
        d: "Documentary"  
      },
      correctAnswer: "b"
    },
    {
      question: "Obiectul prin care se remarcă un șerif printre ceilalți locuitori al unui oraș veestic este:",
      answers: {
        a: "Bandana peste față",
        b: "Revolverul gravat",
        c: "Steaua din piept",
        d: "Pălăria"  
      },
      correctAnswer: "c"
    },
    {
      question: "Care era numele adevărat al lui Sundance Kid?",
      answers: {
        a: "Billy The Kid",
        b: "Harry Longabaugh",
        c: "Doc Holiday",
        d: "Robert Leroy Parker"  
      },
      correctAnswer: "b"
    }  
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();