import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {
  const [isLoading, setisLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()

    setFeedback(data)
    setisLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    
    const data = await response.json()
    setFeedback([data, ...feedback])
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
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext