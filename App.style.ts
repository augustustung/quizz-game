import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#efb9e0",
      alignItems: 'center',
      justifyContent:'center'
    },
    mode: {
        marginTop: 20,
        
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#7150c5',
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: {width: 3, height: 3},
      shadowOpacity: 0.3
    },
    board: {
      width:"80%",
      height:'65%',
      backgroundColor: '#fff',
      alignItems: 'center',
      position:'relative',
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: {width: 5, height: 5},
      borderRadius: 10,
    },
    button: {
      marginTop: 10,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4a90d6',
      width: "80%",
      height: "10%"
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      fontWeight: "600"
    },
    score: {
      fontSize: 20,
      margin: 20,
      fontWeight: '600',
      color: "#f70655"
    },
    loading: {
        marginVertical: 10
    },
    quesTitle: {
        fontSize: 22
    },
    quesCol: {
        flexDirection: 'column',    
    },
    quesE: {
        borderRadius: 10,
        paddingVertical: 10,
        backgroundColor: "rgb(63,94,251)",
        margin: 5,
    },
    answer: {
        padding: 5,
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: "#fff"
    },
    nextButton: {
        width: "40%",
        height: 50,
        backgroundColor: 'rgb(131,58,180)',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 10,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.4
    },
    nextButtonNull: {
        width: "40%",
        height: 50,
        marginTop: 10,
    },
    nextTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
  });
  