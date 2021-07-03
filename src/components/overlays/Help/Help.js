import React from 'react'
import "./Help.scss"
import { BsArrowLeft } from "react-icons/bs";
import Accordion from "../Accordion"

function Help({ onClose }) {
  const accordionData = [
    {
      title: "What is Bookkeeping?",
      content: `Bookkeeping is a simple accounting app for small businesses. It helps you to track all of your Sale, Purchase, Cash, Credit details.`,
      titleHindi: "बहीखाता क्या है?",
      contentHindi: "बहीखाता छोटे व्यवसायों के लिए एक सरल हिसाब ऐप है। यह आपको अपने सभी बिक्री, खरीद, नगद, उधार विवरणों का हिसाब करने में मदद करता है।"

    },
    {
      title: "What is a Sale/Purchase entry?",
      content: `Sale Entry - When you sale something, record it into a sale entry.
      Purchase Entry - When you purchase something, record it into a purchase entry.
      `,
      titleHindi: "सेल/परचेस एंट्री क्या है?",
      contentHindi: <ol>
        <li>सेल एंट्री - जब आप कुछ बेचते हैं, तो इसे सेल एंट्री में दर्ज करें।</li>
        <li>परचेस एंट्री - जब आप कुछ खरीदते हैं, तो इसे परचेस एंट्री में दर्ज करें।</li>
      </ol>
    },
    {
      title: "How to add a new entry?",
      content: <ol>
        <li>Select the “Sale” or “Purchase” button on the Home page.</li>
        <li>Enter Price, Price unit, Select the Unit, Quantity</li>
        <li>Total Amount = Price * Quantity</li>
        <li>Enter Cash</li>
        <li>Credit = Total Amount - Cash</li>
        <li>Tap on “Save” to save the entry</li>
      </ol>,
      titleHindi: "नई एंट्री कैसे जोड़ें?",
      contentHindi: <ol>
        <li>होम पेज पर "Sale" या "Purchase" बटन का चयन करें।</li>
        <li>प्राइस, प्राइस यूनिट, मात्रा दर्ज करें, प्राइस की यूनिट का चयन करें</li>
        <li>कुल राशि = मूल्य * मात्रा</li>
        <li>कैश(नगद) डालें</li>
        <li>क्रेडिट(उधार) = कुल राशि - नकद</li>
        <li>एंट्री को बचाने के लिए "Save" बटन दबाएँ</li>
      </ol>
    },
    {
      title: "How to edit the added entry?",
      content: <ol>
        <li>Tap on the entry you want to edit from Home</li>
        <li>Make the changes you want to and tap on “Save” to save changes</li>
      </ol>,
      titleHindi: "पहले से जुड़ी हुई एंट्री में बदलाव कैसे करें?",
      contentHindi: <ol>
        <li>आप होम पेज पर उस एंट्री को दबाएँ जिसमे बदलाव करना चाहते हैं</li>
        <li>आप जिन परिवर्तनों को चाहते हैं, उन्हें करें और परिवर्तनों को सेव करने के लिए "Save" बटन दबाएँ</li>
      </ol>
    },
    {
      title: "How to delete the added entry?",
      content: <ol>
        <li>Tap on the entry you want to edit from Home page</li>
        <li>Tap on the bin icon in the top right corner of the page</li>
      </ol>,
      titleHindi: "पहले से जुड़ी हुई एंट्री कैसे हटाएँ?",
      contentHindi: <ol>
        <li>आप होम पेज पर उस एंट्री को दबाएँ जिसे हटाना चाहते हैं</li>
        <li>पेज के ऊपरी दाएं कोने में डस्टबिन बटन दबाएँ</li>
      </ol>
    },
    {
      title: "How to see only today's entries?",
      content: <ol>
        <li>Tap on filter icon (add filter icon here) in the top right corner of Home </li>
        <li>Select “Today” in the date range</li>
        <li>Tap on “Apply Filter”</li>
      </ol>,
      titleHindi: "केवल आज की एंट्री को कैसे देखें?",
      contentHindi: <ol>
        <li>होम पेज के ऊपरी दाएं कोने में फ़िल्टर आइकन को दबाएँ</li>
        <li>दिनांक  में "Today" चुनें</li>
        <li>"Apply Filter" बटन दबाएँ</li>
      </ol>
    }, {
      title: "How to see only this week's entries?",
      content: <ol>
        <li>Tap on filter icon (add filter icon here) in the top right corner of Home </li>
        <li>Select “This Week” in the date range</li>
        <li>Tap on “Apply Filter”</li>
      </ol>,
      titleHindi: "केवल इस सप्ताह की एंट्री को कैसे देखें?",
      contentHindi: <ol>
        <li>होम पेज के ऊपरी दाएं कोने में फ़िल्टर आइकन को दबाएँ</li>
        <li>दिनांक  में "This Week" चुनें</li>
        <li>"Apply Filter " बटन दबाएँ</li>
      </ol>
    },
    {
      title: "How to see only this month's entries?",
      content: <ol>
        <li>Tap on filter icon (add filter icon here) in the top right corner of Home </li>
        <li>Select “This month” in the date range</li>
        <li>Tap on “Apply Filter”</li>
      </ol>,
      titleHindi: "केवल इस महीने की एंट्री को कैसे देखें?",
      contentHindi: <ol>
        <li>होम पेज के ऊपरी दाएं कोने में फ़िल्टर आइकन को दबाएँ</li>
        <li>दिनांक  में "This Month" चुनें</li>
        <li>"Apply Filter " बटन दबाएँ</li>
      </ol>
    },
    {
      title: "How to search any product name or client name?",
      content: <ol>
        <li>Tap on the search bar in the top of the Home </li>
        <li>Enter the product or client name you want to search in the search bar</li>
        <li>You see all the related entries on Home</li>
      </ol>,
      titleHindi: "किसी भी उत्पाद का नाम या ग्राहक का नाम कैसे खोजें?",
      contentHindi: <ol>
        <li>होम के शीर्ष में सर्च बार पर दबाएँ</li>
        <li>वहाँ उस उत्पाद या ग्राहक नाम डालें जिसे आप सर्च बार में खोजना चाहते हैं</li>
        <li>आप सभी संबंधित एंट्री होम पर देख सकते हैं</li>
      </ol>
    },
    {
      title: "How to see only all cash entries?",
      content: <ol>
        <li>Tap on the "Cash" button Home. Now, all the entries on the Home page are cash entries.</li>

      </ol>,
      titleHindi: "केवल सभी नकद एंट्री को कैसे देखें?",
      contentHindi: "होम पेज पर Cash बटन को दबाएँ। अब, होम पेज पर सभी एंट्री नकद एंट्री हैं।"
    },
    {
      title: "How to see only all credit entries?",
      content: <ol>
        <li>Tap on the "Credit" button Home. Now, all the entries on the Home page are credit entries.</li>

      </ol>,
      titleHindi: "केवल उधार की एंट्री को कैसे देखें?",
      contentHindi: "होम पेज पर Credit  बटन को दबाएँ। अब, होम पेज पर सभी एंट्री उधार एंट्री हैं।"
    },
    {
      title: "How to add cash entries?",
      content: <ol>
        <li>Select the “Sale” or “Purchase” button on the Home page.</li>
        <li>Enter Cash amount in Cash</li>
        <li>Tap on “Save” to save the entry</li>
      </ol>,
      titleHindi: "कैश एंट्री कैसे जोड़ें?",
      contentHindi: <ol>
        <li>होम पेज पर "Sale " या "Purchase" बटन का चयन करें।</li>
        <li>"Cash" में नकद राशि दर्ज करें</li>
        <li>एंट्री को बचाने के लिए "Save"  बटन दबाएँ
        </li>
      </ol>
    },
    {
      title: "What is Total Sale / Total Purchase?",
      content: <ol>
        <li>Total Sale is the sum of Total Amount of all the added Sale entries.</li>
        <li>Total Purchase is the sum of Total Amount of all the added Purchase entries.</li>

      </ol>,
      titleHindi: "Total Sale/Total Purchase क्या है?",
      contentHindi: <ol>
        <li>Total Sale(कुल बिक्री) सभी जोड़ी गई बिक्री एंट्री की कुल राशि का योग है।</li>
        <li>Total Purchase(कुल खरीद) सभी जोड़े गए खरीद एंट्री की कुल राशि का योग है।</li>
      </ol>

    },
    {
      title: "How to add credit in an entry?",
      content: <ol>
        <li>Select the “Sale” or “Purchase” button on the Home page.</li>
        <li>Enter the Price of the product</li>
        <li>Enter the total Quantity. Now you get the Total Amount, Total Amount = Price * Quantity.</li>
        <li>Enter the Cash amount in Cash. Now you get the Credit, Credit = Total Amount - Cash.</li>
        <li>Tap on “Save” to save the entry</li>
      </ol>,
      titleHindi: "एंट्री में क्रेडिट कैसे जोड़ें?",
      "contentHindi": <ol>
        <li>होम पेज  पर "Sale" या "Purchase" बटन का चयन करें।</li>
        <li>उत्पाद की Price(कीमत) दर्ज करें</li>
        <li>Quantity(कुल मात्रा) दर्ज करें। अब आपको कुल राशि(कुल राशि = कीमत * मात्रा) मिलती है।</li>
        <li>"Cash" में नकद राशि दर्ज करें। अब आपको क्रेडिट(क्रेडिट = कुल राशि - नकद) मिलती है।</li>
        <li>एंट्री को सेव करने के लिए "Save" बटन दबाएँ</li>
      </ol>
    },
    {
      title: "How to add a new book?",
      content: <ol>
        <li>Tap on the book name on top left of Home page.</li>
        <li>Tap on "Create New Book" button</li>
        <li>Enter the name for the new book</li>
        <li>Tap on "Create" button</li>
      </ol>,
      titleHindi: "नई बुक कैसे जोड़ें?",
      contentHindi: <ol>
        <li>होम पेज के शीर्ष बाईं ओर बुक के नाम पर टैप करें</li>
        <li>"Create New Book" बटन को दबाएँ</li>
        <li>नई बुक के लिए नाम डालें</li>
        <li>"Create" बटन को दबाएँ</li>
      </ol>
    },
    {
      title: "How to share the entry receipt?",
      content: <ol>
        <li>Tap on the added entry on Home</li>
        <li>Tap on 'Receipt" button on top right of the page</li>
        <li>Tap on "Share" button in bottom right of the page</li>
      </ol>,
      titleHindi: "एंट्री रसीद कैसे शेयर करें?",
      contentHindi: <ol>
        <li>होम पेज पर जोड़े गए एंट्री को दबाएँ</li>
        <li>पेज के शीर्ष दाईं ओर स्थित 'Receipt' बटन को दबाएँ</li>
        <li>पेज के नीचे दाईं ओर "Share" बटन को दबाएँ</li>
      </ol>
    },
    {
      title: "How to generate the pdf report?",
      content: <ol>
        <li>Tap on the pdf icon in top action bar on Home.</li>
        <li>Tap on "Download" button</li>

      </ol>,
      titleHindi: "पीडीएफ रिपोर्ट कैसे बनायें?",
      contentHindi: <ol>
        <li>होम पेज में सबसे ऊपर में "PDF" बटन को दबाएँ</li>
        <li>"Download" बटन को दबाएँ</li>
      </ol>
    },
    {
      title: "How to generate the pdf report for any one client?",
      content: <ol>
        <li>Tap on Search bar</li>
        <li>Enter the client name in Search bar</li>
        <li>Tap on the pdf icon in top action bar on Home</li>
        <li>Tap on "Download" button</li>
      </ol>,
      titleHindi: "किसी एक ग्राहक के लिए pdf रिपोर्ट कैसे बनायें?",
      contentHindi: <ol>
        <li>सर्च बार को दबाएँ</li>
        <li>सर्च बार में ग्राहक का नाम दर्ज करें</li>
        <li>होम पेज में सबसे ऊपर में "PDF" बटन को दबाएँ</li>
        <li>"Download" बटन को दबाएँ</li>
      </ol>
    },
    {
      title: "How to generate the pdf report for any one product?",
      content: <ol>
        <li>Tap on Search bar</li>
        <li>Enter the product name in Search bar</li>
        <li>Tap on the pdf icon in top action bar on Home</li>
      </ol>,
      titleHindi: "किसी एक उत्पाद के लिए pdf रिपोर्ट कैसे बनायें?",
      contentHindi: <ol>
        <li>सर्च बार को दबाएँ</li>
        <li>सर्च बार में उत्पाद का नाम दर्ज करें</li>
        <li>होम पेज में सबसे ऊपर में "PDF" बटन को दबाएँ</li>
      </ol>
    }, {
      title: "How to generate the pdf report for any particular date period?",
      content: <ol>
        <li>Tap on filter icon(add filter icon here) in the top right corner of Home </li>
        <li>Select the date range</li>
        <li>Tap on “Apply Filter”</li>
        <li>Tap on the pdf icon in top action bar on Home</li>
        <li>Tap on "Download" button</li>
      </ol>,
      titleHindi: "किसी विशेष तिथि अवधि के लिए पीडीएफ रिपोर्ट कैसे बनायें",
      contentHindi: <ol>
        <li>होम के ऊपरी दाएं कोने में फ़िल्टर बटन को दबाएँ</li>
        <li>तिथि का चयन करें</li>
        <li>"Apply This FIlter" बटन को दबाएँ</li>
        <li>होम पेज में सबसे ऊपर में "PDF" बटन को दबाएँ</li>
        <li>"Download" बटन को दबाएँ</li>
      </ol>
    }

  ];
  const [lang, setLang] = React.useState("English");


  return (
    <div className="help_sidebar">
      <div className="help_header">
        <BsArrowLeft className="icon" onClick={onClose} />
        <div className="title">Help</div>
      </div>
      <div className="questions_content">
        <div className="languages">
          <button onClick={() => setLang("English")} className="lang_option" style={{ backgroundColor: lang === "English" ? "rgba(113, 90, 255, 1)" : "white", color: lang === "English" ? "white" : "black" }}>English</button>
          <button onClick={() => setLang("Hindi")} className="lang_option" style={{ backgroundColor: lang === "Hindi" ? "rgba(113, 90, 255, 1)" : "white", color: lang === "Hindi" ? "white" : "black" }}>Hindi</button>

        </div>

        <div className="question_list">



          {accordionData.map(({ title, content, titleHindi, contentHindi }) => (
            <Accordion title={lang == "Hindi" ? titleHindi : title} content={lang == "Hindi" ? contentHindi : content} />
          ))}


        </div>
      </div>

      <div className="side_footer">
        <div className="question">
          Have any other questions?
        </div>
        <button onClick={() => window.location.href = "whatsapp://send?text=Hii!&phone=+919981278197"} className="side_button">Chat with us</button>

      </div>

    </div>
  )
}

export default Help
