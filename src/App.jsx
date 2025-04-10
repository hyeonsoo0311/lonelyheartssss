import React, { useState } from 'react'

const questions = [
  { id: 1, text: "나는 낯선 사람과 대화하는 것이 어렵지 않다." },
  { id: 2, text: "하루 일정을 계획대로 실천하는 편이다." },
  { id: 3, text: "감정을 표현하는 것이 어렵지 않다." },
  { id: 4, text: "혼자 있는 시간이 회복에 도움이 된다." },
  { id: 5, text: "미래를 생각하며 행동하는 편이다." },
]

const results = [
  { type: "조용한 탐색가", description: "내향적이고 계획적인 성향으로, 감정을 섬세하게 바라보며 깊은 대화를 선호합니다.", emoji: "🦉" },
  { type: "감성적인 리더", description: "외향적이고 감정 표현이 풍부하며, 사람들과 함께 있을 때 에너지가 납니다.", emoji: "🦁" },
]

function App() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState([])

  const handleAnswer = (score) => {
    setScores([...scores, score])
    setStep(step + 1)
  }

  const calculateResult = () => {
    const total = scores.reduce((a, b) => a + b, 0)
    return total <= 15 ? results[0] : results[1]
  }

  if (step >= questions.length) {
    const result = calculateResult()
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h2>당신의 성격 유형은?</h2>
        <h1>{result.emoji} {result.type}</h1>
        <p>{result.description}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>성격 테스트</h2>
      <p>{questions[step].text}</p>
      {[1, 2, 3, 4, 5].map((val) => (
        <button key={val} onClick={() => handleAnswer(val)} style={{ marginRight: '0.5rem' }}>
          {val}
        </button>
      ))}
    </div>
  )
}

export default App
