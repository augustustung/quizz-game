import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import QuestionCard from './components/QuestionCard';
import { fetchQuestion, Difficulty, QuestionState } from './API'
import { styles } from './App.style'
 
const TOTAL_QUES = 10
export interface AnswerObject {
  question: string
  answer: string
  correct_answer: string
  correct: boolean
}


export default function App() {
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(true)

  const startTrivial = async () => {
    setLoading(true)
    setIsGameOver(false)

    const newQues = await fetchQuestion(TOTAL_QUES, Difficulty.MEDIUM)

    setQuestion(newQues)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)


  }


  const checkAnswer = (e:number) => {
    if(!isGameOver) {
      const answer = question[number].answer[e]
      const correct_answer = question[number].correct_answer
      const correct = answer == correct_answer
      if(correct) 
        setScore(prev => prev + 1)
        
        //save user answer in array
        const answerObj:AnswerObject = {
          question: question[number].question,
          answer,
          correct_answer,
          correct,
        }

        setUserAnswer(prev => [...prev, answerObj])
      
    }
    
  }


  const nextQues = () => {
    const nexQues = number + 1
    if(nexQues == TOTAL_QUES)
      setIsGameOver(true)
    else
      setNumber(nexQues)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUIZ GAME</Text>
      <View style={styles.board}>
      {isGameOver || userAnswer.length == TOTAL_QUES ? (
        <TouchableOpacity onPress={startTrivial} style={styles.button}>
          <Text style={styles.buttonText}>START GAME</Text>
        </TouchableOpacity>
      ) : null}
      {!isGameOver ? <Text style={styles.score}>SCORE: {score}</Text> : null}
      
      {loading && <View style={styles.loading}><Text>Loading questions....</Text></View> }
      
      {(!loading && !isGameOver) ? <QuestionCard
        questionNr={number}
        totalQues={TOTAL_QUES}
        question={question[number].question}
        answers={question[number].answer}
        userAnswer={userAnswer? userAnswer[number] : undefined}
        callback={checkAnswer}
      /> : null}
      </View>
      {
        !isGameOver && 
        !loading && 
        userAnswer.length == number + 1 && 
        number != TOTAL_QUES - 1  ? 
        (
          <TouchableOpacity style={styles.nextButton} onPress={nextQues}>
            <Text style={styles.nextTitle}>Next Question</Text>
          </TouchableOpacity>
        ) : 
        <View style={styles.nextButtonNull}/>
      }
    </View>
    
  );
}
