import { useState } from 'react'
import ManualFormikForm from './ManualFormikForm'
import FormSubmissionOne from './FormSubmissionOne'

function App() {
  const [count, setCount] = useState(0)
  const age = true
  const age2 = true
  return (
    <>
      {/* <ManualFormikForm /> */}
      <FormSubmissionOne />
    </>
  )
}

export default App  
