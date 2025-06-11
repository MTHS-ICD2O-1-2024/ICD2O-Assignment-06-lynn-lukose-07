// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

/**
 * This function gets a random joke from the API
 * The 'async' keyword is used because it will take time from the internet to get data
 */
/* eslint-disable no-unused-vars */
async function getJoke() {
  try {
    const resultJSON = await fetch("https://official-joke-api.appspot.com/random_joke")
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // Get the excuse and its category
    const setup = jsonData.setup
    const punchline = jsonData.punchline

    // Output
    document.getElementById("show-joke").innerHTML =
      "<p>Joke: " + setup + "</br>Answer: " + punchline + " </p>"
  } catch (error) {
    document.getElementById("show-joke").innerHTML = "Sorry, an error has occurred. Please try again later."
  }
}