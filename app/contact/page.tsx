export default function contact() {
    return (
        <div>
            <div className="container d-flex justify-center">
                <div className="px-4">
                    <h2>Contact</h2>
                    <div>
                        <p>
                            <span>You can send me feedback, suggestions and questions by emailing me at </span>
                            <a target={"_blank"} href="mailto:andersonkarloskar@gmail.com?subject=Contact Request">andersonkarloskar@gmail.com</a>
                            <span> or alternatively on </span>
                            <a href="https://www.linkedin.com/in/karl-oskar-anderson">LinkedIn</a>.
                        </p>
                        <p>
                            If you spot any typos or outdated information in any of my articles, create an issue in <a target={"_blank"} href="https://github.com/oskar-anderson/portfolio">Github</a>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:inline-block">
                    <img className="object-contain w-full" src="/static/img/mail.svg" alt="mail envelope" />
                </div>
            </div>
        </div>
    )
}