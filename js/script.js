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
async function getJoke () {
  try {
    const response = await fetch(
      'https://sv443.net/jokeapi/v2/joke/Any'
    )
    const data = await response.json()
    console.log(data)

    // Output the fun fact to the page
    document.getElementById('show-joke').innerHTML =
      '<b>Joke:</b> "' + data.fact + '"<br />'
  } catch (error) {
    console.error(error)
  }
}