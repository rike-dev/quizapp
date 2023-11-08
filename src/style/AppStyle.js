import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E6E6FA",
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    progressBar: {
        width: 300,
        height: 10,
        borderRadius: 5,
        marginVertical: 20,
    },
    optionsContainer: {
        width: '100%',
        maxHeight: 250,
    },
    option: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 10,
        marginVertical: 5,
        borderStyle: "solid",
        borderColor: "#483D8B",
        borderWidth: 1,
    },
    optionText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    answerButton: {
        backgroundColor: '#2F4F4F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        width: '50%'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scoreText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#333',
        justifyContent: 'center',
        textAlign: 'center',
    },
    restartButton: {
        backgroundColor: '#2F4F4F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        width: '50%'
    },
    darkModeSwitch: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    credits: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#333',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'flex-end'
    },
})