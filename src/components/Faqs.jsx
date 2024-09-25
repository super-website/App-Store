import { faqs } from '../data'
import { Helmet } from 'react-helmet'

const Faqs = () => {
  return (
    <div className='max-w-6xl bg-gray-900 m-auto py-10'>
      <h2 className='text-3xl text-center text-white my-3'>Faqs</h2>
      {faqs.map((faq) => {
        const { id, question, answer } = faq
        return (
          <>
            <Helmet>
              <title>FAQs</title>
              <meta
                name='description'
                content='Frequently asked questions about our services.'
              />
            </Helmet>
            <div className='collapse collapse-plus bg-gray-900' key={id}>
              <input type='radio' name='accordion' id={id} />
              <label
                htmlFor={id}
                className='collapse-title text-xl font-medium text-white'
              >
                {question}
              </label>
              <div className='collapse-content'>
                <p>{answer}</p>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Faqs
