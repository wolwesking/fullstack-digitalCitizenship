import React from 'react'
import "../css/PageBully.css"

function PageBully() {
  return (
    <div>
      <h1>How can I be sure that my acquisition is ethical?</h1>
      <section>
        <div>
          <ul>
            <li>You should have permission from participants</li>
            <li>Avoid or minimize anything that will cause physical or emotional harm to participants</li>
            <li>Try to remain neutral and unbiased</li>
            <li>After data is analyzed it is always good to share the results back to the participants</li>
          </ul>
        </div> 
      </section>

      <h1>What are the negative effects of acquiring information in an unethical way</h1>
      <section>
        <div>
          <ul>
            <li>Displace employees</li>
            <li>Violate privacy</li>
            <li>Frustration</li>
            <li>Stress</li>
            <li>Injuries</li>
          </ul>
        </div>
        <section>
          <img src="../images/stress.jpg" alt="Stress" height={153.567} />
        </section>
      </section>

      <h1>Effects of inappropriate technology use</h1>
      <section>
        <div>
          <ul>
            <li>Behavioral</li>
            <li>Loss of social skills</li>
            <li>Obesity</li>
            <li>Sleep problems</li>
            <li>Violence</li>
          </ul>
        </div>
        <section>
          <img src="../images/phone.jpg" alt="Phone" height={153.567} />
        </section>
      </section>

      <h1>Effects of online bullying, harassment</h1>
      <section>
        <div>
          <ul>
            <li>Depression</li>
            <li>Loneliness</li>
            <li>Low self-esteem</li>
            <li>School phobias and social anxiety</li>
          </ul>
        </div>
        <section>
          <img src="../images/depression.jpg" alt="Phone" height={130.533} />
        </section>
      </section>
      <p>Any type of bulling/harassment can cause legal implications</p>
    </div>
  )
}

export default PageBully