import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacityBase, View, SafeAreaView } from 'react-native';
import ButtonTray from '../components/ButtonTray.js';
import Wrapper from '../components/Wrapper.js';
import DisplayBox from '../components/DisplayBox.js';
import Buttons from '../components/Buttons.js';

const btnValues = [
    ["C", "+-", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  
export default function newcalc() {
    const [calc, setCalc] = useState({
        display: 0,
        toDo: "",
        prev: 0,
        sign: false,
        lastWasEqual: false,
    })

    const handleReset = () => {
        setCalc({
            display: 0,
            toDo: "",
            prev: 0,
            sign: false,
            lastWasEqual: false,
        })
    }
    const handleFlip = () => {
      if(calc.sign) 
      {handleAfterSign("-") }
      else handleWayAfter("-");
    }
    const handleEqual = (value) => {
          mathWillBeMathed(value); 
    }
    const handleDecimal = (value) => {
      if(calc.sign) 
      {handleAfterSign(value) }
      else handleWayAfter(value);

    }
    const handleNumber = (value) => {
        if(calc.sign) 
        {handleAfterSign(value) }
        else handleWayAfter(value);
            
        

    }
    const handleAfterSign = (value) => {
            setCalc({
              ...calc,
              sign: false,
              prev: calc.display,
              display:
                value == "-"
                ? "-0"
                : value == "."
                ? "0."
                : value
            })
        }
    const handleWayAfter = (value) => {
      setCalc({
        ...calc,
        display:
          value == "-" && calc.display.toString().startsWith("-")
          ? calc.display.toString().replace("-", "")
          : value == "-" 
          ? "-" + calc.display
          : value == "." && !calc.display.toString().includes(".")
          ? calc.display.toString() + "."
          : value == "."
          ? calc.display
          : !parseFloat(calc.display) && !calc.display.toString().includes(".")
          ? calc.display.toString().replace("0", value)
          : calc.display + value.toString()
      })
    }
    const mathWillBeMathed = (value) => {
    console.log(calc, value);
    setCalc({
      ...calc,
      prev: 
        value == "=" && calc.prev && parseFloat(calc.display) && calc.lastWasEqual
        ? calc.prev
        : value == "=" && calc.prev && parseFloat(calc.display)
        ? calc.display
        : calc.prev && parseFloat(calc.display)
        ? calc.display
        : calc.prev,
      display: 
        calc.lastWasEqual && value != "="
        ? calc.display
        : calc.prev && parseFloat(calc.display) 
        ? doMath(calc.prev,calc.display,calc.toDo)
        : calc.display,
      toDo: 
        value == "="
        ? calc.toDo
        : value,
      sign:
        value == "X" || value == "/" || value == "+" || value == "-"
        ? true
        : false,
      lastWasEqual:
        value == "="
        ? true
        : false

    })
  }
    const doMath = (a,b,sign) => {
          return(
        sign === "+"
        ? parseFloat(a) + parseFloat(b)
        : sign === "-"
        ? parseFloat(a) - parseFloat(b)
        : sign === "X"
        ? parseFloat(a) * parseFloat(b)
        : parseFloat(a) / parseFloat(b))};
  const ButtonHandler = () => {
    return btnValues.flat().map((btn, i) => {
      return (
        <Buttons
          value = {btn}
          key = {i}
          toDo = {calc.toDo}
          sign = {calc.sign}
          onPress = {
            btn === "C"
              ? () => handleReset(btn)
              : btn ===  "+-"
              ? () => handleFlip(btn)
              : btn === "=" || btn === "/" || btn === "-" || btn === "+" || btn === "X"
              ? () => handleEqual(btn)
              : btn === "." 
              ? () => handleDecimal(btn)
              : () => handleNumber(btn)
        }/>
      );
    });
  }
  return ( 
    <SafeAreaView style = {{flex:1, backgroundColor:'#181924'}}>
    <Wrapper>
      <DisplayBox value={
        parseFloat(calc.display) && !calc.display.toString().endsWith(".")
        ? Math.round(calc.display * 10000000) / 10000000
        : calc.display}/>
      <ButtonTray>
        {ButtonHandler()}
      </ButtonTray>
    </Wrapper>
    </SafeAreaView>
      
    )
}
