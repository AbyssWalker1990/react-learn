import { createContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    console.log('123')
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure u want to delete feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  } 

  // Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map(
      (item) => item.id === id ? {...item, ...updItem } : item))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return <FeedbackContext.Provider value = {{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext