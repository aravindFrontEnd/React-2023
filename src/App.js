import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit'

function App() {
  const [markdown, setMarkDown] = useState('## markdown preview \nHeading	\t# H1 \t## H2 \t### H3 \nBold	**bold text**  \nItalic	*italicized text* \nBlockquote	>blockquote \nOrdered List	1. First item 2. Second item 3. Third item \nUnordered List	- First item - Second item - Third item ')

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault()
      event.returnValue = ''
      return ''
    }

    window.addEventListener('beforeunload', unloadCallback)
    return () => window.removeEventListener('beforeunload', unloadCallback)
  }, [])

  return (
    <main>
      <h2 style={{ textAlign: 'center' }}>Markdown Simplified</h2>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <article className='res'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
      <div style={{ textAlign: 'center' }}>
        <img src='cheat-sheat.jpg' alt='cheatsheet' />
      </div>
      <footer>
        <MDBFooter className='bg-light text-center text-white'>
          <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#3b5998' }}
                href='https://www.facebook.com/aravind.g.184'
                role='button'
                target=''
              >
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='https://www.instagram.com/frontendworld15/'
                role='button'
              >
                <MDBIcon fab icon='instagram' />
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='https://www.linkedin.com/in/aravind-g-frontend/'
                role='button'
              >
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

              <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#333333' }}
                href='https://github.com/aravindFrontEnd'
                role='button'
              >
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div
            className='text-center p-3'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © {new Date().getFullYear()} Copyright -
            <a
              className='text-white'
              href='https://aravind-g-portfolio.netlify.app/'
            >
              Aravind G
            </a>
          </div>
        </MDBFooter>
      </footer>
    </main>
  )
}

export default App
