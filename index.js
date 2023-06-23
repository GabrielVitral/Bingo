:root {
    --primary--font-family: 'Inter', sans-serif;
    --second--font-famliy:  'Roboto', sans-serif;
    --primary--background--color: rgba(48, 26, 129, 0.527); 
    --second--background--color: rgba(66, 27, 129, 0.301); 
    --primary--font-size: 3rem; 
}

* {
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
}

body {
    text-align: center;
    background-color: var(--primary--background--color);
}

main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.041vh;
    margin: 50px;
}

header {
    padding: 2vh;
    background-color: var(--second--background--color);
    font-family: var(--second--font-famliy);
    color: white;
}

.caixa {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(1rem, 2.8vw, 2rem);
    font-family: Raleway;
    font-weight: bold;
  }
  
.texto {
      width: 8.85vh;
      white-space: nowrap;
      overflow: hidden;
      border-right: 4px solid #212121;
      animation: cursor 1s step-start infinite, 
      text 2s steps(8) alternate infinite;
}
  
@keyframes cursor {
      0%, 100% { 
      border-color: #212121; 
    }
}
  
@keyframes text {
      0% { 
      width: 0; 
    }
      100% { 
      width: 21.5ch; 
    }
}

h2 {
    font-family: var(--primary--font-family);
    margin-bottom: 20px;
    font-size: 2.04rem;
    
}

button {
    min-width: 6.77vh;
    height: 40px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 20px;
    border: 2px solid rgba(29, 15, 156, 0.301);
    background: var(--second--background--color);
    padding: 10px 20px;
    margin: 10px;
}

button:hover {
    background: #fff;
    color: var(--primary--background--color)
} 


footer {
    background-color: var(--second--background--color);
    padding: 18px;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.card {
  display: inline-block;
  width: 288px;
  padding: 10px;
  margin: 10px;
  border: 1px solid var(--primary--background--color);
  text-align: center;
}

.card-header {
  font-family: var(--primary--font-family);
}

.card-numbers {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 5px;
  margin: 20px auto;
  width: 90%;
}

.bingo-number {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e5e5e5;
  margin: 5px;
  line-height: 30px;
}

.free-space {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  margin: 5px;
  line-height: 30px;
  border: 2px solid black;
}

.marked {
  background-color: var(--primary--background--color);
}


#bingo-numbers {
  position: relative;
  margin-top: 16%
}

#message-container {
  margin-top: 20%;
  position: static;
  left: 0;
  right: 0;
  color: black;
}
