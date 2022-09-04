import React from 'react'
import "../css/PagePrivacy.css"
function PagePrivacy() {
    return (
        <div>
            <h1>What is digital piracy?</h1>
            <section>
                <p>Illegal copying or distribution of copyrighted material via the Internet</p>
                <img src="../images/piracy.png" alt="Piracy" height={100} />
            </section>
            <h1>What are the consequences of engaging in digital piracy?</h1>
            <section>
                <p>Up to five years in prison and $250,000 in fines</p>
                <img src="../images/jail.png" alt="jail" height={100} />
                <img src="../images/fines.png" alt="Fines" height={100} />
            </section>
            <h1>Threats of personal safety and privacy</h1>
            <ul>
                <li>Cybercriminals remain the biggest threat due to shady practices</li>
                <li>Facial recognition software is building a database</li>
                <li>Cell phone GPS functionality provides easy location tracking</li>
                <li>Data in the cloud is not as safe as your hard drive</li>
            </ul>
            <h1>How can I protect myself?</h1>
            <ul>
                <li>Limit the personal information you share on social media</li>
                <li>Browse in incognito or private mode</li>
                <li>Use a virtual private network</li>
                <li>Be careful where you click</li>
                <li>Secure your mobile devices too</li>
                <li>Use quality antivirus software</li>
            </ul>
        </div>
    )
}

export default PagePrivacy