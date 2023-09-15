import React from 'react'
export default function About(props) {

  return (
    <div className = "container">
      <h1 className="my-3" id="aboutt" style={{color: props.mode === 'dark'?'white':'#042743'}}> About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id='headingOne'>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Description</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          TEXTEDITOR is a versatile text manipulation and formatting utility developed using cutting-edge web technologies. This innovative tool empowers users to effortlessly transform their text in various ways, enhancing their writing and editing experience. Whether you need to convert text to uppercase, lowercase, or simply copy it, TEXTEDITOR has you covered.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header"  id='headingTwo'>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>Functionality</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        TEXTEDITOR provides an intuitive interface that allows users to convert text to uppercase or lowercase with just a click. This feature simplifies the task of formatting text to match specific requirements.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header"  id='headingThree'>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong>Responsiveness</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        TEXTEDITOR has been meticulously designed with responsiveness in mind. Its flexible layout adapts seamlessly to various devices, ensuring a consistent and user-friendly experience whether you're using it on a desktop, tablet, or smartphone.
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
