import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AnswerObject } from '../App'
import { styles } from '../App.style'


interface Props {
    question: string
    answers: string[]
    callback: (e :number) => void
    userAnswer: AnswerObject | undefined
    questionNr: number
    totalQues: number
}


const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer,
    questionNr,
    totalQues  
}) => {
    return (
        <View style={{width: "90%"}}>
            <Text>{questionNr + 1} / {totalQues}</Text>
            <View style={{
        marginBottom: 5}}>
                <Text style={styles.quesTitle}>{question}</Text>
            </View>
            <View style={styles.quesCol}>
            {
                answers.map((answer, key) => (
                    <TouchableOpacity style={styles.quesE} key={key} disabled={!!userAnswer} onPress={() => callback(key)}>
                        <Text style={styles.answer}>{answer}</Text>
                    </TouchableOpacity>
                ))    
            }
            </View>    
        </View>)
}


export default QuestionCard