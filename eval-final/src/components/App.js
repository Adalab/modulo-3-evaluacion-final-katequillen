import React, { useState, useEffect } from "react";
import ApiData from "../services/ApiData.js";

useEffect(() => {
  ApiData().then((data) => setCharacters(data));
}, []);

console.log(ApiData);

export default App;
