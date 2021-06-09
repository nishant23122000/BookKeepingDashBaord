import React from 'react'
import "./Help.css"
import {BsArrowLeft} from "react-icons/bs";
import Accordion from "./Accordion"

function Help() {
    const accordionData = [
        {
          title: "What is sale or purchase entry?",
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
            title: "What is sale or purchase entry?",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          },
          {
            title: "What is sale or purchase entry?",
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
          },
        {
          title: "What is sale or purchase entry?",
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        }
      ];
    


    return (
        <div className="help_sidebar">
            <div className="help_header">    
                   <BsArrowLeft />
                    <div className="title">Help</div>
            </div>
                <div  className="questions_content">
                <div className="languages">
                    <div className="lang_option active_lang">English</div>
                    <div className="lang_option">Hindi</div>
                </div>

                <div className="question_list">
                  
                 
                   
                    {accordionData.map(({title, content}) => (
                        <Accordion title={title} content={content} />
                        ))}

                        
                </div>
                </div>
              
                <div className="side_footer">
                    <div className="question">
                        Have any other questions?
                    </div>
                    <div className="side_button">Chat with us</div>
                </div>
           
        </div>
    )
}

export default Help
