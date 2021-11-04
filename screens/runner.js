import React, { useState} from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView} from 'react-native'

export default Runner = () => {
    const [text, setText] = useState();
    const [userText, setUserText] = useState();
    const [result, setResult] = useState("");
    const [math, setMath] = useState("");
    const theMath = () => {
        setText(userText);
        let inty = parseFloat(userText);
        setResult(inty % 2 == 1 ? "odd" : "even")
        setMath(inty%2 == 1? "* 3 + 1" : "/ 2")
        setUserText(inty%2 == 1 ? ((inty*3)+1).toString() : (inty/2).toString())
        console.log(inty%2, (inty*3)+1, inty/2)
    }
    const reset = () => {
        setResult("")
        setText("")
        setMath("")
        setUserText("")
    }


    return (
        <SafeAreaView style = {{flex: 1}}>
            <View style = {{
                flex: .2,
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <Text style = {{fontSize: 36}}>
                    Put in the number you wish to try the Collatz conjecture on.
                </Text>
                <TextInput 
                    onChangeText = {(value) => setUserText(value)}
                    keyboardType = 'decimal-pad'
                    placeholder = "num"
                    defaultValue = {userText}
                    onSubmitEditing = {() => theMath}
                    value = {userText}
                    style = {{
                        width: 120,
                        borderWidth: 1,
                        alignSelf: 'center',
                        fontSize: 48,
                        height: 70
                    }}

                />
            </View>
            <View style = {{
                flex: .3
            }}>
                <TouchableOpacity 
                    style = {{
                        flex: 1,
                        backgroundColor: 'lightgreen',
                        borderRadius: 30,
                        marginHorizontal: 30
                    }}
                        onPress = {theMath}
                >
                    <Text style = {{
                        fontSize: 36,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        paddingVertical: 50,
                        
                    }}>Do a Step</Text>
                </TouchableOpacity>
                <View style = {{
                    height: 5
                }}></View>
                <TouchableOpacity 
                    style = {{
                        flex: .5,
                        backgroundColor: 'lightblue',
                        borderRadius: 30,
                        marginHorizontal: 30
                    }}
                    onPress = {reset}
                >
                    <Text style = {{
                        fontSize: 24,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        paddingVertical: 20,
                        
                    }}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style = {{
                flex: .4
            }}>
                <Text style = {{
                    fontSize: 20,
                    marginHorizontal: 8
                }}>
                    {result ? "The number is " : ""}{result}{result ? "." : ""}
                </Text>
                <Text style = {{
                    fontSize: 20,
                    marginHorizontal: 8
                }}>
                    {text} {result ? math : ""}
                </Text>
                <Text style = {{
                    fontSize: 20,
                    marginHorizontal: 8
                }}>
                The Collatz conjecture is a conjecture in mathematics that concerns sequences defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows:
                 if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times
                  the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1. - Wikipedia, Collatz Conjecture
                </Text>
            </View>
        </SafeAreaView>
    )
}